/**
 * teksten-meta.mjs — metadata + begripsvragen voor de gemigreerde teksten
 * (uit tmp_chunk_teksten.js en tmp_rsvp_teksten.js), gekoppeld op titel.
 *
 * vragen: [{ v, opties: [4 opties], correct: index }]
 * doelgroep: kids6-9 | kids9-12 | teens | volwassen
 */

export const TEKST_META = {

  // ══════════ CHUNK-TEKSTEN ══════════

  'De uitvinding van bubbeltjesplastic': {
    id: 'k-bubbels', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'techniek',
    vragen: [
      { v: 'Wat probeerden de twee ingenieurs eerst te maken?', opties: ['Verpakkingsmateriaal', 'Hip behang', 'Een douchegordijn', 'Een regenjas'], correct: 1 },
      { v: 'Waar bleek bubbeltjesplastic perfect voor te zijn?', opties: ['Muurversiering', 'Kleding', 'Breekbare spullen beschermen', 'Zwembanden'], correct: 2 },
      { v: 'Wat gebeurt er volgens wetenschappers als je bubbeltjes knapt?', opties: ['Je wordt gestrest', 'Je stress vermindert', 'Je hartslag stijgt', 'Je wordt moe'], correct: 1 },
    ],
  },

  'Geheimen van de octopus': {
    id: 'k-octopus', doelgroep: 'teens', niveau: 3, onderwerp: 'dieren',
    vragen: [
      { v: 'Wat is er bijzonder aan de armen van een octopus?', opties: ['Ze hebben botten', 'Elke arm heeft een eigen minibrein', 'Ze kunnen niet bewegen', 'Ze zijn altijd blauw'], correct: 1 },
      { v: 'Hoe heten de speciale cellen waarmee een octopus van kleur verandert?', opties: ['Neuronen', 'Chromatoforen', 'Melanocyten', 'Fotoreceptoren'], correct: 1 },
      { v: 'Wat deed de octopus Inky in Nieuw-Zeeland?', opties: ['Hij loste een puzzel op', 'Hij ontsnapte via een afvoerpijp naar zee', 'Hij leerde kleuren tellen', 'Hij ving een schildpad'], correct: 1 },
    ],
  },

  'Waarom muziek kippenvel geeft': {
    id: 'k-muziek', doelgroep: 'teens', niveau: 3, onderwerp: 'psychologie',
    vragen: [
      { v: 'Welke stof geven je hersenen af bij muzikale kippenvel?', opties: ['Adrenaline', 'Dopamine', 'Insuline', 'Melatonine'], correct: 1 },
      { v: 'Wanneer ontstaat muzikale kippenvel vooral?', opties: ['Bij harde muziek', 'Bij onverwachte wendingen in de muziek', 'Bij langzame muziek', 'Bij muziek zonder tekst'], correct: 1 },
      { v: 'Hoe wordt muziek ingezet bij mensen met dementie?', opties: ['Om ze te laten slapen', 'Liedjes uit hun verleden openen herinneringen', 'Om ze te leren lezen', 'Als vervanging van medicijnen'], correct: 1 },
    ],
  },

  'De man die van de ruimte sprong': {
    id: 'k-ruimtesprong', doelgroep: 'teens', niveau: 3, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Van welke hoogte sprong Felix Baumgartner?', opties: ['9 kilometer', 'Bijna 39 kilometer', '100 kilometer', '5 kilometer'], correct: 1 },
      { v: 'Welk record brak Felix tijdens zijn val?', opties: ['Langste vlucht', 'Hij doorbrak de geluidsbarrière zonder voertuig', 'Hoogste parachutesprong in zee', 'Snelste raket'], correct: 1 },
      { v: 'Wat was het gevaarlijkste moment tijdens de sprong?', opties: ['De landing', 'Toen hij begon te tollen', 'Het openen van de deur', 'De opstijging'], correct: 1 },
    ],
  },

  'Hoe je brein je voor de gek houdt': {
    id: 'k-breintruc', doelgroep: 'volwassen', niveau: 3, onderwerp: 'psychologie',
    vragen: [
      { v: 'Wat is de blinde vlek?', opties: ['Een plek waar je extra scherp ziet', 'Een gat in je gezichtsveld dat je brein opvult', 'Een oogziekte', 'Een deel van je geheugen'], correct: 1 },
      { v: 'Wat gebeurt er elke keer als je een herinnering ophaalt?', opties: ['Hij wordt sterker en preciezer', 'Hij wordt een beetje aangepast', 'Hij verdwijnt', 'Er verandert niets'], correct: 1 },
      { v: 'Wanneer lijkt de tijd langzaam te gaan?', opties: ['Bij routine', 'Bij iets nieuws en opwindends', 'Tijdens je slaap', 'Als je tv kijkt'], correct: 1 },
    ],
  },

  'Het mysterie van de Bermudadriehoek': {
    id: 'k-bermuda', doelgroep: 'teens', niveau: 3, onderwerp: 'geschiedenis',
    vragen: [
      { v: 'Wat is het beroemdste incident in de Bermudadriehoek?', opties: ['De Titanic', 'Vlucht 19, vijf verdwenen bommenwerpers', 'Een verdwenen cruiseschip', 'De ontdekking van Atlantis'], correct: 1 },
      { v: 'Wat zegt de statistiek over verdwijningen in het gebied?', opties: ['Er verdwijnen veel meer schepen dan elders', 'Er verdwijnen niet meer schepen dan elders', 'Alleen vliegtuigen verdwijnen er', 'Niemand heeft het onderzocht'], correct: 1 },
      { v: 'Welk echt natuurverschijnsel kan schepen daar laten zinken?', opties: ['Tijdportalen', 'Methaangasbellen op de zeebodem', 'Magnetische piramides', 'Zeemonsters'], correct: 1 },
    ],
  },

  'Koken is eigenlijk scheikunde': {
    id: 'k-koken', doelgroep: 'volwassen', niveau: 3, onderwerp: 'eten',
    vragen: [
      { v: 'Hoe heet de reactie die een biefstuk een bruin korstje geeft?', opties: ['De Maillardreactie', 'De karamelreactie', 'Fermentatie', 'Oxidatie'], correct: 0 },
      { v: 'Waarom laat een ui je huilen?', opties: ['Door het zout in de ui', 'Een gas vormt mild zwavelzuur in je ogen', 'Door de scherpe geur', 'Door bacteriën'], correct: 1 },
      { v: 'Wat doet bakpoeder in een cake?', opties: ['Het maakt de cake zoeter', 'Het produceert kooldioxide-belletjes', 'Het kleurt de cake bruin', 'Het houdt de cake vochtig'], correct: 1 },
    ],
  },

  'Dieren met superkrachten': {
    id: 'k-superdieren', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    vragen: [
      { v: 'Wat kan de pistoolkreeft met zijn schaar?', opties: ['Glas doorknippen', 'Een luchtbel maken zo heet als de zon', 'Onder water vuur maken', 'Stenen vermalen'], correct: 1 },
      { v: 'Wat overleeft het waterbeertje (tardigrade) allemaal?', opties: ['Alleen kou', 'Alleen hitte', 'Kokend water, bevriezing, straling én de ruimte', 'Alleen droogte'], correct: 2 },
      { v: 'Welk dier is biologisch onsterfelijk?', opties: ['De mantisgarnaal', 'De kwal Turritopsis dohrnii', 'De huiskat', 'De pistoolkreeft'], correct: 1 },
    ],
  },

  'Voorspellingen die fout gingen': {
    id: 'k-voorspellingen', doelgroep: 'volwassen', niveau: 3, onderwerp: 'geschiedenis',
    vragen: [
      { v: 'Wat zei de voorzitter van IBM in 1943?', opties: ['Iedereen krijgt een computer', 'Er is een wereldmarkt voor misschien vijf computers', 'Computers worden zakformaat', 'IBM stopt met computers'], correct: 1 },
      { v: 'Welk bedrijf weigerde het patent op de telefoon te kopen?', opties: ['IBM', 'Western Union', 'Warner Brothers', 'DEC'], correct: 1 },
      { v: 'Wat leren deze mislukte voorspellingen ons?', opties: ['Experts hebben altijd gelijk', 'Experts zijn slecht in voorspellen wat morgen brengt', 'Technologie verandert nooit', 'Voorspellen is eenvoudig'], correct: 1 },
    ],
  },

  'Het geheim van lucide dromen': {
    id: 'k-lucide', doelgroep: 'volwassen', niveau: 4, onderwerp: 'psychologie',
    vragen: [
      { v: 'Wat is een lucide droom?', opties: ['Een nachtmerrie', 'Een droom waarin je beseft dat je droomt', 'Een droom die je vergeet', 'Slaapwandelen'], correct: 1 },
      { v: 'Wat is de werkelijkheidstest?', opties: ['Een slaaponderzoek', 'Jezelf overdag afvragen of je droomt', 'Een geheugentest', 'Een droomdagboek'], correct: 1 },
      { v: 'Hoe gebruikte Salvador Dali zijn dromen?', opties: ['Hij sliep nooit', 'Hij viel in slaap met een sleutel in zijn hand', 'Hij schilderde in zijn slaap', 'Hij dronk koffie voor het slapen'], correct: 1 },
    ],
  },

  'Vulkanen die de wereld veranderden': {
    id: 'k-vulkanen', doelgroep: 'teens', niveau: 3, onderwerp: 'natuur',
    vragen: [
      { v: 'Wat gebeurde er na de uitbarsting van de Tambora in 1815?', opties: ['Er kwam een hittegolf', '1816 werd het jaar zonder zomer', 'De zee steeg een meter', 'Er kwamen geen gevolgen'], correct: 1 },
      { v: 'Welk beroemd boek ontstond tijdens dat slechte weer?', opties: ['Dracula', 'Frankenstein', 'Moby Dick', 'De Hobbit'], correct: 1 },
      { v: 'Waarvoor gebruikt IJsland vulkanische activiteit?', opties: ['Toerisme alleen', 'Verwarming en elektriciteit', 'Wegenbouw', 'Drinkwater'], correct: 1 },
    ],
  },

  'De vreemdste banen ter wereld': {
    id: 'k-banen', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'maatschappij',
    vragen: [
      { v: 'Wat doet een professionele rijstaander?', opties: ['Rijst verbouwen', 'In de rij staan voor anderen', 'Rijst proeven', 'Files tellen'], correct: 1 },
      { v: 'Wat test een glijbaantester?', opties: ['Auto\'s', 'Waterglijbanen', 'Vliegtuigen', 'Trampolines'], correct: 1 },
      { v: 'Hoe oud is de traditie van de koninklijke zwanenteller in Londen?', opties: ['Tien jaar', 'Honderd jaar', 'Acht eeuwen', 'Twintig eeuwen'], correct: 2 },
    ],
  },

  'Hoe GPS echt werkt': {
    id: 'k-gps', doelgroep: 'volwassen', niveau: 4, onderwerp: 'techniek',
    vragen: [
      { v: 'Wat heeft elke GPS-satelliet aan boord?', opties: ['Een telescoop', 'Een supernauwkeurige atoomklok', 'Een camera', 'Een radar'], correct: 1 },
      { v: 'Welke theorie is nodig om GPS goed te laten werken?', opties: ['De evolutietheorie', 'Einsteins relativiteitstheorie', 'De snaartheorie', 'De oerknaltheorie'], correct: 1 },
      { v: 'Hoeveel zou je GPS-positie per dag afwijken zonder correctie?', opties: ['Elf meter', 'Elf kilometer', 'Honderd meter', 'Eén kilometer'], correct: 1 },
    ],
  },

  'De ongelooflijke honingbij': {
    id: 'k-bijen', doelgroep: 'teens', niveau: 3, onderwerp: 'dieren',
    vragen: [
      { v: 'Hoe vertellen bijen elkaar waar voedsel is?', opties: ['Door te zoemen', 'Met de waggeldans', 'Door geuren achter te laten', 'Met kleurpatronen'], correct: 1 },
      { v: 'Waarom bederft honing nooit?', opties: ['Door het suikergehalte alleen', 'Het bevat te weinig vocht voor bacteriën', 'Bijen voegen conserveermiddel toe uit bloemen', 'Het is altijd koud in de korf'], correct: 1 },
      { v: 'Hoe kiest een bijenzwerm een nieuw huis?', opties: ['De koningin beslist alleen', 'Verkenners dansen en de zwerm stemt mee', 'Het dichtstbijzijnde huis wint', 'Ze loten'], correct: 1 },
    ],
  },

  'De diepzee: donkerder dan de ruimte': {
    id: 'k-diepzee', doelgroep: 'teens', niveau: 3, onderwerp: 'natuur',
    vragen: [
      { v: 'Wat is bioluminescentie?', opties: ['Een soort koraal', 'Dieren die hun eigen licht maken', 'Een duiktechniek', 'Licht van de maan onder water'], correct: 1 },
      { v: 'Wanneer werd de reuzeninktvis voor het eerst gefilmd?', opties: ['1954', '1985', '2004', '2020'], correct: 2 },
      { v: 'Wat zijn hydrothermale bronnen?', opties: ['Koude waterputten', 'Scheuren waaruit kokend mineraalrijk water stroomt', 'Onderzeese vulkanen van ijs', 'Zoetwaterbronnen'], correct: 1 },
    ],
  },

  'Het placebo-effect is echt': {
    id: 'k-placebo', doelgroep: 'volwassen', niveau: 4, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Wat kan een placebo meetbaar doen in het lichaam?', opties: ['Niets', 'Pijnstillers in de hersenen activeren', 'Botten versterken', 'Spieren laten groeien'], correct: 1 },
      { v: 'Werkt een placebo als je wéét dat het een placebo is?', opties: ['Nooit', 'Soms wel', 'Alleen bij kinderen', 'Alleen bij injecties'], correct: 1 },
      { v: 'Welke pilkleur wordt als kalmerend ervaren?', opties: ['Rood', 'Blauw', 'Geel', 'Groen'], correct: 1 },
    ],
  },

  'Hoe een potlood wordt gemaakt': {
    id: 'k-potlood', doelgroep: 'volwassen', niveau: 3, onderwerp: 'maatschappij',
    vragen: [
      { v: 'Wat is de kernboodschap van het potlood-verhaal?', opties: ['Potloden zijn duur', 'Niemand kan in zijn eentje een potlood maken', 'Potloden komen uit één fabriek', 'Hout is zeldzaam'], correct: 1 },
      { v: 'Waar komt het grafiet in een potlood vandaan?', opties: ['Nederland of België', 'Sri Lanka of China', 'IJsland', 'Australië'], correct: 1 },
      { v: 'Wat maakt het gummetje van een potlood?', opties: ['Plastic uit Duitsland', 'Rubber uit Maleisië met puimsteen uit Italië', 'Katoen uit Egypte', 'Klei uit Mississippi'], correct: 1 },
    ],
  },

  'DNA: het boek van het leven': {
    id: 'k-dna', doelgroep: 'volwassen', niveau: 4, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Uit hoeveel letters bestaat het DNA-alfabet?', opties: ['Twee', 'Vier', 'Tien', 'Zesentwintig'], correct: 1 },
      { v: 'Hoeveel procent van ons DNA delen we met chimpansees?', opties: ['Vijftig procent', 'Achtennegentig procent', 'Zestig procent', 'Tien procent'], correct: 1 },
      { v: 'Wie maakte de cruciale röntgenfoto voor de ontdekking van de DNA-structuur?', opties: ['Watson', 'Crick', 'Rosalind Franklin', 'Darwin'], correct: 2 },
    ],
  },

  'Waarom we lachen': {
    id: 'k-lachen', doelgroep: 'teens', niveau: 3, onderwerp: 'psychologie',
    vragen: [
      { v: 'Hoeveel vaker lachen mensen in gezelschap dan alleen?', opties: ['Twee keer', 'Dertig keer', 'Honderd keer', 'Even vaak'], correct: 1 },
      { v: 'Waarom gebruiken sitcoms een lachband?', opties: ['Om stiltes te vullen', 'Gelach van anderen triggert je eigen lachreflex', 'Het is traditie', 'Om de acteurs te helpen'], correct: 1 },
      { v: 'Hoe vaak lacht een kind gemiddeld per dag?', opties: ['Vijftien keer', 'Driehonderd keer', 'Vijftig keer', 'Duizend keer'], correct: 1 },
    ],
  },

  'De vergeten beschaving van Gobekli Tepe': {
    id: 'k-gobekli', doelgroep: 'volwassen', niveau: 4, onderwerp: 'geschiedenis',
    vragen: [
      { v: 'Hoe oud is Gobekli Tepe?', opties: ['Duizend jaar', 'Vijfduizend jaar', 'Twaalfduizend jaar', 'Honderdduizend jaar'], correct: 2 },
      { v: 'Wie bouwden Gobekli Tepe?', opties: ['Romeinen', 'Boeren met metalen werktuigen', 'Jagers en verzamelaars', 'Egyptenaren'], correct: 2 },
      { v: 'Wat gebeurde er rond 9000 voor Christus met het complex?', opties: ['Het werd verwoest door oorlog', 'Het werd bewust begraven', 'Het zonk in zee', 'Het brandde af'], correct: 1 },
    ],
  },

  'Extreme weerfenomenen': {
    id: 'k-weer', doelgroep: 'teens', niveau: 3, onderwerp: 'natuur',
    vragen: [
      { v: 'Waar werd de hoogste temperatuur ooit gemeten?', opties: ['De Sahara', 'Death Valley in Californië', 'Australië', 'Spanje'], correct: 1 },
      { v: 'Waarom test NASA Mars-rovers in de Atacamawoestijn?', opties: ['Het is er goedkoop', 'De omstandigheden lijken op Mars', 'Er wonen geen mensen', 'Het is dicht bij de VS'], correct: 1 },
      { v: 'Hoe lang was de langste gemeten bliksemflits?', opties: ['Zeven kilometer', 'Zeventig kilometer', 'Zevenhonderd kilometer', 'Zevenduizend kilometer'], correct: 2 },
    ],
  },

  'De psychologie van kleur': {
    id: 'k-kleur', doelgroep: 'volwassen', niveau: 3, onderwerp: 'psychologie',
    vragen: [
      { v: 'Wat ontdekten wetenschappers over sporters in het rood?', opties: ['Ze verliezen vaker', 'Ze winnen vaker', 'Ze raken vaker geblesseerd', 'Er is geen verschil'], correct: 1 },
      { v: 'Waarom zijn operatiekamers groen?', opties: ['Groen is goedkoop', 'Groen neutraliseert nabeelden van rood bloed', 'Groen is steriel', 'Chirurgen houden van groen'], correct: 1 },
      { v: 'Welk effect had Baker-Miller roze in gevangenissen?', opties: ['Meer agressie', 'Minder agressie', 'Betere slaap', 'Meer ontsnappingen'], correct: 1 },
    ],
  },

  'Robots die ons werk overnemen': {
    id: 'k-robots', doelgroep: 'volwassen', niveau: 4, onderwerp: 'techniek',
    vragen: [
      { v: 'Wat verving de fabriek in China grotendeels door machines?', opties: ['Tien procent van de werknemers', 'Negentig procent van de werknemers', 'Alleen de managers', 'De helft van de robots'], correct: 1 },
      { v: 'Waarin verschilt deze technologische revolutie volgens pessimisten van eerdere?', opties: ['Ze gaat langzamer', 'AI vervangt denkkracht in plaats van spierkracht', 'Ze kost minder banen', 'Ze raakt alleen fabrieken'], correct: 1 },
      { v: 'Wat blijft volgens de tekst vooralsnog uniek menselijk?', opties: ['Rekenen', 'Creativiteit, empathie en humor', 'Muziek componeren', 'Kunst maken'], correct: 1 },
    ],
  },

  'De magie van fermentatie': {
    id: 'k-fermentatie', doelgroep: 'volwassen', niveau: 4, onderwerp: 'eten',
    vragen: [
      { v: 'Wat doen micro-organismen bij fermentatie?', opties: ['Ze eten suikers en maken alcohol, zuren of gassen', 'Ze koelen het voedsel', 'Ze voegen vitamines toe', 'Ze doden al het leven'], correct: 0 },
      { v: 'Hoe zou chocolade smaken zonder fermentatie?', opties: ['Zoeter', 'Naar bittere bonen', 'Naar niets', 'Zuurder'], correct: 1 },
      { v: 'Wat kunnen de bacteriën in kimchi en kefir versterken?', opties: ['Je spieren', 'Je darmflora', 'Je botten', 'Je gezichtsvermogen'], correct: 1 },
    ],
  },

  'Hoe je geheugen te hacken': {
    id: 'k-geheugen', doelgroep: 'volwassen', niveau: 4, onderwerp: 'psychologie',
    vragen: [
      { v: 'Wat is het geheugenpaleis?', opties: ['Een museum', 'Dingen onthouden door ze op bekende locaties te plaatsen', 'Een hersengebied', 'Een geheugenspel'], correct: 1 },
      { v: 'Waarom werken absurde beelden zo goed?', opties: ['Ze zijn grappig', 'Hoe gekker het beeld, hoe beter je het onthoudt', 'Ze zijn kleurrijk', 'Ze zijn kort'], correct: 1 },
      { v: 'Wat gebeurt er met informatie tijdens diepe slaap?', opties: ['Hij wordt gewist', 'Hij verhuist naar het langetermijngeheugen', 'Hij wordt gehalveerd', 'Er gebeurt niets'], correct: 1 },
    ],
  },

  'Het wonder van migratie': {
    id: 'k-migratie', doelgroep: 'volwassen', niveau: 4, onderwerp: 'dieren',
    vragen: [
      { v: 'Welke vogel vliegt jaarlijks van pool tot pool?', opties: ['De zwaluw', 'De noordse stern', 'De ooievaar', 'De albatros'], correct: 1 },
      { v: 'Hoe navigeren zalmen terug naar hun geboorterivier?', opties: ['Op de sterren', 'Op geur', 'Op geluid', 'Op temperatuur'], correct: 1 },
      { v: 'Hoeveel generaties doet de monarchvlinder over zijn migratie?', opties: ['Eén', 'Twee', 'Vier', 'Tien'], correct: 2 },
    ],
  },

  'Waarom tijd sneller gaat': {
    id: 'k-tijd', doelgroep: 'volwassen', niveau: 4, onderwerp: 'psychologie',
    vragen: [
      { v: 'Waarom duren vakanties in je herinnering langer dan werkweken?', opties: ['Ze zijn echt langer', 'Je brein slaat nieuwe ervaringen rijker op', 'Je slaapt minder op vakantie', 'De zon schijnt vaker'], correct: 1 },
      { v: 'Wat kun je doen om de tijd subjectief te vertragen?', opties: ['Meer routine inbouwen', 'Nieuwe ervaringen opzoeken', 'Langer slapen', 'Minder bewegen'], correct: 1 },
      { v: 'Waarom ervaren kinderen de tijd langzamer?', opties: ['Hun hart klopt sneller', 'Alles is nieuw voor ze', 'Ze slapen meer', 'Ze kijken vaker op de klok'], correct: 1 },
    ],
  },

  'De taal van walvissen': {
    id: 'k-walvissen', doelgroep: 'teens', niveau: 3, onderwerp: 'dieren',
    vragen: [
      { v: 'Hoe lang kunnen de liedjes van bultrugwalvissen duren?', opties: ['Enkele seconden', 'Uren', 'Dagen', 'Een minuut'], correct: 1 },
      { v: 'Wat zijn coda\'s bij potvissen?', opties: ['Liedjes', 'Klikpatronen om te communiceren', 'Zwembewegingen', 'Voedselsoorten'], correct: 1 },
      { v: 'Waarom werd één walvis "de eenzaamste walvis ter wereld" genoemd?', opties: ['Hij leefde alleen in een aquarium', 'Hij zong op een frequentie die geen andere walvis kon horen', 'Hij was de laatste van zijn soort', 'Hij zwom altijd achteraan'], correct: 1 },
    ],
  },

  'De gekste wetenschappelijke experimenten': {
    id: 'k-experimenten', doelgroep: 'volwassen', niveau: 4, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Wat overkwam Anatoli Bugorski in 1978?', opties: ['Hij viel in een vulkaan', 'Een protonenbundel ging door zijn hoofd', 'Hij verloor zijn geheugen', 'Hij ontdekte de röntgenstraal'], correct: 1 },
      { v: 'Wat deed Isaac Newton om het oog te onderzoeken?', opties: ['Hij bestudeerde dierenogen', 'Hij stak een naald in zijn eigen oogkas', 'Hij bouwde een microscoop', 'Hij droeg gekleurde brillen'], correct: 1 },
      { v: 'Waarvan was de kunstneus van Tycho Brahe gemaakt?', opties: ['Hout', 'Goud en zilver', 'Ivoor', 'Brons'], correct: 1 },
    ],
  },

  'De onzichtbare wereld in je darmen': {
    id: 'k-microbioom', doelgroep: 'volwassen', niveau: 4, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Hoeveel wegen alle bacteriën in je darmen samen ongeveer?', opties: ['Honderd gram', 'Twee kilo', 'Tien kilo', 'Vijf gram'], correct: 1 },
      { v: 'Waar wordt negentig procent van de serotonine gemaakt?', opties: ['In je hersenen', 'In je darmen', 'In je hart', 'In je longen'], correct: 1 },
      { v: 'Wat gebeurde er met angstige muizen die darmbacteriën van moedige muizen kregen?', opties: ['Ze werden zieker', 'Ze werden moediger', 'Er veranderde niets', 'Ze werden agressief'], correct: 1 },
    ],
  },

  'Het onverwoestbare zwarte doosje': {
    id: 'k-zwartedoos', doelgroep: 'teens', niveau: 3, onderwerp: 'techniek',
    vragen: [
      { v: 'Welke kleur heeft de zwarte doos echt?', opties: ['Zwart', 'Felrood', 'Geel', 'Zilver'], correct: 1 },
      { v: 'Uit welke twee onderdelen bestaat "de zwarte doos"?', opties: ['Radio en radar', 'Vluchtdatarecorder en cockpitvoicerecorder', 'GPS en kompas', 'Camera en microfoon'], correct: 1 },
      { v: 'Hoe lang zendt de zwarte doos onder water een signaal uit?', opties: ['Drie dagen', 'Dertig dagen', 'Een jaar', 'Voor altijd'], correct: 1 },
    ],
  },

  'Waarom we dromen': {
    id: 'k-dromen', doelgroep: 'volwassen', niveau: 4, onderwerp: 'psychologie',
    vragen: [
      { v: 'In welke slaapfase dromen we vooral?', opties: ['Diepe slaap', 'REM-slaap', 'Lichte slaap', 'Bij het inslapen'], correct: 1 },
      { v: 'Waarom zijn je spieren verlamd tijdens het dromen?', opties: ['Door kou', 'Zodat je je dromen niet uitvoert', 'Door vermoeidheid', 'Dat is toeval'], correct: 1 },
      { v: 'Wat doen ratten die overdag een doolhof liepen tijdens hun slaap?', opties: ['Ze piepen', 'Ze herhalen dezelfde hersenpatronen', 'Ze slapen dieper', 'Ze worden vaker wakker'], correct: 1 },
    ],
  },

  'De wereld onder je voeten': {
    id: 'k-bodem', doelgroep: 'volwassen', niveau: 4, onderwerp: 'natuur',
    vragen: [
      { v: 'Wat noemde Charles Darwin het belangrijkste dier in de geschiedenis?', opties: ['De bij', 'De regenworm', 'De mier', 'De mol'], correct: 1 },
      { v: 'Wat is het Wood Wide Web?', opties: ['Een houten computer', 'Schimmelnetwerken die plantenwortels verbinden', 'Een bostuinwinkel', 'Een boomsoort'], correct: 1 },
      { v: 'Waarom is gezonde bodem belangrijk voor het klimaat?', opties: ['Hij weerkaatst zonlicht', 'Hij bevat meer koolstof dan de atmosfeer en alle planten samen', 'Hij maakt regen', 'Hij koelt de zee af'], correct: 1 },
    ],
  },

  'De paradox van keuze': {
    id: 'k-keuze', doelgroep: 'volwassen', niveau: 5, onderwerp: 'psychologie',
    vragen: [
      { v: 'Wat gebeurde er bij de proeverij met vierentwintig soorten jam?', opties: ['Iedereen kocht jam', 'Meer mensen stopten, maar veel minder mensen kochten', 'Niemand stopte', 'De winkel verkocht uit'], correct: 1 },
      { v: 'Wat is een satisficer?', opties: ['Iemand die altijd het beste zoekt', 'Iemand die kiest wat goed genoeg is', 'Iemand die nooit kiest', 'Iemand die anderen laat kiezen'], correct: 1 },
      { v: 'Waarom voelt een teleurstellende keuze erger bij veel opties?', opties: ['De prijs is hoger', 'Het voelt als je eigen schuld', 'Anderen lachen je uit', 'Je kunt niet ruilen'], correct: 1 },
    ],
  },

  'De geheimen van migrerende dieren': {
    id: 'k-migratie2', doelgroep: 'volwassen', niveau: 4, onderwerp: 'dieren',
    vragen: [
      { v: 'Hoe detecteren trekvogels het aardmagnetisch veld?', opties: ['Met hun snavel', 'Met cryptochrome-eiwitten in hun ogen', 'Met hun veren', 'Met hun poten'], correct: 1 },
      { v: 'Hoe vinden zeeschildpadden hun geboortestrand terug?', opties: ['Op zicht', 'Via het magnetische profiel van het strand', 'Ze volgen andere schildpadden', 'Op geluid'], correct: 1 },
      { v: 'Hoe groot zijn de groepen migrerende gnoes in de Serengeti?', opties: ['Duizend dieren', 'Meer dan een miljoen dieren', 'Honderd dieren', 'Tienduizend dieren'], correct: 1 },
    ],
  },

  // ══════════ RSVP-TEKSTEN ══════════

  'De onsterfelijke kwal': {
    id: 'r-kwal', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    vragen: [
      { v: 'Wat kan de Turritopsis dohrnii als hij oud of ziek wordt?', opties: ['Sneller zwemmen', 'Zichzelf terugdraaien naar een jonger stadium', 'Van kleur veranderen', 'Zich verstoppen in het zand'], correct: 1 },
      { v: 'Hoe groot is deze kwal ongeveer?', opties: ['Zo groot als een auto', 'Niet groter dan een pinknagel', 'Zo groot als een voetbal', 'Twee meter'], correct: 1 },
      { v: 'Waarom kan de kwal alsnog doodgaan?', opties: ['Hij verbrandt in de zon', 'Hij wordt opgegeten of wordt ziek', 'Hij droogt uit', 'Hij wordt te oud'], correct: 1 },
    ],
  },

  'Uitvinding per ongeluk: chips': {
    id: 'r-chips', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'eten',
    vragen: [
      { v: 'Waarom sneed kok George Crum de aardappelen flinterdun?', opties: ['Om ze sneller te bakken', 'Uit frustratie over een klagende klant', 'Om geld te besparen', 'Het was een recept'], correct: 1 },
      { v: 'Hoe reageerde de klant op de dunne, knapperige aardappelen?', opties: ['Hij was boos', 'Hij was dolenthousiast', 'Hij at ze niet op', 'Hij vertrok meteen'], correct: 1 },
      { v: 'Wie bedacht het verpakken van chips in zakjes?', opties: ['George Crum', 'Laura Scudder', 'De koningin', 'Een restaurantgast'], correct: 1 },
    ],
  },

  'Honing wordt nooit slecht': {
    id: 'r-honing', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'eten',
    vragen: [
      { v: 'Wat vonden archeologen in Egyptische graven?', opties: ['Verse melk', 'Eetbare honing van drieduizend jaar oud', 'Bevroren brood', 'Oude chips'], correct: 1 },
      { v: 'Waarom kunnen bacteriën niet groeien in honing?', opties: ['Honing is te koud', 'Honing bevat extreem weinig vocht', 'Honing is te zoet om aan te raken', 'Bacteriën houden niet van geel'], correct: 1 },
      { v: 'Waarvoor gebruikten de oude Egyptenaren honing nog meer?', opties: ['Als verf', 'Om wonden te behandelen', 'Als brandstof', 'Om huizen te bouwen'], correct: 1 },
    ],
  },

  'De man die twee keer bliksem overleefde': {
    id: 'r-bliksem', doelgroep: 'teens', niveau: 3, onderwerp: 'natuur',
    vragen: [
      { v: 'Hoe vaak werd Roy Sullivan door de bliksem getroffen?', opties: ['Twee keer', 'Vijf keer', 'Zeven keer', 'Tien keer'], correct: 2 },
      { v: 'Wat was het beroep van Roy Sullivan?', opties: ['Piloot', 'Boswachter', 'Elektricien', 'Postbode'], correct: 1 },
      { v: 'Welke bijnaam kreeg Sullivan?', opties: ['De donderman', 'De menselijke bliksemafleider', 'De vonkenvanger', 'Mister Storm'], correct: 1 },
    ],
  },

  'Octopussen hebben drie harten': {
    id: 'r-octopus', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    vragen: [
      { v: 'Hoeveel harten heeft een octopus?', opties: ['Eén', 'Twee', 'Drie', 'Acht'], correct: 2 },
      { v: 'Waarom is het bloed van een octopus blauw?', opties: ['Het bevat koper in plaats van ijzer', 'Door het koude water', 'Door blauwe algen', 'Het is een camouflagetruc'], correct: 0 },
      { v: 'Wat verzamelen octopussen soms als schild?', opties: ['Stenen', 'Kokosnootschalen', 'Schelpen van krabben', 'Zeewier'], correct: 1 },
    ],
  },

  'Waarom we gapen is een mysterie': {
    id: 'r-gapen', doelgroep: 'teens', niveau: 3, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Wat stelt de nieuwere theorie over gapen?', opties: ['Het brengt zuurstof naar de longen', 'Het koelt de hersenen af', 'Het traint de kaakspieren', 'Het maakt je wakker'], correct: 1 },
      { v: 'Met welke eigenschap lijkt besmettelijk gapen samen te hangen?', opties: ['Intelligentie', 'Empathie', 'Lengte', 'Leeftijd'], correct: 1 },
      { v: 'Hoe reageren psychopaten op het gapen van anderen?', opties: ['Ze gapen extra veel', 'Ze reageren er nauwelijks op', 'Ze moeten lachen', 'Ze vallen in slaap'], correct: 1 },
    ],
  },

  'De kortste oorlog ooit': {
    id: 'r-oorlog', doelgroep: 'teens', niveau: 3, onderwerp: 'geschiedenis',
    vragen: [
      { v: 'Hoe lang duurde de kortste oorlog in de geschiedenis?', opties: ['38 minuten', '38 uur', '38 dagen', '3,8 dagen'], correct: 0 },
      { v: 'Tussen welke partijen werd deze oorlog uitgevochten?', opties: ['Engeland en Frankrijk', 'Het Britse Rijk en Zanzibar', 'Duitsland en Zanzibar', 'Portugal en Kenia'], correct: 1 },
      { v: 'Wat was de aanleiding voor de oorlog?', opties: ['Een handelsconflict', 'De sultan greep de troon zonder Britse goedkeuring', 'Een gestolen schip', 'Een grensgeschil'], correct: 1 },
    ],
  },

  'Je darmen hebben een eigen brein': {
    id: 'r-darmbrein', doelgroep: 'volwassen', niveau: 4, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Hoe heet het zenuwstelsel in je darmen?', opties: ['Het centrale zenuwstelsel', 'Het enterisch zenuwstelsel', 'Het perifere zenuwstelsel', 'Het buikbrein-systeem'], correct: 1 },
      { v: 'Hoeveel procent van alle serotonine wordt in je darmen gemaakt?', opties: ['5 procent', '50 procent', '95 procent', '20 procent'], correct: 2 },
      { v: 'In welke richting gaat de meeste communicatie?', opties: ['Van brein naar buik', 'Van buik naar brein', 'Gelijk verdeeld', 'Er is geen communicatie'], correct: 1 },
    ],
  },

  'De pizza die de wereld veroverde': {
    id: 'r-pizza', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'eten',
    vragen: [
      { v: 'Voor wie maakte bakker Raffaele Esposito de beroemde pizza in 1889?', opties: ['De paus', 'Koningin Margherita', 'De burgemeester van Napels', 'Zijn moeder'], correct: 1 },
      { v: 'Welke kleuren had de pizza Margherita en waarom?', opties: ['Rood-wit-groen, de Italiaanse vlag', 'Geel-rood, de kleuren van Napels', 'Wit-blauw, voor de zee', 'Willekeurige kleuren'], correct: 0 },
      { v: 'Hoe kwam pizza na de Tweede Wereldoorlog naar Amerika?', opties: ['Via Italiaanse restaurants in Parijs', 'Amerikaanse soldaten namen de liefde voor pizza mee terug', 'Per schip vol pizza\'s', 'Via een kookboek'], correct: 1 },
    ],
  },

  'Wombats poepen kubussen': {
    id: 'r-wombat', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    vragen: [
      { v: 'Welke vorm hebben de uitwerpselen van een wombat?', opties: ['Rond', 'Kubusvormig', 'Driehoekig', 'Plat'], correct: 1 },
      { v: 'Waarom is die vorm handig voor wombats?', opties: ['Het is makkelijker', 'Kubussen rollen niet weg van rotsen', 'Het gaat sneller', 'Roofdieren schrikken ervan'], correct: 1 },
      { v: 'Hoe beschermt een wombat zijn hol?', opties: ['Met stenen', 'Met zijn dikke, harde achterwerk als deur', 'Met takken', 'Door te bijten'], correct: 1 },
    ],
  },

  'Het Placebo-effect werkt altijd': {
    id: 'r-placebo', doelgroep: 'volwassen', niveau: 4, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Wat deden Harvard-onderzoekers met de placebo-pillen?', opties: ['Ze verstopten ze in eten', 'Ze vertelden eerlijk dat het placebo\'s waren', 'Ze maakten ze extra groot', 'Ze gaven ze alleen \'s nachts'], correct: 1 },
      { v: 'Welke pillen werken beter als kalmeringsmiddel?', opties: ['Rode', 'Blauwe', 'Gele', 'Groene'], correct: 1 },
      { v: 'Wat gebeurde er bij nep-operaties?', opties: ['Patiënten werden zieker', 'Patiënten rapporteerden soms evenveel verbetering als bij echte operaties', 'Niemand merkte iets', 'De operaties mislukten'], correct: 1 },
    ],
  },

  'Bananen zijn radioactief': {
    id: 'r-bananen', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Waarom zijn bananen een klein beetje radioactief?', opties: ['Door bestrijdingsmiddelen', 'Door het kalium dat ze bevatten', 'Door de gele schil', 'Door de zon'], correct: 1 },
      { v: 'Hoeveel bananen zou je tegelijk moeten eten voor een gevaarlijke dosis?', opties: ['Honderd', 'Duizend', 'Tien miljoen', 'Vijftig'], correct: 2 },
      { v: 'Welke noten zijn nog radioactiever dan bananen?', opties: ['Pinda\'s', 'Paranoten', 'Walnoten', 'Cashewnoten'], correct: 1 },
    ],
  },

  'Kleopatra en de piramides': {
    id: 'r-kleopatra', doelgroep: 'teens', niveau: 3, onderwerp: 'geschiedenis',
    vragen: [
      { v: 'Waar leefde Kleopatra dichter bij in de tijd?', opties: ['De bouw van de piramides', 'De lancering van de iPhone', 'De dinosaurussen', 'De eerste mens'], correct: 1 },
      { v: 'Hoe lang duurde de Egyptische beschaving?', opties: ['Driehonderd jaar', 'Duizend jaar', 'Meer dan drieduizend jaar', 'Honderd jaar'], correct: 2 },
      { v: 'Wat leefde er nog toen de piramides al duizend jaar oud waren?', opties: ['Dinosaurussen', 'Mammoeten', 'Sabeltandtijgers', 'Dodo\'s'], correct: 1 },
    ],
  },

  'Planten praten met elkaar': {
    id: 'r-planten', doelgroep: 'teens', niveau: 3, onderwerp: 'natuur',
    vragen: [
      { v: 'Hoe waarschuwen planten hun buren voor insecten?', opties: ['Met geluid', 'Met chemische stoffen in de lucht', 'Met trillingen', 'Met kleuren'], correct: 1 },
      { v: 'Wat doet een tomatenplant die door rupsen wordt aangevallen?', opties: ['Hij laat zijn bladeren vallen', 'Hij lokt sluipwespen die de rupsen aanvallen', 'Hij wordt giftig', 'Hij groeit sneller'], correct: 1 },
      { v: 'Wat delen moederbomen via het ondergrondse netwerk?', opties: ['Water alleen', 'Suikers met hun zaailingen', 'Zaden', 'Bladeren'], correct: 1 },
    ],
  },

  'Het mysterie van de linkshandigen': {
    id: 'r-linkshandig', doelgroep: 'teens', niveau: 3, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Hoeveel procent van de mensen is linkshandig?', opties: ['Ongeveer tien procent', 'Ongeveer dertig procent', 'Ongeveer vijftig procent', 'Ongeveer één procent'], correct: 0 },
      { v: 'Waar komt het woord "sinister" vandaan?', opties: ['Van het Latijnse woord voor links', 'Van een Griekse god', 'Van een filmtitel', 'Van het woord sinaasappel'], correct: 0 },
      { v: 'Waarom zijn linkshandigen goed in sporten als boksen en tennis?', opties: ['Ze zijn sterker', 'Tegenstanders zijn niet gewend aan hun hoeken', 'Ze trainen harder', 'Ze zien beter'], correct: 1 },
    ],
  },

  'Hoe katten de wereld veroverden': {
    id: 'r-katten', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    vragen: [
      { v: 'Hoe raakten katten ongeveer tienduizend jaar geleden aan de mens gewend?', opties: ['Mensen vingen ze', 'Ze kwamen af op muizen bij graanschuren', 'Ze werden gefokt als jagers', 'Ze zwommen naar dorpen'], correct: 1 },
      { v: 'Wat deden Egyptenaren als hun huiskat stierf?', opties: ['Ze verhuisden', 'Ze schoren hun wenkbrauwen af uit rouw', 'Ze namen meteen een nieuwe kat', 'Ze bouwden een piramide'], correct: 1 },
      { v: 'Hoe verschillen huiskatten genetisch van hun wilde voorouders?', opties: ['Enorm veel', 'Nauwelijks', 'Volledig', 'Alleen hun kleur is anders'], correct: 1 },
    ],
  },

  'De vreemdste phobieen': {
    id: 'r-fobie', doelgroep: 'teens', niveau: 3, onderwerp: 'psychologie',
    vragen: [
      { v: 'Wat is hippopotomonstrosesquippedaliofobie?', opties: ['Angst voor nijlpaarden', 'Angst voor lange woorden', 'Angst voor monsters', 'Angst voor water'], correct: 1 },
      { v: 'Wat is arachibutyrofobie?', opties: ['Angst voor spinnen', 'Angst dat pindakaas aan je gehemelte plakt', 'Angst voor boter', 'Angst voor vogels'], correct: 1 },
      { v: 'Hoe ontstaan fobieën meestal?', opties: ['Ze zijn erfelijk', 'Door een traumatische ervaring of aangeleerd gedrag', 'Door te weinig slaap', 'Door verkeerde voeding'], correct: 1 },
    ],
  },

  'Ruimtepakken kosten miljoenen': {
    id: 'r-ruimtepak', doelgroep: 'teens', niveau: 3, onderwerp: 'techniek',
    vragen: [
      { v: 'Hoeveel kost een NASA-ruimtepak ongeveer?', opties: ['Twaalfduizend dollar', 'Twaalf miljoen dollar', 'Een miljard dollar', 'Honderdduizend dollar'], correct: 1 },
      { v: 'Wat is het lastigste onderdeel van een ruimtepak?', opties: ['De helm', 'De handschoenen', 'De schoenen', 'De rits'], correct: 1 },
      { v: 'Tegen welke temperaturen moet een ruimtepak beschermen?', opties: ['Van 0 tot 40 graden', 'Van min 150 tot plus 120 graden', 'Van min 10 tot plus 50 graden', 'Alleen tegen kou'], correct: 1 },
    ],
  },

  'Waarom flamingo\'s roze zijn': {
    id: 'r-flamingo', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    vragen: [
      { v: 'Welke kleur hebben flamingo\'s bij hun geboorte?', opties: ['Roze', 'Grijs', 'Wit', 'Zwart'], correct: 1 },
      { v: 'Waar komt de roze kleur vandaan?', opties: ['Van de zon', 'Van hun voedsel', 'Van het water', 'Ze verven zichzelf'], correct: 1 },
      { v: 'Wat is het gewricht dat wij de "knie" van een flamingo noemen eigenlijk?', opties: ['De heup', 'De enkel', 'De teen', 'Het is echt de knie'], correct: 1 },
    ],
  },

  'Het internet weegt iets': {
    id: 'r-internet', doelgroep: 'teens', niveau: 4, onderwerp: 'techniek',
    vragen: [
      { v: 'Hoeveel weegt alle data op het internet samen ongeveer?', opties: ['Vijftig kilo', 'Vijftig gram — het gewicht van een aardbei', 'Vijf ton', 'Helemaal niets'], correct: 1 },
      { v: 'Hoe reist meer dan 95 procent van het internationale internetverkeer?', opties: ['Via satellieten', 'Via onderzeese kabels', 'Via zendmasten', 'Via vliegtuigen'], correct: 1 },
      { v: 'Waarom kregen de kabels van Google een speciale coating?', opties: ['Tegen roest', 'Tegen haaienbeten', 'Tegen de kou', 'Voor de snelheid'], correct: 1 },
    ],
  },

  'De uitvinding van post-its': {
    id: 'r-postits', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'techniek',
    vragen: [
      { v: 'Wat probeerde Spencer Silver eigenlijk te maken?', opties: ['Een notitieboekje', 'Een supersterke lijm', 'Gekleurd papier', 'Een boekenlegger'], correct: 1 },
      { v: 'Welk probleem had zijn collega Art Fry?', opties: ['Zijn pen lekte', 'Zijn boekenleggers vielen uit zijn gezangboek', 'Hij verloor zijn notities', 'Zijn bureau was te klein'], correct: 1 },
      { v: 'Wanneer werd de Post-it eindelijk een succes?', opties: ['Meteen bij de lancering', 'Toen 3M gratis samples uitdeelde', 'Pas na vijftig jaar', 'Toen de prijs omlaag ging'], correct: 1 },
    ],
  },

  'Koala\'s en hun vingerafdrukken': {
    id: 'r-koala', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'dieren',
    vragen: [
      { v: 'Waarom zijn de vingerafdrukken van koala\'s bijzonder?', opties: ['Ze zijn vierkant', 'Ze lijken sprekend op die van mensen', 'Ze veranderen elke dag', 'Ze hebben er geen'], correct: 1 },
      { v: 'Hoeveel uur per dag slaapt een koala?', opties: ['Acht uur', 'Twaalf uur', 'Twintig uur', 'Vier uur'], correct: 2 },
      { v: 'Wat is het enige voedsel van koala\'s?', opties: ['Bamboe', 'Eucalyptus', 'Gras', 'Fruit'], correct: 1 },
    ],
  },

  'Geluid kan water laten zweven': {
    id: 'r-levitatie', doelgroep: 'teens', niveau: 4, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Hoe heet het zweven van voorwerpen door geluid?', opties: ['Magnetische levitatie', 'Akoestische levitatie', 'Sonische zweving', 'Echolocatie'], correct: 1 },
      { v: 'Wat ontstaat er tussen twee luidsprekers met dezelfde frequentie?', opties: ['Stilte', 'Staande golven', 'Elektriciteit', 'Warmte'], correct: 1 },
      { v: 'Waarvoor gebruikt de farmaceutische industrie deze techniek?', opties: ['Om pillen te vervoeren', 'Om reacties te bestuderen zonder dat stoffen een container raken', 'Om medicijnen te verwarmen', 'Om flesjes te vullen'], correct: 1 },
    ],
  },

  'Schaakcomputers en pizza': {
    id: 'r-deepblue', doelgroep: 'teens', niveau: 3, onderwerp: 'techniek',
    vragen: [
      { v: 'Wie versloeg schaakcomputer Deep Blue in 1997?', opties: ['Magnus Carlsen', 'Garry Kasparov', 'Bobby Fischer', 'Een andere computer'], correct: 1 },
      { v: 'Hoeveel schaakposities kon Deep Blue per seconde berekenen?', opties: ['Tweehonderd', 'Twee miljoen', 'Tweehonderd miljoen', 'Twee miljard'], correct: 2 },
      { v: 'Wat bleek de "geniale" vreemde zet van Deep Blue echt te zijn?', opties: ['Een geheime strategie', 'Een softwarefout', 'Vals spel', 'Een menselijke tip'], correct: 1 },
    ],
  },

  'Waarom de hemel blauw is': {
    id: 'r-hemel', doelgroep: 'teens', niveau: 3, onderwerp: 'wetenschap',
    vragen: [
      { v: 'Hoe heet het natuurkundige verschijnsel dat de hemel blauw maakt?', opties: ['Rayleigh-verstrooiing', 'Refractie', 'Het Doppler-effect', 'Absorptie'], correct: 0 },
      { v: 'Waarom is de zonsondergang rood?', opties: ['De zon koelt af', 'Het blauwe licht is al verstrooid; alleen rood komt nog door', 'De lucht wordt warmer', 'Er is meer stof'], correct: 1 },
      { v: 'Welke kleur heeft de hemel op de maan overdag?', opties: ['Blauw', 'Pikzwart', 'Rood', 'Wit'], correct: 1 },
    ],
  },

  'De vrouw die van een vliegtuig viel': {
    id: 'r-vesna', doelgroep: 'teens', niveau: 3, onderwerp: 'geschiedenis',
    vragen: [
      { v: 'Van welke hoogte viel Vesna Vulovic?', opties: ['Duizend meter', 'Tienduizend meter', 'Honderd meter', 'Vijfhonderd meter'], correct: 1 },
      { v: 'Wat hielp haar de val te overleven?', opties: ['Een parachute', 'Een stuk romp, diepe sneeuw en haar lage bloeddruk', 'Ze landde in een meer', 'Een reddingsteam ving haar op'], correct: 1 },
      { v: 'Wat deed Vesna na haar herstel?', opties: ['Ze werd piloot', 'Ze ging weer werken bij de luchtvaartmaatschappij, aan een balie', 'Ze verhuisde naar Amerika', 'Ze werd nooit meer gezien'], correct: 1 },
    ],
  },

  'Mieren en hun superkolonies': {
    id: 'r-mieren', doelgroep: 'teens', niveau: 3, onderwerp: 'dieren',
    vragen: [
      { v: 'Hoe lang is de Europese superkolonie van Argentijnse mieren?', opties: ['Zes kilometer', 'Zeshonderd kilometer', 'Zesduizend kilometer', 'Zestig kilometer'], correct: 2 },
      { v: 'Wat gebeurt er als je een mier uit Portugal bij familie in Zuid-Frankrijk zet?', opties: ['Ze wordt gedood', 'Ze wordt geaccepteerd als familie', 'Ze vlucht weg', 'Ze sticht een nieuwe kolonie'], correct: 1 },
      { v: 'Wat houden sommige mierensoorten als "vee"?', opties: ['Spinnen', 'Bladluizen', 'Rupsen', 'Kevers'], correct: 1 },
    ],
  },

  'Koffie werd ontdekt door geiten': {
    id: 'r-koffie', doelgroep: 'kids9-12', niveau: 2, onderwerp: 'eten',
    vragen: [
      { v: 'Wat merkte geitenhoeder Kaldi op aan zijn geiten?', opties: ['Ze sliepen de hele dag', 'Ze dansten wild en bleven de hele nacht wakker', 'Ze wilden niet eten', 'Ze werden ziek'], correct: 1 },
      { v: 'Waarom waren de monniken blij met het koffiedrankje?', opties: ['Het smaakte zoet', 'Ze konden wakker blijven tijdens nachtelijke gebeden', 'Het was goedkoop', 'Het maakte ze sterker'], correct: 1 },
      { v: 'Hoe noemde de kerk koffie eerst toen het naar Europa kwam?', opties: ['Het wondermiddel', 'De duivelse drank', 'Het zwarte goud', 'De monnikendrank'], correct: 1 },
    ],
  },

  // ══════════ ONDERWERP-TAGS VOOR LANGE/LEESTEST-TEKSTEN ══════════
  // (alleen onderwerp; deze teksten hebben al vragen)

  'Waarom bewegen je gezond houdt': { onderwerp: 'wetenschap' },
  'Hoe je beter kunt slapen': { onderwerp: 'wetenschap' },
  'De werking van het menselijk geheugen': { onderwerp: 'psychologie' },
  'De opkomst van kunstmatige intelligentie': { onderwerp: 'techniek' },
  'Hoe gewoonten ons leven sturen': { onderwerp: 'psychologie' },
  'De oceaan als klimaatregulator': { onderwerp: 'natuur' },
};
