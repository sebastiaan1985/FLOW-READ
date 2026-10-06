import {test} from 'node:test';
import assert from 'node:assert/strict';
import {consistency,longestStreak,pathReport,records,isRecord,levelFor,streakTier,bonusXp,eyeWeek} from '../src/state/progress.ts';
import {autoQuestions} from '../src/state/questions.ts';
import {weeklyChallenge,meetsChallenge,CHALLENGES} from '../src/data/challenges.ts';
import type {SessionResult} from '../src/types.ts';
const s=(over:Partial<SessionResult>):SessionResult=>({id:Math.random().toString(36),exerciseId:'reading',skill:'begrip',wpm:200,comprehension:80,words:150,durationSeconds:45,date:'2026-09-01T10:00:00',xp:30,...over});

test('day 1 is compared with day 28 on speed, comprehension and consistency',()=>{
  const sessions=[s({exerciseId:'baseline',wpm:220,comprehension:80,date:'2026-09-01T10:00:00'}),s({wpm:230,date:'2026-09-03T10:00:00'}),s({wpm:240,date:'2026-09-05T10:00:00'}),s({wpm:260,date:'2026-09-20T10:00:00'}),s({exerciseId:'retest',lessonDay:28,wpm:300,comprehension:80,date:'2026-09-28T10:00:00'})];
  const r=pathReport({sessions,baseline:{wpm:220,comprehension:80}});
  assert.equal(r.start!.wpm,220);assert.equal(r.end!.wpm,300);
  assert.equal(r.wpmGain,80);assert.equal(r.wpmGainPct,36);
  assert.equal(r.comprehensionChange,0);
  assert.ok(r.sustainedEnd>r.sustainedStart);
  assert.ok(r.consistencyEnd!==null);
  assert.equal(r.daysTrained,5);
});
test('consistency drops with an outlier and needs two readings',()=>{
  assert.equal(consistency([200]),null);
  assert.ok(consistency([200,205,210])!>consistency([200,400,210])!);
});
test('longest streak counts consecutive days',()=>{
  assert.equal(longestStreak([s({date:'2026-09-01T10:00:00'}),s({date:'2026-09-02T10:00:00'}),s({date:'2026-09-03T22:00:00'}),s({date:'2026-09-05T10:00:00'})]),3);
});
test('records need enough comprehension',()=>{
  const sessions=[s({wpm:400,comprehension:40}),s({wpm:250,comprehension:90})];
  assert.equal(records(sessions).speed!.value,250);
  assert.equal(isRecord(sessions,{exerciseId:'reading',wpm:500,comprehension:50}),false);
  assert.equal(isRecord(sessions,{exerciseId:'reading',wpm:300,comprehension:90}),true);
});
test('levels and streak tiers grow',()=>{
  assert.equal(levelFor(0).level,1);assert.equal(levelFor(260).title,'Vlotte lezer');
  assert.equal(streakTier(2).rank,0);assert.equal(streakTier(7).title,'Zilver');assert.equal(streakTier(30).title,'Diamant');
  assert.equal(streakTier(5).toNext,2);
});
test('bonus xp rewards meaningful behaviour, not speed alone',()=>{
  assert.deepEqual(bonusXp({lessonPassed:false,record:false,challenge:false,firstToday:false}),{xp:0,reasons:[]});
  assert.equal(bonusXp({lessonPassed:true,record:true,challenge:true,firstToday:true}).xp,40);
});
test('challenges combine the exercise with comprehension',()=>{
  const push=CHALLENGES.find(c=>c.id==='push70')!;
  assert.equal(meetsChallenge(push,s({exerciseId:'push',comprehension:50})),false);
  assert.equal(meetsChallenge(push,s({exerciseId:'push',comprehension:80})),true);
  const w=weeklyChallenge([s({date:new Date().toISOString(),comprehension:90})]);
  assert.ok(w.goal>0&&w.done<=w.goal);
});
test('eye training is counted per week',()=>{
  const now=new Date('2026-09-10T12:00:00');
  assert.equal(eyeWeek([s({exerciseId:'eight',date:'2026-09-09T10:00:00'}),s({exerciseId:'eye',date:'2026-08-01T10:00:00'}),s({exerciseId:'reading',date:'2026-09-09T10:00:00'})],now),1);
});
test('own texts get fill-in questions taken from the text itself',()=>{
  const text='De vuurtoren van het eiland staat al honderd jaar op dezelfde plek. Elke avond draait de lamp zijn rondjes boven de golven. Vissers gebruiken het licht om veilig de haven te vinden. Vroeger woonde er een wachter die de lamp met de hand aanstak. Tegenwoordig gaat alles automatisch met een computer en een sensor. Toeristen beklimmen de smalle trappen om van het uitzicht te genieten.';
  const q=autoQuestions(text);
  assert.ok(q.length>=2);
  for(const x of q){assert.match(x.question,/_____/);assert.ok(text.includes(x.options[x.answer]));assert.equal(new Set(x.options).size,x.options.length);}
  assert.deepEqual(autoQuestions(text),q);
  assert.deepEqual(autoQuestions('Te kort.'),[]);
});
