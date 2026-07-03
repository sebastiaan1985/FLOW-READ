/**
 * teksten-nieuw.mjs — nieuw geschreven teksten voor de bibliotheek
 *
 * Vooral voor jonge lezers (kids6-9: korte zinnen, eenvoudige woorden;
 * kids9-12: iets langer en rijker). Elke tekst heeft 3 begripsvragen.
 * `woorden` wordt automatisch geteld door bouw-teksten.mjs.
 */

export const NIEUWE_TEKSTEN = [

  // ══════════ KIDS 6-9 (kort, eenvoudig) ══════════

  {
    id: 'j-hond-bo', titel: 'Bo de speurhond', doelgroep: 'kids6-9', niveau: 1, onderwerp: 'dieren',
    tekst: `Bo is een hond met een super neus. Hij kan alles ruiken. Een koekje onder het bed? Bo vindt het. Een bal diep in de tuin? Bo graaft hem op.

Op een dag is Lisa haar knuffel kwijt. Ze is heel verdrietig. "Bo, help!" roept ze. Bo snuffelt aan het kussen van Lisa. Dan rent hij weg. Hij zoekt in de gang. Hij zoekt in de keuken. Daar! Onder de bank ligt de knuffel.

Bo blaft blij. Lisa geeft hem een dikke knuffel. "Jij bent de beste speurhond van de wereld!" zegt ze. Bo krijgt een koekje. Dat had hij al lang geroken.`,
    vragen: [
      { v: 'Wat kan Bo heel goed?', opties: ['Zwemmen', 'Ruiken', 'Zingen', 'Springen'], correct: 1 },
      { v: 'Wat is Lisa kwijt?', opties: ['Haar bal', 'Haar knuffel', 'Haar koekje', 'Haar jas'], correct: 1 },
      { v: 'Waar vindt Bo de knuffel?', opties: ['In de tuin', 'Onder de bank', 'Onder het bed', 'In de keuken'], correct: 1 },
    ],
  },

  {
    id: 'j-maan', titel: 'De maan is een rare bal', doelgroep: 'kids6-9', niveau: 1, onderwerp: 'wetenschap',
    tekst: `Kijk eens omhoog in de nacht. Daar hangt de maan. De maan lijkt klein. Maar dat is niet zo! De maan is een grote bal van steen. Hij lijkt klein omdat hij heel ver weg is.

Op de maan is geen lucht. Je kunt er niet ademen. Er groeit ook niets. Geen gras, geen bomen, geen bloemen. Alleen maar stof en stenen.

Er zijn wel eens mensen op de maan geweest. Ze gingen met een raket. Op de maan ben je heel licht. Je kunt er super hoog springen! De voetstappen van de mensen staan er nog steeds. Er is geen wind die ze wegblaast.

Zou jij naar de maan willen?`,
    vragen: [
      { v: 'Wat is de maan?', opties: ['Een lamp', 'Een grote bal van steen', 'Een ster', 'Een wolk'], correct: 1 },
      { v: 'Waarom kun je op de maan niet ademen?', opties: ['Het is er te koud', 'Er is geen lucht', 'Het is er te donker', 'Er is te veel stof'], correct: 1 },
      { v: 'Waarom staan de voetstappen er nog steeds?', opties: ['Ze zijn geverfd', 'Er is geen wind die ze wegblaast', 'Ze zijn heel diep', 'Iemand maakt ze elke dag opnieuw'], correct: 1 },
    ],
  },

  {
    id: 'j-pinguin', titel: 'Pim de pinguïn kan niet vliegen', doelgroep: 'kids6-9', niveau: 1, onderwerp: 'dieren',
    tekst: `Pim is een pinguïn. Hij heeft vleugels. Maar vliegen kan hij niet. Dat vindt Pim soms jammer. De meeuwen vliegen hoog in de lucht. Pim kijkt ze na.

Maar dan gaat Pim het water in. En daar... daar is Pim een ster! Hij zwemt super snel. Zijn vleugels zijn net zwemvliezen. Hij schiet door het water als een pijl. Geen meeuw kan dat!

Pim vangt een visje. En nog een. De meeuwen kijken jaloers toe. Zij kunnen niet zo goed duiken.

Iedereen kan iets goed. De meeuw kan vliegen. Pim kan zwemmen. En jij? Wat kan jij goed?`,
    vragen: [
      { v: 'Wat kan Pim niet?', opties: ['Zwemmen', 'Vliegen', 'Vissen vangen', 'Duiken'], correct: 1 },
      { v: 'Waar is Pim een ster?', opties: ['In de lucht', 'In het water', 'Op het ijs', 'In het zand'], correct: 1 },
      { v: 'Wat leert dit verhaal ons?', opties: ['Vliegen is het beste', 'Iedereen kan iets goed', 'Zwemmen is moeilijk', 'Meeuwen zijn dom'], correct: 1 },
    ],
  },

  {
    id: 'j-regenboog', titel: 'Waar komt de regenboog vandaan?', doelgroep: 'kids6-9', niveau: 1, onderwerp: 'natuur',
    tekst: `Het regent. En de zon schijnt ook. Kijk! Een regenboog!

Een regenboog is licht van de zon. Het licht van de zon lijkt wit. Maar dat is een trucje. In het witte licht zitten alle kleuren verstopt.

Als het zonlicht door de regen valt, gaan de kleuren uit elkaar. Dan zie je rood, oranje, geel, groen, blauw en paars. Net een brug van kleuren in de lucht!

Je kunt zelf ook een regenboog maken. Pak de tuinslang op een zonnige dag. Spuit fijne druppels in de lucht. Ga met je rug naar de zon staan. Zie je hem al?

Een pot met goud vind je niet aan het einde. Maar mooi is het wel!`,
    vragen: [
      { v: 'Wat heb je nodig voor een regenboog?', opties: ['Sneeuw en wind', 'Regen en zon', 'Wolken en mist', 'Alleen regen'], correct: 1 },
      { v: 'Wat zit er verstopt in wit zonlicht?', opties: ['Goud', 'Alle kleuren', 'Water', 'Sterren'], correct: 1 },
      { v: 'Hoe maak je zelf een regenboog?', opties: ['Met een lamp', 'Met de tuinslang op een zonnige dag', 'Met verf', 'Met een spiegel in het donker'], correct: 1 },
    ],
  },

  {
    id: 'j-mier-max', titel: 'Max de sterke mier', doelgroep: 'kids6-9', niveau: 1, onderwerp: 'dieren',
    tekst: `Max is een mier. Hij is heel klein. Kleiner dan je nagel. Maar Max is super sterk!

Max kan een blaadje tillen. Dat blaadje is veel groter dan hijzelf. Het is net alsof jij een auto optilt! Zo sterk zijn mieren.

Max woont met heel veel mieren samen. Hun huis heet een nest. In het nest heeft iedereen een taak. Sommige mieren zoeken eten. Andere mieren passen op de eitjes. En de koningin? Die legt alle eitjes.

Mieren praten niet met woorden. Ze laten een geurspoor achter. Zo zegt Max tegen de andere mieren: "Volg mij! Ik heb eten gevonden!" Alle mieren lopen dan achter elkaar aan. Heb je dat wel eens gezien?`,
    vragen: [
      { v: 'Hoe sterk is Max?', opties: ['Hij kan een blaadje tillen dat groter is dan hijzelf', 'Hij kan een auto tillen', 'Hij is niet sterk', 'Hij kan een huis dragen'], correct: 0 },
      { v: 'Wie legt alle eitjes in het nest?', opties: ['Max', 'De koningin', 'Alle mieren', 'De sterkste mier'], correct: 1 },
      { v: 'Hoe zeggen mieren iets tegen elkaar?', opties: ['Met woorden', 'Met een geurspoor', 'Met geluid', 'Met hun poten'], correct: 1 },
    ],
  },

  {
    id: 'j-tanden', titel: 'Waarom vallen je tanden uit?', doelgroep: 'kids6-9', niveau: 1, onderwerp: 'wetenschap',
    tekst: `Wiebel, wiebel. Je tand zit los! Even later valt hij uit. Au? Nee hoor, het doet bijna geen pijn.

Waarom vallen je tanden uit? Dat zit zo. Je eerste tanden heten melktanden. Ze komen als je een baby bent. Maar melktanden zijn klein. Je mond groeit, en de melktanden groeien niet mee.

Onder elke melktand wacht een nieuwe tand. Een grote-mensen-tand! Die duwt de melktand eruit. Eerst wiebelt de tand. Dan valt hij uit. En dan groeit de nieuwe tand in het gaatje.

Je krijgt zo wel twintig nieuwe tanden. Die moeten je hele leven mee. Dus poets ze goed! Twee keer per dag. Dan blijven ze sterk en wit.`,
    vragen: [
      { v: 'Hoe heten je eerste tanden?', opties: ['Babytanden', 'Melktanden', 'Wiebeltanden', 'Kleine tanden'], correct: 1 },
      { v: 'Wat duwt de melktand eruit?', opties: ['Je tong', 'De nieuwe tand eronder', 'Een appel', 'De tandarts'], correct: 1 },
      { v: 'Hoe vaak moet je je tanden poetsen?', opties: ['Eén keer per week', 'Twee keer per dag', 'Alleen op school', 'Nooit'], correct: 1 },
    ],
  },

  {
    id: 'j-slak', titel: 'Het huisje van de slak', doelgroep: 'kids6-9', niveau: 1, onderwerp: 'dieren',
    tekst: `Een slak is nooit ver van huis. Weet je waarom? Hij draagt zijn huisje altijd op zijn rug!

Het huisje van de slak groeit met hem mee. Een kleine slak heeft een klein huisje. Een grote slak heeft een groot huisje. Verhuizen hoeft dus nooit.

Is er gevaar? Dan kruipt de slak snel naar binnen. Veilig! Regent het niet en is het warm? Dan blijft de slak ook binnen. Anders droogt hij uit.

Een slak kruipt op één grote voet. Hij maakt slijm om beter te glijden. Daarom zie je een zilveren spoor waar de slak liep. Een slak is langzaam. Maar hij komt altijd waar hij wezen wil. Stapje voor stapje. Net als jij, als je iets moeilijks leert!`,
    vragen: [
      { v: 'Waar is het huisje van de slak?', opties: ['Onder de grond', 'Op zijn rug', 'In een boom', 'Bij de sloot'], correct: 1 },
      { v: 'Wat doet de slak bij gevaar?', opties: ['Hij rent weg', 'Hij kruipt in zijn huisje', 'Hij maakt geluid', 'Hij bijt'], correct: 1 },
      { v: 'Waarom maakt een slak slijm?', opties: ['Om beter te glijden', 'Omdat hij ziek is', 'Om te eten', 'Tegen de regen'], correct: 0 },
    ],
  },

  {
    id: 'j-fiets', titel: 'Sam leert fietsen', doelgroep: 'kids6-9', niveau: 1, onderwerp: 'verhaal',
    tekst: `Sam krijgt een nieuwe fiets. Rood met een bel. Prachtig! Maar er is één probleem. Sam kan nog niet fietsen zonder zijwieltjes.

"Vandaag gaan we oefenen," zegt papa. Hij haalt de zijwieltjes eraf. Sam vindt het spannend. Papa houdt de fiets vast. "Trappen maar!"

Sam trapt. De fiets wiebelt. "Niet loslaten, papa!" roept Sam. "Ik hou je vast," zegt papa. Sam trapt harder. Het gaat steeds beter.

Dan hoort Sam papa lachen. Maar... papa staat ver weg! Hij heeft al lang losgelaten. Sam fietst helemaal zelf!

"Ik kan het!" juicht Sam. Hij belt met zijn bel. Ring ring! Vallen hoort erbij, zegt papa altijd. Maar vandaag valt Sam niet één keer.`,
    vragen: [
      { v: 'Wat kan Sam nog niet aan het begin van het verhaal?', opties: ['Lopen', 'Fietsen zonder zijwieltjes', 'Bellen', 'Trappen'], correct: 1 },
      { v: 'Wat doet papa stiekem?', opties: ['Hij laat de fiets los', 'Hij duwt Sam om', 'Hij gaat naar huis', 'Hij pakt de bel af'], correct: 0 },
      { v: 'Hoe voelt Sam zich aan het einde?', opties: ['Verdrietig', 'Blij en trots', 'Boos', 'Bang'], correct: 1 },
    ],
  },

  {
    id: 'j-vuurtoren', titel: 'Het licht in de vuurtoren', doelgroep: 'kids6-9', niveau: 2, onderwerp: 'techniek',
    tekst: `Aan de zee staat een hoge toren. Rood met witte strepen. Het is een vuurtoren. Bovenin draait een heel fel licht.

Waar is dat licht voor? Voor de schepen op zee! In de nacht is de zee pikdonker. De kapitein van een schip ziet dan bijna niets. Maar het licht van de vuurtoren ziet hij wel. Van heel ver weg al.

Zo weet de kapitein: daar is land! Hij weet ook waar hij moet varen. Weg van de stenen en het ondiepe water. De vuurtoren wijst de veilige weg. Net als een lamp in de nacht.

Vroeger woonde er iemand in de vuurtoren. De vuurtorenwachter. Elke avond deed hij het licht aan. Nu gaat het licht vanzelf aan. Maar de vuurtoren helpt nog steeds elke nacht.`,
    vragen: [
      { v: 'Voor wie is het licht van de vuurtoren?', opties: ['Voor vliegtuigen', 'Voor schepen op zee', 'Voor auto\'s', 'Voor de vissen'], correct: 1 },
      { v: 'Wat weet de kapitein als hij het licht ziet?', opties: ['Dat het gaat regenen', 'Dat daar land is', 'Dat het ochtend wordt', 'Dat er een feest is'], correct: 1 },
      { v: 'Wie deed vroeger elke avond het licht aan?', opties: ['De kapitein', 'De vuurtorenwachter', 'De burgemeester', 'Niemand'], correct: 1 },
    ],
  },

  {
    id: 'j-eekhoorn', titel: 'De eekhoorn vergeet zijn nootjes', doelgroep: 'kids6-9', niveau: 2, onderwerp: 'dieren',
    tekst: `In de herfst is de eekhoorn druk. Hij verzamelt nootjes en eikels. Die verstopt hij in de grond. Hier een paar, daar een paar. Wel honderd plekjes!

Waarom doet hij dat? In de winter is er bijna geen eten. Dan graaft de eekhoorn zijn nootjes weer op. Slim!

Maar er is iets grappigs. De eekhoorn vergeet de helft van zijn plekjes! Hij weet niet meer waar alles ligt. Zonde? Nee, juist niet!

Want wat gebeurt er met een vergeten nootje in de grond? Het groeit! Uit het nootje komt een boompje. En uit dat boompje groeit een grote boom. Met nieuwe nootjes.

Zo plant de vergeetachtige eekhoorn per ongeluk een heel bos. Bedankt, eekhoorn!`,
    vragen: [
      { v: 'Wat doet de eekhoorn in de herfst?', opties: ['Hij slaapt', 'Hij verstopt nootjes in de grond', 'Hij verhuist', 'Hij bouwt een dam'], correct: 1 },
      { v: 'Wat vergeet de eekhoorn?', opties: ['Zijn naam', 'Waar de helft van de nootjes ligt', 'Te eten', 'Zijn staart te poetsen'], correct: 1 },
      { v: 'Wat gebeurt er met een vergeten nootje?', opties: ['Het verdwijnt', 'Er groeit een boom uit', 'Een vogel eet het op', 'Het wordt een steen'], correct: 1 },
    ],
  },

  // ══════════ KIDS 9-12 (langer, rijker) ══════════

  {
    id: 'j-dino-kip', titel: 'De kip is een dinosaurus', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    tekst: `Wil je een echte dinosaurus zien? Kijk dan naar een kip. Echt waar: de kip is familie van de Tyrannosaurus rex!

Heel lang geleden leefden er overal dinosaurussen. Toen sloeg er een enorme ruimtesteen op de aarde in. Het werd donker en koud. De grote dinosaurussen gingen dood. Maar een paar kleine dino's met veren overleefden de ramp. Zij konden vliegen en vonden overal eten.

Die kleine dino's met veren veranderden heel langzaam, in miljoenen jaren. Ze werden... vogels! Alle vogels van nu stammen af van dinosaurussen. De mus in je tuin, de eend in de sloot en dus ook de kip.

Wetenschappers hebben het bewezen. De botten van vogels lijken sprekend op die van kleine roofdino's. Sommige dino's hadden zelfs al veren en vleugels. Ze konden alleen nog niet goed vliegen.

Kijk nog eens goed naar een kip. Zie je hoe ze loopt, met die stappende poten? Zie je haar scherpe ogen? Dan kijk je naar een piepklein familielid van de gevaarlijkste jager die ooit heeft geleefd. Best stoer voor een kip.`,
    vragen: [
      { v: 'Van welke dieren stammen alle vogels af?', opties: ['Van vissen', 'Van dinosaurussen', 'Van vleermuizen', 'Van hagedissen'], correct: 1 },
      { v: 'Welke dino\'s overleefden de ramp?', opties: ['De allergrootste', 'Kleine dino\'s met veren', 'De dino\'s in zee', 'Geen enkele'], correct: 1 },
      { v: 'Hoe hebben wetenschappers het bewezen?', opties: ['Met oude foto\'s', 'Vogelbotten lijken sprekend op die van kleine roofdino\'s', 'Een kip heeft het verteld', 'Met een tijdmachine'], correct: 1 },
    ],
  },

  {
    id: 'j-poep-goud', titel: 'Het jongetje dat overal vragen over stelde', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'verhaal',
    tekst: `Joep stelde altijd vragen. Honderd per dag, zei zijn moeder. Waarom is de lucht blauw? Waarom prikken brandnetels? Waarom kun je je eigen kietel niet voelen?

Op school vond de meester het soms lastig. "Joep, we gaan nu rekenen." Maar Joep wilde weten waaróm je moest rekenen. "Omdat je anders je wisselgeld niet kunt tellen," zei de meester. Dat vond Joep een goed antwoord. Toen ging hij rekenen. Beter dan iedereen.

Op een dag kwam er een echte uitvinder op school vertellen. Ze vroeg: "Wie heeft er een vraag?" Alle vingers bleven naar beneden. Behalve die van Joep. Hij vroeg wel tien dingen. Over robots, over raketten en over hoe je uitvinder wordt.

De uitvinder lachte. "Weet je wat mijn geheim is?" zei ze. "Ik ben nooit gestopt met vragen stellen. Elke uitvinding begint met een vraag die niemand anders durft te stellen."

Joep glom van trots. Die avond schreef hij al zijn vragen in een schrift. Bovenop schreef hij: mijn uitvindersboek.`,
    vragen: [
      { v: 'Wat deed Joep de hele dag?', opties: ['Rekenen', 'Vragen stellen', 'Tekenen', 'Voetballen'], correct: 1 },
      { v: 'Wat was het geheim van de uitvinder?', opties: ['Hard werken', 'Nooit stoppen met vragen stellen', 'Veel geld', 'Goede cijfers'], correct: 1 },
      { v: 'Wat schrijft Joep op zijn schrift?', opties: ['Mijn dagboek', 'Mijn uitvindersboek', 'Mijn vragenlijst', 'Mijn huiswerk'], correct: 1 },
    ],
  },

  {
    id: 'j-ijsberg', titel: 'Een ijsberg is een reus onder water', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'natuur',
    tekst: `Een ijsberg lijkt op een witte berg die in de zee drijft. Maar wat je ziet, is maar een klein stukje. Bijna negentig procent van de ijsberg zit ónder water! Daarom zeggen mensen wel eens: "Dat is het topje van de ijsberg."

IJsbergen zijn geboren als stukken gletsjer. Een gletsjer is een rivier van ijs die heel langzaam naar de zee schuift. Bij de kust breekt er soms een enorm stuk af. Dat afbreken heet kalven, net als bij een koe die een kalfje krijgt. Het stuk ijs plonst in het water en drijft weg. Een ijsberg is geboren!

Sommige ijsbergen zijn zo groot als een stad. De allergrootste ooit gemeten was groter dan een heel land! IJsbergen drijven soms jaren rond voordat ze smelten.

IJsbergen zijn prachtig, maar ook gevaarlijk voor schepen. Het beroemde schip de Titanic botste in 1912 tegen een ijsberg en zonk. De kapitein zag de ijsberg te laat. Het grootste deel zat immers verstopt onder water.

Tegenwoordig houden satellieten alle grote ijsbergen in de gaten. Zo weten schepen precies waar ze moeten uitkijken.`,
    vragen: [
      { v: 'Hoeveel van een ijsberg zit onder water?', opties: ['De helft', 'Bijna negentig procent', 'Tien procent', 'Alles'], correct: 1 },
      { v: 'Hoe heet het afbreken van een stuk gletsjer?', opties: ['Kalven', 'Splijten', 'Smelten', 'Kraken'], correct: 0 },
      { v: 'Welk beroemd schip botste tegen een ijsberg?', opties: ['De Batavia', 'De Titanic', 'De Nautilus', 'De Vliegende Hollander'], correct: 1 },
    ],
  },

  {
    id: 'j-blindegeleide', titel: 'Hoe een puppy een heldenhond wordt', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    tekst: `Sommige mensen kunnen niet of bijna niet zien. Een blindengeleidehond is dan een echte held. De hond brengt zijn baas veilig door de stad. Maar hoe leert een hond dat?

Het begint als de hond nog een puppy is. De puppy gaat wonen bij een gastgezin. Daar leert hij gewone dingen: netjes lopen aan de riem, rustig blijven in de bus en niet schrikken van harde geluiden. Het gastgezin neemt de puppy overal mee naartoe. Naar de winkel, de trein, zelfs naar school.

Na ongeveer een jaar begint de echte opleiding. Die duurt nog eens acht maanden! De hond leert stoppen bij elke stoeprand. Hij leert om obstakels heen te lopen, zoals paaltjes en geparkeerde fietsen. Hij leert zelfs iets heel bijzonders: nee zeggen. Als de baas wil oversteken terwijl er een auto aankomt, blijft de hond gewoon staan. Dat heet intelligente ongehoorzaamheid.

Niet elke hond haalt het examen. Je moet slim, rustig en heel geduldig zijn. De honden die slagen, veranderen het leven van hun baas. Samen kunnen ze overal naartoe. De hond is de ogen van zijn baas — en zijn allerbeste vriend.`,
    vragen: [
      { v: 'Waar woont de puppy eerst?', opties: ['In een asiel', 'Bij een gastgezin', 'Op school', 'Bij de dierenarts'], correct: 1 },
      { v: 'Wat is intelligente ongehoorzaamheid?', opties: ['Slim ontsnappen', 'Nee zeggen als iets gevaarlijk is', 'Koekjes stelen', 'Heel hard blaffen'], correct: 1 },
      { v: 'Waar stopt de geleidehond altijd?', opties: ['Bij elke boom', 'Bij elke stoeprand', 'Bij elke winkel', 'Bij elke hond'], correct: 1 },
    ],
  },

];
