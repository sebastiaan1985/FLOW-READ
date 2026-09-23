import {test} from 'node:test';
import assert from 'node:assert/strict';
import {strToU8, zipSync} from 'fflate';
import {BookError, buildBook, chapterAt, htmlToParagraphs, nextPortion, parseEpub, pdfPagesToParagraphs, reachedParagraph, bookProgress, wordsBefore} from '../src/state/books.ts';

const lorem = (n:number,w='woord')=>Array.from({length:n},(_,i)=>`${w}${i}`).join(' ')+'.';
function epub(extra:Record<string,string>={}){
  const opf=`<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>Het Testboek</dc:title><dc:creator>A. Schrijver</dc:creator></metadata>
  <manifest><item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/><item href="Text/h%201.xhtml" id="h1" media-type="application/xhtml+xml"/><item id="h2" href="Text/h2.xhtml" media-type="application/xhtml+xml"/><item id="img" href="img/a.jpg" media-type="image/jpeg"/></manifest>
  <spine><itemref idref="cover"/><itemref idref="h1"/><itemref idref="h2"/></spine></package>`;
  return zipSync({'mimetype':strToU8('application/epub+zip'),'META-INF/container.xml':strToU8('<container><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>'),
    'OEBPS/content.opf':strToU8(opf),'OEBPS/cover.xhtml':strToU8('<html><body><img src="a.jpg"/><p>Omslag</p></body></html>'),
    'OEBPS/Text/h 1.xhtml':strToU8(`<html><head><title>x</title><style>p{}</style></head><body><h1>Een begin</h1><p>${lorem(40)}</p><p>Caf&eacute; &amp; zo&hellip; <i>schuin</i><br/>regel</p></body></html>`),
    'OEBPS/Text/h2.xhtml':strToU8(`<html><body><h2>Het vervolg</h2><p>${lorem(30,'vervolg')}</p></body></html>`),...Object.fromEntries(Object.entries(extra).map(([k,v])=>[k,strToU8(v)]))});
}
test('EPUB: spine order, metadata, chapter titles, entities, cover skipped',()=>{
  const b=parseEpub(epub());
  assert.equal(b.title,'Het Testboek');assert.equal(b.author,'A. Schrijver');
  assert.deepEqual(b.chapters.map(c=>c.title),['Een begin','Het vervolg']);
  assert.equal(b.chapters[0].paragraphs[0],'Een begin');
  assert.equal(b.chapters[0].paragraphs[2],'Café & zo… schuin regel');
});
test('EPUB with DRM or garbage is refused with a clear message',()=>{
  assert.throws(()=>parseEpub(epub({'META-INF/encryption.xml':'<encryption><EncryptedData><CipherData><CipherReference URI="OEBPS/Text/h2.xhtml"/></CipherData></EncryptedData></encryption>'})),/DRM/);
  assert.doesNotThrow(()=>parseEpub(epub({'META-INF/encryption.xml':'<encryption><EncryptedData><CipherReference URI="fonts/a.otf"/></EncryptedData></encryption>'})));
  assert.throws(()=>parseEpub(new Uint8Array([1,2,3])),BookError);
});
test('HTML to paragraphs strips scripts and keeps block structure',()=>{
  assert.deepEqual(htmlToParagraphs('<script>x()</script><div>Een</div><div>Twee <b>drie</b></div>'),['Een','Twee drie']);
});
test('PDF: headers, page numbers and hyphenation are handled',()=>{
  const body=(n:number)=>[`Boektitel`,`Dit is de eerste regel van pagina ${n} en hij loopt door tot het einde van de regel`,`en hier gaat de zin verder met een afge-`,`broken woord dat weer heel moet worden gemaakt.`,`Nieuwe alinea met een korte regel.`,`${n}`];
  const {paragraphs,pageStart}=pdfPagesToParagraphs([1,2,3,4,5].map(body));
  assert.ok(!paragraphs.some(p=>/Boektitel/.test(p)),'header removed');
  assert.ok(paragraphs[0].includes('afgebroken woord'),paragraphs[0]);
  assert.ok(!paragraphs.some(p=>/^\d+$/.test(p)));
  assert.equal(pageStart.length,5);
});
test('portions follow paragraphs and progress is tracked',()=>{
  const {meta,content}=buildBook(parseEpub(epub()),'epub','b1');
  assert.equal(meta.chapters.length,2);assert.equal(meta.paragraphs,content.paragraphs.length);
  const p=nextPortion(content,0,20);
  assert.equal(p.from,0);assert.ok(p.to>=2);
  assert.deepEqual(reachedParagraph(p,1000,true).para,p.to);
  assert.equal(reachedParagraph(p,1,false).para,0);assert.equal(reachedParagraph(p,2,false).para,1); // the 2-word title paragraph is fully read
  assert.equal(chapterAt(meta,meta.chapters[1].para+1)?.title,'Het vervolg');
  assert.equal(bookProgress({...meta,position:meta.paragraphs}),1);
  assert.equal(wordsBefore(content,1),2);
});
test('PDF: large-font lines become headings and chapter markers',()=>{
  const body='Dit is gewone tekst die over de hele breedte van de pagina loopt en netjes doorgaat';
  const {paragraphs,headings}=pdfPagesToParagraphs([[{text:'Hoofdstuk een',size:20},{text:'met een lange titel',size:20},{text:body,size:10},{text:'en hier eindigt de alinea.',size:10}],[{text:'Tweede hoofdstuk',size:20},{text:body,size:10},{text:'nog meer tekst.',size:10}]]);
  assert.deepEqual(headings.map(h=>h.title),['Hoofdstuk een met een lange titel','Tweede hoofdstuk']);
  assert.equal(paragraphs[headings[1].para],'Tweede hoofdstuk');
  assert.ok(paragraphs[1].startsWith('Dit is gewone tekst'));
});
