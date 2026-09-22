import {test} from 'node:test';
import assert from 'node:assert/strict';
import {adjustTempo,effectiveWpm,lessonFeedback,lessonPlanIds,passed,pathProgress,pickPassage,readingRejection,repeatFactor,xpFor} from '../src/state/rules.ts';
import {LESSONS,lessonForDay,RETEST_DAYS} from '../src/data/lessons.ts';
import type {Passage,SessionResult} from '../src/types.ts';
const s=(over:Partial<SessionResult>):SessionResult=>({id:Math.random().toString(36),exerciseId:'reading',skill:'begrip',wpm:200,comprehension:100,words:150,durationSeconds:45,date:'2026-09-20T10:00:00',xp:30,...over});

test('implausibly fast readings are rejected, normal ones accepted',()=>{
  assert.ok(readingRejection(160,2));
  assert.ok(readingRejection(160,5));            // 1920 wpm
  assert.equal(readingRejection(160,40),null);    // 240 wpm
  assert.ok(readingRejection(160,15,true));       // 640 wpm is too fast for a child
});
test('xp needs comprehension and decays when rereading the same text on one day',()=>{
  assert.equal(xpFor({complete:true,comprehension:100}),30);
  assert.equal(xpFor({complete:true,comprehension:33}),2);
  assert.equal(xpFor({complete:false,comprehension:null}),5);
  assert.equal(xpFor({complete:true,comprehension:null}),20);
  const now=new Date('2026-09-20T12:00:00');
  const sessions=[s({passageId:'a'})];
  assert.equal(repeatFactor(sessions,'a',now),.5);
  assert.equal(repeatFactor([...sessions,s({passageId:'a'})],'a',now),.15);
  assert.equal(repeatFactor([...sessions,s({passageId:'a'}),s({passageId:'a'})],'a',now),0);
  assert.equal(repeatFactor(sessions,'a',new Date('2026-09-21T12:00:00')),1);
  assert.equal(repeatFactor(sessions,'b',now),1);
});
test('effective speed multiplies speed by comprehension',()=>{
  assert.equal(effectiveWpm(300,50),150);
  assert.equal(effectiveWpm(300,null),0);
  assert.equal(passed(true,66),false);
  assert.equal(passed(true,67),true);
  assert.equal(passed(false,100),false);
});
test('tempo drops under 70% and rises after two sessions of at least 80%',()=>{
  const base={targetWpm:200,tempoStreak:0,kidsMode:false};
  assert.deepEqual(adjustTempo(base,60),{targetWpm:180,tempoStreak:0});
  const one=adjustTempo(base,85);assert.deepEqual(one,{targetWpm:200,tempoStreak:1});
  assert.deepEqual(adjustTempo({...base,...one},90),{targetWpm:210,tempoStreak:0});
  assert.deepEqual(adjustTempo({...base,...one},75),{targetWpm:200,tempoStreak:0});
  assert.deepEqual(adjustTempo(base,null),{targetWpm:200,tempoStreak:0});
});
test('passages rotate: unseen first, then the least recently read',()=>{
  const pool:Passage[]=['a','b','c'].map(id=>({id,title:id,text:id,questions:[]}));
  assert.equal(pickPassage(pool,[],0).id,'a');
  assert.equal(pickPassage(pool,[s({passageId:'a'})],0).id,'b');
  assert.equal(pickPassage(pool,[s({passageId:'a'}),s({passageId:'b'}),s({passageId:'c'})],0).id,'a');
  assert.equal(pickPassage(pool,[s({passageId:'b'}),s({passageId:'a'}),s({passageId:'c'})],0).id,'b');
});
test('the path advances one lesson per calendar day',()=>{
  const day1=new Date('2026-09-20T20:00:00'),day2=new Date('2026-09-21T09:00:00');
  assert.deepEqual(pathProgress([],day1),{day:1,doneToday:false,completed:[],finished:false});
  const baseline=[s({exerciseId:'baseline'})];
  assert.equal(pathProgress(baseline,day1).doneToday,true);
  assert.equal(pathProgress(baseline,day2).day,2);
  const later=[...baseline,s({exerciseId:'rsvp',lessonDay:2,date:'2026-09-21T09:30:00'})];
  assert.deepEqual(pathProgress(later,day2),{day:2,doneToday:true,completed:[1,2],finished:false});
  // A later, extra begintest does not pull you back to day 1.
  const extra=[...later,s({exerciseId:'baseline',date:'2026-09-25T09:00:00'})];
  assert.deepEqual(pathProgress(extra,new Date('2026-09-25T10:00:00')),{day:3,doneToday:false,completed:[1,2],finished:false});
});
test('the curriculum has 28 distinct days, retests on fixed days and valid plans',()=>{
  assert.equal(LESSONS.length,28);
  LESSONS.forEach((l,i)=>{assert.equal(l.day,i+1);assert.equal(l.week,Math.ceil(l.day/7));const plan=lessonPlanIds(l);assert.equal(plan.length,3);assert.equal(plan[0],l.exerciseId);});
  for(const d of RETEST_DAYS)assert.equal(lessonForDay(d).exerciseId,'retest');
  assert.equal(lessonForDay(1).exerciseId,'baseline');
  assert.equal(lessonForDay(40).day,28);
});
test('lesson feedback compares with the baseline and never praises low comprehension',()=>{
  assert.match(lessonFeedback(lessonForDay(7),{wpm:300,comprehension:100,baselineEffective:200}),/\+50%/);
  assert.match(lessonFeedback(lessonForDay(3),{wpm:300,comprehension:33}),/lager tempo/);
  assert.match(lessonFeedback(lessonForDay(10),{wpm:0,comprehension:null,score:7}),/7 van de 10/);
});
