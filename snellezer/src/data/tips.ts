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
 {id:'regressie',title:'Minder onnodig terugspringen',body:'Ongeveer een op de tien oogbewegingen gaat terug. Een deel daarvan is nodig: je checkt een zin die je niet begreep. Een ander deel is gewoonte of afdwalen. Dat laatste kun je afleren, door de tekst achter je te laten verdwijnen en te vertrouwen op wat je al zag.',icon:'arrow',exerciseId:'forward'},
 {id:'blikveld',title:'Wat je blikveld wel en niet kan',body:'Per blik zie je maar zo\'n zeven tot acht letters echt scherp, en dat ligt vast in je oog. Training verbreedt dat niet veel. Wat wel groeit: hoe snel je woorden herkent, zodat je minder vaak op kleine woordjes hoeft te landen.',icon:'eye',exerciseId:'peripheral'},
 {id:'saccades',title:'Je ogen springen, ze glijden niet',body:'Lezen gaat in sprongetjes: saccades. Tussen die sprongen staan je ogen een kwart seconde stil. Die stilstand is waar je leest. Winst zit niet in snellere sprongen, maar in woorden sneller herkennen en minder vaak afdwalen.',icon:'zap',exerciseId:'eye'},
 {id:'ontspannen',title:'Gespannen ogen lezen langzamer',body:'Knijp nooit met je ogen. Knipper gewoon, adem rustig en laat je schouders zakken. Ontspanning is geen bijzaak bij snellezen — het is een voorwaarde.',icon:'leaf',exerciseId:'relax'},
 {id:'gids',title:'Gebruik een gids',body:'Beweeg je vinger of pen onder de regel die je leest en volg die met je ogen. Voer het tempo langzaam op. Je ogen volgen een bewegend punt nu eenmaal makkelijker dan stilstaande tekst.',icon:'book',exerciseId:'paper'},
 {id:'spatroon',title:'Eerst de opbouw zien',body:'Kijk voor je begint naar de titel, de tussenkopjes en de eerste zin van elke alinea. Zo weet je waar de tekst naartoe gaat, en lees je daarna vlotter en met meer begrip.',icon:'search',exerciseId:'scan'},
 {id:'verticaal',title:'Verticaal scannen',body:'Zoek je één naam, datum of getal? Laat je blik dan recht omlaag door het midden van een smalle kolom gaan. Dat is zoeken, geen lezen: voor de inhoud moet je daarna alsnog de zin lezen.',icon:'text',exerciseId:'scan'},
 {id:'dekking',title:'De dekkingskaart',body:'Leg een kaartje over de regel die je net las en schuif het mee naar beneden. Zo spring je minder uit gewoonte terug. Begreep je een zin echt niet? Schuif dan gerust even terug. Dat is geen falen, dat is lezen.',icon:'target',exerciseId:'forward'},
 {id:'fixaties',title:'Minder landen op kleine woordjes',body:'Goede lezers slaan korte, voorspelbare woordjes als de, een en en vaak over, omdat ze die al uit de ooghoek herkennen. Lange en belangrijke woorden kijken ze wel aan. Dat gaat vanzelf beter naarmate je meer leest.',icon:'target',exerciseId:'fixation'},
 {id:'woordgroepen',title:'Lees in woordgroepen',body:'Leer drie tot vijf woorden als één beeld te zien. Zinnen bestaan uit clusters die bij elkaar horen, niet uit losse woorden. Zodra je die clusters ziet, gaat het vanzelf sneller.',icon:'grid',exerciseId:'groups'},
 {id:'gemiddelde',title:'Waar je staat, en wat haalbaar is',body:'De gemiddelde volwassene leest zakelijke tekst op zo\'n 240 woorden per minuut. Met dagelijks oefenen is 20 tot 40 procent sneller haalbaar met hetzelfde begrip. Wie duizend woorden per minuut belooft, meet het begrip niet mee.',icon:'chart',exerciseId:'reading'},
 {id:'vijanden',title:'Waar je tijd echt heen gaat',body:'Afdwalen, onnodig teruglezen en elke tekst even langzaam lezen. Dat zijn de grootste tijdvreters. Je binnenstem hoort daar niet bij: die helpt je begrijpen. Laat hem lichter meelopen, maar zet hem niet uit.',icon:'help'},
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
