import test from 'node:test';
import assert from 'node:assert/strict';
import {fixationWindow,nextDailyStep,normalizeSearchWord,recognitionIndex} from '../src/components/trainingModel.ts';

test('daily resume skips completed IDs and ignores duplicates or unrelated sessions',()=>{
  const plan=[{id:'chunks'},{id:'reading'},{id:'eye'}];
  const sessions=[{exerciseId:'reading',dailyId:'today'},{exerciseId:'reading',dailyId:'today'},{exerciseId:'other',dailyId:'today'},{exerciseId:'chunks',dailyId:'yesterday'}];
  assert.equal(nextDailyStep(plan,sessions,'today'),0);
  sessions.push({exerciseId:'chunks',dailyId:'today'});
  assert.equal(nextDailyStep(plan,sessions,'today'),2);
  sessions.push({exerciseId:'eye',dailyId:'today'});
  assert.equal(nextDailyStep(plan,sessions,'today'),3);
});
test('fixation moves between two columns before advancing to the next row',()=>{
  const words='een twee drie vier vijf zes zeven acht negen'.split(' ');
  assert.deepEqual(fixationWindow(words,0,3),{rowStart:0,active:0,groups:[['een','twee','drie'],['vier','vijf','zes']]});
  assert.equal(fixationWindow(words,3,3).active,1);
  assert.deepEqual(fixationWindow(words,6,3),{rowStart:6,active:0,groups:[['zeven','acht','negen'],[]]});
});
test('search recognizes case and punctuation, recognition anchor skips opening quotes',()=>{
  assert.equal(normalizeSearchWord('“Regen!”'),'regen');
  assert.equal(recognitionIndex('“regen”'),2);
  assert.equal(recognitionIndex('snellezen'),2);
  assert.equal(recognitionIndex('a'),0);
});
