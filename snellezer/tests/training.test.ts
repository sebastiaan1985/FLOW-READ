import test from 'node:test';
import assert from 'node:assert/strict';
import {fixationWindow,nextDailyStep,normalizeSearchWord,phraseLength,recognitionIndex} from '../src/components/trainingModel.ts';

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
test('word groups follow phrases instead of a fixed count',()=>{
  const split=(text:string,target:number)=>{const w=text.split(' ');const out:string[]=[];for(let c=0;c<w.length;){const n=phraseLength(w,c,target);out.push(w.slice(c,c+n).join(' '));c+=n;}return out;};
  assert.deepEqual(split('De oude man liep langzaam naar de haven.',3),['De oude man','liep langzaam','naar de haven.']);
  assert.deepEqual(split('Het regent, dus we blijven binnen.',3),['Het regent,','dus we blijven','binnen.']);
  for(const g of split('Ze keek naar de zee en dacht aan de reis van haar leven, lang geleden.',3)){assert.ok(!/\b(de|het|een|naar|aan|van)$/i.test(g),g);assert.ok(g.split(' ').length<=5,g);}
  assert.deepEqual(split('Op het plein staat een oude telefooncel.',3),['Op het plein','staat een oude telefooncel.']);
  assert.deepEqual(split('Iedereen mag een boek meenemen en er een terugzetten.',3),['Iedereen mag een boek','meenemen','en er een terugzetten.']);
  const w='een twee drie vier vijf zes'.split(' ');let total=0;for(let c=0;c<w.length;c+=phraseLength(w,c,2))total++;assert.ok(total>=2);
});
