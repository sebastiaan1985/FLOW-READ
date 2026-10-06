import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import type {Passage} from '../src/types.ts';

const read=(f:string)=>JSON.parse(readFileSync(new URL('../src/data/'+f,import.meta.url),'utf8')) as Passage[];
const extra=read('library-extra.json');

test('the library holds at least 100 texts more than before version 1.1, all with metadata',()=>{
  // Vóór versie 1.1 bevatte library-extra.json 200 teksten.
  assert.ok(extra.length>=300,`${extra.length} extra teksten`);
  const all=[...read('library.json'),...extra];
  assert.equal(new Set(all.map(p=>p.id)).size,all.length,'unieke ids');
  for(const p of extra){
    assert.ok(p.id&&p.title&&p.text,'id, titel en tekst');
    assert.ok(p.topic&&p.level&&p.audience&&p.collection,`metadata bij ${p.title}`);
    assert.ok(p.questions.length>=2,`vragen bij ${p.title}`);
    for(const q of p.questions)assert.ok(q.answer>=0&&q.answer<q.options.length);
  }
});
test('the new texts vary in topic, level, length and audience',()=>{
  const fresh=extra.filter((_,i)=>i>=200);
  assert.ok(new Set(fresh.map(p=>p.topic)).size>=20);
  assert.ok(new Set(fresh.map(p=>p.level)).size>=5);
  assert.ok(new Set(fresh.map(p=>p.audience)).size>=4);
  const words=fresh.map(p=>p.text.split(/\s+/).length);
  assert.ok(Math.min(...words)<100&&Math.max(...words)>300);
});
