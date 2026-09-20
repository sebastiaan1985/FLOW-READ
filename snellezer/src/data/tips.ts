import {dateKey} from '../state/model';

export type Tip = {
  id: string;
  title: string;
  body: string;
  icon: string;
  /** De oefening waarin je deze tip meteen kunt toepassen. */
  exerciseId?: string;
  /** Of de tip naar het Dyslexie Leeslab wijst in plaats van naar een oefening. */
  settings?: boolean;
};

/** De snelleestips uit de vorige versie, zonder emoji en met een oefening eraan vast. */
export const TIPS: Tip[] = [
 {id:'regressie',title:'Stop met terugspringen',body:'Onbewust teruglezen kost je ongeveer 30% van je leestijd. Je merkt het zelf nauwelijks — je ogen springen terug naar een woord dat je al had. Laat de tekst achter je verdwijnen en die gewoonte slijt vanzelf.',icon:'arrow',exerciseId:'forward'},
 {id:'blikveld',title:'Vergroot je blikveld',body:'Een getraind oog vangt 5 tot 7 woorden per fixatie op, een ongetraind oog 1 tot 2. Daar zit je grootste winst: niet sneller bewegen, maar meer zien per keer.',icon:'eye',exerciseId:'peripheral'},
 {id:'saccades',title:'Je ogen springen, ze glijden niet',body:'Lezen gaat in sprongetjes: saccades. Tussen die sprongen staan je ogen even stil om op te nemen. Training maakt de sprongen groter en vlotter, zodat je er minder nodig hebt per regel.',icon:'zap',exerciseId:'eye'},
 {id:'ontspannen',title:'Gespannen ogen lezen langzamer',body:'Knijp nooit met je ogen. Knipper gewoon, adem rustig en laat je schouders zakken. Ontspanning is geen bijzaak bij snellezen — het is een voorwaarde.',icon:'leaf',exerciseId:'relax'},
 {id:'gids',title:'Gebruik een gids',body:'Beweeg je vinger of pen onder de regel die je leest en volg die met je ogen. Voer het tempo langzaam op. Je ogen volgen een bewegend punt nu eenmaal makkelijker dan stilstaande tekst.',icon:'book',exerciseId:'paper'},
 {id:'spatroon',title:'Het S-patroon',body:'Scan diagonaal door de pagina: linksboven naar rechtsmidden naar linksonder. Ideaal om een tekst eerst te verkennen voordat je hem echt leest.',icon:'search',exerciseId:'scan'},
 {id:'verticaal',title:'Verticaal scannen',body:'Beweeg je ogen recht omlaag door het midden van de kolom. In smalle kolommen — nieuws, apps, artikelen — haal je hiermee zo een derde van je tijd weg.',icon:'text',exerciseId:'scan'},
 {id:'dekking',title:'De dekkingskaart',body:'Leg een kaartje boven de regel die je leest en schuif het mee naar beneden. Wat je gelezen hebt is weg, dus terugspringen kan niet meer. Schuif elke keer iets sneller.',icon:'target',exerciseId:'forward'},
 {id:'fixaties',title:'Twee fixaties per regel',body:'In een gewoon boek heb je aan twee kijkpunten per regel genoeg: op een kwart en op driekwart. De rest vangt je ooghoek op. Woord voor woord lezen is bijna nooit nodig.',icon:'target',exerciseId:'fixation'},
 {id:'woordgroepen',title:'Lees in woordgroepen',body:'Leer drie tot vijf woorden als één beeld te zien. Zinnen bestaan uit clusters die bij elkaar horen, niet uit losse woorden. Zodra je die clusters ziet, gaat het vanzelf sneller.',icon:'grid',exerciseId:'groups'},
 {id:'gemiddelde',title:'Waar je staat, en wat haalbaar is',body:'De gemiddelde lezer zit op 200 tot 250 woorden per minuut. Met training is 400 tot 600 haalbaar zonder dat je begrip inzakt. Meet daarom altijd allebei.',icon:'chart',exerciseId:'reading'},
 {id:'vijanden',title:'De drie remmen',body:'Subvocalisatie, terugspringen en een te smal blikveld. Dat zijn de drie dingen die je tegenhouden. Elk onderdeel van je training pakt er één aan.',icon:'help'},
 {id:'advies',title:'Vijftien minuten is genoeg',body:'Vijftien tot twintig minuten per dag werkt beter dan een uur in het weekend. Wissel af tussen tempo, blikveld en gewoon lezen. En test je begrip, altijd.',icon:'clock'},
 {id:'consistentie',title:'Vaak en kort wint',body:'Je leesritme verandert door herhaling, niet door lange sessies. Vijf minuten per dag brengt je verder dan een uur per week.',icon:'flame'},
 {id:'lettertype',title:'Een lettertype dat rust geeft',body:'Ronde, duidelijke letters schelen meer dan je denkt, zeker bij dyslexie. In het Dyslexie Leeslab stel je het lettertype in voor de hele app.',icon:'sparkles',settings:true},
 {id:'bionic',title:'Bionisch lezen',body:'Als het eerste deel van elk woord dik staat, herkent je brein het woord eerder dan je het hebt uitgelezen. Probeer het een week en kijk of het voor jou werkt.',icon:'zap',settings:true},
 {id:'contrast',title:'Kleur en contrast',body:'Een warme crèmekleurige achtergrond vermindert de witruis waardoor letters lijken te springen. Kost niets, en voor sommige lezers scheelt het enorm.',icon:'leaf',settings:true},
 {id:'spel',title:'Maak er een spel van',body:'Punten, rondes en een score houden je bezig terwijl je traint. Dat is geen truc: plezier zorgt dat je morgen terugkomt, en dat is precies wat je nodig hebt.',icon:'star',exerciseId:'wordflash'},
];

/** Elke dag een andere tip, maar dezelfde tip de hele dag. */
export function tipOfDay(date: Date = new Date()): Tip {
  const key = dateKey(date);
  const days = Math.floor(Date.parse(key) / 86400000);
  return TIPS[((days % TIPS.length) + TIPS.length) % TIPS.length];
}

/** Een tip die past bij de oefening die je net deed. */
export function tipForExercise(exerciseId: string, seed = 0): Tip {
  const match = TIPS.filter(t => t.exerciseId === exerciseId);
  if (match.length) return match[seed % match.length];
  return TIPS[seed % TIPS.length];
}
