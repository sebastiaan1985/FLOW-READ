import {test} from 'node:test';
import assert from 'node:assert/strict';
import {decideTempo,keepTempo,tempoNote,pushPlan,pushEffects,lessonPlanIds,TEMPO,median} from '../src/state/rules.ts';
import {appendSession,hydrate,initialState} from '../src/state/model.ts';
import {lessonForDay,LESSONS} from '../src/data/lessons.ts';
import type {SessionResult} from '../src/types.ts';
const s=(over:Partial<SessionResult>):SessionResult=>({id:Math.random().toString(36),exerciseId:'reading',skill:'begrip',wpm:200,comprehension:100,words:150,durationSeconds:45,date:'2026-09-20T10:00:00',xp:30,...over});

test('under the gate the message and the next session use exactly the same lower tempo',()=>{
  const state={...initialState,targetWpm:366};
  const d=decideTempo(state,60);
  assert.equal(d.to,329);
  assert.match(tempoNote(d)!,/van 366 naar 329/);
  const next=appendSession(state,s({exerciseId:'chunks',comprehension:60}),d);
  assert.equal(next.targetWpm,329);
  // Na opnieuw openen blijft het tempo staan.
  assert.equal(hydrate(JSON.stringify(next)).targetWpm,329);
});
test('the threshold lives in one place and the note follows it',()=>{
  assert.equal(TEMPO.gate,70);
  assert.match(tempoNote(decideTempo({targetWpm:200,tempoStreak:0,kidsMode:false},TEMPO.gate-1))!,/minder dan 70%/);
  assert.equal(decideTempo({targetWpm:200,tempoStreak:0,kidsMode:false},TEMPO.gate).reason,null);
});
test('a tempo you choose yourself becomes the starting point of the decision',()=>{
  const base={targetWpm:200,tempoStreak:0,kidsMode:false};
  const own=decideTempo(base,null,undefined,260);
  assert.deepEqual({to:own.to,reason:own.reason},{to:260,reason:'eigen-keuze'});
  assert.equal(decideTempo(base,50,undefined,260).to,234);
});
test('tempo rises gradually: only after two sessions with good comprehension, by 5%',()=>{
  let state={...initialState,targetWpm:300};
  state=appendSession(state,s({id:'a',comprehension:90}));assert.equal(state.targetWpm,300);
  state=appendSession(state,s({id:'b',comprehension:90}));assert.equal(state.targetWpm,315);
});
test('keepTempo changes nothing',()=>{const d=keepTempo({targetWpm:250,tempoStreak:1});assert.equal(d.to,250);assert.equal(tempoNote(d),null);});
test('median ignores a single outlier',()=>{assert.equal(median([200,210,900]),210);assert.equal(median([200,220]),210);});
test('tempo push gets lighter when it does not help and drops out as an extra exercise',()=>{
  const day=(n:number)=>`2026-09-${String(n).padStart(2,'0')}T10:00:00`;
  let sessions:SessionResult[]=[s({date:day(1),wpm:250,comprehension:80})];
  assert.equal(pushPlan(sessions).factor,1.3);
  for(const n of [2,3,4]){sessions=[...sessions,s({exerciseId:'push',pushWpm:330,comprehension:50,date:day(n)}),s({date:day(n),wpm:200,comprehension:60})];}
  assert.equal(pushEffects(sessions).length,3);
  const plan=pushPlan(sessions);
  assert.equal(plan.factor,1.1);assert.equal(plan.extra,false);
  const withPush=LESSONS.find(l=>l.support==='push')!;
  assert.ok(!lessonPlanIds(withPush,sessions).includes('push'));
  assert.ok(lessonPlanIds(withPush,[]).includes('push'));
});
test('tempo push gets a bit stronger when it helps',()=>{
  const day=(n:number)=>`2026-09-${String(n).padStart(2,'0')}T10:00:00`;
  let sessions:SessionResult[]=[s({date:day(1),wpm:200,comprehension:80})];
  for(const n of [2,3]){sessions=[...sessions,s({exerciseId:'push',pushWpm:260,date:day(n)}),s({date:day(n),wpm:240,comprehension:90})];}
  const plan=pushPlan(sessions);assert.equal(plan.factor,1.35);assert.ok(plan.lift>1);
});
test('word by word never shows more than one word in the learning path',()=>{
  for(const l of LESSONS)if(l.exerciseId==='rsvp')assert.ok((l.params.chunk??1)===1,`dag ${l.day}`);
  assert.equal(lessonForDay(15).exerciseId,'push');
});
