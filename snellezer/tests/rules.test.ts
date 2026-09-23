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
import {articleUrlProblem} from '../src/state/url.ts';
test('article import only fetches public https pages',()=>{
  assert.equal(articleUrlProblem('https://nos.nl/artikel/123'),null);
  for(const bad of ['http://nos.nl','https://localhost/x','https://192.168.1.10/','https://10.0.0.1','https://[::1]/','https://user:pw@site.nl','https://intranet/','ftp://site.nl','geen link','https://172.20.1.1'])assert.ok(articleUrlProblem(bad),bad);
});
import {buildLabRounds,finishLab,huntHit,labUnlocked,LAB_LESSONS,emptyLabProgress} from '../src/state/leeslab.ts';
import {readFileSync} from 'node:fs';
const labData=JSON.parse(readFileSync(new URL('../src/data/leeslab.json',import.meta.url),'utf8'));
test('every Leeslab lesson has ten valid rounds',()=>{
  for(const lesson of LAB_LESSONS){const rounds=buildLabRounds(lesson,labData,[],42);assert.equal(rounds.length,10,lesson.id);
    for(const r of rounds){if(r.kind==='choose'){assert.ok(r.options.includes(r.answer));assert.equal(new Set(r.options).size,r.options.length);}
      if(r.kind==='hunt'){assert.notEqual(r.word,r.wrong);assert.ok(huntHit(r,r.start));assert.ok(!huntHit(r,r.start+r.length));}
      if(r.kind==='build'){assert.equal(r.parts.join(''),r.word);assert.notDeepEqual(r.shuffled,r.parts);}}}
});
test('Leeslab: 80% masters a lesson once, mistakes come back first',()=>{
  const res=(n:number)=>Array.from({length:10},(_,i)=>({key:'listen:w'+i,correct:i<n}));
  const low=finishLab(emptyLabProgress(),'horen',res(7));assert.equal(low.mastered,false);assert.equal(low.progress.review.length,3);assert.equal(labUnlocked(1,low.progress),false);
  const ok=finishLab(low.progress,'horen',res(8));assert.equal(ok.firstMastery,true);assert.equal(labUnlocked(1,ok.progress),true);
  assert.equal(finishLab(ok.progress,'horen',res(10)).firstMastery,false);
  const lesson=LAB_LESSONS[0];const review=['listen:'+labData.words[5].word];
  assert.equal(buildLabRounds(lesson,labData,review,1)[0].key,review[0]);
});
import {longLevel} from '../src/state/rules.ts';
test('long texts move up after 80% and down under 67% on the current level',()=>{
  const lv=(id:string)=>Number(id.slice(1));
  const l=(p:string,c:number)=>s({exerciseId:'long',passageId:p,comprehension:c});
  assert.equal(longLevel([],lv),1);
  assert.equal(longLevel([l('L1',100)],lv),2);
  assert.equal(longLevel([l('L1',100),l('L1',100)],lv),2); // an easier text does not promote twice
  assert.equal(longLevel([l('L1',100),l('L2',50)],lv),1);
  assert.equal(longLevel([l('L1',100),l('L2',75),l('L2',100)],lv),3);
});
test('a skipped text is not offered again unless nothing else is left',()=>{
  const pool:Passage[]=['a','b'].map(id=>({id,title:id,text:id,questions:[]}));
  assert.equal(pickPassage(pool,[],0,['a']).id,'b');
  assert.equal(pickPassage(pool,[],0,['a','b']).id,'a');
});
test('every text has a unique id and answerable questions',()=>{
  const read=(f:string)=>JSON.parse(readFileSync(new URL('../src/data/'+f,import.meta.url),'utf8')) as Passage[];
  const all=[...read('passages.json'),...read('children.json'),...read('library.json'),...read('library-extra.json')];
  assert.equal(new Set(all.map(p=>p.id)).size,all.length);
  for(const p of all){assert.ok(p.questions.length>=2,p.id);for(const q of p.questions){assert.ok(q.answer>=0&&q.answer<q.options.length,p.id);assert.equal(new Set(q.options).size,q.options.length,p.id);}}
  const shortAdult=all.filter(p=>!p.child&&!p.audience?.startsWith('kids')&&p.collection!=='lang'&&p.collection!=='leestest');
  assert.ok(shortAdult.length>=120,`korte teksten: ${shortAdult.length}`);
});
