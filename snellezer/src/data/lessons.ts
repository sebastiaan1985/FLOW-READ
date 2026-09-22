/** Het 28-dagencurriculum. Elke les stelt de oefening in die de techniek afdwingt. */
export type LessonParams = {
  /** Woorden per keer bij tempo-oefeningen. */
  chunk?: number;
  /** Oefentempo als factor van je huidige doeltempo. */
  tempoFactor?: number;
  /** Perifere breedte in % van het scherm. */
  spread?: number;
  /** Perifere flitstijd in milliseconden. */
  flashMs?: number;
  /** Leesgids loopt vanzelf mee. */
  guideAuto?: boolean;
  /** Patroon voor de oogtraining. */
  eyeMode?: 'lr' | 'zigzag' | 'expand' | 'sprint';
  /** Gebruik je eigen laatst bewaarde tekst als die er is. */
  ownText?: boolean;
};
export type Lesson = {
  day: number;
  week: 1 | 2 | 3 | 4;
  title: string;
  what: string;
  why: string;
  how: string;
  /** Eén rustige zin die tijdens de oefening onderin staat. */
  hint: string;
  exerciseId: string;
  params: LessonParams;
  /** Tweede oefening van de dag, om de techniek nog eens toe te passen. */
  support: string;
  /** Hoe deze dag wordt beoordeeld. */
  measure: 'wpm' | 'begrip' | 'effectief' | 'herkenning' | 'rust';
};

export const RETEST_DAYS = [7, 14, 21, 28];

export const LESSONS: Lesson[] = [
  // Week 1 — Fundament
  {day:1,week:1,title:'Jouw vertrekpunt',what:'Vandaag meet je hoe je nu leest: je tempo en hoeveel je van de tekst begrijpt.',why:'Zonder nulmeting kun je later niet eerlijk zien wat je hebt gewonnen.',how:'Lees op je gewone tempo, niet sneller dan anders. Daarna volgen drie vragen.',hint:'Lees zoals je altijd leest.',exerciseId:'baseline',params:{},support:'rhythm',measure:'effectief'},
  {day:2,week:1,title:'Het stemmetje dat meeleest',what:'Bijna iedereen spreekt woorden in gedachten uit. Dat heet subvocalisatie.',why:'Je binnenstem gaat niet sneller dan praten, rond de 150 tot 250 woorden per minuut. Je ogen kunnen meer.',how:'De woorden komen iets sneller dan je gewend bent. Kijk naar het woord in plaats van het uit te spreken.',hint:'Kijk naar het woord. Je hoeft het niet te zeggen.',exerciseId:'rsvp',params:{chunk:1,tempoFactor:1.15},support:'chunks',measure:'begrip'},
  {day:3,week:1,title:'Stop met terugspringen',what:'Je ogen springen vaak onbewust terug naar een woord dat je al gelezen had.',why:'Dat terugspringen kost veel lezers een flink deel van hun leestijd, terwijl het begrip er zelden beter van wordt.',how:'Gelezen woorden verdwijnen achter de markering. Terugkijken kan dus niet. Vertrouw op wat je al hebt gezien.',hint:'Wat achter je ligt, heb je al gelezen.',exerciseId:'forward',params:{chunk:2,tempoFactor:1},support:'paper',measure:'begrip'},
  {day:4,week:1,title:'Je ogen springen, ze glijden niet',what:'Lezen gaat in sprongetjes. Tussen twee sprongen staan je ogen even stil: een fixatie.',why:'Hoe minder fixaties je per regel nodig hebt, hoe sneller je leest, zonder dat je sneller hoeft te kijken.',how:'Elke regel heeft twee vaste punten. Laat je blik alleen daar landen.',hint:'Twee blikken per regel. Niet meer.',exerciseId:'fixation',params:{chunk:2,tempoFactor:1},support:'eye',measure:'begrip'},
  {day:5,week:1,title:'De gidsmethode',what:'Een vinger, pen of cursor onder de regel geeft je ogen een tempo om te volgen.',why:'Een bewegend punt volgen gaat makkelijker dan zelf het tempo bewaken. Je dwaalt minder af.',how:'De gids loopt vanzelf mee. Houd je blik op de gemarkeerde regel en laat je meenemen.',hint:'Volg de gids. Hij bepaalt het tempo.',exerciseId:'paper',params:{guideAuto:true},support:'reading',measure:'wpm'},
  {day:6,week:1,title:'Ontspannen ogen lezen beter',what:'Licht, afstand en houding bepalen hoe snel je ogen moe worden.',why:'Gespannen ogen maken meer en kortere fixaties. Ontspanning is een voorwaarde, geen bijzaak.',how:'Zit rechtop, houd het scherm op een armlengte en volg rustig het punt. Knipper gewoon.',hint:'Schouders omlaag. Adem rustig.',exerciseId:'eye',params:{eyeMode:'lr'},support:'reading',measure:'rust'},
  {day:7,week:1,title:'Hermeting week 1',what:'Na een week meet je opnieuw, met een tekst van vergelijkbare lengte.',why:'Een vast meetmoment maakt vooruitgang zichtbaar en eerlijk.',how:'Lees op een tempo waarop je de inhoud nog goed meeneemt. Begrip telt net zo zwaar als snelheid.',hint:'Tempo en begrip, allebei.',exerciseId:'retest',params:{},support:'chunks',measure:'effectief'},
  // Week 2 — Blikveld
  {day:8,week:2,title:'Twee woorden in één blik',what:'Chunking betekent dat je woorden in groepjes leest in plaats van één voor één.',why:'Een ervaren lezer neemt meerdere woorden per fixatie op. Daar zit de grootste winst.',how:'Je ziet steeds twee woorden tegelijk. Kijk naar het midden van het paar.',hint:'Kijk tussen de twee woorden in.',exerciseId:'chunks',params:{chunk:2,tempoFactor:1},support:'groups',measure:'begrip'},
  {day:9,week:2,title:'Drie woorden in één blik',what:'Vandaag vergroot je de groep naar drie woorden.',why:'Veel zinsdelen bestaan uit drie woorden: de lezer, het boek, een mooie dag. Die herken je als één beeld.',how:'Houd je blik op het middelste woord. De buitenste woorden vang je vanzelf op.',hint:'Het middelste woord is je anker.',exerciseId:'chunks',params:{chunk:3,tempoFactor:1},support:'fixation',measure:'begrip'},
  {day:10,week:2,title:'Perifeer zien',what:'Naast het punt waar je naar kijkt, zie je meer dan je denkt. Dat is je perifere zicht.',why:'Hoe meer je rond je fixatiepunt herkent, hoe minder sprongen je per regel nodig hebt.',how:'Houd je blik op het stipje. De woorden links en rechts flitsen kort. Kijk er niet naartoe.',hint:'Blijf bij het stipje.',exerciseId:'peripheral',params:{spread:30,flashMs:400},support:'chunks',measure:'herkenning'},
  {day:11,week:2,title:'Twee fixaties per regel',what:'Op een gewone regel kun je met twee blikken toe: op een kwart en op driekwart.',why:'Je hoeft de eerste en laatste letters niet recht aan te kijken; die vangt je blikveld op.',how:'De tekst staat in twee kolommen per regel. Laat je blik op het gemarkeerde punt landen.',hint:'Een kwart, driekwart. Verder.',exerciseId:'fixation',params:{chunk:3,tempoFactor:1},support:'peripheral',measure:'begrip'},
  {day:12,week:2,title:'Woordgroepen als één beeld',what:'Bekende woordcombinaties herken je als geheel, zoals je een gezicht herkent.',why:'Herkennen gaat sneller dan ontcijferen. Hoe meer combinaties je kent, hoe vlotter je leest.',how:'Kijk kort naar de woordgroep en kies daarna wat je zag.',hint:'Zie het geheel, niet de letters.',exerciseId:'groups',params:{},support:'chunks',measure:'herkenning'},
  {day:13,week:2,title:'Breder kijken',what:'Je traint je blikveld verder: de woorden staan wijder en de flits is korter.',why:'Een groter blikveld maakt kolommen en smalle tekst in één beweging leesbaar.',how:'Houd je blik in het midden. Het mag lastig voelen; dat is de oefening.',hint:'Stil in het midden, wijd om je heen.',exerciseId:'peripheral',params:{spread:50,flashMs:320},support:'fixation',measure:'herkenning'},
  {day:14,week:2,title:'Hermeting week 2',what:'Twee weken verder. Tijd voor een nieuwe meting.',why:'Zo zie je of je blikveldtraining ook in gewone tekst merkbaar is.',how:'Lees in woordgroepen, zoals je deze week oefende, en beantwoord daarna de vragen.',hint:'Lees in groepjes.',exerciseId:'retest',params:{},support:'chunks',measure:'effectief'},
  // Week 3 — Snelheid met begrip
  {day:15,week:3,title:'Tempo-push',what:'Je leest bewust even sneller dan comfortabel en gaat daarna terug naar je gewone tempo.',why:'Na een snelle ronde voelt je normale tempo ruimer. Veel lezers gaan daardoor ongemerkt iets sneller.',how:'Het tempo staat hoger dan je gewend bent. Houd vol, ook als je niet alles meekrijgt.',hint:'Het mag te snel voelen.',exerciseId:'rsvp',params:{chunk:2,tempoFactor:1.3},support:'reading',measure:'wpm'},
  {day:16,week:3,title:'Een anker voor begrip',what:'Na elke alinea vat je in gedachten de kern samen in één zin.',why:'Wie actief samenvat, onthoudt meer en merkt sneller wanneer de draad zoek is.',how:'Lees de tekst op je eigen tempo. Stop kort na elke alinea en noem de kern voor jezelf.',hint:'Wat was de kern van deze alinea?',exerciseId:'reading',params:{},support:'chunks',measure:'effectief'},
  {day:17,week:3,title:'Eerst verkennen',what:'Bij previewing kijk je eerst naar titel, eerste zinnen en opvallende woorden, en pas dan lees je.',why:'Als je weet waar een tekst naartoe gaat, lees je vlotter en begrijp je meer.',how:'Scan de tekst eerst tien seconden van boven naar beneden. Lees hem daarna gewoon.',hint:'Eerst het overzicht, dan de details.',exerciseId:'reading',params:{},support:'scan',measure:'effectief'},
  {day:18,week:3,title:'Skimmen',what:'Skimmen is snel door een tekst gaan om de hoofdgedachte te vangen.',why:'Niet elke tekst verdient elk woord. Weten wanneer je mag skimmen bespaart veel tijd.',how:'De woordgroepen gaan vlot. Let op de grote lijn, niet op elk detail.',hint:'Wat is de hoofdgedachte?',exerciseId:'chunks',params:{chunk:3,tempoFactor:1.4},support:'reading',measure:'begrip'},
  {day:19,week:3,title:'Scannen',what:'Scannen is gericht zoeken naar één woord of gegeven, zonder de tekst te lezen.',why:'Voor een datum, naam of getal hoef je niet te lezen. Je ogen zoeken naar een vorm.',how:'Onthoud het zoekwoord en laat je blik in brede banen over de tekst gaan.',hint:'Zoek de vorm van het woord.',exerciseId:'scan',params:{},support:'peripheral',measure:'herkenning'},
  {day:20,week:3,title:'Het S-patroon',what:'Bij lange teksten laat je je blik in een zachte S van links naar rechts en weer terug zakken.',why:'Zo blijf je in beweging en houd je het tempo vast over veel alinea’s.',how:'Lees de lange tekst met een ontspannen, golvende blik. Neem de tijd.',hint:'Blijf in beweging.',exerciseId:'long',params:{},support:'relax',measure:'effectief'},
  {day:21,week:3,title:'Hermeting week 3',what:'Drie weken verder. Je meet opnieuw.',why:'Deze week draaide om snelheid mét begrip. Precies dat meet het effectieve leestempo.',how:'Lees vlot, maar niet sneller dan je begrip toelaat.',hint:'Vlot en begrepen.',exerciseId:'retest',params:{},support:'chunks',measure:'effectief'},
  // Week 4 — In je eigen leven
  {day:22,week:4,title:'Doelgericht lezen',what:'Voor je begint, bepaal je wat je uit de tekst wilt halen.',why:'Een helder doel stuurt je aandacht. Je leest sneller over wat er niet toe doet.',how:'Stel jezelf vóór het lezen één vraag die de tekst moet beantwoorden.',hint:'Wat wil je weten?',exerciseId:'reading',params:{},support:'chunks',measure:'effectief'},
  {day:23,week:4,title:'Studeren met SQ3R',what:'SQ3R staat voor overzien, vragen, lezen, opzeggen en herhalen.',why:'Het is een beproefde methode om studiestof beter te onthouden.',how:'Verken de tekst, bedenk een vraag, lees, vat samen en kijk nog even terug naar je vraag.',hint:'Overzien, vragen, lezen, samenvatten.',exerciseId:'long',params:{},support:'relax',measure:'effectief'},
  {day:24,week:4,title:'Lang volhouden',what:'Een lange tekst vraagt om een ander ritme dan een korte.',why:'Je aandacht zakt na een paar minuten. Wie dat weet, kan het opvangen met korte pauzes.',how:'Lees in woordgroepen. Merk je dat je afdwaalt? Pauzeer even en ga daarna verder.',hint:'Afgedwaald? Pauzeer, adem, ga door.',exerciseId:'chunks',params:{chunk:3,tempoFactor:1.1},support:'long',measure:'begrip'},
  {day:25,week:4,title:'Scherm en papier',what:'Op een scherm lezen we vaak vluchtiger dan op papier.',why:'Een scherm nodigt uit tot scrollen en scannen. Met een gids breng je rust terug.',how:'Gebruik de leesgids en zet het tempo zo dat het rustig maar vlot voelt.',hint:'Eén regel tegelijk.',exerciseId:'paper',params:{guideAuto:true},support:'reading',measure:'wpm'},
  {day:26,week:4,title:'Je eigen tekst',what:'Vandaag pas je alles toe op iets wat je zelf wilt lezen.',why:'Technieken beklijven pas als je ze gebruikt op je eigen leesvoer.',how:'Voeg in je bibliotheek een artikel of hoofdstuk toe. Zonder eigen tekst oefen je met een tekst uit de app.',hint:'Woordgroepen, geen terugsprongen.',exerciseId:'chunks',params:{chunk:3,tempoFactor:1,ownText:true},support:'reading',measure:'begrip'},
  {day:27,week:4,title:'Een gewoonte die blijft',what:'Een paar minuten per dag houdt je vaardigheid op peil.',why:'Wat je niet oefent, zakt langzaam terug. Een vast moment op de dag helpt.',how:'Kies een moment dat bij je past, bijvoorbeeld bij je koffie. Vandaag oefen je in woordgroepen.',hint:'Zo voelt jouw dagelijkse minuut.',exerciseId:'chunks',params:{chunk:3,tempoFactor:1.1},support:'peripheral',measure:'begrip'},
  {day:28,week:4,title:'Eindmeting',what:'De laatste meting van je leerweg. Daarna vergelijk je met dag 1.',why:'Een eerlijke vergelijking laat zien wat de vier weken je hebben opgeleverd.',how:'Lees zoals je nu hebt geleerd: in groepjes, zonder terugspringen, met aandacht voor de inhoud.',hint:'Alles wat je hebt geleerd, samen.',exerciseId:'retest',params:{},support:'relax',measure:'effectief'},
];

export function lessonForDay(day: number): Lesson {
  return LESSONS[Math.max(1, Math.min(28, Math.round(day))) - 1];
}
