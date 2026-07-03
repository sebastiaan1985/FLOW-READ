/**
 * teksten.js — SnelLees Trainer tekstbibliotheek
 *
 * GEGENEREERD door scripts/bouw-teksten.mjs — niet handmatig bewerken.
 * Nieuwe teksten toevoegen? → scripts/teksten-nieuw.mjs, daarna:
 *   node scripts/bouw-teksten.mjs
 *
 * Elke tekst: { id, titel, doelgroep, niveau, onderwerp, collectie,
 *               woorden, tekst, vragen: [{v, opties[4], correct}] }
 * doelgroep: kids6-9 | kids9-12 | teens | volwassen
 * niveau: 1 (makkelijk) t/m 5 (complex)
 * collectie: kort (RSVP/chunk/leesoefeningen) | lang (1000+ woorden) | leestest
 */

const TEKST_BIB = [
  {
    "id": "k-bubbels",
    "titel": "De uitvinding van bubbeltjesplastic",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "techniek",
    "collectie": "kort",
    "woorden": 224,
    "tekst": "In 1957 probeerden twee ingenieurs een hip behang te maken van twee plastic douchegordijnen. Ze smolten de gordijnen aan elkaar en hoopten op een trendy muurversiering. Het resultaat was echter een vel plastic vol luchtbelletjes. Als behang was het een complete mislukking. Niemand wilde bubbels op zijn muur.\n\nMaar toen kreeg iemand een briljant idee. Het materiaal was perfect om breekbare spullen te beschermen tijdens transport. Zo werd bubbeltjesplastic geboren, een van de meest geliefde verpakkingsmaterialen ter wereld.\n\nWat niemand had verwacht, was dat het knappen van de bubbeltjes zo onweerstaanbaar zou zijn. Wetenschappers hebben ontdekt dat het knappen van bubbeltjesplastic daadwerkelijk stress vermindert. Je spieren ontspannen en je hartslag daalt. Het is als een kleine meditatie met je vingers.\n\nEr is zelfs een internationale Bubbeltjesplastic Waarderingsdag op de laatste maandag van januari. Op die dag worden wereldwijd miljoenen bubbeltjes geknapt ter ere van dit geweldige materiaal.\n\nTegenwoordig zijn er apps die het geluid van knappende bubbeltjes nabootsen, maar echte liefhebbers weten dat niets de sensatie van echt bubbeltjesplastic kan evenaren. Het materiaal heeft zelfs een rol gespeeld in kunstwerken en modeontwerpen.\n\nDe oorspronkelijke uitvinders hadden nooit kunnen dromen dat hun mislukte behang zou uitgroeien tot een wereldwijd fenomeen. Soms is de beste uitvinding een gelukkig ongeluk. En soms is het mooiste cadeau niet wat er in de doos zit, maar het verpakkingsmateriaal eromheen.",
    "vragen": [
      {
        "v": "Wat probeerden de twee ingenieurs eerst te maken?",
        "opties": [
          "Verpakkingsmateriaal",
          "Hip behang",
          "Een douchegordijn",
          "Een regenjas"
        ],
        "correct": 1
      },
      {
        "v": "Waar bleek bubbeltjesplastic perfect voor te zijn?",
        "opties": [
          "Muurversiering",
          "Kleding",
          "Breekbare spullen beschermen",
          "Zwembanden"
        ],
        "correct": 2
      },
      {
        "v": "Wat gebeurt er volgens wetenschappers als je bubbeltjes knapt?",
        "opties": [
          "Je wordt gestrest",
          "Je stress vermindert",
          "Je hartslag stijgt",
          "Je wordt moe"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-octopus",
    "titel": "Geheimen van de octopus",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 234,
    "tekst": "De octopus is misschien wel het meest buitenaardse dier op onze planeet. Met drie harten, blauw bloed en acht armen vol zuignappen is dit dier een biologisch wonder. Maar het wordt nog veel vreemder.\n\nElke arm van een octopus heeft een eigen minibrein. Dat betekent dat de armen zelfstandig kunnen denken en handelen, zelfs als ze van het lichaam zijn gescheiden. Een afgehakte arm kan nog uren blijven bewegen en grijpen. Stel je voor dat je hand zelfstandig door de koelkast zou zoeken terwijl jij televisie kijkt.\n\nOctopussen kunnen ook van kleur en textuur veranderen in minder dan een seconde. Ze gebruiken speciale cellen in hun huid die chromatoforen heten. Hiermee kunnen ze koraal, zeewier of zelfs de oceaanbodem perfect nadoen. Het is alsof ze een ingebouwde onzichtbaarheidsmantel hebben.\n\nNog indrukwekkender is hun intelligentie. Octopussen kunnen puzzels oplossen, deksels van potten draaien en zelfs uit zwaar beveiligde aquariums ontsnappen. In een Nieuw-Zeelands aquarium ontsnapte een octopus genaamd Inky uit zijn tank, gleed over de vloer en verdween via een afvoerpijp naar de oceaan.\n\nSommige wetenschappers denken dat als octopussen langer zouden leven dan hun gebruikelijke twee tot drie jaar, ze misschien een beschaving zouden kunnen ontwikkelen. Ze zijn slim genoeg om gereedschap te gebruiken en met elkaar te communiceren via kleurpatronen.\n\nDe volgende keer dat je een octopus ziet, onthoud dan dat je kijkt naar een van de slimste en vreemdste wezens op aarde.",
    "vragen": [
      {
        "v": "Wat is er bijzonder aan de armen van een octopus?",
        "opties": [
          "Ze hebben botten",
          "Elke arm heeft een eigen minibrein",
          "Ze kunnen niet bewegen",
          "Ze zijn altijd blauw"
        ],
        "correct": 1
      },
      {
        "v": "Hoe heten de speciale cellen waarmee een octopus van kleur verandert?",
        "opties": [
          "Neuronen",
          "Chromatoforen",
          "Melanocyten",
          "Fotoreceptoren"
        ],
        "correct": 1
      },
      {
        "v": "Wat deed de octopus Inky in Nieuw-Zeeland?",
        "opties": [
          "Hij loste een puzzel op",
          "Hij ontsnapte via een afvoerpijp naar zee",
          "Hij leerde kleuren tellen",
          "Hij ving een schildpad"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-muziek",
    "titel": "Waarom muziek kippenvel geeft",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 241,
    "tekst": "Je kent het gevoel vast. Een bepaald nummer komt op en plotseling krijg je kippenvel. Je haren gaan overeind staan en je voelt een rilling over je rug. Maar waarom doet muziek dit met ons lichaam?\n\nWetenschappers hebben ontdekt dat muzikale kippenvel ontstaat wanneer je hersenen een flinke dosis dopamine vrijgeven. Dat is dezelfde stof die vrijkomt bij lekker eten of verliefdheid. Je brein behandelt een mooi muziekstuk letterlijk als een beloning.\n\nHet gebeurt vooral bij onverwachte wendingen in de muziek. Wanneer een melodie een verrassende kant opgaat of wanneer een stil moment plotseling overgaat in een krachtig refrein, raakt je brein opgewonden. Het is de verrassing die de magie veroorzaakt.\n\nNiet iedereen ervaart muzikale kippenvel even sterk. Ongeveer twee derde van alle mensen kent het fenomeen. Mensen die het ervaren, blijken vaak een sterkere verbinding te hebben tussen de delen van hun hersenen die geluid en emotie verwerken.\n\nMuziek kan ook herinneringen oproepen met een kracht die bijna niets anders kan evenaren. Een liedje uit je jeugd kan je in een fractie van een seconde terugvoeren naar een specifiek moment. Dit komt doordat muziek wordt opgeslagen in dezelfde hersengebieden als emotionele herinneringen.\n\nTherapeuten gebruiken dit effect steeds vaker bij mensen met dementie. Patienten die nauwelijks meer communiceren, kunnen soms plotseling meezingen met liedjes uit hun verleden. De muziek opent een deur die de ziekte had gesloten.\n\nMuziek is geen luxe. Het is diep verweven met wie we zijn als mens.",
    "vragen": [
      {
        "v": "Welke stof geven je hersenen af bij muzikale kippenvel?",
        "opties": [
          "Adrenaline",
          "Dopamine",
          "Insuline",
          "Melatonine"
        ],
        "correct": 1
      },
      {
        "v": "Wanneer ontstaat muzikale kippenvel vooral?",
        "opties": [
          "Bij harde muziek",
          "Bij onverwachte wendingen in de muziek",
          "Bij langzame muziek",
          "Bij muziek zonder tekst"
        ],
        "correct": 1
      },
      {
        "v": "Hoe wordt muziek ingezet bij mensen met dementie?",
        "opties": [
          "Om ze te laten slapen",
          "Liedjes uit hun verleden openen herinneringen",
          "Om ze te leren lezen",
          "Als vervanging van medicijnen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-ruimtesprong",
    "titel": "De man die van de ruimte sprong",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 239,
    "tekst": "Op 14 oktober 2012 stond Felix Baumgartner op de rand van een capsule, bijna 39 kilometer boven de aarde. Onder hem strekte zich de blauwe planeet uit. Boven hem was de zwarte leegte van de ruimte. En toen sprong hij.\n\nDe voorbereiding had vijf jaar geduurd. Het team moest een speciaal drukpak ontwerpen dat Felix in leven zou houden in de ijskoude, zuurstofarme stratosfeer. Bij de minste scheur in het pak zou zijn bloed letterlijk gaan koken door de lage druk.\n\nTijdens de vrije val bereikte Felix een snelheid van 1357 kilometer per uur. Hij doorbrak de geluidsbarriere als eerste mens zonder voertuig. Het geluid van een sonische knal op die hoogte was er niet, want er was bijna geen lucht om het geluid te dragen.\n\nHet gevaarlijkste moment kwam toen Felix begon te tollen. Een ongecontroleerde spin op die snelheid kan dodelijk zijn. Je verliest het bewustzijn en je lichaam kan de krachten niet aan. Maar met jarenlange training wist Felix zichzelf te stabiliseren.\n\nNa vier minuten en negentien seconden vrije val opende hij zijn parachute en landde veilig in de woestijn van New Mexico. Acht miljoen mensen keken live mee via YouTube, een record op dat moment.\n\nFelix beschreef het moment voor de sprong als het meest nederige van zijn leven. Zwevend aan de rand van de ruimte besefte hij hoe klein en kwetsbaar de mens is. Maar tegelijk bewees hij hoe grenzeloos onze moed kan zijn.",
    "vragen": [
      {
        "v": "Van welke hoogte sprong Felix Baumgartner?",
        "opties": [
          "9 kilometer",
          "Bijna 39 kilometer",
          "100 kilometer",
          "5 kilometer"
        ],
        "correct": 1
      },
      {
        "v": "Welk record brak Felix tijdens zijn val?",
        "opties": [
          "Langste vlucht",
          "Hij doorbrak de geluidsbarrière zonder voertuig",
          "Hoogste parachutesprong in zee",
          "Snelste raket"
        ],
        "correct": 1
      },
      {
        "v": "Wat was het gevaarlijkste moment tijdens de sprong?",
        "opties": [
          "De landing",
          "Toen hij begon te tollen",
          "Het openen van de deur",
          "De opstijging"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-breintruc",
    "titel": "Hoe je brein je voor de gek houdt",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 262,
    "tekst": "Je hersenen liegen constant tegen je. Niet uit kwade wil, maar omdat ze je leven makkelijker willen maken. Elke seconde komen er miljoenen prikkels binnen via je zintuigen. Als je brein al die informatie eerlijk zou verwerken, zou je gek worden. Dus neemt het shortcuts.\n\nEen beroemd voorbeeld is de blinde vlek. Midden in je gezichtsveld zit een gat waar je helemaal niets ziet. Daar zit je oogzenuw en er zijn geen lichtgevoelige cellen. Maar je merkt het nooit, want je brein vult het gat in met een beste gok van wat er zou moeten zijn.\n\nDan is er veranderingsblindheid. Je kunt naar een foto kijken waarin grote details veranderen zonder dat je het ziet. Onderzoekers lieten mensen een gesprek voeren met een onbekende. Halverwege werd de persoon stiekem verwisseld voor iemand anders. De helft van de proefpersonen merkte het niet eens op.\n\nJe geheugen is al net zo onbetrouwbaar. Elke keer dat je een herinnering ophaalt, wordt deze een beetje aangepast. Na verloop van tijd kan een herinnering compleet anders zijn dan wat er werkelijk gebeurde. Je brein mixt details van verschillende gebeurtenissen tot een nieuw verhaal dat logisch voelt.\n\nOok je tijdsgevoel is verre van nauwkeurig. Wanneer je iets nieuws en opwindends meemaakt, lijkt de tijd langzaam te gaan. Bij routine vliegt de tijd voorbij. Dit verklaart waarom vakanties lang lijken te duren terwijl werkweken vervliegen.\n\nHet goede nieuws is dat deze trucs ons helpen te functioneren in een overweldigende wereld. Maar het is goed om te weten dat wat je waarneemt slechts een bewerkte versie van de werkelijkheid is.",
    "vragen": [
      {
        "v": "Wat is de blinde vlek?",
        "opties": [
          "Een plek waar je extra scherp ziet",
          "Een gat in je gezichtsveld dat je brein opvult",
          "Een oogziekte",
          "Een deel van je geheugen"
        ],
        "correct": 1
      },
      {
        "v": "Wat gebeurt er elke keer als je een herinnering ophaalt?",
        "opties": [
          "Hij wordt sterker en preciezer",
          "Hij wordt een beetje aangepast",
          "Hij verdwijnt",
          "Er verandert niets"
        ],
        "correct": 1
      },
      {
        "v": "Wanneer lijkt de tijd langzaam te gaan?",
        "opties": [
          "Bij routine",
          "Bij iets nieuws en opwindends",
          "Tijdens je slaap",
          "Als je tv kijkt"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-bermuda",
    "titel": "Het mysterie van de Bermudadriehoek",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "geschiedenis",
    "collectie": "kort",
    "woorden": 245,
    "tekst": "Tussen Miami, Bermuda en Puerto Rico ligt een stuk oceaan waar schepen en vliegtuigen op mysterieuze wijze zouden verdwijnen. De Bermudadriehoek heeft al decennialang de fantasie geprikkeld van miljoenen mensen. Maar wat is er echt aan de hand?\n\nHet beroemdste incident is Vlucht 19, een groep van vijf torpedobommenwerpers die in 1945 verdween tijdens een oefenvlucht. De piloten meldden via de radio dat hun kompassen niet werkten en dat ze de weg kwijt waren. Daarna werd het stil. Zelfs het reddingsvliegtuig dat werd gestuurd, verdween spoorloos.\n\nDoor de jaren heen zijn er tientallen theorien bedacht. Van buitenaardse ontvoering tot tijdportalen en onderwater piramides. Sommigen beweerden dat de verloren stad Atlantis op de zeebodem lag en schepen naar beneden trok met mysterieuze energie.\n\nDe werkelijkheid is waarschijnlijk minder spectaculair maar niet minder interessant. De Bermudadriehoek is een van de drukst bevaren zeegebieden ter wereld. Statistisch gezien verdwijnen er niet meer schepen dan elders. We horen er alleen meer over vanwege de mysterieuze reputatie.\n\nWel zijn er echte gevaren. Het gebied is berucht om plotselinge stormen die binnen minuten kunnen opkomen. Er zijn ook methaangasbelletjes op de zeebodem gevonden die zo groot zijn dat ze het drijfvermogen van een schip teniet kunnen doen. Een schip boven zo'n belletje zakt als een baksteen.\n\nDe Bermudadriehoek leert ons iets belangrijks over de menselijke geest. We houden van mysteries en zoeken naar patronen, zelfs waar die er niet zijn. Maar soms is de oceaan gewoon de oceaan, wild en onvoorspelbaar.",
    "vragen": [
      {
        "v": "Wat is het beroemdste incident in de Bermudadriehoek?",
        "opties": [
          "De Titanic",
          "Vlucht 19, vijf verdwenen bommenwerpers",
          "Een verdwenen cruiseschip",
          "De ontdekking van Atlantis"
        ],
        "correct": 1
      },
      {
        "v": "Wat zegt de statistiek over verdwijningen in het gebied?",
        "opties": [
          "Er verdwijnen veel meer schepen dan elders",
          "Er verdwijnen niet meer schepen dan elders",
          "Alleen vliegtuigen verdwijnen er",
          "Niemand heeft het onderzocht"
        ],
        "correct": 1
      },
      {
        "v": "Welk echt natuurverschijnsel kan schepen daar laten zinken?",
        "opties": [
          "Tijdportalen",
          "Methaangasbellen op de zeebodem",
          "Magnetische piramides",
          "Zeemonsters"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-koken",
    "titel": "Koken is eigenlijk scheikunde",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "eten",
    "collectie": "kort",
    "woorden": 250,
    "tekst": "Wanneer je een biefstuk bakt, voer je eigenlijk een complexe chemische reactie uit die de Maillardreactie heet. Bij temperaturen boven 140 graden reageren aminozuren met suikers en ontstaan er honderden nieuwe smaakstoffen. Dat bruine korstje is pure scheikunde.\n\nEieren zijn een ander chemisch wonder. Een rauw ei is vloeibaar omdat de eiwitten opgerold zijn als bolletjes. Door verhitting ontrollen ze zich en verbinden ze met elkaar. Zo wordt een vloeibaar ei vast. En je kunt het niet terugdraaien, want de structuur is permanent veranderd.\n\nUien laten je huilen door een ingenieus verdedigingsmechanisme. Wanneer je een ui snijdt, breken cellen open en komt er een enzym vrij dat zwavelhoudende verbindingen omzet in een gas. Dit gas reageert met het vocht in je ogen tot een mild zwavelzuur. Je ogen produceren tranen om zich te beschermen.\n\nDe truc met bakpoeder is ook fascinerend. Het bevat een base en een zuur die pas reageren wanneer ze nat en warm worden. Dan produceren ze kooldioxide, de belletjes die je cake luchtig maken. Zonder deze scheikundige reactie zou elke cake een platte pannenkoek zijn.\n\nZelfs het zouten van pasta water is wetenschap. Zout verhoogt het kookpunt van water met een fractie van een graad. Dat is verwaarloosbaar. De echte reden is smaak. Pasta neemt het zoute water op tijdens het koken en wordt daardoor van binnen gekruid.\n\nKaramelliseren is het afbreken van suikermoleculen door hitte. Bij elke temperatuurstijging ontstaan andere smaken, van boterzacht tot rokerig bitter. Een meesterbakker is eigenlijk een scheikundige met een koksmuts.",
    "vragen": [
      {
        "v": "Hoe heet de reactie die een biefstuk een bruin korstje geeft?",
        "opties": [
          "De Maillardreactie",
          "De karamelreactie",
          "Fermentatie",
          "Oxidatie"
        ],
        "correct": 0
      },
      {
        "v": "Waarom laat een ui je huilen?",
        "opties": [
          "Door het zout in de ui",
          "Een gas vormt mild zwavelzuur in je ogen",
          "Door de scherpe geur",
          "Door bacteriën"
        ],
        "correct": 1
      },
      {
        "v": "Wat doet bakpoeder in een cake?",
        "opties": [
          "Het maakt de cake zoeter",
          "Het produceert kooldioxide-belletjes",
          "Het kleurt de cake bruin",
          "Het houdt de cake vochtig"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-superdieren",
    "titel": "Dieren met superkrachten",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 238,
    "tekst": "Als superhelden echt zouden bestaan, zouden ze jaloers zijn op sommige dieren. De natuur heeft wezens voortgebracht met vermogens die science fiction doen verbleken.\n\nDe pistoelkreeft kan zijn schaar zo snel dichtklappen dat er een luchtbel ontstaat die even heet is als de zon. De knal is een van de hardste geluiden in de oceaan en verdooft zijn prooi onmiddellijk. Het is als een onderwaterpistool zonder kogels.\n\nDe tardigrade, ook wel waterbeertje genoemd, overleeft vrijwel alles. Kokend water, bevriezing, straling, de vacuumruimte, het maakt deze microscopisch kleine wezens niets uit. Ze kunnen hun lichaam uitdrogen tot een soort droog poeder en na jaren weer tot leven komen met een druppel water.\n\nDe mantisgarnaal heeft de krachtigste vuist van het dierenrijk. Hij slaat met de snelheid van een kogel en kan het glas van een aquarium breken. Bovendien ziet hij zestien kleuren waar wij er maar drie zien. Hij kan ultraviolet en infrarood licht waarnemen.\n\nDe Turritopsis dohrnii, een soort kwal, is biologisch onsterfelijk. Wanneer hij oud of ziek wordt, kan hij zichzelf terugveranderen in een jonge kwal. Het is alsof een vlinder weer een rups kan worden. Wetenschappers bestuderen dit wezen in de hoop het geheim van veroudering te kraken.\n\nDe gewone huiskat landt bijna altijd op zijn poten dankzij een ingebouwde draaireflex. In een fractie van een seconde draait een vallende kat zijn lichaam in de juiste positie. De natuur is de beste uitvinder die er bestaat.",
    "vragen": [
      {
        "v": "Wat kan de pistoolkreeft met zijn schaar?",
        "opties": [
          "Glas doorknippen",
          "Een luchtbel maken zo heet als de zon",
          "Onder water vuur maken",
          "Stenen vermalen"
        ],
        "correct": 1
      },
      {
        "v": "Wat overleeft het waterbeertje (tardigrade) allemaal?",
        "opties": [
          "Alleen kou",
          "Alleen hitte",
          "Kokend water, bevriezing, straling én de ruimte",
          "Alleen droogte"
        ],
        "correct": 2
      },
      {
        "v": "Welk dier is biologisch onsterfelijk?",
        "opties": [
          "De mantisgarnaal",
          "De kwal Turritopsis dohrnii",
          "De huiskat",
          "De pistoolkreeft"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-voorspellingen",
    "titel": "Voorspellingen die fout gingen",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "geschiedenis",
    "collectie": "kort",
    "woorden": 244,
    "tekst": "In 1943 zei Thomas Watson, voorzitter van IBM, dat er een wereldmarkt was voor misschien vijf computers. Vandaag zijn er meer dan vier miljard smartphones, elk krachtiger dan de computers die de mens naar de maan stuurden.\n\nIn 1876 beweerde een rapport van Western Union dat de telefoon te veel tekortkomingen had om serieus als communicatiemiddel beschouwd te worden. Het bedrijf weigerde het patent van Alexander Graham Bell te kopen. Die beslissing kostte hen een fortuin.\n\nLord Kelvin, een briljante natuurkundige, verklaarde in 1895 dat vliegende machines zwaarder dan lucht onmogelijk waren. Acht jaar later vlogen de gebroeders Wright hun eerste vliegtuig. Lord Kelvin had ook beweerd dat radio geen toekomst had.\n\nIn 1995 schreef astronoom Clifford Stoll een beroemd artikel waarin hij beweerde dat het internet nooit serieus zou worden. Online winkelen zou mislukken, want mensen wilden producten aanraken. Kranten op het scherm lezen zou niemand willen. Vandaag bestellen we alles online.\n\nDe filmindustrie dacht in 1927 dat geluidsfilm een kortstondige rage was. Warner Brothers kreeg te horen dat niemand acteurs wilde horen praten. Stille films waren perfect zoals ze waren.\n\nKen Olsen, oprichter van computerfabrikant DEC, zei in 1977 dat er geen reden was waarom iemand thuis een computer zou willen. Nu hebben sommige mensen meer schermen dan kamers.\n\nDeze voorspellingen leren ons een belangrijke les. Experts zijn uitstekend in begrijpen wat vandaag mogelijk is, maar hopeloos slecht in voorspellen wat morgen brengt. De toekomst heeft de gewoonte om iedereen te verrassen.",
    "vragen": [
      {
        "v": "Wat zei de voorzitter van IBM in 1943?",
        "opties": [
          "Iedereen krijgt een computer",
          "Er is een wereldmarkt voor misschien vijf computers",
          "Computers worden zakformaat",
          "IBM stopt met computers"
        ],
        "correct": 1
      },
      {
        "v": "Welk bedrijf weigerde het patent op de telefoon te kopen?",
        "opties": [
          "IBM",
          "Western Union",
          "Warner Brothers",
          "DEC"
        ],
        "correct": 1
      },
      {
        "v": "Wat leren deze mislukte voorspellingen ons?",
        "opties": [
          "Experts hebben altijd gelijk",
          "Experts zijn slecht in voorspellen wat morgen brengt",
          "Technologie verandert nooit",
          "Voorspellen is eenvoudig"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-lucide",
    "titel": "Het geheim van lucide dromen",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 263,
    "tekst": "Stel je voor dat je midden in een droom beseft dat je droomt. Plotseling kun je vliegen, door muren lopen of de zwaartekracht uitschakelen. Dit heet lucide dromen en het is wetenschappelijk bewezen.\n\nOngeveer de helft van alle mensen heeft minstens een keer een lucide droom gehad. Maar sommigen trainen zichzelf om het elke nacht te doen. De truc is je hersenen leren om kritisch te denken terwijl je slaapt.\n\nEen populaire techniek is de werkelijkheidstest. Meerdere keren per dag vraag je jezelf af of je droomt. Je probeert je vingers door je handpalm te duwen of je kijkt naar een klok. In dromen werken klokken niet goed en zien je handen er vreemd uit. Als je dit overdag genoeg doet, ga je het automatisch ook in je dromen doen.\n\nWetenschappers van de universiteit van Frankfurt ontdekten dat ze lucide dromen konden opwekken door milde elektrische stimulatie van de hersenen. De proefpersonen werden zich plotseling bewust van hun droomstaat.\n\nLucide dromen worden ook therapeutisch ingezet. Mensen met nachtmerries leren om in hun droom de controle te nemen en het enge scenario te veranderen. In plaats van te vluchten voor het monster, geven ze het een knuffel. Dit kan nachtmerries permanent verminderen.\n\nEr zijn zelfs onderzoekers die lucide dromen gebruiken om creativiteit te bevorderen. Salvador Dali gebruikte een techniek waarbij hij met een sleutel in zijn hand in slaap viel. Zodra hij begon te dromen, liet hij de sleutel vallen en het geluid maakte hem wakker zodat hij zijn droombeelden kon schilderen.\n\nJe brein is het ultieme speelterrein, als je leert het te gebruiken.",
    "vragen": [
      {
        "v": "Wat is een lucide droom?",
        "opties": [
          "Een nachtmerrie",
          "Een droom waarin je beseft dat je droomt",
          "Een droom die je vergeet",
          "Slaapwandelen"
        ],
        "correct": 1
      },
      {
        "v": "Wat is de werkelijkheidstest?",
        "opties": [
          "Een slaaponderzoek",
          "Jezelf overdag afvragen of je droomt",
          "Een geheugentest",
          "Een droomdagboek"
        ],
        "correct": 1
      },
      {
        "v": "Hoe gebruikte Salvador Dali zijn dromen?",
        "opties": [
          "Hij sliep nooit",
          "Hij viel in slaap met een sleutel in zijn hand",
          "Hij schilderde in zijn slaap",
          "Hij dronk koffie voor het slapen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-vulkanen",
    "titel": "Vulkanen die de wereld veranderden",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "natuur",
    "collectie": "kort",
    "woorden": 248,
    "tekst": "In 1815 barstte de vulkaan Tambora in Indonesie uit met een kracht die tienduizend keer groter was dan de atoombom op Hiroshima. De as en gassen die de atmosfeer bereikten, blokkeerden het zonlicht over de hele wereld. Het jaar 1816 werd bekend als het jaar zonder zomer.\n\nIn Europa en Noord-Amerika sneeuwde het in juni. Oogsten mislukten en er heerste hongersnood. Maar er was een onverwacht gevolg. Mary Shelley zat vast in een Zwitsers landhuis vanwege het verschrikkelijke weer en verveelde zich. Om de tijd te doden schreef ze een horrorverhaal. Dat verhaal werd Frankenstein.\n\nDe uitbarsting van Krakatau in 1883 produceerde het hardste geluid dat ooit door mensen is gehoord. Het was hoorbaar op bijna vijfduizend kilometer afstand. De schokgolf reisde zeven keer om de aarde. De zonsondergangen waren maandenlang bloedroood over de hele wereld.\n\nOnder het Yellowstone National Park in de Verenigde Staten ligt een supervulkaan. De magmakamer is groot genoeg om de Grand Canyon elf keer te vullen. Als deze vulkaan uitbarst, zou het een wereldwijde ramp betekenen. Maar geen paniek, de kans is extreem klein.\n\nIJsland dankt een groot deel van zijn energie aan vulkanische activiteit. Geothermische centrales gebruiken de hitte van de aarde om huizen te verwarmen en elektriciteit op te wekken. De destructieve kracht van vulkanen wordt hier omgezet in schone energie.\n\nVulkanen zijn tegelijk vernietigers en scheppers. Ze vormen nieuwe eilanden, leveren vruchtbare grond en hebben de atmosfeer van onze planeet gecreeerd. Zonder vulkanen zou de aarde een dode rots zijn.",
    "vragen": [
      {
        "v": "Wat gebeurde er na de uitbarsting van de Tambora in 1815?",
        "opties": [
          "Er kwam een hittegolf",
          "1816 werd het jaar zonder zomer",
          "De zee steeg een meter",
          "Er kwamen geen gevolgen"
        ],
        "correct": 1
      },
      {
        "v": "Welk beroemd boek ontstond tijdens dat slechte weer?",
        "opties": [
          "Dracula",
          "Frankenstein",
          "Moby Dick",
          "De Hobbit"
        ],
        "correct": 1
      },
      {
        "v": "Waarvoor gebruikt IJsland vulkanische activiteit?",
        "opties": [
          "Toerisme alleen",
          "Verwarming en elektriciteit",
          "Wegenbouw",
          "Drinkwater"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-banen",
    "titel": "De vreemdste banen ter wereld",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "maatschappij",
    "collectie": "kort",
    "woorden": 249,
    "tekst": "Ergens in de wereld wordt iemand betaald om professioneel in de rij te staan. In landen zoals Japan en Engeland huren mensen rijstaanders in voor concertkaartjes, nieuwe telefoons of populaire restaurants. Het klinkt saai, maar sommigen verdienen er een prima salaris mee.\n\nIn een waterpark in de Verenigde Staten is er een baan als glijbaantester. Je enige taak is van waterglijbanen glijden en beoordelen of ze leuk, veilig en spannend genoeg zijn. Je rapporteert over snelheid, spatfactor en plezier. Het is letterlijk een betaalde vakantie.\n\nNetflix had ooit een functie voor iemand die de hele dag series en films moest kijken. De officieuze titel was professionele bingewatcher. Deze persoon moest alles taggen en categoriseren zodat het aanbevelingssysteem beter werkte.\n\nIn Londen bestaat de baan van koninklijke zwanenteller. Elk jaar in juli worden alle zwanen op de Theems geteld voor de koning. Het is een traditie die al acht eeuwen oud is. De teller draagt een speciaal uniform en vaart in een houten boot.\n\nEr zijn ook professionele knuffelaars. Tegen betaling omhelzen zij vreemden voor therapeutische doeleinden. Onderzoek toont aan dat knuffelen oxytocine vrijmaakt, een hormoon dat stress vermindert en het welzijn verhoogt.\n\nIn sommige luxe hotels werkt een professionele beddenmaker die matrassen test en perfect opmaakt. Deze persoon reist de wereld rond en slaapt in de meest luxe bedden die er bestaan.\n\nDe les van al deze banen is simpel. Als je creatief genoeg bent, kun je van bijna alles een carriere maken. De enige grens is je fantasie.",
    "vragen": [
      {
        "v": "Wat doet een professionele rijstaander?",
        "opties": [
          "Rijst verbouwen",
          "In de rij staan voor anderen",
          "Rijst proeven",
          "Files tellen"
        ],
        "correct": 1
      },
      {
        "v": "Wat test een glijbaantester?",
        "opties": [
          "Auto's",
          "Waterglijbanen",
          "Vliegtuigen",
          "Trampolines"
        ],
        "correct": 1
      },
      {
        "v": "Hoe oud is de traditie van de koninklijke zwanenteller in Londen?",
        "opties": [
          "Tien jaar",
          "Honderd jaar",
          "Acht eeuwen",
          "Twintig eeuwen"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "k-gps",
    "titel": "Hoe GPS echt werkt",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "techniek",
    "collectie": "kort",
    "woorden": 237,
    "tekst": "Elke keer dat je Google Maps opent, maak je gebruik van Einsteins relativiteitstheorie. Dat klinkt overdreven, maar het is de waarheid.\n\nHet GPS-systeem bestaat uit ongeveer dertig satellieten die op twintigduizend kilometer hoogte om de aarde cirkelen. Elk van deze satellieten heeft een supernauwkeurige atoomklok aan boord. Je telefoon ontvangt signalen van meerdere satellieten tegelijk en berekent op basis van de aankomsttijden jouw exacte positie.\n\nMaar hier wordt het interessant. Volgens Einsteins speciale relativiteitstheorie tikken klokken die snel bewegen langzamer. De satellieten reizen met veertienduizend kilometer per uur, dus hun klokken lopen elke dag zeven microseconden achter.\n\nTegelijkertijd voorspelt de algemene relativiteitstheorie dat klokken in een zwakker zwaartekrachtveld sneller tikken. Omdat de satellieten verder van de aarde zijn, lopen hun klokken vijfenveertig microseconden per dag voor.\n\nHet netto effect is dat de satellietklokken elke dag achtendertig microseconden te snel gaan. Dat klinkt als niets, maar zonder correctie zou je GPS-positie na een dag elf kilometer afwijken. Na een week zou je navigatiesysteem je naar een ander land sturen.\n\nDe ingenieurs hebben de oplossing ingebouwd in de satellieten. De atoomklokken zijn bewust iets langzamer afgesteld zodat ze op aardeniveau precies gelijk lopen. Elke GPS-satelliet is een vliegend bewijs van Einsteins genialiteit.\n\nDus de volgende keer dat je telefoon je de snelste route naar de supermarkt laat zien, bedenk dan dat je profiteert van een theorie die honderd jaar geleden door een klerk op een Zwitsers patentkantoor werd bedacht.",
    "vragen": [
      {
        "v": "Wat heeft elke GPS-satelliet aan boord?",
        "opties": [
          "Een telescoop",
          "Een supernauwkeurige atoomklok",
          "Een camera",
          "Een radar"
        ],
        "correct": 1
      },
      {
        "v": "Welke theorie is nodig om GPS goed te laten werken?",
        "opties": [
          "De evolutietheorie",
          "Einsteins relativiteitstheorie",
          "De snaartheorie",
          "De oerknaltheorie"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel zou je GPS-positie per dag afwijken zonder correctie?",
        "opties": [
          "Elf meter",
          "Elf kilometer",
          "Honderd meter",
          "Eén kilometer"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-bijen",
    "titel": "De ongelooflijke honingbij",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 246,
    "tekst": "Een honingbij moet twee miljoen bloemen bezoeken om een halve kilo honing te maken. Dat is het levenswerk van honderden bijen die samen tachtigduizend kilometer vliegen, twee keer de wereld rond.\n\nMaar de productie van honing is slechts het begin van hun talenten. Bijen communiceren door te dansen. De beroemde waggelsdans vertelt andere bijen precies waar voedsel te vinden is. De richting van de dans wijst naar de voedselbron ten opzichte van de zon. De duur geeft de afstand aan. Het is een compleet navigatiesysteem uitgedrukt in dans.\n\nIn de bijenkorf heerst een perfecte temperatuur van vijfendertig graden, zomer en winter. Wanneer het te warm is, halen werksters water en verdampen het door met hun vleugels te wapperen. Als het te koud is, trillen ze met hun spieren om warmte te genereren. Ze hebben airconditioning uitgevonden lang voordat wij dat deden.\n\nHoning is ook een wondermiddel. Archeologen vonden potten honing in Egyptische graven die drieduizend jaar oud waren en nog steeds eetbaar. Honing bederft nooit omdat het zo weinig vocht bevat dat bacterien er niet in kunnen groeien.\n\nBijen nemen ook democratische beslissingen. Wanneer een zwerm een nieuw huis zoekt, sturen verkenners eropuit die terugkomen en dansen over hun ontdekkingen. De andere bijen vergelijken de opties en stemmen door mee te dansen met hun favoriet.\n\nZonder bijen zouden veel van onze gewassen niet bestoven worden. Een derde van ons voedsel is afhankelijk van deze kleine insecten. De honingbij is misschien wel het belangrijkste dier op aarde.",
    "vragen": [
      {
        "v": "Hoe vertellen bijen elkaar waar voedsel is?",
        "opties": [
          "Door te zoemen",
          "Met de waggeldans",
          "Door geuren achter te laten",
          "Met kleurpatronen"
        ],
        "correct": 1
      },
      {
        "v": "Waarom bederft honing nooit?",
        "opties": [
          "Door het suikergehalte alleen",
          "Het bevat te weinig vocht voor bacteriën",
          "Bijen voegen conserveermiddel toe uit bloemen",
          "Het is altijd koud in de korf"
        ],
        "correct": 1
      },
      {
        "v": "Hoe kiest een bijenzwerm een nieuw huis?",
        "opties": [
          "De koningin beslist alleen",
          "Verkenners dansen en de zwerm stemt mee",
          "Het dichtstbijzijnde huis wint",
          "Ze loten"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-diepzee",
    "titel": "De diepzee: donkerder dan de ruimte",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "natuur",
    "collectie": "kort",
    "woorden": 241,
    "tekst": "We hebben meer van het maanoppervlak in kaart gebracht dan van de bodem van onze eigen oceanen. Onder de golven ligt een wereld die vreemder is dan welke sciencefictionfilm dan ook.\n\nOp elf kilometer diepte in de Marianentrog is de druk meer dan duizend keer zo hoog als aan het oppervlak. Toch leven er wezens. Vissen zonder ogen, wormen die leven van giftige chemicalien en garnalen die floreren bij temperaturen die water zouden laten koken aan de oppervlakte.\n\nIn de diepzee is het pikdonker, dus veel dieren maken hun eigen licht. Dit heet bioluminescentie. Sommige vissen hebben lantaarns die uit hun kop groeien om prooi aan te lokken. Anderen flitsen met licht om partners te vinden of vijanden te verblinden. Het is een onderwater discotheek van het bizarre.\n\nDe reuzeinktvis was eeuwenlang een mythe, tot wetenschappers er eindelijk een filmden in 2004. Dit dier kan achttien meter lang worden en heeft de grootste ogen van het dierenrijk, zo groot als dinersborden. Ze leven zo diep dat we bijna niets over hun gedrag weten.\n\nOp de oceaanbodem bevinden zich ook hydrotherme bronnen, scheuren waaruit kokend water stroomt vol mineralen. Rond deze bronnen bloeit een heel ecosysteem dat niet afhankelijk is van zonlicht. Sommige wetenschappers denken dat het leven op aarde begonnen kan zijn bij zulke bronnen.\n\nElke expeditie naar de diepzee ontdekt nieuwe soorten. De oceaan is het laatste grote onontdekte gebied op onze planeet, en het ligt gewoon onder onze voeten.",
    "vragen": [
      {
        "v": "Wat is bioluminescentie?",
        "opties": [
          "Een soort koraal",
          "Dieren die hun eigen licht maken",
          "Een duiktechniek",
          "Licht van de maan onder water"
        ],
        "correct": 1
      },
      {
        "v": "Wanneer werd de reuzeninktvis voor het eerst gefilmd?",
        "opties": [
          "1954",
          "1985",
          "2004",
          "2020"
        ],
        "correct": 2
      },
      {
        "v": "Wat zijn hydrothermale bronnen?",
        "opties": [
          "Koude waterputten",
          "Scheuren waaruit kokend mineraalrijk water stroomt",
          "Onderzeese vulkanen van ijs",
          "Zoetwaterbronnen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-placebo",
    "titel": "Het placebo-effect is echt",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 241,
    "tekst": "Neem een suikerpil en geloof dat het medicijn is. Er is een goede kans dat je je daadwerkelijk beter voelt. Het placebo-effect is een van de vreemdste fenomenen in de geneeskunde en het wordt steeds sterker.\n\nOnderzoek laat zien dat placebo's echte, meetbare veranderingen in het lichaam veroorzaken. Ze kunnen pijnstillers in de hersenen activeren, ontstekingen verminderen en zelfs de bloeddruk verlagen. Je lichaam geneest zichzelf, aangestuurd door de verwachting van verbetering.\n\nHet wordt nog gekker. Zelfs als mensen weten dat ze een placebo krijgen, werkt het soms nog steeds. Onderzoekers gaven patienten pillen met het etiket placebo erop en vertelden eerlijk dat er geen werkzaam bestanddeel in zat. Toch rapporteerden de patienten minder pijn en betere symptomen.\n\nDe kleur van een pil maakt ook uit. Blauwe pillen werken beter als kalmeringsmiddel. Rode pillen worden als stimulerend ervaren. Grotere pillen lijken krachtiger dan kleine. En injecties werken beter dan pillen, zelfs als ze allebei placebo zijn.\n\nIn Duitsland is het placebo-effect de afgelopen decennia sterker geworden. Wetenschappers vermoeden dat dit komt doordat mensen steeds hogere verwachtingen hebben van medicijnen door reclame en informatie.\n\nSommige artsen pleiten ervoor om het placebo-effect bewust in te zetten in de geneeskunde. Niet als vervanging van echte medicijnen, maar als aanvulling. De manier waarop een arts een behandeling presenteert, de sfeer van de praktijk en de verwachtingen die worden geschapen, beeinvloeden allemaal het genezingsproces.\n\nJe geest is een krachtig medicijn dat je altijd bij je draagt.",
    "vragen": [
      {
        "v": "Wat kan een placebo meetbaar doen in het lichaam?",
        "opties": [
          "Niets",
          "Pijnstillers in de hersenen activeren",
          "Botten versterken",
          "Spieren laten groeien"
        ],
        "correct": 1
      },
      {
        "v": "Werkt een placebo als je wéét dat het een placebo is?",
        "opties": [
          "Nooit",
          "Soms wel",
          "Alleen bij kinderen",
          "Alleen bij injecties"
        ],
        "correct": 1
      },
      {
        "v": "Welke pilkleur wordt als kalmerend ervaren?",
        "opties": [
          "Rood",
          "Blauw",
          "Geel",
          "Groen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-potlood",
    "titel": "Hoe een potlood wordt gemaakt",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "maatschappij",
    "collectie": "kort",
    "woorden": 246,
    "tekst": "Niemand op de wereld kan in zijn eentje een potlood maken. Dat klinkt absurd voor zo'n simpel voorwerp, maar het is waar. De econoom Leonard Read schreef er een beroemd essay over.\n\nHet hout komt uit cederbomen in het noordwesten van de Verenigde Staten. Om die bomen te kappen heb je zagen nodig, die gemaakt zijn van staal. Dat staal komt van ijzererts uit mijnen in Brazilie. De mijnen gebruiken machines die draaien op diesel, gemaakt van olie uit het Midden-Oosten.\n\nHet grafiet in een potlood komt uit Sri Lanka of China. Het wordt gemengd met klei uit Mississippi en water dat gezuiverd is met machines uit Duitsland. Het mengsel wordt gebakken in ovens op meer dan duizend graden.\n\nDe gele verf bevat pigmenten uit verschillende landen. Het gummetje is gemaakt van rubber uit Maleisie, gemengd met puimsteen uit Italie. Het metalen ringetje dat het gummetje vasthoudt is van messing, een legering van koper en zink uit verschillende continenten.\n\nTel al deze ketens bij elkaar op en je hebt duizenden mensen in tientallen landen nodig om een simpel potlood te maken. Geen van hen weet dat ze aan een potlood werken. De mijnwerker denkt aan erts, de houthakker aan bomen.\n\nToch kost een potlood maar een paar cent. Dit is het wonder van internationale samenwerking en handel. Zonder dat iemand het plant of organiseert, werken miljoenen mensen samen om de simpelste voorwerpen te produceren.\n\nEen potlood is een klein wonder van menselijke beschaving in je pennenbak.",
    "vragen": [
      {
        "v": "Wat is de kernboodschap van het potlood-verhaal?",
        "opties": [
          "Potloden zijn duur",
          "Niemand kan in zijn eentje een potlood maken",
          "Potloden komen uit één fabriek",
          "Hout is zeldzaam"
        ],
        "correct": 1
      },
      {
        "v": "Waar komt het grafiet in een potlood vandaan?",
        "opties": [
          "Nederland of België",
          "Sri Lanka of China",
          "IJsland",
          "Australië"
        ],
        "correct": 1
      },
      {
        "v": "Wat maakt het gummetje van een potlood?",
        "opties": [
          "Plastic uit Duitsland",
          "Rubber uit Maleisië met puimsteen uit Italië",
          "Katoen uit Egypte",
          "Klei uit Mississippi"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-dna",
    "titel": "DNA: het boek van het leven",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 263,
    "tekst": "In elke cel van je lichaam zit een instructieboek van drie miljard letters lang. Als je het DNA uit een enkele cel zou uitrekken, zou het twee meter lang zijn. Trek al het DNA uit al je cellen uit en je hebt genoeg om tweehonderd keer naar de zon en terug te reiken.\n\nHet alfabet van DNA bestaat uit slechts vier letters: A, T, G en C. Met deze vier letters wordt alles beschreven wat jou jou maakt. Je oogkleur, je lengte, of je koriander lekker vindt of naar zeep vindt smaken, het staat allemaal in je DNA.\n\nWat verrassend is, is hoeveel DNA we delen met andere soorten. Met chimpansees delen we achtennegentig procent. Met bananen zestig procent. Dat betekent niet dat je voor zestig procent een banaan bent, maar dat de basismechanismen van het leven universeel zijn.\n\nDe ontdekking van de DNA-structuur in 1953 door Watson en Crick is een van de belangrijkste momenten in de wetenschap. Maar vaak vergeten wordt dat Rosalind Franklin het cruciale rontgenfoto maakte die de puzzel oploste. Zij kreeg nooit de erkenning die ze verdiende.\n\nTegenwoordig kun je je hele genoom laten sequencen voor een paar honderd euro. Het eerste menselijke genoom kostte drie miljard dollar en duurde dertien jaar. Nu kan het in een dag.\n\nMet technieken zoals CRISPR kunnen wetenschappers DNA knippen en plakken als een tekst in een document. Ze genezen erfelijke ziekten in muizen en werken aan therapieen voor mensen. De ethische vragen zijn enorm, maar de mogelijkheden zijn adembenemend.\n\nHet boek van het leven is geopend en we leren langzaam lezen.",
    "vragen": [
      {
        "v": "Uit hoeveel letters bestaat het DNA-alfabet?",
        "opties": [
          "Twee",
          "Vier",
          "Tien",
          "Zesentwintig"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel procent van ons DNA delen we met chimpansees?",
        "opties": [
          "Vijftig procent",
          "Achtennegentig procent",
          "Zestig procent",
          "Tien procent"
        ],
        "correct": 1
      },
      {
        "v": "Wie maakte de cruciale röntgenfoto voor de ontdekking van de DNA-structuur?",
        "opties": [
          "Watson",
          "Crick",
          "Rosalind Franklin",
          "Darwin"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "k-lachen",
    "titel": "Waarom we lachen",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 236,
    "tekst": "Lachen is universeel. Elke cultuur op aarde lacht, en baby's beginnen ermee voordat ze kunnen praten. Maar waarom heeft de evolutie ons deze vreemde reflex gegeven waarbij we herhaaldelijk lucht uit onze longen persen terwijl we gekke geluiden maken?\n\nDe meest geaccepteerde theorie is dat lachen een sociaal smeermiddel is. Het versterkt banden tussen mensen en signaleert dat alles veilig is. Wetenschappers ontdekten dat mensen dertig keer vaker lachen in gezelschap dan alleen. We lachen niet om grappen, we lachen om verbinding.\n\nHet is ook besmettelijk, letterlijk. Wanneer je iemand hoort lachen, activeren spiegelneuronen in je hersenen dezelfde reactie. Daarom gebruiken sitcoms een lachband. Het geluid van gelach triggert jouw eigen lachreflex, zelfs als de grap niet zo grappig was.\n\nLachen is ook gezond. Een flinke lachbui traint je buikspieren, verlaagt stresshormonen en verhoogt de aanmaak van antilichamen. Onderzoekers schatten dat twintig seconden hard lachen evenveel fysiek effect heeft als drie minuten roeien.\n\nEr bestaan zelfs lachtherapiegroepen waar mensen zonder reden samen lachen. Het begint geforceerd, maar binnen een paar minuten wordt het echt. Je lichaam maakt geen onderscheid tussen nep en echt lachen. De gezondheidsvoordelen zijn hetzelfde.\n\nKinderen lachen gemiddeld driehonderd keer per dag. Volwassenen slechts vijftien tot twintig keer. Ergens tussen kindertijd en volwassenheid verliezen we het vermogen om overal de humor van in te zien.\n\nMisschien is de beste gezondheidsaanpak ter wereld ook de goedkoopste. Meer lachen met de mensen om je heen.",
    "vragen": [
      {
        "v": "Hoeveel vaker lachen mensen in gezelschap dan alleen?",
        "opties": [
          "Twee keer",
          "Dertig keer",
          "Honderd keer",
          "Even vaak"
        ],
        "correct": 1
      },
      {
        "v": "Waarom gebruiken sitcoms een lachband?",
        "opties": [
          "Om stiltes te vullen",
          "Gelach van anderen triggert je eigen lachreflex",
          "Het is traditie",
          "Om de acteurs te helpen"
        ],
        "correct": 1
      },
      {
        "v": "Hoe vaak lacht een kind gemiddeld per dag?",
        "opties": [
          "Vijftien keer",
          "Driehonderd keer",
          "Vijftig keer",
          "Duizend keer"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-gobekli",
    "titel": "De vergeten beschaving van Gobekli Tepe",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "geschiedenis",
    "collectie": "kort",
    "woorden": 230,
    "tekst": "In 1994 ontdekte een herder in Turkije wat later de belangrijkste archeologische vondst van de eenentwintigste eeuw zou blijken. Op een heuvel lagen enorme stenen pilaren, versierd met dierenreliefs. Ze bleken twaalfduizend jaar oud te zijn, zevenduizend jaar ouder dan Stonehenge.\n\nGobekli Tepe veranderde alles wat we dachten te weten over de menselijke beschaving. Tot deze ontdekking geloofden archeologen dat mensen eerst moesten gaan boeren voordat ze complexe bouwwerken konden maken. Je hebt immers een stabiele voedselvoorraad nodig om duizenden arbeiders te voeden.\n\nMaar Gobekli Tepe werd gebouwd door jagers en verzamelaars. Mensen zonder landbouw, zonder steden en zonder metalen werktuigen tilden stenen pilaren van tien ton op hun plek. De pilaren zijn kunstig gerangschikt in cirkels en versierd met afbeeldingen van vossen, slangen en gieren.\n\nDit betekent mogelijk dat religie en ritueel de drijvende kracht waren achter de beschaving, niet landbouw. Mensen kwamen samen om te bouwen en begonnen pas daarna met landbouw om de bouwers te voeden. Het is precies het omgekeerde van wat we altijd dachten.\n\nNog verbazingwekkender is dat Gobekli Tepe bewust begraven werd. Rond negenduizend voor Christus vulden de bouwers het hele complex met aarde en verlieten het. Niemand weet waarom. Het is alsof ze hun tempel met opzet wilden verbergen voor de toekomst.\n\nSlechts vijf procent van het complex is opgegraven. Wie weet welke geheimen er nog onder die Turkse heuvel liggen te wachten.",
    "vragen": [
      {
        "v": "Hoe oud is Gobekli Tepe?",
        "opties": [
          "Duizend jaar",
          "Vijfduizend jaar",
          "Twaalfduizend jaar",
          "Honderdduizend jaar"
        ],
        "correct": 2
      },
      {
        "v": "Wie bouwden Gobekli Tepe?",
        "opties": [
          "Romeinen",
          "Boeren met metalen werktuigen",
          "Jagers en verzamelaars",
          "Egyptenaren"
        ],
        "correct": 2
      },
      {
        "v": "Wat gebeurde er rond 9000 voor Christus met het complex?",
        "opties": [
          "Het werd verwoest door oorlog",
          "Het werd bewust begraven",
          "Het zonk in zee",
          "Het brandde af"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-weer",
    "titel": "Extreme weerfenomenen",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "natuur",
    "collectie": "kort",
    "woorden": 242,
    "tekst": "Op 10 juli 1913 werd in Death Valley in Californie een temperatuur van 56,7 graden Celsius gemeten. Het is de hoogste temperatuur ooit officieel geregistreerd op aarde. Op die dag kon je letterlijk een ei bakken op de motorkap van een auto.\n\nAan de andere kant van het spectrum bereikte Antarctica op 21 juli 1983 een temperatuur van min 89,2 graden. Bij die temperatuur bevriest uitgeademde lucht onmiddellijk tot ijskristallen. De Russen die het meetstation beheerden, konden alleen buiten werken in volledige overlevingspakken.\n\nHagel kan dodelijk zijn. In Bangladesh vielen in 1986 hagelstenen van meer dan een kilo. Ze doodden tweeennegentig mensen. De grootste hagelsteen ooit gewogen in de Verenigde Staten was zo groot als een volleybal.\n\nDe langste bliksemflits die ooit is gemeten, strekte zich uit over zevenhonderd kilometer boven de Verenigde Staten. Dat is de afstand van Amsterdam tot Zurich in een enkele flits. En een enkele bliksemschicht is vijf keer heter dan het oppervlak van de zon.\n\nIn de Atacamawoestijn in Chili zijn plekken waar het in vierhonderd jaar niet heeft geregend. Het is zo droog dat NASA er Mars-rovers test omdat de omstandigheden lijken op het Marsoppervlak.\n\nTegenover dat record staat Mawsynram in India, waar jaarlijks bijna twaalf meter regen valt. De bewoners leven in een permanente douche en bouwen levende bruggen van boomwortels omdat houten bruggen wegrotten.\n\nHet weer op aarde is extremer dan de meeste mensen beseffen. En door klimaatverandering worden de records steeds vaker gebroken.",
    "vragen": [
      {
        "v": "Waar werd de hoogste temperatuur ooit gemeten?",
        "opties": [
          "De Sahara",
          "Death Valley in Californië",
          "Australië",
          "Spanje"
        ],
        "correct": 1
      },
      {
        "v": "Waarom test NASA Mars-rovers in de Atacamawoestijn?",
        "opties": [
          "Het is er goedkoop",
          "De omstandigheden lijken op Mars",
          "Er wonen geen mensen",
          "Het is dicht bij de VS"
        ],
        "correct": 1
      },
      {
        "v": "Hoe lang was de langste gemeten bliksemflits?",
        "opties": [
          "Zeven kilometer",
          "Zeventig kilometer",
          "Zevenhonderd kilometer",
          "Zevenduizend kilometer"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "k-kleur",
    "titel": "De psychologie van kleur",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 255,
    "tekst": "Rode auto's krijgen vaker een snelheidsboete. Restaurants gebruiken rood en geel in hun logo om je hongerig te maken. Ziekenhuizen zijn wit om rust en hygiene uit te stralen. Kleuren sturen ons gedrag op manieren waar we ons nauwelijks bewust van zijn.\n\nWetenschappers ontdekten dat sporters die rood dragen vaker winnen. Bij de Olympische Spelen van 2004 wonnen boksers en worstelaars in rode outfits significant vaker dan die in blauw. De kleur rood schijnt zowel de drager zelfverzekerder te maken als de tegenstander te intimideren.\n\nBlauw is de populairste kleur ter wereld. Het straalt vertrouwen en betrouwbaarheid uit. Daarom gebruiken banken, techbedrijven en sociale media het zo graag. Facebook, Twitter en LinkedIn zijn allemaal blauw. Het is geen toeval.\n\nGroen is de kleur die het minst vermoeiend is voor je ogen. Daarom zijn operatiekamers groen en dragen chirurgen groene kleding. Na lang naar rood bloed te kijken, zien je ogen groene nabeelden. Een groene omgeving neutraliseert dat effect.\n\nDe kleur roze heeft een kalmerend effect dat zo sterk is dat sommige gevangenissen hun cellen roze verven. Het werd Baker-Miller roze genoemd en het bleek agressie bij gevangenen meetbaar te verminderen. Het effect is tijdelijk, maar onmiskenbaar.\n\nIn Japan staat wit voor rouw en in westerse culturen voor onschuld. In China is rood de kleur van geluk terwijl het in het Westen gevaar betekent. Kleurbetekenissen zijn deels aangeleerd door cultuur.\n\nDe volgende keer dat je een winkel binnenloopt, kijk eens bewust naar de kleuren om je heen. Ze zijn zorgvuldig gekozen om jouw gedrag te beinvloeden.",
    "vragen": [
      {
        "v": "Wat ontdekten wetenschappers over sporters in het rood?",
        "opties": [
          "Ze verliezen vaker",
          "Ze winnen vaker",
          "Ze raken vaker geblesseerd",
          "Er is geen verschil"
        ],
        "correct": 1
      },
      {
        "v": "Waarom zijn operatiekamers groen?",
        "opties": [
          "Groen is goedkoop",
          "Groen neutraliseert nabeelden van rood bloed",
          "Groen is steriel",
          "Chirurgen houden van groen"
        ],
        "correct": 1
      },
      {
        "v": "Welk effect had Baker-Miller roze in gevangenissen?",
        "opties": [
          "Meer agressie",
          "Minder agressie",
          "Betere slaap",
          "Meer ontsnappingen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-robots",
    "titel": "Robots die ons werk overnemen",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "techniek",
    "collectie": "kort",
    "woorden": 246,
    "tekst": "In een fabriek in China werken robots vierentwintig uur per dag, zeven dagen per week, zonder pauze, zonder salaris en zonder te klagen. Ze maken telefoons met een precisie die geen mens kan evenaren. De fabriek heeft negentig procent van haar werknemers vervangen door machines.\n\nMaar robots nemen niet alleen fabrieksbanen over. In Japan serveren robotkelners eten in restaurants. In de Verenigde Staten bezorgen zelfrijdende robots pakketjes aan de deur. In sommige ziekenhuizen voeren chirurgische robots operaties uit met trillingvrije precisie.\n\nDe vooruitgang in kunstmatige intelligentie maakt het plaatje nog interessanter. Computers schrijven nu nieuwsartikelen, componeren muziek en maken kunstwerken die op veilingen voor miljoenen worden verkocht. Een AI-gegenereerd portret bracht in 2018 vierhonderddertigduizend dollar op bij Christie's.\n\nEconomen zijn verdeeld over de gevolgen. Optimisten wijzen erop dat elke technologische revolutie meer banen creeerde dan ze vernietigde. De auto verving het paard, maar schiep een hele industrie van monteurs, wegenmakers en tankstationhouders.\n\nPessimisten waarschuwen dat deze revolutie anders is. Eerdere machines vervingen spierkracht. AI vervangt denkkracht. Als machines kunnen denken, wat blijft er dan voor ons over?\n\nHet antwoord ligt misschien in wat ons menselijk maakt. Creativiteit, empathie, humor en de behoefte aan verbinding zijn vooralsnog uniek menselijk. Een robot kan een perfect gecomponeerd lied maken, maar kan niet genieten van het luisteren.\n\nDe toekomst zal niet gaan over mens tegen machine, maar over mens met machine. De vraag is niet of robots ons werk overnemen, maar hoe we zinvol blijven in een wereld vol machines.",
    "vragen": [
      {
        "v": "Wat verving de fabriek in China grotendeels door machines?",
        "opties": [
          "Tien procent van de werknemers",
          "Negentig procent van de werknemers",
          "Alleen de managers",
          "De helft van de robots"
        ],
        "correct": 1
      },
      {
        "v": "Waarin verschilt deze technologische revolutie volgens pessimisten van eerdere?",
        "opties": [
          "Ze gaat langzamer",
          "AI vervangt denkkracht in plaats van spierkracht",
          "Ze kost minder banen",
          "Ze raakt alleen fabrieken"
        ],
        "correct": 1
      },
      {
        "v": "Wat blijft volgens de tekst vooralsnog uniek menselijk?",
        "opties": [
          "Rekenen",
          "Creativiteit, empathie en humor",
          "Muziek componeren",
          "Kunst maken"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-fermentatie",
    "titel": "De magie van fermentatie",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "eten",
    "collectie": "kort",
    "woorden": 239,
    "tekst": "Bier, brood, kaas, chocolade, koffie, yoghurt en zuurkool hebben iets gemeen. Ze bestaan allemaal dankzij microscopisch kleine organismen die ons voedsel verteren voordat wij dat doen. Welkom in de wereld van fermentatie.\n\nFermentatie is een van de oudste technologieen van de mensheid. Al negenduizend jaar geleden maakten mensen in China een alcoholische drank van rijst, honing en fruit. De Egyptenaren bakten brood met gist en de Romeinen waren dol op hun gefermenteerde vissaus genaamd garum.\n\nHet proces is verbazingwekkend simpel. Micro-organismen eten suikers op en produceren alcohol, zuren of gassen als bijproduct. Gist maakt alcohol in bier en kooldioxide in brood. Melkzuurbacterien maken yoghurt zuur en houdbaar.\n\nWat veel mensen niet weten, is dat chocolade zonder fermentatie naar bittere bonen zou smaken. Na het oogsten worden cacaobonen dagenlang gefermenteerd. Bacterien en gisten breken de pulp af en creeren de honderden smaakstoffen die chocolade zo onweerstaanbaar maken.\n\nKoffie ondergaat een vergelijkbaar proces. De koffiebonen worden gefermenteerd om de vruchthulp te verwijderen en complexe smaken te ontwikkelen. De duurste koffie ter wereld, kopi luwak, wordt zelfs gefermenteerd in de darmen van een civetkat.\n\nWetenschappers ontdekken steeds meer gezondheidsvoordelen van gefermenteerd voedsel. De bacterien in kimchi, kombucha en kefir kunnen je darmflora versterken. Een gezonde darmflora is gekoppeld aan een beter immuunsysteem en zelfs een betere stemming.\n\nDe volgende keer dat je een boterham met kaas eet, bedenk dan dat je geniet van miljoenen kleine wezentjes die hard voor je hebben gewerkt.",
    "vragen": [
      {
        "v": "Wat doen micro-organismen bij fermentatie?",
        "opties": [
          "Ze eten suikers en maken alcohol, zuren of gassen",
          "Ze koelen het voedsel",
          "Ze voegen vitamines toe",
          "Ze doden al het leven"
        ],
        "correct": 0
      },
      {
        "v": "Hoe zou chocolade smaken zonder fermentatie?",
        "opties": [
          "Zoeter",
          "Naar bittere bonen",
          "Naar niets",
          "Zuurder"
        ],
        "correct": 1
      },
      {
        "v": "Wat kunnen de bacteriën in kimchi en kefir versterken?",
        "opties": [
          "Je spieren",
          "Je darmflora",
          "Je botten",
          "Je gezichtsvermogen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-geheugen",
    "titel": "Hoe je geheugen te hacken",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 259,
    "tekst": "Geheugenatleten kunnen een geschud kaartspel in minder dan twintig seconden onthouden. Ze zijn niet geboren met een superbrein. Ze gebruiken technieken die iedereen kan leren.\n\nDe krachtigste techniek is het geheugenpaleis, ook wel loci-methode genoemd. Je stelt je een gebouw voor dat je goed kent, zoals je eigen huis. Vervolgens plaats je de dingen die je wilt onthouden op specifieke locaties. Het eerste item leg je bij de voordeur, het tweede op de kapstok, het derde op de trap.\n\nDit werkt omdat ons brein uitstekend is in het onthouden van plaatsen en beelden, maar slecht in het onthouden van abstracte informatie zoals nummers en namen. Door abstracte informatie om te zetten in levendige beelden op bekende locaties maak je gebruik van je sterkste geheugenvaardigheden.\n\nHet geheim is absurditeit. Hoe belachelijker het beeld, hoe beter je het onthoudt. Als je een boodschappenlijst wilt onthouden, stel je dan geen keurig doosje melk voor. Stel je voor dat er een gigantische koe in je woonkamer staat die melk spuit op de televisie.\n\nHerhaling met toenemende tussenpozen is een andere krachtige techniek. Je herhaalt informatie net voordat je het zou vergeten. De eerste herhaling na een uur, de tweede na een dag, de derde na een week. Elke herhaling versterkt de neurale verbinding.\n\nSlaap speelt ook een cruciale rol. Tijdens de diepe slaap verplaatst je brein informatie van het korte naar het lange termijngeheugen. Studeren voor een tentamen en daarna goed slapen is effectiever dan de hele nacht doorhalen.\n\nJe geheugen is geen aangeboren talent. Het is een vaardigheid die je kunt trainen.",
    "vragen": [
      {
        "v": "Wat is het geheugenpaleis?",
        "opties": [
          "Een museum",
          "Dingen onthouden door ze op bekende locaties te plaatsen",
          "Een hersengebied",
          "Een geheugenspel"
        ],
        "correct": 1
      },
      {
        "v": "Waarom werken absurde beelden zo goed?",
        "opties": [
          "Ze zijn grappig",
          "Hoe gekker het beeld, hoe beter je het onthoudt",
          "Ze zijn kleurrijk",
          "Ze zijn kort"
        ],
        "correct": 1
      },
      {
        "v": "Wat gebeurt er met informatie tijdens diepe slaap?",
        "opties": [
          "Hij wordt gewist",
          "Hij verhuist naar het langetermijngeheugen",
          "Hij wordt gehalveerd",
          "Er gebeurt niets"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-migratie",
    "titel": "Het wonder van migratie",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 253,
    "tekst": "Elk jaar vliegt de noordse stern van pool tot pool, een reis van zeventigduizend kilometer. In zijn leven van dertig jaar legt dit kleine vogeltje de afstand af van drie retourreizen naar de maan. Het is de langste migratie van alle dieren.\n\nMaar hoe weten dieren waar ze naartoe moeten? Trekvogels blijken een ingebouwd kompas te hebben dat het magnetische veld van de aarde kan waarnemen. Wetenschappers ontdekten dat een speciaal eiwit in hun ogen, cryptochroom, gevoelig is voor magnetische velden. Ze zien letterlijk het magnetisch noorden.\n\nDe monarchvlinder maakt een reis van vijfduizend kilometer van Canada naar Mexico. Geen enkele vlinder maakt de volledige reis heen en terug. Het duurt vier generaties. De vlinders die vertrekken uit Canada zijn de achterkleinkinderen van de vlinders die daar aankwamen. Toch vinden ze exact dezelfde bomen.\n\nZalmen worden geboren in een rivier, zwemmen naar de oceaan en keren jaren later terug naar precies dezelfde rivier om te paaien. Ze navigeren op geur. Elke rivier heeft een unieke chemische vingerafdruk die de zalm als baby heeft ingeprent en nooit vergeet.\n\nIn Oost-Afrika vindt elk jaar de grote migratie plaats. Anderhalf miljoen gnoes trekken in een enorme cirkel door de Serengeti, gevolgd door zebra's en gazellen. Ze doorkruisen rivieren vol krokodillen en vlaktes vol leeuwen. Het is het grootste spektakel in de natuur.\n\nMigratie laat zien dat de natuur geen grenzen kent. Dieren trekken zich niets aan van landsgrenzen, politiek of muren. Ze volgen de seizoenen, de sterren en een innerlijk kompas dat miljoenen jaren oud is.",
    "vragen": [
      {
        "v": "Welke vogel vliegt jaarlijks van pool tot pool?",
        "opties": [
          "De zwaluw",
          "De noordse stern",
          "De ooievaar",
          "De albatros"
        ],
        "correct": 1
      },
      {
        "v": "Hoe navigeren zalmen terug naar hun geboorterivier?",
        "opties": [
          "Op de sterren",
          "Op geur",
          "Op geluid",
          "Op temperatuur"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel generaties doet de monarchvlinder over zijn migratie?",
        "opties": [
          "Eén",
          "Twee",
          "Vier",
          "Tien"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "k-tijd",
    "titel": "Waarom tijd sneller gaat",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 254,
    "tekst": "Als kind duurde een zomervakantie een eeuwigheid. Nu vliegt een heel jaar voorbij als een weekend. Bijna iedereen herkent dit gevoel, maar weinig mensen weten waarom het gebeurt.\n\nEen populaire verklaring is de proportietheorie. Als je vijf jaar oud bent, is een jaar twintig procent van je hele leven. Als je vijftig bent, is een jaar slechts twee procent. Elk jaar wordt proportioneel een kleiner deel van je totale ervaring en voelt daarom korter.\n\nMaar neurowetenschappers hebben een betere verklaring. Je brein codeert tijd op basis van nieuwe ervaringen. Wanneer je iets voor het eerst meemaakt, slaat je brein elk detail op. Dat creert een rijke herinnering die lang lijkt te duren. Routine ervaringen worden nauwelijks opgeslagen. De dagen smelten samen.\n\nDit verklaart waarom vakanties in je geheugen langer duren dan werkweken. Op vakantie is alles nieuw. Je brein werkt overuren om alle nieuwe indrukken op te slaan. Op het werk is elke dag min of meer hetzelfde en je brein slaat het over.\n\nDe oplossing is verrassend praktisch. Wil je de tijd vertragen? Zoek nieuwe ervaringen. Leer een instrument, bezoek een nieuwe plek, neem een andere route naar werk, probeer een nieuw recept. Elke nieuwe ervaring creert een nieuwe herinnering en rekt je subjectieve tijd op.\n\nKinderen ervaren de tijd langzamer omdat alles nieuw voor ze is. De eerste keer dat je de zee ziet, de eerste keer dat je fietst, de eerste sneeuw. Alles is een eerste keer.\n\nHet geheim van een lang leven is niet meer jaren, maar meer eerste keren.",
    "vragen": [
      {
        "v": "Waarom duren vakanties in je herinnering langer dan werkweken?",
        "opties": [
          "Ze zijn echt langer",
          "Je brein slaat nieuwe ervaringen rijker op",
          "Je slaapt minder op vakantie",
          "De zon schijnt vaker"
        ],
        "correct": 1
      },
      {
        "v": "Wat kun je doen om de tijd subjectief te vertragen?",
        "opties": [
          "Meer routine inbouwen",
          "Nieuwe ervaringen opzoeken",
          "Langer slapen",
          "Minder bewegen"
        ],
        "correct": 1
      },
      {
        "v": "Waarom ervaren kinderen de tijd langzamer?",
        "opties": [
          "Hun hart klopt sneller",
          "Alles is nieuw voor ze",
          "Ze slapen meer",
          "Ze kijken vaker op de klok"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-walvissen",
    "titel": "De taal van walvissen",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 242,
    "tekst": "Diep in de oceaan zingen bultrugwalvissen liedjes die uren kunnen duren. Elk liedje is een complex patroon van kreunen, piepen en klikken dat zich herhaalt met variaties, net als menselijke muziek. En elk seizoen veranderen alle walvissen in een populatie hun lied tegelijk.\n\nDe zang van walvissen kan duizenden kilometers ver reizen door de oceaan. Voor de uitvinding van motorboten konden walvissen waarschijnlijk met soortgenoten aan de andere kant van de oceaan communiceren. De industriele scheepvaart heeft hun wereld kleiner gemaakt door geluidsoverlast.\n\nPotvisssen communiceren met klikken in specifieke patronen die wetenschappers codas noemen. Verschillende groepen potvissen hebben verschillende dialecten, net als menselijke culturen. Een potvis uit de Atlantische Oceaan klinkt anders dan een uit de Stille Oceaan.\n\nEr was ooit een walvis die zong op een frequentie van 52 hertz, veel hoger dan elke andere walvis. Hij werd de eenzaamste walvis ter wereld genoemd, omdat geen andere walvis zijn lied kon horen of beantwoorden. Zijn roep werd jarenlang gevolgd door onderzoekers met onderwatermicrofoons.\n\nWetenschappers gebruiken nu kunstmatige intelligentie om de communicatie van walvissen te ontcijferen. Het project CETI probeert de taal van potvissen te kraken door miljoenen klikpatronen te analyseren. Als het lukt, zou het de eerste keer zijn dat we een andere diersoort echt begrijpen.\n\nDe oceaan is vol stemmen die we nog niet verstaan. Elke walvis draagt een verhaal met zich mee, gezongen in een taal die ouder is dan de mensheid. We hoeven alleen maar te leren luisteren.",
    "vragen": [
      {
        "v": "Hoe lang kunnen de liedjes van bultrugwalvissen duren?",
        "opties": [
          "Enkele seconden",
          "Uren",
          "Dagen",
          "Een minuut"
        ],
        "correct": 1
      },
      {
        "v": "Wat zijn coda's bij potvissen?",
        "opties": [
          "Liedjes",
          "Klikpatronen om te communiceren",
          "Zwembewegingen",
          "Voedselsoorten"
        ],
        "correct": 1
      },
      {
        "v": "Waarom werd één walvis \"de eenzaamste walvis ter wereld\" genoemd?",
        "opties": [
          "Hij leefde alleen in een aquarium",
          "Hij zong op een frequentie die geen andere walvis kon horen",
          "Hij was de laatste van zijn soort",
          "Hij zwom altijd achteraan"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-experimenten",
    "titel": "De gekste wetenschappelijke experimenten",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 246,
    "tekst": "In 1978 deed de Russische wetenschapper Anatoli Bugorski iets wat niemand voor mogelijk hield. Hij stak zijn hoofd in een deeltjesversneller. Een bundel protonen die met bijna de lichtsnelheid reisden, ging dwars door zijn schedel. Hij zag een flits helderder dan duizend zonnen.\n\nVerrassend genoeg overleefde hij het. De linkerkant van zijn gezicht zwol op en raakte verlamd, maar hij promoveerde gewoon op zijn onderzoek en leefde nog tientallen jaren. Zijn geval is uniek in de wetenschappelijke geschiedenis.\n\nIn de negentiende eeuw slikte een arts genaamd William Beaumont opzettelijk een spons aan een touwtje in. Hij trok de spons weer op en analyseerde de maagsappen die eraan kleefden. Zo ontdekte hij de basisbeginselen van de spijsvertering.\n\nIsaac Newton stak een naald in zijn oogkas om te onderzoeken hoe het oog werkt. Hij duwde tegen zijn oogbol en beschreef de gekleurde cirkels die hij zag. Het was briljant en volkomen gestoord tegelijk.\n\nDe astronoom Tycho Brahe verloor zijn neus in een duel over wie de beste wiskundige was. Hij droeg de rest van zijn leven een kunstneus van goud en zilver. Bij het opgraven van zijn lichaam vonden onderzoekers groene vlekken op zijn schedel van het koper in de neus.\n\nIn de jaren zestig liet een onderzoeker een dolfijn in een ondergelopen huis wonen met een vrouwelijke assistent om te kijken of de dolfijn Engels kon leren spreken. Het experiment mislukte spectaculair.\n\nWetenschap gaat over grenzen verleggen, maar sommige wetenschappers verlegden ook de grens van gezond verstand.",
    "vragen": [
      {
        "v": "Wat overkwam Anatoli Bugorski in 1978?",
        "opties": [
          "Hij viel in een vulkaan",
          "Een protonenbundel ging door zijn hoofd",
          "Hij verloor zijn geheugen",
          "Hij ontdekte de röntgenstraal"
        ],
        "correct": 1
      },
      {
        "v": "Wat deed Isaac Newton om het oog te onderzoeken?",
        "opties": [
          "Hij bestudeerde dierenogen",
          "Hij stak een naald in zijn eigen oogkas",
          "Hij bouwde een microscoop",
          "Hij droeg gekleurde brillen"
        ],
        "correct": 1
      },
      {
        "v": "Waarvan was de kunstneus van Tycho Brahe gemaakt?",
        "opties": [
          "Hout",
          "Goud en zilver",
          "Ivoor",
          "Brons"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-microbioom",
    "titel": "De onzichtbare wereld in je darmen",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 236,
    "tekst": "In je darmen leven meer bacterien dan er cellen in je lichaam zijn. Ongeveer veertig biljoen micro-organismen noemen je spijsverteringskanaal hun thuis. Samen wegen ze ongeveer twee kilo, evenveel als je hersenen. En net als je hersenen beinvloeden ze wie je bent.\n\nDit ecosysteem heet het microbioom en het is een van de heetste onderzoeksgebieden in de geneeskunde. Wetenschappers ontdekten dat je darmbacterien invloed hebben op je gewicht, je immuunsysteem, je stemming en zelfs je persoonlijkheid.\n\nDe darm-hersenverbinding is bijzonder fascinerend. Negentig procent van de serotonine in je lichaam wordt geproduceerd in je darmen, niet in je hersenen. Serotonine is het gelukshormoon. Je darmen zijn letterlijk medeverantwoordelijk voor je humeur.\n\nOnderzoekers deden een opvallend experiment met muizen. Ze transplanteerden darmbacterien van moedige muizen naar angstige muizen. Het resultaat was verbluffend. De angstige muizen werden moediger. Hun gedrag veranderde door bacterien in hun darmen.\n\nWat je eet heeft een enorme invloed op je microbioom. Vezels uit groenten en fruit voeden de goede bacterien. Bewerkt voedsel en suiker voeden de slechte. Binnen enkele dagen na een dieetwijziging verandert de samenstelling van je darmflora.\n\nElke persoon heeft een uniek microbioom, net als een vingerafdruk. Zelfs tweelingen die samen opgroeien, ontwikkelen verschillende bacteriepopulaties. Je microbioom wordt gevormd door je geboorte, je voeding, je omgeving en zelfs je huisdieren.\n\nDe volgende keer dat je een onderbuikgevoel hebt, neem het dan serieus. Je darmen hebben misschien meer te vertellen dan je denkt.",
    "vragen": [
      {
        "v": "Hoeveel wegen alle bacteriën in je darmen samen ongeveer?",
        "opties": [
          "Honderd gram",
          "Twee kilo",
          "Tien kilo",
          "Vijf gram"
        ],
        "correct": 1
      },
      {
        "v": "Waar wordt negentig procent van de serotonine gemaakt?",
        "opties": [
          "In je hersenen",
          "In je darmen",
          "In je hart",
          "In je longen"
        ],
        "correct": 1
      },
      {
        "v": "Wat gebeurde er met angstige muizen die darmbacteriën van moedige muizen kregen?",
        "opties": [
          "Ze werden zieker",
          "Ze werden moediger",
          "Er veranderde niets",
          "Ze werden agressief"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-zwartedoos",
    "titel": "Het onverwoestbare zwarte doosje",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "techniek",
    "collectie": "kort",
    "woorden": 251,
    "tekst": "Na elke vliegtuigcrash is het eerste wat onderzoekers zoeken de zwarte doos. Maar hier is het eerste geheim: de zwarte doos is niet zwart. Hij is felroood, zodat hij makkelijk te vinden is tussen het puin.\n\nEigenlijk zijn het twee dozen. De vluchtdatarecorder slaat technische gegevens op zoals snelheid, hoogte en motorvermogen. De cockpitvoicerecorder neemt de laatste twee uur aan gesprekken en geluiden in de cockpit op. Samen vertellen ze het verhaal van wat er is misgegaan.\n\nDeze apparaten zijn gebouwd om de apocalyps te overleven. Ze weerstaan temperaturen van meer dan duizend graden gedurende een uur. Ze overleven een botsing met een kracht die drieduizend keer zo sterk is als de zwaartekracht. Ze werken nog na dertig dagen onder water op zes kilometer diepte.\n\nNa een crash in de oceaan zendt de zwarte doos een akoestisch signaal uit dat onderwatermicrofoons kunnen oppikken. De batterij gaat dertig dagen mee. Dit was niet genoeg bij de ramp met Malaysia Airlines vlucht 370 in 2014, waarvan de zwarte doos pas jaren later werd gevonden.\n\nTegenwoordig pleiten experts voor live datastreaming vanuit vliegtuigen. Waarom wachten tot na een crash als je de gegevens in real time naar de grond kunt sturen? De technologie bestaat, maar de luchtvaartindustrie beweegt langzaam.\n\nDe informatie uit zwarte dozen heeft ontelbare levens gered. Elke crash levert lessen op die worden verwerkt in veiligheidsverbeteringen. Vliegen is mede daardoor het veiligste vervoersmiddel ter wereld.\n\nDat felroode kastje is een stille held die na elke tragedie de waarheid aan het licht brengt.",
    "vragen": [
      {
        "v": "Welke kleur heeft de zwarte doos echt?",
        "opties": [
          "Zwart",
          "Felrood",
          "Geel",
          "Zilver"
        ],
        "correct": 1
      },
      {
        "v": "Uit welke twee onderdelen bestaat \"de zwarte doos\"?",
        "opties": [
          "Radio en radar",
          "Vluchtdatarecorder en cockpitvoicerecorder",
          "GPS en kompas",
          "Camera en microfoon"
        ],
        "correct": 1
      },
      {
        "v": "Hoe lang zendt de zwarte doos onder water een signaal uit?",
        "opties": [
          "Drie dagen",
          "Dertig dagen",
          "Een jaar",
          "Voor altijd"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-dromen",
    "titel": "Waarom we dromen",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 236,
    "tekst": "Elke nacht brengen we gemiddeld twee uur door in droomland. In een mensenleven is dat ruim zes jaar. Toch weten wetenschappers nog altijd niet precies waarom we dromen.\n\nDromen vinden vooral plaats tijdens de REM-slaap, de fase waarin je ogen snel heen en weer bewegen onder je gesloten oogleden. Je hersenen zijn bijna net zo actief als wanneer je wakker bent. Maar je spieren zijn verlamd, een beschermingsmechanisme dat voorkomt dat je je dromen uitvoert.\n\nSigmund Freud dacht dat dromen verborgen wensen vervulden. Moderne neurowetenschappers zijn het daar niet mee eens. De activatie-synthese theorie stelt dat dromen het resultaat zijn van willekeurige hersenactiviteit die het brein probeert te interpreteren als een coherent verhaal.\n\nEen meer geaccepteerde theorie is dat dromen een rol spelen bij geheugenconsolidatie. Tijdens de droomslaap herhaalt en reorganiseert het brein de ervaringen van de dag. Emotionele ervaringen worden verwerkt en het langetermijngeheugen wordt versterkt.\n\nLucide dromen, waarbij je je bewust bent dat je droomt en soms de droom kunt sturen, zijn wetenschappelijk bewezen. Ongeveer vijfenvijftig procent van de mensen heeft minstens één lucide droom in zijn leven ervaren.\n\nNachtmerries hebben waarschijnlijk een evolutionaire functie. Door bedreigende scenario's te simuleren in een veilige omgeving oefent het brein zijn reacties op gevaar.\n\nDieren dromen ook. Ratten die overdag een doolhof hebben gelopen herhalen dezelfde hersenpatronen tijdens hun slaap. Honden bewegen hun poten alsof ze rennen. Dromen is geen menselijke luxe maar een fundamenteel biologisch proces.",
    "vragen": [
      {
        "v": "In welke slaapfase dromen we vooral?",
        "opties": [
          "Diepe slaap",
          "REM-slaap",
          "Lichte slaap",
          "Bij het inslapen"
        ],
        "correct": 1
      },
      {
        "v": "Waarom zijn je spieren verlamd tijdens het dromen?",
        "opties": [
          "Door kou",
          "Zodat je je dromen niet uitvoert",
          "Door vermoeidheid",
          "Dat is toeval"
        ],
        "correct": 1
      },
      {
        "v": "Wat doen ratten die overdag een doolhof liepen tijdens hun slaap?",
        "opties": [
          "Ze piepen",
          "Ze herhalen dezelfde hersenpatronen",
          "Ze slapen dieper",
          "Ze worden vaker wakker"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-bodem",
    "titel": "De wereld onder je voeten",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "natuur",
    "collectie": "kort",
    "woorden": 235,
    "tekst": "In een handvol gezonde grond leven meer micro-organismen dan er mensen op aarde zijn. De grond is een van de meest complexe ecosystemen op de planeet, en toch besteden we er nauwelijks aandacht aan.\n\nBodem bestaat uit minerale deeltjes, organisch materiaal, water, lucht en een ongelooflijke diversiteit aan leven. Bacterien, schimmels, protozoën, nematoden, regenwormen en insecten vormen een ingewikkeld voedselweb dat de basis legt voor al het leven op het land.\n\nRegenwormen zijn de ingenieurs van de bodem. Charles Darwin besteedde veertig jaar van zijn leven aan het bestuderen van wormen en noemde hen het belangrijkste dier in de geschiedenis van de wereld. Ze graven tunnels die de bodem beluchten, mengen organisch materiaal door de grond en produceren wormencompost die rijker is aan voedingsstoffen dan elk kunstmest.\n\nMycorrhiza-schimmels vormen ondergrondse netwerken die de wortels van planten verbinden. Via dit Wood Wide Web delen bomen suikers, mineralen en zelfs waarschuwingssignalen. Moederbomen voeden hun zaailingen via dit netwerk.\n\nGezonde bodem is essentieel voor het tegengaan van klimaatverandering. De bodem bevat meer koolstof dan de atmosfeer en alle planten samen. Regeneratieve landbouw, die de bodemgezondheid herstelt, kan enorme hoeveelheden CO2 vastleggen.\n\nIndustriele landbouw heeft de bodem wereldwijd uitgeput. Overmatig ploegen, monoculturen en chemische bestrijdingsmiddelen doden het bodemleven en verminderen de vruchtbaarheid. Wetenschappers waarschuwen dat we over zestig jaar geen vruchtbare grond meer hebben als we zo doorgaan.\n\nDe oplossing begint met respect voor wat onder je voeten leeft.",
    "vragen": [
      {
        "v": "Wat noemde Charles Darwin het belangrijkste dier in de geschiedenis?",
        "opties": [
          "De bij",
          "De regenworm",
          "De mier",
          "De mol"
        ],
        "correct": 1
      },
      {
        "v": "Wat is het Wood Wide Web?",
        "opties": [
          "Een houten computer",
          "Schimmelnetwerken die plantenwortels verbinden",
          "Een bostuinwinkel",
          "Een boomsoort"
        ],
        "correct": 1
      },
      {
        "v": "Waarom is gezonde bodem belangrijk voor het klimaat?",
        "opties": [
          "Hij weerkaatst zonlicht",
          "Hij bevat meer koolstof dan de atmosfeer en alle planten samen",
          "Hij maakt regen",
          "Hij koelt de zee af"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-keuze",
    "titel": "De paradox van keuze",
    "doelgroep": "volwassen",
    "niveau": 5,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 244,
    "tekst": "Meer keuze maakt ons niet gelukkiger. Dit contra-intuïtieve inzicht werd beroemd gemaakt door psycholoog Barry Schwartz in zijn boek The Paradox of Choice. In een samenleving met eindeloze opties raken we verlamd, ontevreden en spijtig.\n\nHet beroemde jam-experiment illustreert dit fenomeen. Onderzoekers plaatsten een proevertafel in een supermarkt met soms zes en soms vierentwintig soorten jam. Bij vierentwintig soorten stopten meer mensen, maar bij zes soorten kochten tienmaal meer mensen daadwerkelijk een pot. Te veel keuze leidde tot keuzestress en uitstel.\n\nSchwartz onderscheidt maximizers van satisficers. Maximizers willen altijd de allerbeste optie en doorzoeken eindeloos om zeker te zijn. Satisficers kiezen de eerste optie die goed genoeg is. Paradoxaal genoeg maken satisficers objectief soms slechtere keuzes maar zijn ze subjectief gelukkiger.\n\nOpportunity cost speelt een belangrijke rol. Bij elke keuze denk je aan wat je mist door de alternatieven niet te kiezen. Hoe meer alternatieven, hoe groter het gevoel van gemiste kansen.\n\nSpijt is een andere factor. Met veel opties voelt een teleurstellende keuze als je eigen schuld. Had je beter moeten kiezen. Met weinig opties kun je de schuld aan de omstandigheden geven.\n\nStrategieën om met keuzestress om te gaan zijn onder meer het bewust beperken van je opties, het accepteren van goed genoeg in plaats van perfect, het verminderen van sociale vergelijking en het koesteren van dankbaarheid voor wat je hebt.\n\nIn een wereld die keuze verheerlijkt, is het vermogen om bewust te kiezen wat je niet kiest misschien de belangrijkste vaardigheid.",
    "vragen": [
      {
        "v": "Wat gebeurde er bij de proeverij met vierentwintig soorten jam?",
        "opties": [
          "Iedereen kocht jam",
          "Meer mensen stopten, maar veel minder mensen kochten",
          "Niemand stopte",
          "De winkel verkocht uit"
        ],
        "correct": 1
      },
      {
        "v": "Wat is een satisficer?",
        "opties": [
          "Iemand die altijd het beste zoekt",
          "Iemand die kiest wat goed genoeg is",
          "Iemand die nooit kiest",
          "Iemand die anderen laat kiezen"
        ],
        "correct": 1
      },
      {
        "v": "Waarom voelt een teleurstellende keuze erger bij veel opties?",
        "opties": [
          "De prijs is hoger",
          "Het voelt als je eigen schuld",
          "Anderen lachen je uit",
          "Je kunt niet ruilen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "k-migratie2",
    "titel": "De geheimen van migrerende dieren",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 267,
    "tekst": "Elk jaar leggen miljoenen dieren onvoorstelbare afstanden af op hun migratieroutes. De Noordse stern vliegt jaarlijks van de Noordpool naar de Zuidpool en terug, een reis van meer dan zeventigduizend kilometer. In een mensenleven legt dit vogeltje een afstand af die gelijk is aan drie keer naar de maan en terug.\n\nHoe navigeren deze dieren zo precies over duizenden kilometers? Ze gebruiken een combinatie van methoden die wetenschappers nog steeds verbijsteren. Trekvogels detecteren het aardmagnetisch veld met behulp van cryptochrome-eiwitten in hun ogen. Ze zien letterlijk het magnetische veld als een overlay op hun normale gezichtsveld.\n\nZeeschildpadden keren terug naar het exacte strand waar ze zijn geboren om hun eieren te leggen, soms na decennia op zee. Ze gebruiken het unieke magnetische profiel van hun geboortestrand als navigatiehulpmiddel.\n\nZalmen ruiken de weg naar huis. Na jaren op zee zwemmen ze duizenden kilometers stroomopwaarts naar precies de rivier en de tak waar ze zijn geboren. Hun reukzin is zo verfijnd dat ze individuele waterdruppels kunnen herkennen.\n\nGnoes in de Serengeti migreren in groepen van meer dan een miljoen dieren. Ze volgen de regens en het verse gras in een jaarlijkse cirkel van bijna drieduizend kilometer. Krokodillen en leeuwen wachten hen op bij de rivieroversteken.\n\nMonarchvlinders migreren van Canada naar Mexico, een reis van vijfduizend kilometer. Geen enkele vlinder maakt de hele reis: het zijn de achterkleinkinderen van de vlinders die in het voorjaar naar het noorden vlogen die in het najaar naar het zuiden trekken. Toch vinden ze precies dezelfde bomen als hun voorouders.\n\nDe studie van migratie onthult steeds weer hoe verfijnd en wonderbaarlijk het dierenrijk is.",
    "vragen": [
      {
        "v": "Hoe detecteren trekvogels het aardmagnetisch veld?",
        "opties": [
          "Met hun snavel",
          "Met cryptochrome-eiwitten in hun ogen",
          "Met hun veren",
          "Met hun poten"
        ],
        "correct": 1
      },
      {
        "v": "Hoe vinden zeeschildpadden hun geboortestrand terug?",
        "opties": [
          "Op zicht",
          "Via het magnetische profiel van het strand",
          "Ze volgen andere schildpadden",
          "Op geluid"
        ],
        "correct": 1
      },
      {
        "v": "Hoe groot zijn de groepen migrerende gnoes in de Serengeti?",
        "opties": [
          "Duizend dieren",
          "Meer dan een miljoen dieren",
          "Honderd dieren",
          "Tienduizend dieren"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-kwal",
    "titel": "De onsterfelijke kwal",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 168,
    "tekst": "Er bestaat een kwal die letterlijk onsterfelijk is. De Turritopsis dohrnii, ook wel de \"onsterfelijke kwal\" genoemd, kan zichzelf terugdraaien naar een eerder levensstadium wanneer hij ziek of oud wordt. Stel je voor dat je als bejaarde gewoon weer baby kon worden en opnieuw kon beginnen.\n\nDeze kleine kwal, niet groter dan een pinknagel, werd ontdekt in de Middellandse Zee. Wanneer hij stress ervaart of fysiek beschadigd raakt, transformeert hij zijn cellen terug naar hun jongste vorm. Het is alsof je een omgekeerde knop op je leven hebt.\n\nWetenschappers bestuderen dit diertje intensief in de hoop de geheimen van veroudering te ontrafelen. Helaas betekent onsterfelijkheid niet onkwetsbaarheid. De kwallen worden nog steeds opgegeten door schildpadden en vissen. Ze kunnen ook sterven aan ziektes.\n\nToch is het fascinerend dat de natuur een wezen heeft voortgebracht dat de dood technisch gezien kan ontwijken. Misschien ontdekken we ooit dankzij deze kwal hoe we menselijke veroudering kunnen vertragen. Tot die tijd blijft dit kleine zeediertje het meest bijzondere organisme in de oceaan.",
    "vragen": [
      {
        "v": "Wat kan de Turritopsis dohrnii als hij oud of ziek wordt?",
        "opties": [
          "Sneller zwemmen",
          "Zichzelf terugdraaien naar een jonger stadium",
          "Van kleur veranderen",
          "Zich verstoppen in het zand"
        ],
        "correct": 1
      },
      {
        "v": "Hoe groot is deze kwal ongeveer?",
        "opties": [
          "Zo groot als een auto",
          "Niet groter dan een pinknagel",
          "Zo groot als een voetbal",
          "Twee meter"
        ],
        "correct": 1
      },
      {
        "v": "Waarom kan de kwal alsnog doodgaan?",
        "opties": [
          "Hij verbrandt in de zon",
          "Hij wordt opgegeten of wordt ziek",
          "Hij droogt uit",
          "Hij wordt te oud"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-chips",
    "titel": "Uitvinding per ongeluk: chips",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "eten",
    "collectie": "kort",
    "woorden": 175,
    "tekst": "In 1853 kreeg chef-kok George Crum in een restaurant in Saratoga Springs een ontevreden klant. De man klaagde dat zijn gebakken aardappelen te dik en te slap waren. Crum maakte een nieuwe portie, maar de klant was opnieuw niet tevreden.\n\nGefrustreerd besloot Crum de aardappelen belachelijk dun te snijden, ze knapperig te bakken en er een berg zout overheen te gooien. Hij dacht dat de klant dit nooit zou accepteren. Maar het tegenovergestelde gebeurde: de man was dolenthousiast.\n\nZo werden per ongeluk de chips uitgevonden. Of eigenlijk: de aardappelchip. Crum noemde ze \"Saratoga Chips\" en ze werden al snel de populairste snack in het restaurant. Later opende hij zelfs zijn eigen restaurant waar elke tafel een mandje chips had staan.\n\nHet duurde tot de jaren twintig van de vorige eeuw voordat chips in zakjes werden verkocht. Laura Scudder, een onderneemster uit Californie, bedacht om ze in waxpapier te verpakken. Vandaag de dag is de chipsindustrie miljarden waard. En dat allemaal dankzij een chagrijnige klant en een geirriteerde kok. Soms levert boosheid de lekkerste resultaten op.",
    "vragen": [
      {
        "v": "Waarom sneed kok George Crum de aardappelen flinterdun?",
        "opties": [
          "Om ze sneller te bakken",
          "Uit frustratie over een klagende klant",
          "Om geld te besparen",
          "Het was een recept"
        ],
        "correct": 1
      },
      {
        "v": "Hoe reageerde de klant op de dunne, knapperige aardappelen?",
        "opties": [
          "Hij was boos",
          "Hij was dolenthousiast",
          "Hij at ze niet op",
          "Hij vertrok meteen"
        ],
        "correct": 1
      },
      {
        "v": "Wie bedacht het verpakken van chips in zakjes?",
        "opties": [
          "George Crum",
          "Laura Scudder",
          "De koningin",
          "Een restaurantgast"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-honing",
    "titel": "Honing wordt nooit slecht",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "eten",
    "collectie": "kort",
    "woorden": 180,
    "tekst": "Archeologen hebben potten honing gevonden in Egyptische graven die meer dan drieduizend jaar oud waren. En raad eens? De honing was nog steeds eetbaar. Dat klopt: drieduizend jaar oude honing die je gewoon op je boterham kunt smeren.\n\nHoe is dat mogelijk? Honing heeft een aantal unieke eigenschappen. Ten eerste bevat het extreem weinig vocht. Bacterien en schimmels hebben water nodig om te groeien, en honing geeft ze die kans niet. Ten tweede is honing van nature zuur, met een pH tussen de drie en vier. Dat maakt het een vijandige omgeving voor micro-organismen.\n\nMaar het mooiste is dit: bijen voegen een enzym toe genaamd glucose-oxidase. Dit enzym produceert kleine hoeveelheden waterstofperoxide, een natuurlijk desinfecterend middel. Honing is dus eigenlijk zijn eigen conserveringsmiddel.\n\nDe oude Egyptenaren wisten dit al. Ze gebruikten honing niet alleen als voedsel, maar ook om wonden te behandelen en lichamen te balsemen. Zelfs vandaag wordt medicinale honing in ziekenhuizen gebruikt bij de behandeling van brandwonden.\n\nDus de volgende keer dat je een pot honing achter in je keukenkast vindt: geen zorgen. Die is waarschijnlijk nog prima.",
    "vragen": [
      {
        "v": "Wat vonden archeologen in Egyptische graven?",
        "opties": [
          "Verse melk",
          "Eetbare honing van drieduizend jaar oud",
          "Bevroren brood",
          "Oude chips"
        ],
        "correct": 1
      },
      {
        "v": "Waarom kunnen bacteriën niet groeien in honing?",
        "opties": [
          "Honing is te koud",
          "Honing bevat extreem weinig vocht",
          "Honing is te zoet om aan te raken",
          "Bacteriën houden niet van geel"
        ],
        "correct": 1
      },
      {
        "v": "Waarvoor gebruikten de oude Egyptenaren honing nog meer?",
        "opties": [
          "Als verf",
          "Om wonden te behandelen",
          "Als brandstof",
          "Om huizen te bouwen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-bliksem",
    "titel": "De man die twee keer bliksem overleefde",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "natuur",
    "collectie": "kort",
    "woorden": 188,
    "tekst": "Roy Sullivan was een boswachter in Virginia die tussen 1942 en 1977 maar liefst zeven keer door de bliksem werd getroffen. Zeven keer! En hij overleefde ze allemaal. Hij staat in het Guinness Book of Records als de persoon die het vaakst door bliksem is geraakt.\n\nDe eerste keer verloor hij een teennagel. De tweede keer werden zijn wenkbrauwen weggebrand. De derde keer raakte zijn linkerschouder gewond. Bij de vierde inslag vloog zijn haar in brand. De vijfde keer werd hij uit zijn auto geslingerd. De zesde keer verwondde zijn enkel. En bij de zevende en laatste keer belandde hij in het ziekenhuis met borst- en buikwonden.\n\nSullivan kreeg de bijnaam \"de menselijke bliksemafleider\" en mensen begonnen hem te mijden uit angst dat ze meegetroffen zouden worden. Zijn vrouw werd overigens ook een keer geraakt terwijl ze samen in de tuin werkten.\n\nWiskundig gezien is de kans om zeven keer door bliksem geraakt te worden astronomisch klein. Toch overkwam het deze ene man. Sullivan beweerde dat hij de bliksem soms op zich af kon zien komen als een blauwe vlam. De natuur had duidelijk iets met hem voor.",
    "vragen": [
      {
        "v": "Hoe vaak werd Roy Sullivan door de bliksem getroffen?",
        "opties": [
          "Twee keer",
          "Vijf keer",
          "Zeven keer",
          "Tien keer"
        ],
        "correct": 2
      },
      {
        "v": "Wat was het beroep van Roy Sullivan?",
        "opties": [
          "Piloot",
          "Boswachter",
          "Elektricien",
          "Postbode"
        ],
        "correct": 1
      },
      {
        "v": "Welke bijnaam kreeg Sullivan?",
        "opties": [
          "De donderman",
          "De menselijke bliksemafleider",
          "De vonkenvanger",
          "Mister Storm"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-octopus",
    "titel": "Octopussen hebben drie harten",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 189,
    "tekst": "Een octopus heeft drie harten, negen hersenen en blauw bloed. Nee, dit is geen sciencefiction. Dit is gewoon biologie. Twee van de drie harten pompen bloed naar de kieuwen, terwijl het derde hart bloed door de rest van het lichaam pompt.\n\nHet bloed is blauw omdat het koper bevat in plaats van ijzer. Dit maakt het efficienter in het transporteren van zuurstof bij lage temperaturen in de diepzee. Slim opgelost door de evolutie.\n\nDan die negen hersenen. Een centraal brein zit in het hoofd, maar elke arm heeft ook een eigen mini-brein. Hierdoor kan elke arm min of meer zelfstandig bewegen en beslissingen nemen. Een octopus kan met een arm een puzzel oplossen terwijl de andere armen iets anders doen.\n\nAlsof dat niet genoeg is, kunnen octopussen ook nog van kleur veranderen in milliseconden, door nauwe openingen persen omdat ze geen botten hebben, en gereedschap gebruiken. Ze zijn waargenomen terwijl ze kokosnootschalen verzamelden om als schild te gebruiken.\n\nSommige wetenschappers denken dat octopussen het intelligentste ongewervelde dier op aarde zijn. Als ze langer zouden leven dan twee tot drie jaar, zouden ze misschien hele beschavingen bouwen op de oceaanbodem.",
    "vragen": [
      {
        "v": "Hoeveel harten heeft een octopus?",
        "opties": [
          "Eén",
          "Twee",
          "Drie",
          "Acht"
        ],
        "correct": 2
      },
      {
        "v": "Waarom is het bloed van een octopus blauw?",
        "opties": [
          "Het bevat koper in plaats van ijzer",
          "Door het koude water",
          "Door blauwe algen",
          "Het is een camouflagetruc"
        ],
        "correct": 0
      },
      {
        "v": "Wat verzamelen octopussen soms als schild?",
        "opties": [
          "Stenen",
          "Kokosnootschalen",
          "Schelpen van krabben",
          "Zeewier"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-gapen",
    "titel": "Waarom we gapen is een mysterie",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 189,
    "tekst": "Iedereen gaapt. Honden gapen. Katten gapen. Zelfs vissen gapen. Maar niemand weet precies waarom. Het is een van de grootste kleine mysteries van de wetenschap.\n\nDe meest populaire theorie was altijd dat gapen extra zuurstof naar de hersenen brengt. Maar onderzoek heeft aangetoond dat dit niet klopt. Mensen die pure zuurstof inademen, gapen net zo veel als normaal.\n\nEen nieuwere theorie stelt dat gapen de hersenen afkoelt. Net zoals een ventilator een computer koelt, zou de stroom koele lucht tijdens een gaap de hersentemperatuur reguleren. Experimenten toonden aan dat mensen met een koud kompres op hun voorhoofd minder gaapten.\n\nMaar het vreemdste aspect van gapen is dat het besmettelijk is. Als je iemand ziet gapen, moet je zelf ook gapen. Zelfs het lezen van het woord \"gapen\" kan al genoeg zijn. Gaapt u al? Dit fenomeen lijkt gekoppeld aan empathie. Mensen met een hoger empathisch vermogen zijn gevoeliger voor besmettelijke gapen.\n\nPsychopaten, die bekend staan om hun gebrek aan empathie, reageren nauwelijks op andermans gapen. Dus de volgende keer dat je iemand ziet gapen en je mee moet gapen, weet dan dat het een teken is van je menselijkheid.",
    "vragen": [
      {
        "v": "Wat stelt de nieuwere theorie over gapen?",
        "opties": [
          "Het brengt zuurstof naar de longen",
          "Het koelt de hersenen af",
          "Het traint de kaakspieren",
          "Het maakt je wakker"
        ],
        "correct": 1
      },
      {
        "v": "Met welke eigenschap lijkt besmettelijk gapen samen te hangen?",
        "opties": [
          "Intelligentie",
          "Empathie",
          "Lengte",
          "Leeftijd"
        ],
        "correct": 1
      },
      {
        "v": "Hoe reageren psychopaten op het gapen van anderen?",
        "opties": [
          "Ze gapen extra veel",
          "Ze reageren er nauwelijks op",
          "Ze moeten lachen",
          "Ze vallen in slaap"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-oorlog",
    "titel": "De kortste oorlog ooit",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "geschiedenis",
    "collectie": "kort",
    "woorden": 193,
    "tekst": "De kortste oorlog in de geschiedenis duurde precies 38 minuten. Op 27 augustus 1896 verklaarde het Britse Rijk de oorlog aan het sultanaat Zanzibar, een eiland voor de kust van Oost-Afrika.\n\nDe aanleiding? Sultan Khalid bin Barghash had de troon gegrepen zonder Britse goedkeuring. De Britten stuurden een ultimatum: geef je over voor negen uur 's ochtends, of we vallen aan. Khalid weigerde.\n\nOm precies negen uur openden vijf Britse oorlogsschepen het vuur op het paleis. De sultan had een leger van ongeveer 2.800 man en een oude houten boot die als oorlogsschip diende. Die boot werd al snel tot zinken gebracht. Het paleis stond in brand. Na 38 minuten van bombardement gaf de sultan zich over.\n\nAan Britse zijde was er precies een gewonde. Aan Zanzibarse zijde vielen naar schatting 500 slachtoffers. Sultan Khalid vluchtte naar het Duitse consulaat en leefde later jarenlang in ballingschap.\n\nDe Britten installeerden hun eigen kandidaat als sultan en gingen verder met hun dag. Het hele conflict was korter dan een aflevering van een televisieserie. Deze oorlog bewijst dat lengte niet altijd bepalend is voor impact. In 38 minuten veranderde de geschiedenis van een heel eiland voorgoed.",
    "vragen": [
      {
        "v": "Hoe lang duurde de kortste oorlog in de geschiedenis?",
        "opties": [
          "38 minuten",
          "38 uur",
          "38 dagen",
          "3,8 dagen"
        ],
        "correct": 0
      },
      {
        "v": "Tussen welke partijen werd deze oorlog uitgevochten?",
        "opties": [
          "Engeland en Frankrijk",
          "Het Britse Rijk en Zanzibar",
          "Duitsland en Zanzibar",
          "Portugal en Kenia"
        ],
        "correct": 1
      },
      {
        "v": "Wat was de aanleiding voor de oorlog?",
        "opties": [
          "Een handelsconflict",
          "De sultan greep de troon zonder Britse goedkeuring",
          "Een gestolen schip",
          "Een grensgeschil"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-darmbrein",
    "titel": "Je darmen hebben een eigen brein",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 182,
    "tekst": "In je darmen zit een netwerk van meer dan 500 miljoen zenuwcellen. Dit wordt het enterisch zenuwstelsel genoemd, maar wetenschappers noemen het ook wel je \"tweede brein\". En dat is geen overdrijving.\n\nDit zenuwnetwerk kan volledig zelfstandig functioneren, zonder instructies van je hersenen. Het regelt de spijsvertering, beslist wanneer voedsel door moet en produceert meer dan dertig neurotransmitters. Maar liefst 95 procent van alle serotonine in je lichaam wordt in je darmen aangemaakt. Serotonine is het stofje dat je gelukkig maakt.\n\nDat verklaart waarom je \"vlinders in je buik\" voelt bij spanning, of buikpijn krijgt van stress. Je darmen reageren letterlijk op je emoties. De communicatie gaat overigens vooral van buik naar brein, niet andersom. Je darmen sturen veel meer signalen naar je hoofd dan je hoofd naar je darmen.\n\nRecent onderzoek toont aan dat de bacterien in je darmen zelfs je stemming, je eetlust en misschien zelfs je persoonlijkheid beinvloeden. Mensen met bepaalde darmflora zijn vatbaarder voor depressie of angst.\n\nDe uitdrukking \"op je gevoel afgaan\" krijgt hiermee een heel nieuwe betekenis. Je buikgevoel is misschien letterlijker dan je altijd dacht.",
    "vragen": [
      {
        "v": "Hoe heet het zenuwstelsel in je darmen?",
        "opties": [
          "Het centrale zenuwstelsel",
          "Het enterisch zenuwstelsel",
          "Het perifere zenuwstelsel",
          "Het buikbrein-systeem"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel procent van alle serotonine wordt in je darmen gemaakt?",
        "opties": [
          "5 procent",
          "50 procent",
          "95 procent",
          "20 procent"
        ],
        "correct": 2
      },
      {
        "v": "In welke richting gaat de meeste communicatie?",
        "opties": [
          "Van brein naar buik",
          "Van buik naar brein",
          "Gelijk verdeeld",
          "Er is geen communicatie"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-pizza",
    "titel": "De pizza die de wereld veroverde",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "eten",
    "collectie": "kort",
    "woorden": 192,
    "tekst": "Pizza zoals wij die kennen is eigenlijk vrij jong. Pas in 1889 werd de beroemdste pizza ter wereld uitgevonden. Bakker Raffaele Esposito uit Napels maakte een speciale pizza voor koningin Margherita van Italie. Hij gebruikte tomaat, mozzarella en basilicum: rood, wit en groen, de kleuren van de Italiaanse vlag.\n\nDe koningin was zo enthousiast dat de pizza naar haar werd vernoemd: pizza Margherita. Maar voor die tijd was pizza eigenlijk straatvoedsel voor arme mensen in Napels. De rijken keken erop neer.\n\nDe echte explosie kwam pas na de Tweede Wereldoorlog. Amerikaanse soldaten die in Italie hadden gevochten, kwamen terug met een obsessie voor pizza. In de jaren vijftig openden overal in Amerika pizzeria's. En van daaruit veroverde pizza de wereld.\n\nVandaag worden er dagelijks meer dan vijf miljard pizza's per jaar verkocht wereldwijd. In Noorwegen wordt de meeste pizza per hoofd van de bevolking gegeten. De duurste pizza ter wereld kost meer dan twaalfduizend dollar en wordt bestrooid met bladgoud.\n\nHet grappigste feit? In 2001 werd de eerste pizza naar het internationale ruimtestation gestuurd. Pizza Hut betaalde een miljoen dollar om pizza in de ruimte te bezorgen. Zelfs astronauten kunnen niet zonder.",
    "vragen": [
      {
        "v": "Voor wie maakte bakker Raffaele Esposito de beroemde pizza in 1889?",
        "opties": [
          "De paus",
          "Koningin Margherita",
          "De burgemeester van Napels",
          "Zijn moeder"
        ],
        "correct": 1
      },
      {
        "v": "Welke kleuren had de pizza Margherita en waarom?",
        "opties": [
          "Rood-wit-groen, de Italiaanse vlag",
          "Geel-rood, de kleuren van Napels",
          "Wit-blauw, voor de zee",
          "Willekeurige kleuren"
        ],
        "correct": 0
      },
      {
        "v": "Hoe kwam pizza na de Tweede Wereldoorlog naar Amerika?",
        "opties": [
          "Via Italiaanse restaurants in Parijs",
          "Amerikaanse soldaten namen de liefde voor pizza mee terug",
          "Per schip vol pizza's",
          "Via een kookboek"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-wombat",
    "titel": "Wombats poepen kubussen",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 181,
    "tekst": "Van alle vreemde feiten in de dierenwereld is dit misschien het bizarste: wombats produceren kubusvormige uitwerpselen. Ja, echt. Perfecte kleine blokjes. En wetenschappers hebben lang niet begrepen hoe dat mogelijk was.\n\nIn 2018 ontdekte een team van de Georgia Institute of Technology eindelijk het antwoord. De darmen van een wombat hebben plekken met verschillende elasticiteit. Sommige delen zijn stijver dan andere, waardoor de ontlasting tijdens het passeren langzaam in een kubusvorm wordt geperst.\n\nMaar waarom zou een dier kubusvormige poep willen? Het antwoord is verrassend praktisch. Wombats gebruiken hun uitwerpselen om hun territorium te markeren. Ze plaatsen ze op rotsen en boomstammen. En kubussen rollen niet weg. Een ronde drol zou van een rots af rollen, maar een blokje blijft keurig liggen.\n\nEen wombat produceert elke nacht ongeveer tachtig tot honderd van deze kubusjes. Ze hebben ook de bijzondere gewoonte om achterstevoren hun hol binnen te kruipen, zodat hun extreem dikke en harde achterwerk als een soort deur fungeert tegen roofdieren.\n\nDit alles bewijst maar weer dat de natuur oneindig creatief is, zelfs op plekken waar je het niet zou verwachten.",
    "vragen": [
      {
        "v": "Welke vorm hebben de uitwerpselen van een wombat?",
        "opties": [
          "Rond",
          "Kubusvormig",
          "Driehoekig",
          "Plat"
        ],
        "correct": 1
      },
      {
        "v": "Waarom is die vorm handig voor wombats?",
        "opties": [
          "Het is makkelijker",
          "Kubussen rollen niet weg van rotsen",
          "Het gaat sneller",
          "Roofdieren schrikken ervan"
        ],
        "correct": 1
      },
      {
        "v": "Hoe beschermt een wombat zijn hol?",
        "opties": [
          "Met stenen",
          "Met zijn dikke, harde achterwerk als deur",
          "Met takken",
          "Door te bijten"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-placebo",
    "titel": "Het Placebo-effect werkt altijd",
    "doelgroep": "volwassen",
    "niveau": 4,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 192,
    "tekst": "Een van de vreemdste fenomenen in de geneeskunde is het placebo-effect. Geef iemand een suikerpil en vertel dat het medicijn is, en die persoon voelt zich echt beter. Maar het wordt nog gekker dan dat.\n\nUit onderzoek blijkt dat placebo's zelfs werken als je weet dat het een placebo is. Ja, je leest het goed. Wetenschappers van Harvard gaven patienten met het prikkelbare darmsyndroom pillen met het etiket \"placebo\" erop. Ze vertelden de patienten eerlijk dat er geen werkzame stoffen in zaten. Toch verbeterde de groep die de placebo's nam significant meer dan de groep die niks kreeg.\n\nDe kleur van de pil maakt ook uit. Blauwe pillen werken beter als kalmeringsmiddel. Rode pillen werken beter als stimulerend middel. Grote pillen werken beter dan kleine. En twee placebo's werken beter dan een.\n\nZelfs nep-operaties werken. In studies waarbij chirurgen patienten alleen opesneden en weer dichtnaaiden zonder iets te doen, rapporteerden patienten soms evenveel verbetering als bij echte operaties.\n\nOns brein is zo krachtig dat de verwachting van genezing daadwerkelijk genezing kan triggeren. Het lichaam maakt dan echt pijnstillers en ontstekingsremmers aan. De grens tussen verbeelding en werkelijkheid is dunner dan we denken.",
    "vragen": [
      {
        "v": "Wat deden Harvard-onderzoekers met de placebo-pillen?",
        "opties": [
          "Ze verstopten ze in eten",
          "Ze vertelden eerlijk dat het placebo's waren",
          "Ze maakten ze extra groot",
          "Ze gaven ze alleen 's nachts"
        ],
        "correct": 1
      },
      {
        "v": "Welke pillen werken beter als kalmeringsmiddel?",
        "opties": [
          "Rode",
          "Blauwe",
          "Gele",
          "Groene"
        ],
        "correct": 1
      },
      {
        "v": "Wat gebeurde er bij nep-operaties?",
        "opties": [
          "Patiënten werden zieker",
          "Patiënten rapporteerden soms evenveel verbetering als bij echte operaties",
          "Niemand merkte iets",
          "De operaties mislukten"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-bananen",
    "titel": "Bananen zijn radioactief",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 196,
    "tekst": "Elke banaan die je eet is een klein beetje radioactief. Bananen bevatten namelijk kalium, en een deel daarvan is de radioactieve isotoop kalium-40. Maar voordat je in paniek raakt: je zou ongeveer tien miljoen bananen tegelijk moeten eten om een dodelijke stralingsdosis te krijgen.\n\nWetenschappers gebruiken de \"banaanequivalente dosis\" zelfs als informele meeteenheid voor straling. Een banaan levert ongeveer 0,1 microsievert aan straling. Ter vergelijking: een rontgenfoto van je borst is gelijk aan ongeveer honderd bananen.\n\nMaar bananen zijn niet de enige radioactieve voedingsmiddelen. Paranoten zijn veel radioactiver vanwege het selenium en radium dat ze bevatten. Wortels, aardappelen en zonnebloempitten zijn ook licht radioactief.\n\nEigenlijk is je eigen lichaam ook radioactief. Je bevat ongeveer zestien milligram kalium-40, waardoor je constant een kleine hoeveelheid straling uitzendt. Je straalt letterlijk. Twee mensen die naast elkaar in bed slapen, bestralen elkaar de hele nacht met minuscule doses.\n\nDe aarde zelf is ook radioactief, net als kosmische stralen uit de ruimte die ons continu bombarderen. Straling is overal om ons heen, altijd. De hoeveelheden zijn alleen zo klein dat ons lichaam er moeiteloos mee omgaat. Dus eet gerust je banaan. Je hebt ergere dingen om je zorgen over te maken.",
    "vragen": [
      {
        "v": "Waarom zijn bananen een klein beetje radioactief?",
        "opties": [
          "Door bestrijdingsmiddelen",
          "Door het kalium dat ze bevatten",
          "Door de gele schil",
          "Door de zon"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel bananen zou je tegelijk moeten eten voor een gevaarlijke dosis?",
        "opties": [
          "Honderd",
          "Duizend",
          "Tien miljoen",
          "Vijftig"
        ],
        "correct": 2
      },
      {
        "v": "Welke noten zijn nog radioactiever dan bananen?",
        "opties": [
          "Pinda's",
          "Paranoten",
          "Walnoten",
          "Cashewnoten"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-kleopatra",
    "titel": "Kleopatra en de piramides",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "geschiedenis",
    "collectie": "kort",
    "woorden": 204,
    "tekst": "Hier is een feit dat je tijdsgevoel volledig op zijn kop zet: Kleopatra leefde dichter bij de lancering van de iPhone dan bij de bouw van de Grote Piramide van Gizeh. Lees die zin nog eens.\n\nDe Grote Piramide werd rond 2560 voor Christus gebouwd. Kleopatra leefde rond 30 voor Christus. Dat is een verschil van ongeveer 2500 jaar. De iPhone werd gelanceerd in 2007, slechts 2037 jaar na Kleopatra. De piramides waren voor Kleopatra dus al even oud als zij nu voor ons is.\n\nDit illustreert hoe slecht mensen zijn in het inschatten van historische tijdspannen. We gooien alles uit de oudheid op een hoop, maar de Egyptische beschaving duurde meer dan drieduizend jaar. Dat is langer dan de hele westerse beschaving na Christus.\n\nNog een voorbeeld: de laatste mammoet stierf rond 1700 voor Christus op het eiland Wrangel. Dat betekent dat er nog mammoeten rondliepen toen de piramides al duizend jaar oud waren. De Stegosaurus leefde verder van de Tyrannosaurus Rex af in de tijd dan de T-Rex van ons.\n\nTijd is een vreemde dimensie. Ons brein is er simpelweg niet voor gemaakt om duizenden jaren te bevatten. Alles wat lang geleden is voelt als \"vroeger\", terwijl de werkelijke afstanden enorm zijn.",
    "vragen": [
      {
        "v": "Waar leefde Kleopatra dichter bij in de tijd?",
        "opties": [
          "De bouw van de piramides",
          "De lancering van de iPhone",
          "De dinosaurussen",
          "De eerste mens"
        ],
        "correct": 1
      },
      {
        "v": "Hoe lang duurde de Egyptische beschaving?",
        "opties": [
          "Driehonderd jaar",
          "Duizend jaar",
          "Meer dan drieduizend jaar",
          "Honderd jaar"
        ],
        "correct": 2
      },
      {
        "v": "Wat leefde er nog toen de piramides al duizend jaar oud waren?",
        "opties": [
          "Dinosaurussen",
          "Mammoeten",
          "Sabeltandtijgers",
          "Dodo's"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-planten",
    "titel": "Planten praten met elkaar",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "natuur",
    "collectie": "kort",
    "woorden": 193,
    "tekst": "Planten zijn niet de stille, passieve wezens die we altijd dachten. Ze communiceren constant met elkaar, alleen niet met geluid. Ze gebruiken chemische signalen, schimmelnetwerken onder de grond en zelfs elektrische impulsen.\n\nWanneer een plant wordt aangevallen door insecten, produceert hij chemische stoffen die de lucht in gaan. Naburige planten ruiken deze stoffen en beginnen preventief hun eigen verdediging op te bouwen, nog voordat de insecten bij hen aankomen. Het is alsof je buurman schreeuwt dat er een inbreker is, zodat jij alvast je deuren op slot doet.\n\nOnder de grond wordt het nog indrukwekkender. Schimmelnetwerken verbinden de wortels van verschillende bomen en planten. Via dit netwerk, dat wetenschappers het \"Wood Wide Web\" noemen, delen bomen voedingsstoffen en waarschuwingen. Moederbomen sturen suikers naar hun zaailingen die in de schaduw staan. Zieke bomen dumpen hun voedsel in het netwerk zodat buren ervan profiteren.\n\nSommige planten kunnen zelfs tot twintig verschillende chemische signalen produceren, afhankelijk van welk insect ze aanvalt. Ze kunnen ook bevriende insecten lokken die hun vijanden opeten. Een tomatenplant die door rupsen wordt aangevallen, stuurt geursignalen die sluipwespen aantrekken. Die wespen leggen vervolgens eitjes in de rupsen. Briljant en een beetje griezelig.",
    "vragen": [
      {
        "v": "Hoe waarschuwen planten hun buren voor insecten?",
        "opties": [
          "Met geluid",
          "Met chemische stoffen in de lucht",
          "Met trillingen",
          "Met kleuren"
        ],
        "correct": 1
      },
      {
        "v": "Wat doet een tomatenplant die door rupsen wordt aangevallen?",
        "opties": [
          "Hij laat zijn bladeren vallen",
          "Hij lokt sluipwespen die de rupsen aanvallen",
          "Hij wordt giftig",
          "Hij groeit sneller"
        ],
        "correct": 1
      },
      {
        "v": "Wat delen moederbomen via het ondergrondse netwerk?",
        "opties": [
          "Water alleen",
          "Suikers met hun zaailingen",
          "Zaden",
          "Bladeren"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-linkshandig",
    "titel": "Het mysterie van de linkshandigen",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 193,
    "tekst": "Ongeveer tien procent van de wereldbevolking is linkshandig en niemand weet precies waarom. Het percentage is al minstens vijfduizend jaar stabiel. Grotkunst en gereedschappen uit de prehistorie tonen aan dat ook toen ongeveer een op de tien mensen linkshandig was.\n\nLinkshandigen hebben het historisch gezien niet makkelijk gehad. Het woord \"sinister\" komt van het Latijnse woord voor links. In veel culturen werd linkshandigheid gezien als een teken van het kwaad. Tot ver in de twintigste eeuw werden kinderen gedwongen om met rechts te schrijven.\n\nToch zijn er opvallend veel linkshandigen onder genieeen en leiders. Vijf van de laatste negen Amerikaanse presidenten waren linkshandig. Leonardo da Vinci, Marie Curie, Aristoteles en Albert Einstein waren het ook. Toeval of zit er meer achter?\n\nOnderzoek suggereert dat linkshandigen gemiddeld iets creatiever denken, omdat bij hen de rechterhersenhelft dominanter is. Ze zijn ook oververtegenwoordigd in sporten als boksen, tennis en schermen, omdat tegenstanders niet gewend zijn aan hun hoeken.\n\nHet nadeel? De hele wereld is ontworpen voor rechtshandigen. Scharen, bureaus, muizen, ringbanden: alles zit linkshandigen in de weg. Ze morsen vaker soep en vegen hun eigen handschrift uit. Het leven als linkshandige is een dagelijkse kleine strijd.",
    "vragen": [
      {
        "v": "Hoeveel procent van de mensen is linkshandig?",
        "opties": [
          "Ongeveer tien procent",
          "Ongeveer dertig procent",
          "Ongeveer vijftig procent",
          "Ongeveer één procent"
        ],
        "correct": 0
      },
      {
        "v": "Waar komt het woord \"sinister\" vandaan?",
        "opties": [
          "Van het Latijnse woord voor links",
          "Van een Griekse god",
          "Van een filmtitel",
          "Van het woord sinaasappel"
        ],
        "correct": 0
      },
      {
        "v": "Waarom zijn linkshandigen goed in sporten als boksen en tennis?",
        "opties": [
          "Ze zijn sterker",
          "Tegenstanders zijn niet gewend aan hun hoeken",
          "Ze trainen harder",
          "Ze zien beter"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-katten",
    "titel": "Hoe katten de wereld veroverden",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 202,
    "tekst": "Katten hebben de mens niet nodig gehad om gedomesticeerd te worden. Zij hebben zichzelf uitgenodigd. Ongeveer tienduizend jaar geleden begonnen mensen in het Midden-Oosten graan op te slaan. Die graanschuren trokken muizen aan, en de muizen trokken wilde katten aan.\n\nDe katten die het minst bang waren voor mensen, bleven in de buurt en kregen de meeste muizen te eten. Zo selecteerden ze zichzelf op tamheid, zonder dat de mens er actief iets aan deed. In tegenstelling tot honden, die we doelbewust hebben gefokt, hebben katten ons eigenlijk gekoloniseerd.\n\nDe oude Egyptenaren waren de eersten die katten echt aanbaden. De godin Bastet had het hoofd van een kat. Het doden van een kat werd bestraft met de dood. Wanneer een huiskat stierf, schoren de eigenaren hun wenkbrauwen af als teken van rouw.\n\nVandaag zijn er naar schatting zeshonderd miljoen huiskatten wereldwijd. Ze hebben elk continent bereikt, inclusief onderzoeksstations in Antarctica. Op het internet zijn katten de absolute koning: kattenvideo's genereren meer weergaven dan welke andere dierencategorie ook.\n\nHet meest indrukwekkende? Genetisch gezien zijn huiskatten nauwelijks veranderd ten opzichte van hun wilde voorouders. Ze zijn in wezen nog steeds wilde dieren die ervoor hebben gekozen bij ons te wonen. Op hun voorwaarden, uiteraard.",
    "vragen": [
      {
        "v": "Hoe raakten katten ongeveer tienduizend jaar geleden aan de mens gewend?",
        "opties": [
          "Mensen vingen ze",
          "Ze kwamen af op muizen bij graanschuren",
          "Ze werden gefokt als jagers",
          "Ze zwommen naar dorpen"
        ],
        "correct": 1
      },
      {
        "v": "Wat deden Egyptenaren als hun huiskat stierf?",
        "opties": [
          "Ze verhuisden",
          "Ze schoren hun wenkbrauwen af uit rouw",
          "Ze namen meteen een nieuwe kat",
          "Ze bouwden een piramide"
        ],
        "correct": 1
      },
      {
        "v": "Hoe verschillen huiskatten genetisch van hun wilde voorouders?",
        "opties": [
          "Enorm veel",
          "Nauwelijks",
          "Volledig",
          "Alleen hun kleur is anders"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-fobie",
    "titel": "De vreemdste phobieen",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "psychologie",
    "collectie": "kort",
    "woorden": 197,
    "tekst": "De mens kan overal bang voor worden. Letterlijk overal. Er bestaan officieel erkende phobieen voor de meest onverwachte dingen. Neem hippopotomonstrosesquippedaliofobie: de angst voor lange woorden. Ja, de naam van de fobie is zelf een lang woord. Iemand had duidelijk gevoel voor humor.\n\nDan is er anatidaefobie: de irrationele angst dat ergens, op de een of andere manier, een eend naar je kijkt. Niet dat hij je aanvalt, maar gewoon dat hij je observeert. Vervelend als je bij een vijver woont.\n\nArachibutyrofobie is de angst dat pindakaas aan je gehemelte plakt. Ombrofie is angst voor regen. Pogonofie is angst voor baarden. Nomofie is de angst om zonder je mobiele telefoon te zitten, en die laatste is tegenwoordig misschien wel de meest voorkomende.\n\nDe meest filosofische is wellicht fobofobie: de angst om een fobie te ontwikkelen. Je bent bang om bang te worden. Het is angst die zichzelf voedt.\n\nPhobieen ontstaan meestal door een traumatische ervaring of door aangeleerd gedrag. Je brein koppelt iets onschuldigs aan gevaar en vanaf dat moment slaat het alarm bij elk contact. Het goede nieuws is dat de meeste phobieen goed behandelbaar zijn met therapie. Zelfs de angst voor eenden die je bespieden.",
    "vragen": [
      {
        "v": "Wat is hippopotomonstrosesquippedaliofobie?",
        "opties": [
          "Angst voor nijlpaarden",
          "Angst voor lange woorden",
          "Angst voor monsters",
          "Angst voor water"
        ],
        "correct": 1
      },
      {
        "v": "Wat is arachibutyrofobie?",
        "opties": [
          "Angst voor spinnen",
          "Angst dat pindakaas aan je gehemelte plakt",
          "Angst voor boter",
          "Angst voor vogels"
        ],
        "correct": 1
      },
      {
        "v": "Hoe ontstaan fobieën meestal?",
        "opties": [
          "Ze zijn erfelijk",
          "Door een traumatische ervaring of aangeleerd gedrag",
          "Door te weinig slaap",
          "Door verkeerde voeding"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-ruimtepak",
    "titel": "Ruimtepakken kosten miljoenen",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "techniek",
    "collectie": "kort",
    "woorden": 204,
    "tekst": "Een NASA-ruimtepak kost ongeveer twaalf miljoen dollar. En dat is de prijs uit de jaren tachtig. Aangepast voor inflatie is het nog meer. Het is in feite een klein ruimteschip dat je draagt. En elk pak wordt op maat gemaakt voor de astronaut.\n\nEen ruimtepak moet beschermen tegen extreme temperaturen: van min 150 graden in de schaduw tot plus 120 graden in de zon. Het moet zuurstof leveren, kooldioxide afvoeren en de druk reguleren. Het bevat een communicatiesysteem, een drinkzakje en zelfs een luier, want toiletpauzes zijn lastig in de ruimte.\n\nHet aankleden duurt ongeveer 45 minuten en astronauten kunnen er maximaal acht uur in werken. De handschoenen zijn het lastigste onderdeel. Ze moeten dik genoeg zijn voor bescherming, maar dun genoeg om gereedschap te kunnen vasthouden. Veel astronauten verliezen hun vingernagels door de druk in de handschoenen.\n\nHet grappige is dat NASA momenteel een tekort aan ruimtepakken heeft. De originele pakken uit de jaren tachtig zijn versleten en nieuwe zijn nog in ontwikkeling. Er zijn slechts elf volledig functionerende pakken over, en ze worden constant gerepareerd.\n\nSpaceX heeft inmiddels eigen pakken ontworpen die er een stuk eleganter uitzien. Maar in de ruimte gaat functie boven mode. Je leven hangt er letterlijk van af.",
    "vragen": [
      {
        "v": "Hoeveel kost een NASA-ruimtepak ongeveer?",
        "opties": [
          "Twaalfduizend dollar",
          "Twaalf miljoen dollar",
          "Een miljard dollar",
          "Honderdduizend dollar"
        ],
        "correct": 1
      },
      {
        "v": "Wat is het lastigste onderdeel van een ruimtepak?",
        "opties": [
          "De helm",
          "De handschoenen",
          "De schoenen",
          "De rits"
        ],
        "correct": 1
      },
      {
        "v": "Tegen welke temperaturen moet een ruimtepak beschermen?",
        "opties": [
          "Van 0 tot 40 graden",
          "Van min 150 tot plus 120 graden",
          "Van min 10 tot plus 50 graden",
          "Alleen tegen kou"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-flamingo",
    "titel": "Waarom flamingo's roze zijn",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 199,
    "tekst": "Flamingo's worden niet roze geboren. Ze zijn eigenlijk grijs. Hun iconische roze kleur komt volledig van hun dieet. Flamingo's eten garnalen, algen en kleine kreeftachtigen die carotenoide pigmenten bevatten. Deze pigmenten worden opgenomen in hun veren, huid en snavel.\n\nIn gevangenschap verliezen flamingo's hun roze kleur als ze niet het juiste voedsel krijgen. Dierentuinen moeten speciaal voer met toegevoegde carotenoiden geven om de vogels roze te houden. Zonder dat worden ze langzaam weer wit of grijs.\n\nHoe rozer een flamingo, hoe gezonder en beter gevoed hij is. Dit speelt ook een rol bij de partnerkeuse. Felroze flamingo's worden als aantrekkelijker beschouwd. Het is alsof je op een datingapp alleen matches krijgt als je genoeg groenten eet.\n\nFlamingo's zijn ook om andere redenen bijzonder. Ze kunnen alleen eten met hun hoofd ondersteboven. Hun knieen buigen niet achterwaarts zoals het lijkt. Wat wij hun knie noemen, is eigenlijk hun enkel. Hun echte knie zit verborgen onder de veren bij het lichaam.\n\nZe slapen op een been, en wetenschappers denken dat dit eigenlijk minder energie kost dan op twee benen staan. De balans wordt passief geregeld door hun gewrichten, zonder spierinspanning. Flamingo's zijn wandelende wonderen van de evolutie met een geweldig kleurendieet.",
    "vragen": [
      {
        "v": "Welke kleur hebben flamingo's bij hun geboorte?",
        "opties": [
          "Roze",
          "Grijs",
          "Wit",
          "Zwart"
        ],
        "correct": 1
      },
      {
        "v": "Waar komt de roze kleur vandaan?",
        "opties": [
          "Van de zon",
          "Van hun voedsel",
          "Van het water",
          "Ze verven zichzelf"
        ],
        "correct": 1
      },
      {
        "v": "Wat is het gewricht dat wij de \"knie\" van een flamingo noemen eigenlijk?",
        "opties": [
          "De heup",
          "De enkel",
          "De teen",
          "Het is echt de knie"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-internet",
    "titel": "Het internet weegt iets",
    "doelgroep": "teens",
    "niveau": 4,
    "onderwerp": "techniek",
    "collectie": "kort",
    "woorden": 201,
    "tekst": "Alle data op het hele internet samen weegt ongeveer vijftig gram. Dat is het gewicht van een aardbei. Hoe kan dat? Omdat data wordt opgeslagen als elektronen, en elektronen hebben massa, hoe onvoorstelbaar klein ook.\n\nEen professor aan de Universiteit van California berekende dit. Elke bit informatie wordt opgeslagen door een klein aantal elektronen in een transistor. Een elektron weegt 0,00000000000000000000000000091 gram. Maar met de triljoenen triljoenen bits op het internet telt het op tot ongeveer een aardbei.\n\nDit betekent technisch gezien dat je telefoon zwaarder wordt als je meer bestanden opslaat. Het verschil is alleen zo minuscuul dat geen enkele weegschaal het kan meten. Maar het is waar.\n\nDe fysieke infrastructuur van het internet is natuurlijk een ander verhaal. De servers, kabels en datacenters wegen miljoenen tonnen. Datacenters verbruiken ongeveer twee procent van alle elektriciteit op aarde. Google alleen al gebruikt evenveel stroom als de stad San Francisco.\n\nEr liggen meer dan vierhonderd onderzeese kabels op de oceaanbodem die continenten met elkaar verbinden. Deze kabels, sommige zo dun als een tuinslang, dragen meer dan 95 procent van al het internationale internetverkeer. Haaien bijten er regelmatig in, niemand weet precies waarom. Google heeft zijn kabels daarom voorzien van een haaibestendige coating.",
    "vragen": [
      {
        "v": "Hoeveel weegt alle data op het internet samen ongeveer?",
        "opties": [
          "Vijftig kilo",
          "Vijftig gram — het gewicht van een aardbei",
          "Vijf ton",
          "Helemaal niets"
        ],
        "correct": 1
      },
      {
        "v": "Hoe reist meer dan 95 procent van het internationale internetverkeer?",
        "opties": [
          "Via satellieten",
          "Via onderzeese kabels",
          "Via zendmasten",
          "Via vliegtuigen"
        ],
        "correct": 1
      },
      {
        "v": "Waarom kregen de kabels van Google een speciale coating?",
        "opties": [
          "Tegen roest",
          "Tegen haaienbeten",
          "Tegen de kou",
          "Voor de snelheid"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-postits",
    "titel": "De uitvinding van post-its",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "techniek",
    "collectie": "kort",
    "woorden": 200,
    "tekst": "In 1968 probeerde wetenschapper Spencer Silver bij 3M een supersterke lijm te ontwikkelen. Het resultaat was het tegenovergestelde: een lijm die nauwelijks plakte. Het leek een complete mislukking. De lijm hechtte wel aan oppervlakken, maar was makkelijk los te trekken zonder residu achter te laten.\n\nSilver probeerde jarenlang een toepassing te vinden voor zijn mislukte lijm, maar niemand was geinteresseerd. Tot zijn collega Art Fry in 1974 een irritant probleem had. De boekenleggers in zijn kerkgezangboek vielen er steeds uit.\n\nFry smeerde wat van Silvers zwakke lijm op een papiertje en plakte het in zijn boek. Het bleef zitten, maar kon ook makkelijk worden verplaatst zonder de pagina te beschadigen. Het idee voor de Post-it was geboren.\n\nToch duurde het nog zes jaar voordat 3M het product op de markt bracht. Interne twijfels waren groot. Wie zou er betalen voor een briefje dat niet goed plakte? Bij de marktintroductie in 1980 in vier steden flopte het product aanvankelijk.\n\nMaar toen 3M gratis samples uitdeelde, veranderde alles. Iedereen die Post-its uitprobeerde, wilde meer. Vandaag verkoopt 3M meer dan vijftig miljard Post-its per jaar in meer dan honderd landen. De mislukte lijm werd uiteindelijk een van de meest succesvolle kantoorproducten aller tijden.",
    "vragen": [
      {
        "v": "Wat probeerde Spencer Silver eigenlijk te maken?",
        "opties": [
          "Een notitieboekje",
          "Een supersterke lijm",
          "Gekleurd papier",
          "Een boekenlegger"
        ],
        "correct": 1
      },
      {
        "v": "Welk probleem had zijn collega Art Fry?",
        "opties": [
          "Zijn pen lekte",
          "Zijn boekenleggers vielen uit zijn gezangboek",
          "Hij verloor zijn notities",
          "Zijn bureau was te klein"
        ],
        "correct": 1
      },
      {
        "v": "Wanneer werd de Post-it eindelijk een succes?",
        "opties": [
          "Meteen bij de lancering",
          "Toen 3M gratis samples uitdeelde",
          "Pas na vijftig jaar",
          "Toen de prijs omlaag ging"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-koala",
    "titel": "Koala's en hun vingerafdrukken",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 191,
    "tekst": "Koala's hebben vingerafdrukken die zo sterk op menselijke vingerafdrukken lijken dat ze zelfs forensisch experts kunnen misleiden. Onder een microscoop zijn ze vrijwel niet te onderscheiden. Dit is bijzonder omdat koala's en mensen evolutionair al meer dan honderd miljoen jaar geleden uit elkaar zijn gegaan.\n\nDit fenomeen heet convergente evolutie: twee totaal verschillende soorten ontwikkelen onafhankelijk van elkaar dezelfde eigenschap. Koala's hebben vingerafdrukken ontwikkeld omdat ze helpen bij het grijpen van boomtakken en het voelen van texturen van eucalyptusbladeren.\n\nKoala's zijn sowieso vreemde beesten. Ze slapen twintig uur per dag. Hun enige voedsel, eucalyptus, is giftig voor bijna alle andere dieren. Koala's hebben een speciaal orgaan, de blinde darm, dat de giftige stoffen afbreekt. Baby-koala's eten de ontlasting van hun moeder om de juiste bacterien te krijgen voor het verteren van eucalyptus.\n\nHun hersenen zijn ook opmerkelijk. Koala's hebben een van de kleinste hersenen in verhouding tot hun lichaamsgewicht van alle zoogdieren. Hun schedel is voor dertig procent gevuld met hersenvloeistof in plaats van hersenweefsel.\n\nOndanks al deze eigenaardigheden zijn koala's al miljoenen jaren succesvol. Ze hebben hun niche gevonden en vullen die perfect in. Soms is specialisatie de beste strategie.",
    "vragen": [
      {
        "v": "Waarom zijn de vingerafdrukken van koala's bijzonder?",
        "opties": [
          "Ze zijn vierkant",
          "Ze lijken sprekend op die van mensen",
          "Ze veranderen elke dag",
          "Ze hebben er geen"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel uur per dag slaapt een koala?",
        "opties": [
          "Acht uur",
          "Twaalf uur",
          "Twintig uur",
          "Vier uur"
        ],
        "correct": 2
      },
      {
        "v": "Wat is het enige voedsel van koala's?",
        "opties": [
          "Bamboe",
          "Eucalyptus",
          "Gras",
          "Fruit"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-levitatie",
    "titel": "Geluid kan water laten zweven",
    "doelgroep": "teens",
    "niveau": 4,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 196,
    "tekst": "Met geluidsgolven kun je kleine voorwerpen laten zweven. Dit heet akoestische levitatie en het werkt echt. Wetenschappers gebruiken ultrasone luidsprekers die geluidsgolven produceren die zo sterk zijn dat ze de zwaartekracht tegenwerken.\n\nHet principe is simpel. Geluid is trilling, en trillingen oefenen kracht uit. Als je twee luidsprekers tegenover elkaar plaatst die exact dezelfde frequentie uitzenden, ontstaan er zogenaamde staande golven. Op bepaalde punten in die golven heffen de krachten de zwaartekracht op. Kleine objecten blijven dan zweven op die punten.\n\nOnderzoekers aan de Universiteit van Zurich hebben aangetoond dat je op deze manier waterdruppels, kleine stukjes piepschuim en zelfs levende insecten kunt laten zweven. De insecten overleefden het trouwens prima.\n\nDe toepassingen zijn verrassend praktisch. In de farmaceutische industrie wordt akoestische levitatie gebruikt om chemische reacties te bestuderen zonder dat stoffen een container raken. Dat is belangrijk omdat sommige stoffen anders reageren wanneer ze een oppervlak aanraken.\n\nNASA onderzoekt de technologie voor het verwerken van materialen in de ruimte. En in de toekomst zou akoestische levitatie misschien gebruikt kunnen worden om medicijnen nauwkeuriger te mengen of om kwetsbare electronische componenten te assembleren zonder ze aan te raken. De kracht van geluid is letterlijk zwevend mooi.",
    "vragen": [
      {
        "v": "Hoe heet het zweven van voorwerpen door geluid?",
        "opties": [
          "Magnetische levitatie",
          "Akoestische levitatie",
          "Sonische zweving",
          "Echolocatie"
        ],
        "correct": 1
      },
      {
        "v": "Wat ontstaat er tussen twee luidsprekers met dezelfde frequentie?",
        "opties": [
          "Stilte",
          "Staande golven",
          "Elektriciteit",
          "Warmte"
        ],
        "correct": 1
      },
      {
        "v": "Waarvoor gebruikt de farmaceutische industrie deze techniek?",
        "opties": [
          "Om pillen te vervoeren",
          "Om reacties te bestuderen zonder dat stoffen een container raken",
          "Om medicijnen te verwarmen",
          "Om flesjes te vullen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-deepblue",
    "titel": "Schaakcomputers en pizza",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "techniek",
    "collectie": "kort",
    "woorden": 201,
    "tekst": "In 1997 versloeg de IBM-computer Deep Blue wereldkampioen schaken Garry Kasparov. Het was een historisch moment: de eerste keer dat een machine de beste menselijke schaker versloeg in een officieel toernooi. Kasparov was woedend en beschuldigde IBM van valsspelen.\n\nMaar hier wordt het grappig. Deep Blue kon 200 miljoen schaakposities per seconde berekenen, maar hij begreep eigenlijk helemaal niks van schaken. De computer had geen strategie, geen intuïtie en geen creativiteit. Hij rekende simpelweg alle mogelijke zetten door en koos de statistisch beste.\n\nKasparov eiste een rematch, maar IBM weigerde en ontmantelde Deep Blue. De computer werd nooit meer gebruikt. De hardware staat nu in een museum.\n\nVandaag is elke schak-app op je telefoon sterker dan Deep Blue. Een gratis app op een smartphone uit 2020 zou Deep Blue vernietigen. De vooruitgang in rekenkracht is absurd.\n\nHet meest menselijke moment van het hele toernooi? Tijdens een van de partijen maakte Deep Blue een zet die zo vreemd was dat Kasparov ervan overtuigd raakte dat er een superieure intelligentie achter zat. Later bleek het een softwarefout te zijn. De computer koos een willekeurige zet omdat hij vastliep. Die ene bug veranderde de loop van de hele match en misschien van de schaakgeschiedenis.",
    "vragen": [
      {
        "v": "Wie versloeg schaakcomputer Deep Blue in 1997?",
        "opties": [
          "Magnus Carlsen",
          "Garry Kasparov",
          "Bobby Fischer",
          "Een andere computer"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel schaakposities kon Deep Blue per seconde berekenen?",
        "opties": [
          "Tweehonderd",
          "Twee miljoen",
          "Tweehonderd miljoen",
          "Twee miljard"
        ],
        "correct": 2
      },
      {
        "v": "Wat bleek de \"geniale\" vreemde zet van Deep Blue echt te zijn?",
        "opties": [
          "Een geheime strategie",
          "Een softwarefout",
          "Vals spel",
          "Een menselijke tip"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-hemel",
    "titel": "Waarom de hemel blauw is",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "kort",
    "woorden": 213,
    "tekst": "Iedereen weet dat de hemel blauw is, maar de meeste mensen weten niet precies waarom. Het antwoord is verrassend elegant en heeft te maken met hoe licht door de atmosfeer reist.\n\nZonlicht ziet er wit uit, maar bestaat eigenlijk uit alle kleuren van de regenboog. Wanneer dit licht de atmosfeer binnenkomt, botst het tegen minuscule gasmoleculen. Dit heet Rayleigh-verstrooiing. Blauw licht heeft een korte golflengte en wordt veel sterker verstrooid dan rood licht met zijn langere golflengte. Het blauwe licht kaatst alle kanten op en vult de hele hemel.\n\nMaar als blauw het sterkst verstrooid wordt, waarom is de hemel dan niet violet? Violet heeft namelijk een nog kortere golflengte. Er zijn twee redenen. Ten eerste bevat zonlicht meer blauw dan violet. Ten tweede zijn onze ogen gevoeliger voor blauw dan voor violet.\n\nBij zonsondergang moet het licht een veel langere weg door de atmosfeer afleggen. Al het blauwe licht is dan al verstrooid voordat het je ogen bereikt. Alleen het rode en oranje licht met langere golflengten komt nog door. Vandaar die prachtige rode zonsondergangen.\n\nOp de maan, die geen atmosfeer heeft, is de hemel altijd pikzwart, zelfs overdag als de zon schijnt. Zonder gasmoleculen is er geen verstrooiing en dus geen kleur. De blauwe hemel is een cadeau van onze atmosfeer.",
    "vragen": [
      {
        "v": "Hoe heet het natuurkundige verschijnsel dat de hemel blauw maakt?",
        "opties": [
          "Rayleigh-verstrooiing",
          "Refractie",
          "Het Doppler-effect",
          "Absorptie"
        ],
        "correct": 0
      },
      {
        "v": "Waarom is de zonsondergang rood?",
        "opties": [
          "De zon koelt af",
          "Het blauwe licht is al verstrooid; alleen rood komt nog door",
          "De lucht wordt warmer",
          "Er is meer stof"
        ],
        "correct": 1
      },
      {
        "v": "Welke kleur heeft de hemel op de maan overdag?",
        "opties": [
          "Blauw",
          "Pikzwart",
          "Rood",
          "Wit"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-vesna",
    "titel": "De vrouw die van een vliegtuig viel",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "geschiedenis",
    "collectie": "kort",
    "woorden": 202,
    "tekst": "Op 26 januari 1972 vloog Vesna Vulovic als stewardess op een Joegoslavisch vliegtuig dat op tienduizend meter hoogte explodeerde door een bom. Vesna viel naar beneden, opgesloten in een stuk van de romp, en crashte op een besneeuwde berghelling in Tsjechoslowakije.\n\nZe overleefde. Het is de hoogste val zonder parachute die ooit door een mens is overleefd, en het staat in het Guinness Book of Records. Ze brak talloze botten, lag 27 dagen in coma en was maanden verlamd. Maar ze herstelde en liep uiteindelijk weer.\n\nHoe overleefde ze dit? Experts denken dat een combinatie van factoren meespeelde. Het stuk romp waarin ze zat, werkte als een soort slee die de impact verspreidde. De diepe sneeuw op de berghelling dempte de klap. En haar lage bloeddruk zorgde ervoor dat ze bewusteloos raakte tijdens de val, waardoor haar lichaam ontspannen was bij de impact.\n\nNa haar herstel ging Vesna gewoon weer werken bij de luchtvaartmaatschappij, maar dan aan een balie op de grond. Ze werd een nationale heldin in Joegoslavie en bleef de rest van haar leven nuchter over haar ervaring.\n\nZe beweerde zich niks van de val te herinneren. Misschien maar beter ook. Sommige herinneringen kun je beter kwijt dan rijk zijn.",
    "vragen": [
      {
        "v": "Van welke hoogte viel Vesna Vulovic?",
        "opties": [
          "Duizend meter",
          "Tienduizend meter",
          "Honderd meter",
          "Vijfhonderd meter"
        ],
        "correct": 1
      },
      {
        "v": "Wat hielp haar de val te overleven?",
        "opties": [
          "Een parachute",
          "Een stuk romp, diepe sneeuw en haar lage bloeddruk",
          "Ze landde in een meer",
          "Een reddingsteam ving haar op"
        ],
        "correct": 1
      },
      {
        "v": "Wat deed Vesna na haar herstel?",
        "opties": [
          "Ze werd piloot",
          "Ze ging weer werken bij de luchtvaartmaatschappij, aan een balie",
          "Ze verhuisde naar Amerika",
          "Ze werd nooit meer gezien"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-mieren",
    "titel": "Mieren en hun superkolonies",
    "doelgroep": "teens",
    "niveau": 3,
    "onderwerp": "dieren",
    "collectie": "kort",
    "woorden": 198,
    "tekst": "Er bestaat een mierenkolonie die zich uitstrekt over zesduizend kilometer langs de Europese kust, van Portugal tot Italie. Het is een superkolonie van Argentijnse mieren die allemaal tot dezelfde genetische familie behoren. Ze herkennen elkaar als verwanten en werken samen, ook al leven ze duizenden kilometers van elkaar.\n\nDeze mieren kwamen rond 1920 per ongeluk mee op handelsschepen vanuit Zuid-Amerika. In hun thuisland houden rivaliserende kolonies elkaar in evenwicht. Maar in Europa hadden ze geen natuurlijke vijanden. Een enkele kolonie groeide uit tot miljarden en miljarden mieren.\n\nHet bizarre is dit: als je een mier uit Portugal pakt en neerzet bij mieren in Zuid-Frankrijk, herkennen ze haar als familie en accepteren ze haar. Doe hetzelfde met een mier uit een andere kolonie en ze wordt direct gedood.\n\nMieren als geheel zijn trouwens verbijsterend succesvol. Naar schatting zijn er twintig biljard mieren op aarde. Samen wegen ze evenveel als alle mensen bij elkaar. Ze bestaan al meer dan honderd miljoen jaar en hebben de dinosaurussen overleefd.\n\nSommige mierensoorten houden bladluizen als vee, verbouwen schimmels als gewas en voeren oorlogen met buurkolonies compleet met strategie en flankaanvallen. Ze zijn kleine beschavingen onder onze voeten die we meestal niet eens opmerken.",
    "vragen": [
      {
        "v": "Hoe lang is de Europese superkolonie van Argentijnse mieren?",
        "opties": [
          "Zes kilometer",
          "Zeshonderd kilometer",
          "Zesduizend kilometer",
          "Zestig kilometer"
        ],
        "correct": 2
      },
      {
        "v": "Wat gebeurt er als je een mier uit Portugal bij familie in Zuid-Frankrijk zet?",
        "opties": [
          "Ze wordt gedood",
          "Ze wordt geaccepteerd als familie",
          "Ze vlucht weg",
          "Ze sticht een nieuwe kolonie"
        ],
        "correct": 1
      },
      {
        "v": "Wat houden sommige mierensoorten als \"vee\"?",
        "opties": [
          "Spinnen",
          "Bladluizen",
          "Rupsen",
          "Kevers"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "r-koffie",
    "titel": "Koffie werd ontdekt door geiten",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "eten",
    "collectie": "kort",
    "woorden": 204,
    "tekst": "Volgens de legende werd koffie ontdekt door een Ethiopische geitenhoeder genaamd Kaldi, ergens rond de negende eeuw. Kaldi merkte dat zijn geiten wild begonnen te dansen en de hele nacht wakker bleven nadat ze rode bessen van een bepaalde struik hadden gegeten.\n\nNieuwsgierig probeerde hij de bessen zelf en voelde zich energieker dan ooit. Hij bracht de bessen naar een lokaal klooster, waar de monniken er een drankje van maakten. Eindelijk konden ze wakker blijven tijdens hun lange nachtelijke gebeden. Het nieuws verspreidde zich snel.\n\nKoffie bereikte het Arabische schiereiland in de vijftiende eeuw, waar het voor het eerst werd geroosterd en gebrouwen zoals wij dat kennen. Koffiehuizen, \"qahveh khaneh\" genoemd, werden sociale ontmoetingsplaatsen. Ze werden zelfs meerdere keren verboden door heersers die bang waren voor politieke samenzweringen.\n\nIn de zeventiende eeuw kwam koffie naar Europa, waar het aanvankelijk \"de duivelse drank\" werd genoemd door de kerk. Totdat paus Clemens de Achtste het proefde, heerlijk vond en het officieel goedkeurde.\n\nVandaag is koffie na olie het meest verhandelde product ter wereld. Er worden dagelijks meer dan twee miljard koppen gedronken. En het begon allemaal met een paar hyperactieve geiten die niet konden slapen op een Ethiopische heuvel. Soms veranderen de kleinste ontdekkingen de wereld.",
    "vragen": [
      {
        "v": "Wat merkte geitenhoeder Kaldi op aan zijn geiten?",
        "opties": [
          "Ze sliepen de hele dag",
          "Ze dansten wild en bleven de hele nacht wakker",
          "Ze wilden niet eten",
          "Ze werden ziek"
        ],
        "correct": 1
      },
      {
        "v": "Waarom waren de monniken blij met het koffiedrankje?",
        "opties": [
          "Het smaakte zoet",
          "Ze konden wakker blijven tijdens nachtelijke gebeden",
          "Het was goedkoop",
          "Het maakte ze sterker"
        ],
        "correct": 1
      },
      {
        "v": "Hoe noemde de kerk koffie eerst toen het naar Europa kwam?",
        "opties": [
          "Het wondermiddel",
          "De duivelse drank",
          "Het zwarte goud",
          "De monnikendrank"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n1a",
    "titel": "Waarom bewegen je gezond houdt",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 332,
    "tekst": "Bewegen is een van de eenvoudigste en krachtigste dingen die je kunt doen voor je gezondheid. Toch zit de gemiddelde Nederlander meer dan negen uur per dag. Dat is meer dan hij slaapt. En het heeft duidelijke gevolgen.\n\nWanneer je beweegt, pompt je hart sneller. Meer bloed stroomt naar je spieren en organen. Je longen werken harder om zuurstof te leveren. Na verloop van tijd worden hart en longen sterker. Dit verlaagt je rusthartslag en vermindert het risico op hart- en vaatziekten.\n\nBewegen heeft ook een sterk effect op je hersenen. Tijdens lichaamsbeweging maakt je lichaam endorfines aan, stofjes die je een goed gevoel geven. Mensen die regelmatig sporten, rapporteren minder stress, betere slaap en meer energie overdag. Depressie en angststoornissen nemen af bij mensen die drie tot vijf keer per week matig intensief bewegen.\n\nJe hoeft geen topsporter te zijn. Dertig minuten stevig wandelen per dag is al genoeg om de meeste gezondheidsvoordelen te krijgen. Fietsen naar je werk, de trap nemen in plaats van de lift, even stretchen tijdens je pauze: kleine keuzes tellen op.\n\nKinderen en jongeren hebben meer beweging nodig: minstens een uur per dag. Voor ouderen is bewegen bijzonder belangrijk, omdat het vallen voorkomt door spierversterking en balansverbetering. Krachttraining twee keer per week houdt botten sterk en de stofwisseling actief.\n\nEr zijn ook langetermijnvoordelen. Mensen die actief blijven, leven gemiddeld vijf tot tien jaar langer. Ze hebben minder kans op diabetes type 2, kanker en dementie. Zelfs hersenfunctie blijft beter behouden bij regelmatige beweging.\n\nHet goede nieuws: je kunt op elk moment beginnen. Studies tonen aan dat mensen die pas op hun zestigste starten met regelmatig bewegen alsnog enorme gezondheidswinst boeken.\n\nBegin klein. Kies iets wat je leuk vindt. Maak het een gewoonte door het aan een vast moment te koppelen. Leg je sportschoenen klaar bij de deur. Plan een wandeling in je agenda. Beweeg samen met een vriend, want sociale steun vergroot de kans dat je doorgaat.\n\nJe lichaam en je geest zullen je dankbaar zijn.",
    "vragen": [
      {
        "v": "Hoeveel uur per dag zit de gemiddelde Nederlander?",
        "opties": [
          "Vijf uur",
          "Zeven uur",
          "Negen uur",
          "Twaalf uur"
        ],
        "correct": 2
      },
      {
        "v": "Welke stofjes maakt je lichaam aan tijdens het bewegen, waardoor je je beter voelt?",
        "opties": [
          "Insuline",
          "Endorfines",
          "Adrenaline",
          "Melatonine"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel minuten wandelen per dag volstaat al voor de meeste gezondheidsvoordelen?",
        "opties": [
          "Tien minuten",
          "Twintig minuten",
          "Dertig minuten",
          "Zestig minuten"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n1b",
    "titel": "Hoe je beter kunt slapen",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 313,
    "tekst": "Slaap is de basis van alles. Als je slecht slaapt, word je prikkelbaar, vergeet je meer en presteer je minder goed op school of werk. Toch kampt een groot deel van de bevolking met slaapproblemen. De meeste mensen weten niet dat veel van die problemen oplosbaar zijn met eenvoudige gewoonten.\n\nJe lichaam heeft een interne klok, het circadiaans ritme. Die klok wordt gestuurd door licht. In de ochtend zorgt daglicht ervoor dat je wakker en alert wordt. In de avond, als het donker wordt, maakt je brein melatonine aan: het slaaphormoon. Maar kunstlicht — en zeker het blauwe licht van telefoons en laptops — verstoort dit proces. Je brein denkt dat het nog dag is en maakt minder melatonine aan.\n\nDe oplossing is eenvoudig: zet je schermen een uur voor het slapengaan uit. Of gebruik een blauwlichtfilter op je apparaten. Dim het licht in je huis 's avonds. Deze kleine aanpassing kan al een groot verschil maken.\n\nTemperatuur speelt ook een rol. Je lichaam moet afkoelen om goed in slaap te vallen. Een slaapkamer van rond de achttien graden Celsius is voor de meeste mensen ideaal. Een warme douche of bad vlak voor het slapengaan helpt paradoxaal genoeg: het warme water trekt het bloed naar de huid, waarna je lichaamskern snel afkoelt.\n\nEen vaste bedtijd is minstens zo belangrijk als hoeveel uren je slaapt. In het weekend uitslapen klinkt heerlijk, maar het verschuift je interne klok. Maandag voel je je dan versuft, alsof je door een tijdzone gereisd bent. Probeer elke dag op dezelfde tijd op te staan, ook in het weekend.\n\nCafeïne blijft zes tot acht uur in je bloed. Een kop koffie om drie uur 's middags kan er voor zorgen dat je om elf uur 's avonds nog klaarwakker bent. Beperk cafeïne na het middaguur.\n\nGoed slapen is geen luxe. Het is de fundering waarop concentratie, geheugen en stemming rusten.",
    "vragen": [
      {
        "v": "Wat is het circadiaans ritme?",
        "opties": [
          "Een slaapstoornis",
          "De interne klok van je lichaam",
          "Een soort melatonine",
          "Een oefening om beter te slapen"
        ],
        "correct": 1
      },
      {
        "v": "Waarom is een warme douche voor het slapengaan juist goed?",
        "opties": [
          "Het maakt je moe door inspanning",
          "Warmte verhoogt melatonine",
          "Je lichaamskern koelt daarna snel af",
          "Het blauwe licht valt weg"
        ],
        "correct": 2
      },
      {
        "v": "Hoelang blijft cafeïne actief in je bloed?",
        "opties": [
          "Twee uur",
          "Vier uur",
          "Zes tot acht uur",
          "Twaalf uur"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n2a",
    "titel": "Sociale media en het tienerbrein",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 447,
    "tekst": "Tieners brengen gemiddeld meer dan zes uur per dag door op sociale media. Dat is meer tijd dan ze op school zitten. En terwijl deze platforms ontworpen zijn om zo verslavend mogelijk te zijn, is het tienerbrein bijzonder kwetsbaar voor precies de mechanismen die ze gebruiken.\n\nHet tienerbrein is nog volop in ontwikkeling. De prefrontale cortex — het deel dat verantwoordelijk is voor impulscontrole, planning en het afwegen van risico's — is pas volledig ontwikkeld rond het vijfentwintigste levensjaar. Tieners zijn biologisch gezien gevoeliger voor sociale beloning en afwijzing. Een like op Instagram geeft een dopaminepiek die vergelijkbaar is met het eten van suiker of het winnen van een spelletje. Een ontbrekende reactie of een negatief commentaar voelt disproportioneel pijnlijk.\n\nPlatforms als Instagram, TikTok en Snapchat maken hier bewust gebruik van. Variabele beloningen — soms veel likes, soms weinig, nooit voorspelbaar — zijn de meest verslavende vorm van beloning die er bestaat. Het is hetzelfde principe als een gokautomaat. Je weet nooit wanneer de beloning komt, dus je blijft kijken.\n\nOnderzoek van de Universiteit van Pennsylvania toonde aan dat het beperken van sociale mediagebruik tot dertig minuten per dag significante vermindering gaf van angst, depressie en eenzaamheid bij jongeren. Een studie van Jean Twenge laat zien dat de mentale gezondheid van tieners in de westerse wereld sterk is verslechterd vanaf 2012 — precies het jaar dat smartphones massaal gemeengoed werden.\n\nMaar de relatie is niet simpel. Passief gebruik — scrollen, kijken, vergelijken — is schadelijker dan actief gebruik, zoals berichten sturen, reageren en creëren. Tieners die sociale media gebruiken om contact te onderhouden met vrienden die ze ook in het echte leven zien, lijken minder negatieve effecten te ervaren dan tieners die voornamelijk onbekenden volgen of zichzelf vergelijken met influencers.\n\nEr is ook een genderverschil. Meisjes lijken gemiddeld meer schade te ondervinden van sociale media dan jongens. Dit wordt deels verklaard door het type gebruik: meisjes vergelijken zichzelf vaker op uiterlijk via foto's en video's, terwijl jongens meer gamen en competitief interacteren. Beide vormen hebben risico's, maar lichaamsbeeldproblemen bij meisjes zijn beter gedocumenteerd.\n\nWat kunnen ouders en scholen doen? Verbieden werkt zelden goed — het verhoogt de aantrekkingskracht en verplaatst het gebruik naar het geheim. Betere strategieën zijn: mediageletterdheid onderwijzen, zodat tieners begrijpen hoe platforms werken en hen manipuleren; samen afspraken maken over schermvrije momenten en plekken; alternatieve activiteiten faciliteren die dezelfde behoeften bevredigen — sociale verbinding, erkenning, stimulatie.\n\nDe kern van het probleem is niet de technologie zelf, maar het gebrek aan bewustzijn en controle. Een tiener die begrijpt waarom hij of zij het gevoel heeft te moeten scrollen, is beter in staat die drang te weerstaan. Digitale zelfkennis is de vaardigheid van de eenentwintigste eeuw.",
    "vragen": [
      {
        "v": "Wanneer is de prefrontale cortex volledig ontwikkeld?",
        "opties": [
          "Rond het achttiende jaar",
          "Rond het twintigste jaar",
          "Rond het vijfentwintigste jaar",
          "Rond het dertigste jaar"
        ],
        "correct": 2
      },
      {
        "v": "Welk type sociale mediagebruik is schadelijker?",
        "opties": [
          "Berichten sturen naar vrienden",
          "Passief scrollen en vergelijken",
          "Creëren van eigen inhoud",
          "Reageren op posts van bekenden"
        ],
        "correct": 1
      },
      {
        "v": "Welke aanpak werkt het best voor ouders en scholen?",
        "opties": [
          "Volledig verbieden",
          "Negeren en afwachten",
          "Mediageletterdheid en gezamenlijke afspraken",
          "Alleen schermtijd meten"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n2b",
    "titel": "De stille revolutie van duurzame energie",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 318,
    "tekst": "In 2010 kostte een kilowattuur zonne-energie meer dan driehonderd dollar om te produceren. In 2024 is die prijs gedaald naar minder dan twee dollar. Dat is een daling van meer dan negentig-acht procent in veertien jaar. Geen enkele technologie in de geschiedenis van de mensheid heeft zo'n snelle prijsdaling meegemaakt. En toch begint de wereld maar langzaam te begrijpen wat dit betekent.\n\nZonne- en windenergie zijn inmiddels de goedkoopste vormen van nieuwe elektriciteitsopwekking in bijna elk land ter wereld. Nieuwe kolencentrales kunnen niet meer concurreren. Nieuwe kerncentrales evenmin, zonder enorme subsidies. De energietransitie is niet meer een kwestie van idealisme, maar van economische logica.\n\nDe uitdaging is niet langer productie, maar opslag en netwerk. De zon schijnt niet altijd, de wind waait niet altijd. Oplossingen zijn in volle ontwikkeling: lithiumbatterijen schalen snel op, waterstof wordt gezien als oplossing voor seizoensopslag, en vraagsturing — waarbij machines hun stroomverbruik aanpassen aan het aanbod — wint terrein.\n\nHet elektriciteitsnet zelf moet worden heruitgevonden. Het huidige net is ontworpen voor gecentraliseerde opwekking: grote centrales sturen stroom naar consumenten. Duurzame energie is gedecentraliseerd: miljoenen zonnepanelen op daken, windparken op zee, batterijen in huishoudens. Dit vraagt om een intelligent, tweerichtingsnet dat vraag en aanbod dynamisch in balans houdt.\n\nIn China werden in 2023 meer elektrische auto's verkocht dan auto's met verbrandingsmotor. In Europa rijdt al een op de vijf nieuwe auto's elektrisch. De transportsector, verantwoordelijk voor ongeveer twintig procent van de wereldwijde CO2-uitstoot, is in transitie. Vliegtuigen en schepen volgen trager, maar ook daar worden waterstof en batterijen ingezet.\n\nDe landbouw, de industrie en de verwarming van gebouwen zijn nog grotere uitdagingen. Staal en cement produceren vereist enorme hoeveelheden energie en heeft nog geen goedkope groene alternatieven op schaal. Hier liggen de hardste noten om te kraken.\n\nToch is de richting duidelijk. De vraag is niet meer of de energietransitie plaatsvindt, maar hoe snel. En die snelheid bepaalt hoeveel klimaatschade we nog oplopen onderweg.",
    "vragen": [
      {
        "v": "Hoeveel kostte zonne-energie per kilowattuur in 2010?",
        "opties": [
          "Tien dollar",
          "Vijftig dollar",
          "Honderd dollar",
          "Meer dan driehonderd dollar"
        ],
        "correct": 3
      },
      {
        "v": "Wat is de huidige grootste uitdaging voor duurzame energie?",
        "opties": [
          "Productie is te duur",
          "Opslag en netwerk",
          "Te weinig zonlicht in Europa",
          "Politieke weerstand"
        ],
        "correct": 1
      },
      {
        "v": "Welke sectoren zijn nog het moeilijkst te verduurzamen?",
        "opties": [
          "Transport en landbouw",
          "Zonne-energie en wind",
          "Staal, cement en industrie",
          "Elektrische auto's"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n3a",
    "titel": "De psychologie van intrinsieke motivatie",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 640,
    "tekst": "Waarom doen mensen sommige dingen met plezier en andere met tegenzin, zelfs als de beloning gelijk is? Het antwoord ligt in een van de meest besproken theorieën uit de psychologie: de zelfdeterminatietheorie van Deci en Ryan. Deze theorie onderscheidt intrinsieke motivatie — dingen doen omdat ze op zichzelf bevredigend zijn — van extrinsieke motivatie, waarbij het gedrag wordt aangedreven door externe beloningen of straffen.\n\nDecennia van onderzoek laten zien dat mensen floreren wanneer aan drie basisbehoeften wordt voldaan: autonomie, competentie en verbondenheid. Autonomie betekent dat je het gevoel hebt zelf richting te geven aan je gedrag, dat je keuzes maakt die overeenkomen met je waarden en interesses. Competentie verwijst naar de behoefte om je bekwaam te voelen, uitdagingen te kunnen overwinnen en te groeien. Verbondenheid, ten slotte, is de behoefte aan betekenisvolle relaties met anderen.\n\nDe paradox van beloning is een van de meest intrigerende bevindingen in dit veld. In een klassiek experiment van Lepper en collega's uit 1973 kregen kinderen die al graag tekenden een beloning aangeboden voor hun tekeningen. Later, toen de beloning wegviel, tekenden ze minder dan kinderen die nooit een beloning hadden ontvangen. De externe beloning had de intrinsieke motivatie ondermijnd. Dit fenomeen staat bekend als het overjustificatie-effect: als je iemand betaalt voor iets wat hij of zij leuk vindt, kan de persoon gaan geloven dat hij het alleen voor het geld deed.\n\nDit heeft verreikende implicaties voor opvoeding, onderwijs en management. Een leraar die kinderen puur beloont met stickers en punten, loopt het risico hun nieuwsgierigheid te doden. Een manager die medewerkers alleen extrinsiek motiveert met bonussen, creëert werknemers die precies doen wat nodig is voor de bonus — en niets meer. Autonomie en eigenaarschap zijn machtiger drijfveren dan geld.\n\nToch is de werkelijkheid genuanceerder. Extrinsieke motivatie is niet per definitie slecht. Deci en Ryan onderscheiden verschillende vormen van extrinsieke regulatie op een continuüm van extern naar intern. Aan het externe eind staat puur gedrag uit angst voor straf. Meer intern is geïntrojecteerde regulatie: dingen doen om schuldgevoelens te vermijden of trots te voelen. Nog verder op het continuüm staat geïdentificeerde regulatie: gedrag dat niet inherent leuk is, maar dat je doet omdat je de waarde ervan inziet. En het meest geïnternaliseerde type is geïntegreerde regulatie: gedrag dat volledig in lijn is met je persoonlijke waarden en identiteit.\n\nIn de praktijk is veel van ons gedrag een mix. Een wetenschapper kan zijn onderzoek intrinsiek motiverend vinden maar extrinsiek gedreven zijn door publicatiedruk. Een atleet kan van zijn sport houden maar ook gemotiveerd worden door de verwachtingen van zijn coach. De vraag is niet of iemand intrinsiek of extrinsiek gemotiveerd is, maar waar op het continuüm zijn regulatie ligt en hoe omgevingsfactoren dat beïnvloeden.\n\nScholen en werkgevers die intrinsieke motivatie willen ondersteunen, doen er goed aan drie dingen te doen: autonomie te geven door mensen inspraak te geven in hoe ze een taak aanpakken; structuur te bieden die competentiegroei ondersteunt zonder te controleren; en een sfeer van verbondenheid te creëren waarin mensen zich gezien en gewaardeerd voelen.\n\nDigitale platforms hebben deze psychologische mechanismen op ongekende schaal toegepast. Sociale media bieden variabele beloningen in de vorm van likes en reacties, spelen in op de behoefte aan verbondenheid, en geven een gevoel van autonomie door gebruikers te laten kiezen wat ze delen. Maar tegelijkertijd ondermijnen ze autonomie door algoritmen die het gedrag sturen en vergelijking die competentiebeleving beschadigt.\n\nInzicht in de zelfdeterminatietheorie helpt niet alleen om gedrag van anderen te begrijpen, maar ook om jezelf beter te kennen. Welke activiteiten geven je energie, en welke zuigen die weg? Wanneer voel je je competent en autonoom, en wanneer voelt werk als een opgelegde verplichting? Door deze vragen eerlijk te beantwoorden, kun je bewuster kiezen hoe je je tijd en energie inzet. Motivatie is niet iets wat je hebt of niet hebt — het is iets wat je kunt cultiveren.",
    "vragen": [
      {
        "v": "Wat zijn de drie basisbehoeften in de zelfdeterminatietheorie?",
        "opties": [
          "Veiligheid, beloning en erkenning",
          "Autonomie, competentie en verbondenheid",
          "Vrijheid, geld en status",
          "Intrinsiek, extrinsiek en gemengd"
        ],
        "correct": 1
      },
      {
        "v": "Wat toont het overjustificatie-effect aan?",
        "opties": [
          "Beloningen verhogen altijd de motivatie",
          "Externe beloningen kunnen intrinsieke motivatie ondermijnen",
          "Kinderen tekenen beter als ze betaald worden",
          "Straf werkt beter dan beloning"
        ],
        "correct": 1
      },
      {
        "v": "Welke regulatievorm staat het dichtst bij intrinsieke motivatie?",
        "opties": [
          "Externe regulatie",
          "Geïntrojecteerde regulatie",
          "Geïdentificeerde regulatie",
          "Geïntegreerde regulatie"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "lang-n3b",
    "titel": "Globalisering en de paradox van welvaart",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 442,
    "tekst": "Globalisering heeft de afgelopen vijftig jaar de meest spectaculaire armoedevermindering in de menselijke geschiedenis teweeggebracht. Tussen 1990 en 2015 daalde het aantal mensen dat in extreme armoede leeft van bijna twee miljard naar minder dan zevenhonderd miljoen. China alleen al haalde meer dan zevenhonderd miljoen mensen uit de armoede. Dit is een prestatie zonder weerga, mogelijk gemaakt door internationale handel, technologieoverdracht en buitenlandse investeringen.\n\nEn toch voelt globalisering in de rijkste landen van de wereld als een bedreiging. Industrie verdwijnt naar lageloonlanden. Banen zijn verdwenen. Gemeenschappen die decennialang bloeiden dankzij de staalindustrie of textiel zijn verpauperd. De politieke reactie is populisme, protectionisme en nostalgie naar een verleden dat niet terugkomt.\n\nDit is de paradox van globalisering: het heeft de wereld als geheel rijker gemaakt, maar de baten zijn ongelijk verdeeld. Economen als Dani Rodrik wijzen op het trilemma van globalisering: je kunt niet tegelijkertijd maximale economische integratie, nationale soevereiniteit en democratie hebben. Iets moet wijken. In de afgelopen decennia was dat veelal de nationale soevereiniteit — staten verloren de greep op belastingbeleid, arbeidsstandaarden en industriepolitiek.\n\nDe financiële crisis van 2008 legde kwetsbaarheden bloot die eerder waren verhuld door schijnbare welvaart. Gecomplexe internationale financiële ketens zorgden ervoor dat een hypothekencrisis in de Amerikaanse markt binnen weken mondiale banken neersloeg. Globale integratie betekent dat schokken snel en breed worden doorgegeven. Geen land is meer een eiland.\n\nDe COVID-19-pandemie toonde een andere kant van de kwetsbaarheid: de afhankelijkheid van mondiale toeleveringsketens voor essentiële goederen. Mondmaskers, medicijnen en chips waren plotseling schaars, niet omdat ze niet bestonden, maar omdat de productie was gecentraliseerd in een handvol landen. Landen herontdekten het concept van strategische autonomie.\n\nTegelijkertijd is er geen realistisch alternatief voor globalisering. Deglobalisering — het terugdraaien van internationale handelsbanden — zou de kosten van goederen dramatisch verhogen, innovatie afremmen en miljoenen mensen in opkomende economieën terugwerpen in armoede. Het is gemakkelijker te roepen dat we de klok terugdraaien dan om te onderzoeken wat de prijs daarvan is.\n\nDe productievere vraag is: hoe maken we globalisering inclusiever en weerbaarder? Economen wijzen op de noodzaak van beter herverdelingsbeleid — niet als liefdadigheid, maar als economische logica: mensen die verliezen door handelsliberalisering moeten worden gecompenseerd en omgeschoold. Landen moeten kritieke sectoren strategisch beschermen zonder in protectionisme te vervallen. En internationale instituties moeten worden hervormd zodat ze de stemmen van ontwikkelingslanden beter vertegenwoordigen.\n\nDe wereld is onherroepelijk verweven. Klimaatverandering, pandemieën, kunstmatige intelligentie en kernwapens zijn problemen die geen enkel land alleen kan oplossen. Globalisering is niet slechts een economisch fenomeen — het is de conditie van de hedendaagse beschaving. De keuze is niet of we samenwerken, maar hoe we dat doen op een manier die rechtvaardig, democratisch en veerkrachtig is.",
    "vragen": [
      {
        "v": "Hoeveel mensen daalde de extreme armoede tussen 1990 en 2015?",
        "opties": [
          "Van 500 miljoen naar 100 miljoen",
          "Van 1 miljard naar 300 miljoen",
          "Van bijna 2 miljard naar minder dan 700 miljoen",
          "Van 3 miljard naar 1 miljard"
        ],
        "correct": 2
      },
      {
        "v": "Wat is het trilemma van globalisering volgens Rodrik?",
        "opties": [
          "Handel, inflatie en werkgelegenheid",
          "Economische integratie, soevereiniteit en democratie",
          "Vrijhandel, protectionisme en subsidies",
          "Armoede, welvaart en ongelijkheid"
        ],
        "correct": 1
      },
      {
        "v": "Wat toonde de COVID-19-pandemie over globalisering?",
        "opties": [
          "Dat globalisering armoede reduceert",
          "Dat internationale handel niet werkt",
          "Kwetsbaarheid door afhankelijkheid van mondiale toeleveringsketens",
          "Dat klimaatverandering erger is dan pandemieën"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n1c",
    "titel": "Hoe je beter leert",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 272,
    "tekst": "Leren is een vaardigheid die je kunt verbeteren. Veel studenten besteden uren aan het herlezen van teksten, maar onderzoek toont aan dat dit een van de minst effectieve leermethoden is. Je brein heeft de illusie dat het materiaal kent, simpelweg omdat het vertrouwd aanvoelt.\n\nActief ophalen is veel effectiever. Dit betekent dat je jezelf test op het materiaal in plaats van het opnieuw te lezen. Maak bijvoorbeeld oefenvragen of probeer uit je hoofd samen te vatten wat je hebt gelezen. Dit dwingt je brein om het geheugenpad te versterken.\n\nGespreid oefenen, ook wel spaced repetition genoemd, is een andere krachtige techniek. In plaats van alles in één sessie te studeren, verdeel je je oefenmomenten over meerdere dagen. De onderbrekingen geven je brein de kans om informatie te consolideren.\n\nInterleaving, het afwisselen van verschillende onderwerpen of vaardigheidstypes, verbetert eveneens het leerresultaat. In plaats van tien rekensommen van hetzelfde type te maken, wissel je af. Dit voelt moeilijker maar produceert dieper begrip.\n\nSlaap speelt een cruciale rol. Tijdens de slaap verwerkt je brein wat je overdag hebt geleerd. Studeren vlak voor het slapengaan en dan een goede nacht slapen is effectiever dan een nacht doorhalen.\n\nDe omgeving doet ertoe. Varieer je studielocatie. Studies tonen aan dat leren in verschillende contexten het geheugen versterkt, omdat je brein meer associaties vormt.\n\nBeweeg. Een korte wandeling of een reeks oefeningen voor het studeren verhoogt de doorbloeding van je brein en verbetert de concentratie. Zit niet urenlang stil achter je bureau.\n\nMaak je leerproces persoonlijk. Verbind nieuwe kennis met iets wat je al weet of met je eigen ervaring. Hoe meer verbindingen je maakt, hoe sterker het geheugenspoor.",
    "vragen": [
      {
        "v": "Wat is effectiever dan herlezen volgens onderzoek?",
        "opties": [
          "Markeren",
          "Actief ophalen",
          "Samenvattingen overschrijven",
          "Luisteren naar muziek"
        ],
        "correct": 1
      },
      {
        "v": "Wat is spaced repetition?",
        "opties": [
          "Alles in één keer leren",
          "Oefenmomenten over meerdere dagen verspreiden",
          "Alleen voor het examen studeren",
          "Hetzelfde type opgaven herhalen"
        ],
        "correct": 1
      },
      {
        "v": "Wanneer verwerkt je brein wat je hebt geleerd?",
        "opties": [
          "Tijdens het eten",
          "Tijdens het sporten",
          "Tijdens de slaap",
          "Tijdens het douchen"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n1d",
    "titel": "De kracht van gewoonten",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 269,
    "tekst": "Bijna de helft van wat je dagelijks doet, doe je op de automatische piloot. Van tanden poetsen tot de route naar je werk: gewoonten besparen mentale energie. Je brein automatiseert herhaalde handelingen zodat het zich kan concentreren op nieuwe uitdagingen.\n\nGewoonten werken via een driedelige lus. Eerst is er een trigger, een signaal dat het gedrag in gang zet. Dan volgt de routine, het automatische gedrag zelf. En tot slot is er de beloning die het patroon bekrachtigt. Een voorbeeld: je telefoon zoemt (trigger), je checkt je berichten (routine), je voelt een kort moment opluchting of nieuwsgierigheid (beloning).\n\nHet vormen van een nieuwe gewoonte duurt gemiddeld zesenzestig dagen, al varieert dit sterk per persoon en type gedrag. De sleutel is consistentie: doe het elke dag, zelfs als het maar een minimale versie is. Wil je dagelijks lezen? Begin met één pagina.\n\nEen slechte gewoonte kun je niet zomaar wissen. Het neurale pad bestaat al. De effectiefste strategie is substitutie: vervang de routine door een gezonder alternatief terwijl je de trigger en beloning behoudt. In plaats van na het eten op de bank te ploffen, ga je een rondje wandelen.\n\nKleine gewoonten stapelen is een populaire methode. Koppel een nieuwe gewoonte aan een bestaande. Na het zetten van koffie doe je vijf minuten stretchen. De bestaande gewoonte dient als betrouwbare trigger.\n\nOmgevingsontwerp helpt enorm. Leg je sportkleding klaar, zet gezond eten op ooghoogte in de koelkast, verwijder apps die je afleiden. Maak goede gewoonten makkelijk en slechte gewoonten moeilijk.\n\nVerandering begint klein. De kracht van gewoonten zit niet in het individuele moment maar in de herhaling over weken en maanden.",
    "vragen": [
      {
        "v": "Hoeveel procent van ons dagelijks gedrag is automatisch?",
        "opties": [
          "Tien procent",
          "Twintig procent",
          "Bijna vijftig procent",
          "Tachtig procent"
        ],
        "correct": 2
      },
      {
        "v": "Uit welke drie elementen bestaat een gewoonte?",
        "opties": [
          "Begin, midden, eind",
          "Trigger, routine, beloning",
          "Plan, actie, resultaat",
          "Doel, uitvoering, evaluatie"
        ],
        "correct": 1
      },
      {
        "v": "Wat is de beste strategie om een slechte gewoonte te doorbreken?",
        "opties": [
          "Wilskracht",
          "Substitutie",
          "Straffen",
          "Negeren"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n1e",
    "titel": "Waarom water zo belangrijk is",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 240,
    "tekst": "Het menselijk lichaam bestaat voor ongeveer zestig procent uit water. Dit maakt water de belangrijkste voedingsstof. Elk orgaan, elke cel en elk weefsel heeft water nodig om te functioneren. Toch drinken de meeste mensen te weinig.\n\nWater regelt je lichaamstemperatuur. Wanneer je warm bent, zweet je. Het verdampen van zweet koelt je huid en je bloed af. Zonder voldoende water kan dit koelsysteem niet goed werken, wat kan leiden tot oververhitting.\n\nJe nieren hebben water nodig om afvalstoffen uit je bloed te filteren. Bij onvoldoende vochtinname moeten de nieren harder werken en kan urine geconcentreerder worden. Op lange termijn verhoogt dit het risico op nierstenen.\n\nZelfs een mild vochttekort van twee procent vermindert je concentratie, geheugen en reactietijd meetbaar. Dit is bijzonder relevant voor studenten en kantoorwerkers die lange periodes geconcentreerd moeten werken.\n\nDorst is een laat signaal. Tegen de tijd dat je dorst voelt, is je lichaam al licht gedehydrateerd. Regelmatig kleine slokjes water drinken is effectiever dan wachten tot je dorst hebt.\n\nDe kleur van je urine is een betrouwbare indicator. Lichtgeel betekent goede hydratatie. Donkergeel of amberkleurig betekent dat je meer moet drinken.\n\nHoeveel water je nodig hebt verschilt per persoon. Factoren zijn je lichaamsgewicht, het klimaat, je activiteitenniveau en wat je eet. Groenten en fruit bevatten ook veel water.\n\nBegin je dag met een glas water. Zet een fles op je bureau. Maak er een gewoonte van. Je lichaam en je brein zullen je dankbaar zijn.",
    "vragen": [
      {
        "v": "Hoeveel procent van je lichaam bestaat uit water?",
        "opties": [
          "Dertig procent",
          "Vijftig procent",
          "Zestig procent",
          "Zeventig procent"
        ],
        "correct": 2
      },
      {
        "v": "Wat gebeurt er bij een vochttekort van twee procent?",
        "opties": [
          "Je wordt ziek",
          "Je concentratie neemt meetbaar af",
          "Je krijgt koorts",
          "Er verandert niets merkbaars"
        ],
        "correct": 1
      },
      {
        "v": "Wat betekent donkergele urine?",
        "opties": [
          "Goede hydratatie",
          "Te veel water",
          "Je moet meer drinken",
          "Een infectie"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n1f",
    "titel": "De wetenschap van geluid",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 241,
    "tekst": "Geluid is een trilling die zich voortplant door lucht, water of vaste stoffen. Wanneer een gitaarsnaar trilt, duwt hij luchtmoleculen samen en trekt ze uit elkaar. Deze drukgolven reizen naar je oor met een snelheid van ongeveer driehonderdveertig meter per seconde.\n\nIn je oor vangt het trommelvlies de trillingen op. Drie kleine botjes, de hamer, het aambeeld en de stijgbeugel, versterken het signaal en geven het door aan het slakkenhuis. Daar zetten haarcellen de mechanische trillingen om in elektrische signalen die naar het brein worden gestuurd.\n\nGeluid wordt gemeten in decibel. Een normaal gesprek is ongeveer zestig decibel. Een rockconcert kan honderdtien decibel bereiken. Boven de vijfentachtig decibel kan langdurige blootstelling leiden tot gehoorschade.\n\nDe frequentie van geluid, gemeten in hertz, bepaalt de toonhoogte. Lage frequenties klinken als een bas, hoge frequenties als een fluittoon. Het menselijk oor hoort frequenties van twintig tot twintigduizend hertz. Met de leeftijd neemt het vermogen om hoge frequenties te horen af.\n\nGeluidsoverlast is een onderschat gezondheidsprobleem. Chronische blootstelling aan lawaai verhoogt de bloeddruk, verstoort de slaap en kan leiden tot hart- en vaatziekten. In steden is verkeerslawaai de belangrijkste bron.\n\nStilte is daarentegen helend. Onderzoek toont aan dat twee minuten stilte meer ontspanning geeft dan het luisteren naar ontspannende muziek. Stilte activeert het standaardnetwerk van de hersenen, wat creativiteit en zelfreflectie bevordert.\n\nOns brein is gebouwd om geluiden te interpreteren. Muziek raakt ons emotioneel, vogelgezang kalmeert en een onverwacht hard geluid activeert onmiddellijk ons vecht-of-vluchtsysteem.",
    "vragen": [
      {
        "v": "Hoe snel reist geluid door lucht?",
        "opties": [
          "100 m/s",
          "340 m/s",
          "700 m/s",
          "1000 m/s"
        ],
        "correct": 1
      },
      {
        "v": "Boven hoeveel decibel kan gehoorschade ontstaan?",
        "opties": [
          "60 decibel",
          "75 decibel",
          "85 decibel",
          "100 decibel"
        ],
        "correct": 2
      },
      {
        "v": "Wat toont onderzoek over stilte?",
        "opties": [
          "Het is slecht voor je",
          "Het geeft meer ontspanning dan muziek",
          "Het verstoort concentratie",
          "Het heeft geen effect"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n1g",
    "titel": "Hoe planten communiceren",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 225,
    "tekst": "Planten lijken stil en passief, maar ze communiceren voortdurend. Ze waarschuwen elkaar voor gevaar, trekken hulptroepen aan en delen voedingsstoffen met hun buren.\n\nWanneer een rups aan een blad knaagt, produceert de plant vluchtige stoffen die de lucht in gaan. Naburige planten vangen deze chemische signalen op en beginnen preventief afweerstoffen aan te maken, nog voordat ze zelf worden aangevallen.\n\nSommige planten roepen hulp in. Wanneer rupsen aan maïsplanten knagen, geven de planten een specifieke geurstof af die parasitaire wespen aantrekt. Deze wespen leggen hun eitjes in de rupsen, waardoor de plaag wordt bestreden.\n\nOnder de grond vormen planten netwerken via schimmeldraden, ook wel het Wood Wide Web genoemd. Deze mycorrhiza-netwerken verbinden de wortels van verschillende bomen en planten. Via dit netwerk kunnen planten suikers, water en mineralen met elkaar delen.\n\nMoederbomen gebruiken dit netwerk om hun zaailingen te voeden. Ze sturen extra koolstof naar jonge bomen die in de schaduw staan en onvoldoende zonlicht krijgen om zelf genoeg suikers te maken.\n\nPlanten reageren ook op geluid. Sommige planten produceren meer nectar wanneer ze de trillingen van bijenvleugels detecteren. Ze kunnen niet horen zoals wij, maar ze voelen trillingen via hun cellen.\n\nZelfs aanraking beïnvloedt planten. De venusfliegenvanger klapt dicht bij aanraking. Klimplanten voelen een stok en winden zich eromheen. Dit heet thigmotropisme.\n\nDe plantenwereld is veel actiever en socialer dan we lang hebben gedacht.",
    "vragen": [
      {
        "v": "Hoe waarschuwen planten elkaar voor gevaar?",
        "opties": [
          "Door geluid",
          "Via vluchtige chemische stoffen",
          "Door hun bladeren te bewegen",
          "Via licht"
        ],
        "correct": 1
      },
      {
        "v": "Wat is het Wood Wide Web?",
        "opties": [
          "Een internetsite over bomen",
          "Een schimmelnetwerk tussen plantenwortels",
          "Een type wortelsysteem",
          "Een regenwoud"
        ],
        "correct": 1
      },
      {
        "v": "Wat is thigmotropisme?",
        "opties": [
          "Reactie op licht",
          "Reactie op warmte",
          "Reactie op aanraking",
          "Reactie op geluid"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n2c",
    "titel": "De wetenschap van overtuigingskracht",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 273,
    "tekst": "Robert Cialdini identificeerde zes principes van overtuiging die universeel werken, ongeacht cultuur of context. Deze principes worden dagelijks op ons toegepast door marketeers, politici en verkopers — vaak zonder dat we het doorhebben.\n\nHet eerste principe is wederkerigheid. Wanneer iemand iets voor ons doet, voelen we de drang om iets terug te doen. Gratis monsters in de supermarkt, een collega die koffie voor je haalt: het creëert een onbewuste verplichting. Verkopers bieden kleine geschenken aan om dit mechanisme te activeren.\n\nHet tweede principe is schaarste. Dingen worden aantrekkelijker wanneer ze schaars zijn. Berichten als 'nog slechts drie beschikbaar' of 'aanbieding eindigt vandaag' spelen hierop in. De angst om iets te missen, FOMO, is een krachtige motivator.\n\nHet derde principe is autoriteit. We volgen experts en gezagsfiguren. Een arts in een witte jas overtuigt meer dan dezelfde persoon in vrijetijdskleding. Titels, uniformen en referenties versterken dit effect.\n\nSociale bewijskracht is het vierde principe. We kijken naar wat anderen doen om ons eigen gedrag te bepalen. Reviews, sterrenscores en het aantal volgers beïnvloeden onze keuzes. Als duizenden mensen een product kopen, moet het wel goed zijn, denken we.\n\nHet vijfde principe is commitment en consistentie. Zodra we een standpunt innemen, voelen we druk om consistent te blijven. Verkopers gebruiken de voet-in-de-deur-techniek: eerst een klein verzoek, dan een groot.\n\nHet zesde principe is sympathie. We laten ons eerder overtuigen door mensen die we aardig vinden. Fysieke aantrekkelijkheid, gelijkenissen en complimenten vergroten de kans op instemming.\n\nKennis van deze principes maakt je niet immuun, maar wel bewuster van de mechanismen die je beslissingen beïnvloeden. In een wereld vol persuasieve technologie is dat geen luxe maar een noodzaak.",
    "vragen": [
      {
        "v": "Hoeveel principes van overtuiging identificeerde Cialdini?",
        "opties": [
          "Drie",
          "Vier",
          "Zes",
          "Acht"
        ],
        "correct": 2
      },
      {
        "v": "Wat is de voet-in-de-deur-techniek?",
        "opties": [
          "Een fysieke verkooptechniek",
          "Eerst een klein verzoek, dan een groot",
          "Een deur-aan-deur methode",
          "Een autoriteitstechniek"
        ],
        "correct": 1
      },
      {
        "v": "Welk principe speelt in op de angst om iets te missen?",
        "opties": [
          "Wederkerigheid",
          "Autoriteit",
          "Schaarste",
          "Sympathie"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n2d",
    "titel": "Hoe het geheugen werkt en faalt",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 281,
    "tekst": "Het geheugen is geen videorecorder. Het is een reconstructieproces waarbij je brein fragmenten van ervaringen combineert tot een coherent verhaal — een verhaal dat niet altijd klopt.\n\nHet sensorisch geheugen vangt de constante stroom van zintuiglijke informatie op en houdt die minder dan een seconde vast. Slechts een fractie bereikt het werkgeheugen, dat vier tot zeven items tegelijk kan vasthouden. Dit verklaart waarom telefoonnummers in groepjes worden gepresenteerd.\n\nVan het werkgeheugen wordt een selectie overgebracht naar het langetermijngeheugen via een proces dat consolidatie heet. De hippocampus speelt hierin een sleutelrol: hij fungeert als een sorteerstation dat beslist welke ervaringen permanente opslag verdienen. Slaap is essentieel voor dit proces.\n\nEmotionele gebeurtenissen worden sterker opgeslagen. De amygdala, het emotiecentrum, versterkt de consolidatie van ervaringen met een hoge emotionele lading. Daarom herinner je je precies waar je was op elf september 2001, maar niet wat je vorige week dinsdag at.\n\nHet problematische is dat emotionele herinneringen niet per se nauwkeuriger zijn — alleen levendiger. Onderzoek van Elizabeth Loftus toonde aan dat valse herinneringen verrassend makkelijk te creëren zijn. Door suggestieve vragen kunnen mensen overtuigd raken van gebeurtenissen die nooit hebben plaatsgevonden.\n\nHet zogenaamde vergeetcurve van Ebbinghaus laat zien dat we binnen een uur vijftig procent van nieuwe informatie vergeten, en binnen een dag zeventig procent. Actieve herhaling op gespacede intervallen kan dit dramatisch vertragen.\n\nDe geheugenpaleis-techniek, ook wel de loci-methode genoemd, koppelt informatie aan locaties in een vertrouwde ruimte. Geheugensporten gebruiken deze techniek om honderden kaarten of honderden cijfers in minuten te memoriseren. Het werkt omdat het brein van nature goed is in ruimtelijk geheugen.\n\nVergeten is geen defect maar een functie. Het brein filtert irrelevante informatie om de essentiële kennis toegankelijk te houden.",
    "vragen": [
      {
        "v": "Hoeveel items kan het werkgeheugen tegelijk vasthouden?",
        "opties": [
          "Twee tot drie",
          "Vier tot zeven",
          "Acht tot twaalf",
          "Meer dan twintig"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel procent vergeten we binnen een uur volgens Ebbinghaus?",
        "opties": [
          "Twintig procent",
          "Dertig procent",
          "Vijftig procent",
          "Zeventig procent"
        ],
        "correct": 2
      },
      {
        "v": "Wat toonde het onderzoek van Elizabeth Loftus aan?",
        "opties": [
          "Dat emotionele herinneringen perfect zijn",
          "Dat valse herinneringen makkelijk te creëren zijn",
          "Dat slaap onbelangrijk is voor geheugen",
          "Dat kinderen beter onthouden dan volwassenen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n2e",
    "titel": "De verborgen wereld van schimmels",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 273,
    "tekst": "Schimmels vormen een apart rijk van het leven, apart van planten en dieren. Er bestaan naar schatting meer dan vijf miljoen soorten, waarvan we er slechts honderdduizend hebben geïdentificeerd. Ze zijn overal: in de lucht die je inademt, in de grond waarop je loopt en in je eigen lichaam.\n\nHet zichtbare deel van een paddenstoel is slechts het voortplantingsorgaan. Het eigenlijke organisme is het mycelium, een ondergronds netwerk van microscopisch dunne draden die zich over enorme afstanden kunnen uitstrekken. Het grootste bekende organisme op aarde is een honingzwam in Oregon waarvan het myceliumnetwerk zich uitstrekt over meer dan negen vierkante kilometer.\n\nMycorrhiza-schimmels vormen symbiotische relaties met meer dan negentig procent van alle plantensoorten. De schimmeldraden vergroten het wortelsysteem van de plant honderd- tot duizendvoudig. In ruil voor suikers uit fotosynthese levert de schimmel mineralen en water. Bossen zonder deze schimmelpartners zouden instorten.\n\nDeze netwerken transporteren ook signalen. Wanneer een boom wordt aangevallen door insecten, kan hij via het schimmelnetwerk waarschuwingssignalen sturen naar naburige bomen. Onderzoekers aan de Universiteit van British Columbia ontdekten dat moederbomen extra koolstof sturen naar hun zaailingen via dit netwerk.\n\nIn de geneeskunde zijn schimmels van onschatbare waarde. Penicilline, het eerste antibioticum, is afkomstig van een schimmel. Ciclosporine, het medicijn dat orgaantransplantatie mogelijk maakt, eveneens. Psilocybine uit paddenstoelen wordt onderzocht als behandeling voor therapieresistente depressie.\n\nSchimmels zijn ook essentieel voor de koolstofcyclus. Ze breken dood organisch materiaal af en recyclen voedingsstoffen terug naar de bodem. Zonder schimmels zou de aarde bedolven raken onder onverteerd organisch afval.\n\nDe toepassingen van myceliummaterialen groeien snel: verpakkingsmateriaal, bouwstenen en zelfs leer gemaakt van schimmeldraden. De schimmel is het meest onderschatte rijk van het leven.",
    "vragen": [
      {
        "v": "Hoeveel soorten schimmels bestaan er naar schatting?",
        "opties": [
          "Honderdduizend",
          "Een miljoen",
          "Meer dan vijf miljoen",
          "Tien miljoen"
        ],
        "correct": 2
      },
      {
        "v": "Met hoeveel procent van plantensoorten vormen mycorrhiza-schimmels symbiose?",
        "opties": [
          "Vijftig procent",
          "Zeventig procent",
          "Meer dan negentig procent",
          "Honderd procent"
        ],
        "correct": 2
      },
      {
        "v": "Welk medicijn dat orgaantransplantatie mogelijk maakt komt van een schimmel?",
        "opties": [
          "Aspirine",
          "Ciclosporine",
          "Paracetamol",
          "Insuline"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n2f",
    "titel": "De psychologie van besluitvorming",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 287,
    "tekst": "We nemen dagelijks naar schatting vijfendertigduizend beslissingen. Van triviale keuzes als wat te eten tot levensbepalende beslissingen als welke baan te nemen. De meeste van deze beslissingen nemen we op de automatische piloot, gestuurd door mentale snelwegen die psychologen heuristieken noemen.\n\nDaniel Kahneman onderscheidt twee denksystemen. Systeem 1 is snel, automatisch en intuïtief. Het herkent patronen, maakt snelle inschattingen en stuurt het meeste van ons dagelijks gedrag. Systeem 2 is langzaam, bewust en analytisch. Het doet aan logisch redeneren en berekeningen. Systeem 2 is lui: het wordt pas geactiveerd wanneer Systeem 1 faalt of wanneer we bewust aandacht besteden.\n\nHet ankerheuristiek laat zien hoe manipuleerbaar onze schattingen zijn. Als je iemand eerst vraagt of Gandhi ouder of jonger dan honderdvijftig jaar werd, en daarna vraagt hoe oud hij werd, schatten mensen significant hoger dan wanneer je eerst de vraag stelt met vijfendertig jaar als anker. Het eerste getal beïnvloedt het oordeel, zelfs als het duidelijk irrelevant is.\n\nHet verliesaversie-effect toont dat we verliezen ongeveer twee keer zo zwaar wegen als gelijkwaardige winsten. Honderd euro verliezen voelt veel erger dan honderd euro winnen goed voelt. Dit verklaart waarom mensen suboptimale investeringen vasthouden: verkopen zou het verlies concreet maken.\n\nDe beschikbaarheidsheuristiek zorgt ervoor dat we de kans op gebeurtenissen overschatten wanneer we er makkelijk een voorbeeld van kunnen bedenken. Na een vliegtuigramp schatten mensen de kans op een volgend ongeluk hoger in, terwijl vliegen statistisch gezien het veiligste vervoermiddel is.\n\nBevestigingsbias is de neiging om informatie te zoeken die onze bestaande overtuigingen bevestigt en tegenbewijs te negeren. Sociale media versterken dit effect via filterbubbels.\n\nIn een complexe wereld is het negeren van deze valkuilen niet langer optioneel. Bewustwording van onze cognitieve beperkingen is de eerste stap naar betere beslissingen.",
    "vragen": [
      {
        "v": "Hoeveel beslissingen nemen we dagelijks naar schatting?",
        "opties": [
          "Duizend",
          "Vijfduizend",
          "Vijfendertigduizend",
          "Honderdduizend"
        ],
        "correct": 2
      },
      {
        "v": "Wat is Systeem 1 volgens Kahneman?",
        "opties": [
          "Langzaam en analytisch",
          "Snel en intuïtief",
          "Bewust en berekenend",
          "Logisch en methodisch"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel zwaarder wegen verliezen dan winsten bij verliesaversie?",
        "opties": [
          "Even zwaar",
          "Anderhalf keer",
          "Twee keer",
          "Vijf keer"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n2g",
    "titel": "De toekomst van onderwijs",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 273,
    "tekst": "Het onderwijssysteem dat we vandaag kennen is ontworpen in het industriële tijdperk. Leerlingen zitten in rijen, luisteren naar een leraar en worden getoetst op kennisreproductie. Dit model was effectief voor het opleiden van fabrieksarbeiders en ambtenaren. Maar de wereld is veranderd.\n\nDe vaardigheden die de eenentwintigste eeuw vraagt — kritisch denken, creativiteit, samenwerking en digitale geletterdheid — worden nauwelijks getoetst in traditionele examens. Een leerling kan een onvoldoende halen voor een toets en toch briljant zijn in precies de vaardigheden die werkgevers zoeken.\n\nTechnologie maakt gepersonaliseerd leren mogelijk. Adaptieve software past het tempo en het niveau aan op basis van de prestaties van de individuele leerling. Khan Academy, Duolingo en andere platforms laten zien dat miljoenen mensen effectief kunnen leren zonder traditionele klaslokalen.\n\nMaar technologie vervangt de leraar niet. De rol van de leraar verschuift van kennisoverdrager naar coach en mentor. In een wereld waar informatie overal beschikbaar is, is de vaardigheid om informatie te evalueren, te verbinden en toe te passen waardevoller dan het memoriseren van feiten.\n\nHet Finse onderwijssysteem wordt vaak als voorbeeld aangehaald. Finland heeft korte schooldagen, weinig huiswerk, geen gestandaardiseerde toetsen tot de leeftijd van zestien, en toch scoren Finse leerlingen consequent hoog op internationale vergelijkingen. De sleutel is de kwaliteit en het aanzien van leraren: het is een gerespecteerd beroep waarvoor een masterdiploma vereist is.\n\nGamification, het toepassen van spelelementen in het leerproces, verhoogt de motivatie en het engagement. Punten, badges en voortgangsbalken geven leerlingen een gevoel van prestatie en autonomie. De grens tussen leren en spelen vervaagt.\n\nDe toekomst van onderwijs is geen single model maar een ecosysteem van benaderingen, aangepast aan de behoeften van het individu.",
    "vragen": [
      {
        "v": "Voor welk doel was het huidige onderwijssysteem oorspronkelijk ontworpen?",
        "opties": [
          "Universitair onderzoek",
          "Het industriële tijdperk",
          "Digitale vaardigheden",
          "Sociale integratie"
        ],
        "correct": 1
      },
      {
        "v": "Wat is bijzonder aan het Finse onderwijssysteem?",
        "opties": [
          "Lange schooldagen",
          "Veel gestandaardiseerde toetsen",
          "Korte dagen, weinig huiswerk, hoge kwaliteit leraren",
          "Strikte discipline"
        ],
        "correct": 2
      },
      {
        "v": "Wat is gamification in het onderwijs?",
        "opties": [
          "Computerspellen spelen",
          "Spelelementen toepassen in het leerproces",
          "Een toetsmethode",
          "Een onderwijsfilosofie uit Japan"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n3c",
    "titel": "De neurowetenschappen van bewustzijn",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 398,
    "tekst": "Bewustzijn is het meest fundamentele aspect van ons bestaan en tegelijkertijd het grootste raadsel van de wetenschap. Wat is het precies om iets te ervaren? Waarom voelt de kleur rood rood? Waarom is er überhaupt een subjectieve ervaring, in plaats van dat ons brein informatie verwerkt zonder dat iemand het ervaart?\n\nDe filosoof David Chalmers noemde dit het hard problem of consciousness. Het easy problem — hoe het brein informatie verwerkt, reageert op prikkels en gedrag stuurt — is moeilijk maar in principe oplosbaar met neurowetenschappelijk onderzoek. Het hard problem — waarom er een subjectieve ervaring gekoppeld is aan die informatieprocessen — lijkt van een heel andere orde.\n\nVerschillende theorieën proberen bewustzijn te verklaren. De Global Workspace Theory van Bernard Baars stelt dat bewustzijn ontstaat wanneer informatie breed wordt uitgezonden naar vele hersengebieden tegelijk, als een spotlight op een donker podium. Onbewuste processen verlopen lokaal; bewuste ervaringen worden globaal gedeeld.\n\nDe Integrated Information Theory van Giulio Tononi neemt een wiskundige benadering. Bewustzijn, uitgedrukt als Phi, is de mate van geïntegreerde informatie in een systeem. Hoe meer een systeem informatie op een geïntegreerde manier verwerkt die niet te reduceren is tot de som van zijn delen, hoe bewuster het is. Deze theorie impliceert controversieel dat ook eenvoudige systemen een minimale vorm van bewustzijn kunnen bezitten — panpsychisme.\n\nDe predictive processing theory ziet het brein als een voorspellingsmachine die continu modellen genereert van de werkelijkheid en deze bijstelt op basis van binnenkomende sensorische informatie. Bewustzijn zou dan het resultaat zijn van het verschil tussen voorspelling en werkelijkheid — de prediction error. Hallucinaties zijn in dit model voorspellingen zonder corrigerende sensorische input.\n\nAnesthesie biedt een raadselachtig venster op bewustzijn. Onder narcose verdwijnt het bewustzijn volledig, hoewel het brein nog steeds actief is. De verbindingen tussen hersengebieden worden verstoord: informatie wordt lokaal verwerkt maar niet meer globaal geïntegreerd. Dit ondersteunt zowel de Global Workspace als de Integrated Information benadering.\n\nKunstmatige intelligentie voegt een nieuwe dimensie toe aan het debat. Grote taalmodellen produceren tekst die bewust lijkt, maar is er iemand thuis? De Turing-test, die beoordeelt of een machine van een mens te onderscheiden is, zegt niets over daadwerkelijk bewustzijn. Een perfect acterende zombie zou de test ook passen.\n\nDe studie van bewustzijn dwingt ons tot bescheidenheid. We bevinden ons in een positie vergelijkbaar met die van wetenschappers vóór Darwin: we zien de complexiteit maar missen nog het overkoepelende raamwerk dat alles verbindt.",
    "vragen": [
      {
        "v": "Wat is het hard problem of consciousness volgens Chalmers?",
        "opties": [
          "Hoe het brein informatie verwerkt",
          "Waarom er een subjectieve ervaring is",
          "Hoe neuronen communiceren",
          "Hoeveel hersengebieden er zijn"
        ],
        "correct": 1
      },
      {
        "v": "Wat meet Phi in de Integrated Information Theory?",
        "opties": [
          "Hersenactiviteit",
          "De mate van geïntegreerde informatie",
          "Het aantal neuronen",
          "De snelheid van denken"
        ],
        "correct": 1
      },
      {
        "v": "Wat gebeurt er met bewustzijn onder narcose?",
        "opties": [
          "Het brein stopt volledig",
          "Verbindingen tussen hersengebieden worden verstoord",
          "Alleen dromen verdwijnen",
          "Het geheugen wordt gewist"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n3d",
    "titel": "De economie van ongelijkheid",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 351,
    "tekst": "De rijkste een procent van de wereldbevolking bezit meer dan veertig procent van alle mondiale rijkdom. De onderste vijftig procent bezit minder dan twee procent. Deze ongelijkheid is de afgelopen vier decennia dramatisch toegenomen, na een periode van relatieve nivellering in de naoorlogse jaren.\n\nThomas Piketty demonstreerde in zijn werk Capital in the Twenty-First Century dat ongelijkheid een inherente tendens is van het kapitalisme. Wanneer het rendement op kapitaal (r) groter is dan de economische groeivoet (g), concentreert rijkdom zich steeds meer bij degenen die al kapitaal bezitten. Dit is geen aberratie maar de standaardmodus van het systeem.\n\nDe gevolgen zijn niet alleen economisch maar ook sociaal en politiek. Epidemiologen Richard Wilkinson en Kate Pickett toonden aan dat ongelijkere samenlevingen slechter scoren op vrijwel alle sociale indicatoren: meer criminaliteit, slechtere gezondheid, lagere levensverwachting, minder sociaal vertrouwen en hogere niveaus van mentale ziekte. Dit geldt niet alleen voor de armen maar voor de gehele bevolking, inclusief de rijken.\n\nDe mechanismen zijn complex. Ongelijkheid creëert statusangst: het constant vergelijken met anderen activeert stresssystemen. Het ondermijnt sociale cohesie: in ongelijke samenlevingen vertrouwen mensen elkaar minder. Het vermindert sociale mobiliteit: kinderen uit arme gezinnen hebben minder toegang tot goed onderwijs, gezonde voeding en cultureel kapitaal.\n\nDe Great Gatsby-curve laat een verrassend verband zien: landen met meer inkomensongelijkheid hebben minder sociale mobiliteit. De Amerikaanse droom — dat iedereen het kan maken ongeacht afkomst — is statistisch gezien makkelijker te realiseren in Denemarken dan in de Verenigde Staten.\n\nTechnologie versterkt de ongelijkheidsdynamiek. Automatisering elimineert middenklassebanen. De digitale economie creëert winner-takes-all markten waarin een handvol bedrijven een disproportioneel deel van de waarde absorbeert. De platformeconomie verschuift risico van bedrijven naar individuele werkers.\n\nBeleidsoplossingen bestaan: progressieve belastingen, vermogensbelasting, investeringen in onderwijs en gezondheidszorg, versterking van vakbonden en een hoger minimumloon. De politieke wil om deze maatregelen te implementeren is de eigenlijke bottleneck. In democratieën waar geld politieke macht koopt, is het moeilijk om beleid te voeren dat de belangen van de meerderheid dient ten koste van de rijksten.\n\nDe vraag is niet of we ongelijkheid kunnen verminderen, maar of we als samenleving besluiten dat het de moeite waard is.",
    "vragen": [
      {
        "v": "Hoeveel procent van de mondiale rijkdom bezit de rijkste een procent?",
        "opties": [
          "Tien procent",
          "Twintig procent",
          "Meer dan veertig procent",
          "Zestig procent"
        ],
        "correct": 2
      },
      {
        "v": "Wat beschrijft de formule r > g van Piketty?",
        "opties": [
          "Dat economische groei altijd wint",
          "Dat rendement op kapitaal hoger is dan economische groei",
          "Dat rijken meer belasting betalen",
          "Dat lonen sneller stijgen dan prijzen"
        ],
        "correct": 1
      },
      {
        "v": "Wat toont de Great Gatsby-curve?",
        "opties": [
          "Dat rijkdom geluk brengt",
          "Dat ongelijkheid en sociale mobiliteit omgekeerd samenhangen",
          "Dat Amerika het meest gelijke land is",
          "Dat belastingen ongelijkheid vergroten"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n3e",
    "titel": "Kwantumcomputers en de grenzen van berekening",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 374,
    "tekst": "Klassieke computers werken met bits die ofwel nul ofwel één zijn. Een kwantumcomputer werkt met qubits die beide waarden tegelijkertijd kunnen aannemen dankzij het principe van superpositie. Dit is geen kwestie van niet weten welke waarde het is — de qubit bevindt zich daadwerkelijk in een combinatie van beide toestanden totdat deze wordt gemeten.\n\nVerstrengeling, het tweede fundamentele kwantumprincipe, zorgt ervoor dat qubits onlosmakelijk met elkaar verbonden kunnen raken. De toestand van de ene qubit is onmiddellijk gecorreleerd met die van de andere, ongeacht de afstand ertussen. Einstein noemde dit spukhafte Fernwirkung — spookachtige werking op afstand — en was er diep sceptisch over, maar experimenten hebben herhaaldelijk bewezen dat het een reëel fenomeen is.\n\nDe rekenkracht van een kwantumcomputer schaalt exponentieel met het aantal qubits. Terwijl drie klassieke bits acht mogelijke combinaties één voor één verwerken, kan drie qubits alle acht combinaties tegelijkertijd representeren. Bij driehonderd qubits is het aantal gelijktijdige toestanden groter dan het aantal atomen in het waarneembare universum.\n\nIn 2019 claimde Google kwantumsuperioriteit: hun Sycamore-processor voerde een berekening uit in tweehonderd seconden waarvoor de krachtigste supercomputer naar schatting tienduizend jaar nodig zou hebben. IBM betwistte deze claim en stelde dat hun systeem het in tweeënhalve dag kon. Het debat illustreert dat de grens van kwantumsuperioriteit niet absoluut maar contextafhankelijk is.\n\nDe killer app voor kwantumcomputers is cryptografie. Het RSA-algoritme, dat de beveiliging van internetbankieren en digitale communicatie onderbouwt, berust op het feit dat het factoriseren van zeer grote getallen ondoenlijk lang duurt voor klassieke computers. Het algoritme van Shor, ontworpen voor kwantumcomputers, kan dit exponentieel sneller. Als kwantumcomputers krachtig genoeg worden, zijn huidige encryptiestandaarden gekraakt. Post-quantum cryptografie — encryptie die bestand is tegen kwantumaanvallen — is al in ontwikkeling.\n\nAndere beloftevolle toepassingen zijn het simuleren van moleculaire structuren voor medicijnontwikkeling, het optimaliseren van complexe logistieke netwerken en het trainen van machine learning-modellen. Veel van deze toepassingen zijn nog theoretisch: huidige kwantumcomputers zijn foutgevoelig en beperkt in het aantal bruikbare qubits.\n\nFouttolerantie is het kernprobleem. Qubits zijn extreem gevoelig voor omgevingsinvloeden — temperatuur, trillingen, elektromagnetische straling — die decoherentie veroorzaken. Huidige systemen opereren nabij het absolute nulpunt en vereisen extremes in isolatie en koeling.\n\nDe kwantumcomputerrevolutie staat niet op het punt om morgen te beginnen, maar de fundamenten worden nu gelegd.",
    "vragen": [
      {
        "v": "Wat is superpositie bij qubits?",
        "opties": [
          "Een qubit is altijd nul",
          "Een qubit kan beide waarden tegelijk aannemen",
          "Qubits werken sneller dan bits",
          "Superpositie is een fout"
        ],
        "correct": 1
      },
      {
        "v": "Waarom is het algoritme van Shor een bedreiging voor encryptie?",
        "opties": [
          "Het vernietigt data",
          "Het kan grote getallen exponentieel sneller factoriseren",
          "Het hackt wachtwoorden",
          "Het vertraagt het internet"
        ],
        "correct": 1
      },
      {
        "v": "Wat is het kernprobleem van huidige kwantumcomputers?",
        "opties": [
          "Ze zijn te groot",
          "Fouttolerantie door decoherentie",
          "Ze zijn te duur",
          "Er zijn te weinig programmeurs"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n3f",
    "titel": "Epigenetica: hoe je levensstijl je DNA beïnvloedt",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 385,
    "tekst": "Het dogma van de genetica was jarenlang eenvoudig: DNA bepaalt je eigenschappen en je kunt je DNA niet veranderen. Epigenetica heeft dit beeld fundamenteel bijgesteld. Hoewel de DNA-sequentie zelf niet verandert, kunnen chemische markeringen op het DNA bepalen welke genen aan- of uitgeschakeld worden. Je levensstijl beïnvloedt deze markeringen.\n\nMethylgroepen zijn de meest bestudeerde epigenetische markering. Wanneer een methylgroep zich aan een gen hecht, wordt dat gen uitgeschakeld — als een dimmer die het licht verlaagt zonder de lamp te verwijderen. Histonmodificaties zijn een ander mechanisme: door de eiwitten waaromheen DNA is gewikkeld te veranderen, wordt de toegankelijkheid van genen vergroot of verkleind.\n\nDe ontdekking dat omgevingsfactoren epigenetische veranderingen veroorzaken was revolutionair. Voeding, stress, beweging, roken en blootstelling aan toxische stoffen beïnvloeden het epigenoom. Studies met eeneiige tweelingen — genetisch identiek — tonen aan dat hun epigenetische profielen met de leeftijd steeds meer gaan verschillen, gedreven door verschillende levenservaringen.\n\nHet meest controversiële aspect is transgenerationele epigenetica: het idee dat epigenetische veranderingen kunnen worden doorgegeven aan volgende generaties. De Hongerwinter van 1944-45 in Nederland bood een uniek natuurlijk experiment. Kinderen van moeders die tijdens de hongersnood zwanger waren, hadden een hoger risico op obesitas, diabetes en hart- en vaatziekten — en ditzelfde patroon was ook zichtbaar bij de kleinkinderen, die de hongersnood zelf niet hadden meegemaakt.\n\nBij dieren is transgenerationele overerving overtuigender aangetoond. In een beroemd experiment bij muizen werden mannetjes blootgesteld aan de geur van kersenbloesem, gevolgd door een elektrische schok. Hun nakomelingen, die nooit de schok hadden ervaren, vertoonden een verhoogde angstreactie op dezelfde geur. Het gen voor de relevante geurreceptor was epigenetisch gemodificeerd in het sperma van de vaders.\n\nDe implicaties voor de geneeskunde zijn verstrekkend. Kanker wordt steeds meer begrepen als een epigenetische ziekte: genen die celgroei controleren worden uitgeschakeld door aberrante methylering. Epigenetische therapieën die deze markeringen herstellen zijn in ontwikkeling.\n\nDe boodschap is zowel empowerend als confronterend. Je genen zijn niet je lot. Je keuzes — wat je eet, hoe je beweegt, hoe je met stress omgaat — schrijven mee aan het script dat bepaalt welke genen actief zijn. Die verantwoordelijkheid strekt zich mogelijk uit naar je kinderen en kleinkinderen.\n\nEpigenetica biedt het begin van een antwoord op de eeuwenoude nature-nurture vraag: het is geen kwestie van óf je genen óf je omgeving, maar van een voortdurende dialoog tussen beide.",
    "vragen": [
      {
        "v": "Wat doen methylgroepen als epigenetische markering?",
        "opties": [
          "Ze verwijderen genen",
          "Ze schakelen genen uit zonder ze te verwijderen",
          "Ze verdubbelen genen",
          "Ze repareren DNA-schade"
        ],
        "correct": 1
      },
      {
        "v": "Wat leerde de Hongerwinter over epigenetica?",
        "opties": [
          "Dat honger genen verandert",
          "Dat epigenetische effecten mogelijk meerdere generaties beïnvloeden",
          "Dat tweelingen identiek blijven",
          "Dat stress geen effect heeft op DNA"
        ],
        "correct": 1
      },
      {
        "v": "Hoe wordt kanker steeds meer begrepen in relatie tot epigenetica?",
        "opties": [
          "Als een genetische mutatie alleen",
          "Als een epigenetische ziekte met aberrante methylering",
          "Als onbehandelbaar",
          "Als een virusinfectie"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n3g",
    "titel": "De filosofie van technologie en vrijheid",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 414,
    "tekst": "Technologie wordt vaak gepresenteerd als neutraal gereedschap: een hamer kan een huis bouwen of een raam breken. Maar technologiefilosofen als Langdon Winner en Neil Postman betogen dat technologie nooit neutraal is. Elke technologie bevat ingebouwde waarden en herstructureert de samenleving op manieren die niet altijd zichtbaar zijn.\n\nWinner illustreerde dit met de bruggen van Robert Moses in New York. Moses ontwierp viaducten boven de toegangswegen naar stranden met een doorrijhoogte die te laag was voor bussen. Het effect: arme en zwarte New Yorkers, die afhankelijk waren van openbaar vervoer, konden de stranden niet bereiken. Discriminatie was letterlijk ingebouwd in de architectuur.\n\nHet concept van technologisch determinisme — het idee dat technologie de samenleving onvermijdelijk in een bepaalde richting duwt — is te simplistisch maar bevat een waarheid. De auto maakte suburbanisatie mogelijk. De smartphone maakte continue bereikbaarheid de norm. Sociale media maakten viraliteit het nieuwe keermerk van succes. Geen van deze ontwikkelingen was onvermijdelijk, maar eenmaal geadopteerd herstructureerden ze de samenleving op voorspelbare manieren.\n\nShoshana Zuboff introduceerde het concept surveillance capitalism: het bedrijfsmodel waarbij menselijke ervaring wordt geoogst als gratis grondstof voor voorspelling en beïnvloeding van gedrag. Google en Facebook verdienen niet aan dienstverlening maar aan het voorspellen en sturen van menselijk gedrag. De gebruiker is niet de klant maar het product — of preciezer, de grondstof.\n\nDe paradox van keuzevrijheid in het digitale tijdperk is schrijnend. We hebben meer opties dan ooit maar minder autonomie. Algoritmen bepalen wat we zien, recommender systems sturen ons naar content die engagement maximaliseert ongeacht de gevolgen, en dark patterns manipuleren ons naar keuzes die het platform dienen. De architectuur van keuze is zelf een machtsstructuur.\n\nDe filosoof Byung-Chul Han betoogt dat we leven in een prestatiesamenleving waarin de dwang niet meer van buiten komt maar van binnenuit. We exploiteren onszelf. De smartphone is niet een ketting maar een elegant device dat we vrijwillig nooit neerleggen. De burn-out is de ziekte van de eenentwintigste eeuw, niet veroorzaakt door onderdrukking maar door onbeperkte verwachtingen.\n\nTegenover technologisch pessimisme staat het idee van waardengericht ontwerp. Technologie kan bewust worden ontworpen om menselijke waarden als autonomie, privacy, welzijn en democratie te bevorderen. Time Well Spent, de beweging gestart door Tristan Harris, pleit voor ethisch ontwerp dat de belangen van de gebruiker boven die van het platform stelt.\n\nDe kernvraag is niet of we technologie gebruiken, maar wie de technologie dient. Technische geletterdheid — begrijpen hoe systemen werken en welke belangen ze dienen — is een voorwaarde voor vrijheid in het digitale tijdperk.",
    "vragen": [
      {
        "v": "Wat is surveillance capitalism volgens Zuboff?",
        "opties": [
          "Big Brother door de overheid",
          "Het oogsten van menselijke ervaring voor gedragsvoorspelling",
          "Camera's op openbare plekken",
          "Het hacken van computers"
        ],
        "correct": 1
      },
      {
        "v": "Wat illustreerde Langdon Winner met de bruggen van Moses?",
        "opties": [
          "Dat bruggen mooi moeten zijn",
          "Dat technologie ingebouwde waarden bevat",
          "Dat New York goed ontworpen is",
          "Dat bussen te hoog zijn"
        ],
        "correct": 1
      },
      {
        "v": "Wat betoogt Byung-Chul Han over moderne dwang?",
        "opties": [
          "Dat overheidscontrole toeneemt",
          "Dat dwang van buiten komt",
          "Dat we onszelf exploiteren vanuit prestatiedruk",
          "Dat technologie vrij maakt"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n1h",
    "titel": "De magie van muziek",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 230,
    "tekst": "Muziek is een universeel menselijk fenomeen. Elke cultuur in de geschreven geschiedenis heeft muziek voortgebracht. Van wiegeliedjes tot oorlogstrommen, muziek speelt een rol bij vrijwel elke menselijke activiteit.\n\nWanneer je muziek luistert, activeer je meer hersengebieden tegelijk dan bij welke andere activiteit dan ook. Het auditieve systeem verwerkt de klanken, het motorische systeem reageert op het ritme, het limbisch systeem ervaart de emotie en de prefrontale cortex analyseert de structuur.\n\nMuziek verandert je stemming, je hartslagfrequentie en je bloeddruk. Vrolijke muziek in een majeur toonladder verhoogt dopamineproductie. Langzame muziek in een mineur toonladder kan ontroering opwekken. Het rileffect, kippenvel bij muziek, is een fysiologische reactie op onverwachte harmonische wendingen.\n\nMuzikale training verandert het brein structureel. Kinderen die een instrument leren spelen ontwikkelen een groter corpus callosum, het bundel zenuwvezels dat de twee hersenhelften verbindt. Ze scoren beter op wiskunde, taalvaardigheid en werkgeheugen.\n\nHet Mozart-effect, het idee dat naar Mozart luisteren je slimmer maakt, is grotendeels ontkracht. Wat wel bewezen is, is dat actief muziek maken cognitieve voordelen heeft die een leven lang meegaan.\n\nMuziektherapie wordt ingezet bij Parkinson-patiënten om motoriek te verbeteren, bij dementie om herinneringen op te halen en bij depressie als aanvulling op medicatie.\n\nLiedjes blijven plakken omdat ze worden opgeslagen in het procedureel geheugen, hetzelfde systeem als fietsen of zwemmen. Daarom kunnen Alzheimer-patiënten vaak nog meezingen met bekende liedjes\nals ze hun eigen naam niet meer herinneren.",
    "vragen": [
      {
        "v": "Wat activeert muziek volgens de tekst?",
        "opties": [
          "Alleen het auditieve systeem",
          "Meer hersengebieden dan elke andere activiteit",
          "Alleen emotie",
          "Het visuele systeem"
        ],
        "correct": 1
      },
      {
        "v": "Wat is het rileffect bij muziek?",
        "opties": [
          "Misselijkheid",
          "Kippenvel bij onverwachte harmonieën",
          "Slaperigheid",
          "Verhoogde concentratie"
        ],
        "correct": 1
      },
      {
        "v": "Wat is er bewezen over het Mozart-effect?",
        "opties": [
          "Het werkt sterk",
          "Het is grotendeels ontkracht",
          "Het werkt alleen bij kinderen",
          "Het verdubbelt het IQ"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n1i",
    "titel": "De wetenschap van slaap",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 212,
    "tekst": "Slaap is geen passieve toestand maar een actief biologisch proces dat essentieel is voor gezondheid en overleving. Tijdens de slaap doorloop je meerdere cycli van ongeveer negentig minuten, elk bestaande uit lichte slaap, diepe slaap en REM-slaap.\n\nIn de diepe slaapfase repareert het lichaam weefsels, bouwt het spierweefsel op en versterkt het het immuunsysteem. Groeihormoon wordt voornamelijk tijdens de diepe slaap uitgescheiden. Kinderen en tieners die onvoldoende slapen, groeien letterlijk minder.\n\nREM-slaap is de droomfase. Het brein verwerkt de emotionele ervaringen van de dag. Studies tonen aan dat mensen die na een emotionele gebeurtenis goed slapen, de volgende dag beter omgaan met de bijbehorende emoties.\n\nChronisch slaapgebrek heeft ernstige gevolgen. Zes uur slaap per nacht gedurende twee weken leidt tot dezelfde cognitieve achteruitgang als twee nachten volledig wakker blijven. Het risico op obesitas, diabetes en hart- en vaatziekten stijgt significant.\n\nHet circadiaans ritme, je interne biologische klok, wordt aangestuurd door het hormoon melatonine. Blauw licht van schermen onderdrukt de melatonineproductie, waardoor het inslapen wordt bemoeilijkt.\n\nTips voor betere slaap: houd een vast slaapschema aan, maak je slaapkamer donker en koel, vermijd cafeïne na twee uur 's middags en stop een uur voor bedtijd met beeldschermen.\n\nSlaap is geen luxe maar een biologische noodzaak die je gezondheid, cognitie en emotioneel welzijn fundamenteel bepaalt.",
    "vragen": [
      {
        "v": "Hoe lang duurt een gemiddelde slaapcyclus?",
        "opties": [
          "Dertig minuten",
          "Zestig minuten",
          "Negentig minuten",
          "Twee uur"
        ],
        "correct": 2
      },
      {
        "v": "Wat wordt vooral tijdens diepe slaap uitgescheiden?",
        "opties": [
          "Melatonine",
          "Adrenaline",
          "Groeihormoon",
          "Cortisol"
        ],
        "correct": 2
      },
      {
        "v": "Waarmee is twee weken zes uur slaap per nacht vergelijkbaar?",
        "opties": [
          "Eén nacht wakker",
          "Twee nachten volledig wakker",
          "Een week wakker",
          "Geen effect"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n1j",
    "titel": "Hoe bijen de wereld voeden",
    "doelgroep": "volwassen",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 204,
    "tekst": "Bijen zijn verantwoordelijk voor de bestuiving van ongeveer zeventig procent van de gewassen die de mensheid voedt. Zonder bijen zouden supermarkten een derde van hun producten verliezen: appels, amandelen, aardbeien, tomaten, komkommers en vele andere.\n\nEen honingbij bezoekt per dag tussen de vijftig en duizend bloemen. Om één pot honing te produceren moeten bijen samen meer dan twee miljoen bloemen bezoeken. Het is een enorme inspanning voor het kleine diertje.\n\nBijen communiceren via de bijendans, ontdekt door Karl von Frisch. De kwispeldans vertelt andere bijen precies de richting en afstand van een voedselbron. De hoek van de dans ten opzichte van de zon geeft de richting aan, de duur de afstand.\n\nDe bijenstand neemt wereldwijd af. Colony Collapse Disorder, waarbij werkbijen massaal een kolonie verlaten, is een groeiend probleem. Pesticiden, met name neonicotinoïden, verzwakken het zenuwstelsel van bijen. Monoculturen beperken hun voedselaanbod. De varroa-mijt, een parasiet, zuigt het bloed van larven en volwassen bijen.\n\nStadsbijenteelt groeit in populariteit. Steden bieden verrassend veel voedsel voor bijen dankzij parken, tuinen en balkons met bloemen. Stadshoning bevat soms meer variatie dan honing van het platteland.\n\nIedereen kan helpen: plant bijvriendelijke bloemen, vermijd pesticiden in je tuin en laat een hoekje wild groeien. Bijen zijn klein maar onmisbaar.",
    "vragen": [
      {
        "v": "Welk percentage van gewassen wordt door bijen bestoven?",
        "opties": [
          "Twintig procent",
          "Vijftig procent",
          "Zeventig procent",
          "Negentig procent"
        ],
        "correct": 2
      },
      {
        "v": "Wat is de bijendans?",
        "opties": [
          "Een huwelijksritueel",
          "Communicatie over voedsellocatie",
          "Een verdedigingsmanoeuvre",
          "Een ritmische hobby"
        ],
        "correct": 1
      },
      {
        "v": "Wat is Colony Collapse Disorder?",
        "opties": [
          "Bijen worden te groot",
          "Werkbijen verlaten massaal de kolonie",
          "De koningin sterft",
          "Het bijennest valt om"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n2h",
    "titel": "De wetenschap van verslaving",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 245,
    "tekst": "Verslaving is een chronische hersenziekte, geen moreel falen. Dit inzicht, hoewel inmiddels breed geaccepteerd in de neurowetenschappen, is nog niet doorgedrongen tot het publieke bewustzijn. Veel mensen beschouwen verslaafden nog steeds als zwak of onverantwoordelijk.\n\nHet mesolimbische beloningssysteem, ook wel het dopaminesysteem genoemd, speelt de centrale rol. Wanneer je iets plezierigs doet, wordt dopamine vrijgegeven in de nucleus accumbens. Dit signaal zegt: onthoud dit en doe het opnieuw. Bij verslavende stoffen is de dopamine-uitstoot vele malen sterker dan bij natuurlijke beloningen.\n\nHeroïne veroorzaakt een dopaminevloed die tien keer zo sterk is als een orgasme. Methamfetamine produceert een piek die twaalf keer zo sterk is. Het brein past zich aan door het aantal dopaminereceptoren te verminderen. Het gevolg: de gebruiker heeft steeds meer nodig voor hetzelfde effect, en alledaagse genoegens voelen steeds vlakker.\n\nHet brein verandert structureel. De prefrontale cortex, verantwoordelijk voor impulscontrole en besluitvorming, krimpt bij chronisch gebruik. De amygdala, betrokken bij stress en angst, wordt overactief. De verslaafde verliest letterlijk het vermogen om rationeel te kiezen.\n\nGenetische factoren verklaren veertig tot zestig procent van de kwetsbaarheid voor verslaving. Trauma in de kindertijd verhoogt het risico substantieel. De ACE-studie toonde aan dat elke extra traumatische ervaring in de kindertijd het risico op verslaving meetbaar verhoogt.\n\nEffectieve behandeling combineert medicatie, gedragstherapie en sociale ondersteuning. Medicijnen als methadon en buprenorfine halveren de sterftekans bij opiatenverslaving. Cognitieve gedragstherapie helpt patronen te doorbreken. Sociale verbinding is misschien de krachtigste factor: het tegenovergestelde van verslaving is niet nuchterheid maar verbinding.",
    "vragen": [
      {
        "v": "Welke hersenstructuur speelt de centrale rol bij verslaving?",
        "opties": [
          "De hippocampus",
          "Het mesolimbische beloningssysteem",
          "De visuele cortex",
          "Het cerebellum"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel procent van verslavingskwetsbaarheid is genetisch?",
        "opties": [
          "Tien tot twintig procent",
          "Veertig tot zestig procent",
          "Zeventig tot tachtig procent",
          "Negentig procent"
        ],
        "correct": 1
      },
      {
        "v": "Wat is volgens de tekst het tegenovergestelde van verslaving?",
        "opties": [
          "Nuchterheid",
          "Medicatie",
          "Verbinding",
          "Discipline"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lang-n2i",
    "titel": "De fysica van het dagelijks leven",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 252,
    "tekst": "Natuurkunde is overal, maar we merken het zelden op. Elke keer dat je een auto remt, een bal gooit of een broodje in de magnetron opwarmt, zijn de wetten van de fysica aan het werk.\n\nNewtons eerste wet verklaart waarom je naar voren schiet als een auto plotseling remt: een lichaam in beweging wil in beweging blijven. Je lichaam wil rechtdoor terwijl de auto stopt. Daarom is een gordel noodzakelijk.\n\nDe werking van een magnetron berust op diëlektrische verwarming. Microgolven laten watermoleculen in je eten miljarden keren per seconde roteren. De wrijving tussen de moleculen genereert warmte. Daarom worden droge materialen als porselein niet warm, terwijl waterrijk voedsel wel opwarmt.\n\nKoelkasten verwarmen je keuken. Ze pompen warmte van binnen naar buiten via de verdamping en condensatie van een koelmiddel. De spoelen aan de achterkant stralen de onttrokken warmte af. Een koelkast met open deur verwarmt de kamer netto.\n\nVliegtuigen vliegen dankzij het Bernoulli-effect. De bovenkant van een vleugel is boller dan de onderkant. Lucht stroomt sneller over de bovenkant, wat lagere druk creëert. Het drukverschil tussen boven en onder genereert lift.\n\nWanneer je door een tunnel rijdt en je oren ploppen, ervaar je de wet van Boyle: bij hogere druk wordt het volume van gas kleiner. Je trommelvlies buigt door het drukverschil.\n\nGPS-satellieten moeten corrigeren voor Einsteins relativiteitstheorie. Door de zwakkere zwaartekracht op hoge hoogte tikken de klokken in satellieten iets sneller. Zonder correctie zou je GPS-positie dagelijks elf kilometer verschuiven.\n\nFysica is niet abstract. Het is de handleiding van de werkelijkheid.",
    "vragen": [
      {
        "v": "Waarom schiet je naar voren als een auto remt?",
        "opties": [
          "Zwaartekracht",
          "Newtons eerste wet: traagheid",
          "De wind",
          "Magnetisme"
        ],
        "correct": 1
      },
      {
        "v": "Waarom wordt porselein niet warm in een magnetron?",
        "opties": [
          "Het is te hard",
          "Het bevat geen watermoleculen",
          "Het reflecteert microgolven",
          "Het is te dun"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel zou GPS-verschuiven zonder relativiteitscorrectie?",
        "opties": [
          "Een meter",
          "Honderd meter",
          "Een kilometer",
          "Elf kilometer per dag"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": "lang-n2j",
    "titel": "De geschiedenis van geld",
    "doelgroep": "volwassen",
    "niveau": 2,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 253,
    "tekst": "Geld is een van de meest succesvolle ficties van de mensheid. Het heeft alleen waarde omdat we collectief geloven dat het waarde heeft. Een briefje van honderd euro is fysiek een stukje papier. De waarde zit in het gedeelde vertrouwen.\n\nDe eerste vormen van geld waren gebruiksvoorwerpen: veeteelt produceerde vee als ruilmiddel, boeren gebruikt graan, kustvolk schelpen. Het Latijnse woord pecunia, geld, is afgeleid van pecus, vee.\n\nMunten ontstonden rond zevenhonderd voor Christus in Lydië, het huidige Turkije. Koning Croesus sloeg de eerste gestandaardiseerde gouden munten. Standaardisatie was de sleutel: je hoefde niet meer elk stuk metaal te wegen en te testen.\n\nPapiergeld werd uitgevonden in China tijdens de Tang-dynastie, rond de zevende eeuw. De Chinezen ontdekten al snel de gevaren: te veel bijdrukken leidde tot inflatie. Marco Polo was verbijsterd toen hij in China papier als betaalmiddel zag.\n\nDe goudstandaard koppelde de waarde van papiergeld aan fysiek goud. Dit systeem bood stabiliteit maar beperkte de flexibiliteit van overheden. President Nixon maakte in 1971 een einde aan de goudstandaard. Sindsdien is geld fiatgeld: het heeft waarde omdat de overheid zegt dat het waarde heeft.\n\nDigitaal geld domineert vandaag. Meer dan negentig procent van al het geld ter wereld bestaat alleen als nullen en enen op bankcomputers. Contactloos betalen, online overboekingen en cryptovaluta hebben het fysieke aspect van geld grotendeels overbodig gemaakt.\n\nBitcoin, gelanceerd in 2009 door het pseudoniem Satoshi Nakamoto, introduceerde gedecentraliseerd geld zonder tussenkomst van banken of overheden. De blockchaintechnologie erachter wordt beschouwd als een even fundamentele innovatie als het internet zelf.",
    "vragen": [
      {
        "v": "Waar is het woord pecunia van afgeleid?",
        "opties": [
          "Perkament",
          "Pecus (vee)",
          "Peculiar",
          "Petra (steen)"
        ],
        "correct": 1
      },
      {
        "v": "Wanneer werd de goudstandaard afgeschaft?",
        "opties": [
          "1929",
          "1945",
          "1971",
          "2001"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel procent van al het geld is nog fysiek?",
        "opties": [
          "Minder dan tien procent",
          "Dertig procent",
          "Vijftig procent",
          "Zeventig procent"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "lang-n3h",
    "titel": "De paradoxen van de tijd",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 348,
    "tekst": "Tijd is het meest vertrouwde en tegelijkertijd het meest raadselachtige concept in de natuurkunde. We ervaren tijd als een constante stroom van verleden naar toekomst, maar de fundamentele wetten van de fysica maken geen onderscheid tussen de twee richtingen.\n\nEinsteins speciale relativiteitstheorie uit 1905 toonde aan dat tijd niet absoluut is maar relatief. Een klok die beweegt ten opzichte van een waarnemer loopt langzamer. Dit is geen illusie maar een meetbaar fysisch effect. Astronauten op het International Space Station verouderen microseconden langzamer dan mensen op aarde. GPS-satellieten moeten dagelijks corrigeren voor dit effect.\n\nDe algemene relativiteitstheorie voegde zwaartekracht toe aan het plaatje. Tijd verloopt langzamer in een sterker zwaartekrachtveld. Een klok op zeeniveau loopt meetbaar langzamer dan een klok op een bergtop. Bij een zwart gat wordt dit effect extreem: voor een waarnemer op afstand lijkt de tijd aan de rand van het zwarte gat stil te staan.\n\nDe thermodynamische pijl van de tijd — de richting waarin entropie toeneemt — biedt de meest bevredigende verklaring voor waarom we tijd als lineair ervaren. Entropie, de mate van wanorde, neemt in een gesloten systeem altijd toe. Een gebroken ei assembleert niet spontaan tot een heel ei. Dit statistische argument geeft tijd een richting, maar verklaart niet fundamenteel waarom.\n\nKwantummechanica complicert het tijdsvraagstuk verder. Het Wheeler-DeWitt-vergelijking, die kwantumgravitatie beschrijft, bevat helemaal geen tijdvariabele. Sommige fysici concluderen dat tijd niet fundamenteel is maar emergent: het verschijnt als een macroscopisch fenomeen, vergelijkbaar met hoe temperatuur verschijnt uit de beweging van atomen.\n\nDe block universe-interpretatie, populair onder veel fysici, stelt dat verleden, heden en toekomst gelijktijdig bestaan als een vierdimensionaal blok. Er is geen bewegend heden. Onze ervaring van een stromende tijd is een illusie van ons bewustzijn.\n\nDe vraag of tijd reizen mogelijk is, is geen sciencefiction maar serieuze fysica. Reizen naar de toekomst is een bewezen feit via tijddilatatie. Reizen naar het verleden is theoretisch mogelijk via gesloten tijdachtige curven in de buurt van roterende zwarte gaten, maar de praktische en paradoxale bezwaren zijn overweldigend.\n\nDe vraag wat tijd werkelijk is, blijft een van de diepste open vragen van de natuurkunde.",
    "vragen": [
      {
        "v": "Wat toonde de speciale relativiteitstheorie over tijd?",
        "opties": [
          "Dat tijd altijd constant is",
          "Dat tijd relatief is en afhangt van snelheid",
          "Dat tijd een illusie is",
          "Dat tijd alleen vooruit gaat"
        ],
        "correct": 1
      },
      {
        "v": "Wat stelt de block universe-interpretatie?",
        "opties": [
          "Dat alleen het heden bestaat",
          "Dat verleden, heden en toekomst gelijktijdig bestaan",
          "Dat tijd sneller gaat bij meer massa",
          "Dat het universum uit blokken bestaat"
        ],
        "correct": 1
      },
      {
        "v": "Waarom ervaren we tijd als lineair volgens de thermodynamica?",
        "opties": [
          "Door zwaartekracht",
          "Omdat entropie altijd toeneemt",
          "Door de kwantummechanica",
          "Door onze hersenen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n3i",
    "titel": "De complexiteit van taal en denken",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 353,
    "tekst": "De relatie tussen taal en denken is een van de hardnekkigste vraagstukken in de cognitieve wetenschappen. Bepaalt de taal die je spreekt hoe je denkt, of is taal slechts een instrument om pre-linguïstische gedachten uit te drukken?\n\nDe sterke versie van de Sapir-Whorf-hypothese stelt dat taal het denken bepaalt: zonder een woord voor een concept kun je het concept niet begrijpen. Deze versie is grotendeels verworpen. De zwakke versie, dat taal het denken beïnvloedt zonder het volledig te bepalen, heeft aanzienlijk meer empirische ondersteuning.\n\nHet Russisch heeft twee aparte woorden voor lichtblauw en donkerblauw. Russischtaligen onderscheiden deze tinten sneller dan Engelstaligen, die slechts blue kennen. Dit effect verdwijnt wanneer de proefpersonen gelijktijdig een verbale taak uitvoeren, wat suggereert dat de taalverwerking actief betrokken is bij de kleurperceptie.\n\nDe Piraha, een inheems volk in het Amazonegebied, hebben geen woorden voor exacte getallen. Ze kennen slechts een, twee en veel. Experimenten tonen aan dat zij moeite hebben met taken die exact tellen vereisen boven drie. Dit lijkt de Sapir-Whorf-hypothese te ondersteunen, maar critici beweren dat het een gevolg is van culturele, niet linguïstische factoren.\n\nTweetaligen rapporteren systematisch dat ze anders denken, voelen en zelfs ethische oordelen anders vellen afhankelijk van de taal die ze gebruiken. Het beroemde trolleyprobleem wordt significant vaker utilitair beantwoord in een tweede taal dan in de moedertaal. De emotionele afstand van een niet-primaire taal vergemakkelijkt rationele keuzes.\n\nDe fysieke structuur van taal beïnvloedt ruimtelijke cognities. Sprekers van Kuuk Thaayorre, een Aboriginal taal die absolute richtingen gebruikt in plaats van links en rechts, hebben een ongeëvenaard ruimtelijk oriëntatievermogen. Ze weten altijd waar het noorden is, zelfs in een donkere kamer.\n\nDe link tussen taal en denken is geen alles-of-niets kwestie. Taal is een lens die de werkelijkheid kleurt zonder haar fundamenteel te vervormen. Het leren van nieuwe talen is daarmee niet alleen een communicatieve maar ook een cognitieve verrijking.\n\nNoam Chomsky argumenteerde dat de capaciteit voor taal aangeboren is, ingebouwd in ons brein als een universele grammatica. Steven Pinker bouwde hierop voort met het concept dat we denken in een mentale taal, mentalees, die dieper ligt dan welke gesproken taal dan ook.",
    "vragen": [
      {
        "v": "Wat stelt de zwakke Sapir-Whorf-hypothese?",
        "opties": [
          "Dat taal het denken volledig bepaalt",
          "Dat taal het denken beïnvloedt zonder het te bepalen",
          "Dat taal en denken los van elkaar staan",
          "Dat denken taal bepaalt"
        ],
        "correct": 1
      },
      {
        "v": "Hoe beantwoorden tweetaligen het trolleyprobleem in hun tweede taal?",
        "opties": [
          "Emotioneler",
          "Identiek",
          "Vaker utilitair",
          "Ze weigeren te antwoorden"
        ],
        "correct": 2
      },
      {
        "v": "Wat is bijzonder aan de Kuuk Thaayorre-taal?",
        "opties": [
          "Geen werkwoorden",
          "Absolute richtingen ipv links/rechts",
          "Geen tijdsaanduidingen",
          "Alleen gebarentaal"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lang-n3j",
    "titel": "De evolutie van samenwerking",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "lang",
    "woorden": 358,
    "tekst": "Een van de grote raadselen van de evolutie is hoe samenwerking kan ontstaan in een wereld die gedreven wordt door competitie. Natuurlijke selectie beloont individuen die beter overleven en zich voortplanten. Waarom zou een individu dan middelen investeren in het helpen van anderen?\n\nDe eerste verklaring is verwantenselectie, geformuleerd door William Hamilton. Omdat verwanten een deel van je genen dragen, kan het helpen van familie indirect je eigen genetisch succes vergroten. J.B.S. Haldane vatte het bondig samen: ik zou mijn leven geven voor twee broers of acht neven. De wiskundige logica klopt: twee broers dragen elk vijftig procent van je genen, acht neven elk twaalf en een half procent.\n\nRobert Trivers introduceerde wederzijds altruïsme. Als twee individuen herhaaldelijk met elkaar interacteren, kan het lonen om samen te werken zolang de ander dat ook doet. De tit-for-tat-strategie, begin met samenwerken en kopieer daarna het gedrag van de ander, bleek in computersimulaties van het herhaalde gevangenendilemma de meest succesvolle strategie.\n\nMartin Nowak identificeerde vijf mechanismen voor de evolutie van samenwerking: verwantenselectie, directe wederkerigheid, indirecte wederkerigheid (reputatie), netwerkselectie (groepsstructuur) en groepsselectie. Het menselijk succes als soort is grotendeels te danken aan onze ongekende capaciteit voor samenwerking met niet-verwanten.\n\nIndirecte wederkerigheid, gebaseerd op reputatie, is uniek menselijk. We helpen mensen die we niet kennen, gedeeltelijk omdat dit onze reputatie verbetert. In jager-verzamelaarsamenlevingen was reputatie een kwestie van leven en dood: wie als vrijbuiter bekend stond, werd uitgesloten van hulp in tijden van nood.\n\nDe evolutie van taal was cruciaal voor de schaal van menselijke samenwerking. Taal maakte het mogelijk om roddel te verspreiden, afspraken te maken, normen te communiceren en complexe plannen te coördineren. Yuval Noah Harari betoogt dat het vermogen om ficties te delen, van religies tot naties tot bedrijven, de basis vormt van menselijke grootschalige samenwerking met vreemden.\n\nModerne instituties als wetten, contracten, markten en democratieën zijn culturele oplossingen voor het probleem van samenwerking tussen niet-verwante vreemden. Ze creëren structuren die samenwerking belonen en uitbuiting bestraffen.\n\nDe uitdaging van de eenentwintigste eeuw is het uitbreiden van samenwerking naar mondiale schaal voor problemen als klimaatverandering en pandemieën, terwijl de evolutionaire mechanismen die samenwerking ondersteunen primair lokaal en op kleine schaal opereren.",
    "vragen": [
      {
        "v": "Wat is verwantenselectie?",
        "opties": [
          "Selectie van de sterkste",
          "Helpen van familieleden vergroot indirect eigen genetisch succes",
          "Competitie tussen verwanten",
          "Willekeurige selectie"
        ],
        "correct": 1
      },
      {
        "v": "Welke strategie was het meest succesvol in simulaties?",
        "opties": [
          "Altijd samenwerken",
          "Altijd bedriegen",
          "Tit-for-tat",
          "Willekeurig kiezen"
        ],
        "correct": 2
      },
      {
        "v": "Wat maakt volgens Harari grootschalige menselijke samenwerking mogelijk?",
        "opties": [
          "Fysieke kracht",
          "Wapens",
          "Het delen van ficties",
          "Genetische verwantschap"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lt-1",
    "titel": "De werking van het menselijk geheugen",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "psychologie",
    "collectie": "leestest",
    "woorden": 158,
    "tekst": "Het menselijk geheugen is geen statische opslagplaats, maar een dynamisch systeem dat voortdurend verandert. Herinneringen worden niet opgeslagen als videobeelden, maar als netwerken van verbonden neuronen. Elke keer dat je een herinnering ophaalt, herschrijf je hem enigszins. Dit verklaart waarom getuigenverklaringen zo onbetrouwbaar kunnen zijn: mensen vullen onbewust gaten in met aannemelijke details. Er zijn drie soorten geheugen: het sensorisch geheugen registreert prikkels milliseconden lang, het werkgeheugen bewaart informatie tijdelijk voor verwerking en het langetermijngeheugen slaat kennis voor lange tijd op. De overgang van kort naar langetermijngeheugen heet consolidatie. Slaap speelt hierin een cruciale rol: tijdens de diepe slaapfase verbindt het brein nieuwe informatie met bestaande kennis. Herhaling, emotie en relevantie versterken herinneringen. Informatie die je meerdere keren tegenkomt in verschillende contexten, beklijft beter dan eenmalige blootstelling. Flashcard-methodes zoals het Leitner-systeem gebruiken dit principe van gespreide herhaling. Vergeten is overigens niet altijd slecht: het helpt ons onnodige details te filteren zodat we ons kunnen concentreren op het wezenlijke.",
    "vragen": [
      {
        "v": "Wat gebeurt er als je een herinnering ophaalt?",
        "opties": [
          "Je speelt hem precies terug",
          "Je herschrijft hem enigszins",
          "Hij verdwijnt uit het werkgeheugen",
          "Hij wordt sterker"
        ],
        "correct": 1
      },
      {
        "v": "Wat is consolidatie?",
        "opties": [
          "Informatie vergeten",
          "Overgang van kort naar langetermijngeheugen",
          "Het sensorisch geheugen activeren",
          "Slaap veroorzaken"
        ],
        "correct": 1
      },
      {
        "v": "Welke rol speelt slaap bij herinneringen?",
        "opties": [
          "Geen rol",
          "Wist herinneringen",
          "Verbindt nieuwe info met bestaande kennis",
          "Maakt werkgeheugen groter"
        ],
        "correct": 2
      },
      {
        "v": "Wat versterkt herinneringen het meest?",
        "opties": [
          "Eenmalige blootstelling",
          "Herhaling, emotie en relevantie",
          "Weinig slaap",
          "Sensorisch geheugen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-2",
    "titel": "De opkomst van kunstmatige intelligentie",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "techniek",
    "collectie": "leestest",
    "woorden": 170,
    "tekst": "Kunstmatige intelligentie is niet langer sciencefiction maar een dagelijkse realiteit. Algoritmen selecteren welk nieuws je ziet, welke muziek je hoort en zelfs welke kandidaten een vacature worden uitgenodigd. De meest recente doorbraak is het grote taalmodel, een type AI dat menselijke tekst genereert op een manier die soms niet van echte tekst te onderscheiden is. Deze systemen zijn getraind op miljarden webpagina's, boeken en artikelen, waardoor ze brede kennis bezitten maar ook menselijke vooroordelen overnemen. De voordelen zijn enorm: AI kan medische scans nauwkeuriger beoordelen dan radiologen, wiskundige problemen oplossen die mensen eeuwen bezighielden en software schrijven op basis van beschrijvingen in gewone taal. De risico's zijn echter reëel. Deepfakes, automatische desinformatie en het verdwijnen van banen in de creatieve sector zijn al zichtbare gevolgen. Experts verschillen van mening over de tijdlijn van meer geavanceerde AI: sommigen voorspellen menselijk niveau binnen tien jaar, anderen denken dat fundamentele obstakels dit nog tientallen jaren vertragen. Wat zeker is, is dat de maatschappij nu al keuzes moet maken over regulering, transparantie en eerlijkheid.",
    "vragen": [
      {
        "v": "Wat is een groot taalmodel?",
        "opties": [
          "Een soort robot",
          "Een type AI dat tekst genereert",
          "Een database van boeken",
          "Een zoekmachine"
        ],
        "correct": 1
      },
      {
        "v": "Wat is een nadeel dat al zichtbaar is?",
        "opties": [
          "AI is te traag",
          "Te weinig data",
          "Deepfakes en desinformatie",
          "AI kan niet schrijven"
        ],
        "correct": 2
      },
      {
        "v": "Waarop zijn grote taalmodellen getraind?",
        "opties": [
          "Alleen wetenschappelijke papers",
          "Miljarden webpagina's, boeken en artikelen",
          "Handmatig ingevoerde regels",
          "Gesprekken met mensen"
        ],
        "correct": 1
      },
      {
        "v": "Welk voordeel noemt de tekst in de medische wereld?",
        "opties": [
          "Goedkopere ziekenhuizen",
          "Nauwkeurigere beoordeling van scans",
          "Sneller opereren",
          "Minder medicijnen nodig"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-3",
    "titel": "Hoe gewoonten ons leven sturen",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "psychologie",
    "collectie": "leestest",
    "woorden": 189,
    "tekst": "Wetenschappers schatten dat tot vijfenveertig procent van ons dagelijkse gedrag bestaat uit gewoonten: automatische handelingen die we uitvoeren zonder bewuste sturing. Gewoonten worden gevormd door een driedelig proces dat neuropsychologen de gewoontelus noemen. Een prikkel activeert een routine, die wordt afgesloten met een beloning. Na verloop van tijd worden prikkel en beloning direct gekoppeld zonder dat het bewuste brein tussenkomt. Dit is efficiënt: het brein hoeft minder energie te besteden aan herhaalde taken. Maar het maakt gewoonten ook hardnekkig. Om een gewoonte te veranderen, is het niet effectief ze simpelweg weg te willen denken. Onderzoek van MIT en Harvard toont aan dat de meest succesvolle strategie substitutie is: vervang de routine terwijl je prikkel en beloning intact laat. Een roker die stress (prikkel) verwerkt door te roken (routine) voor ontspanning (beloning) heeft meer kans van slagen als hij de sigaret vervangt door een wandeling of ademhalingsoefening, dan als hij alleen willskracht inzet. Identiteitsgebaseerde gewoonten werken nog krachtiger. In plaats van 'ik probeer minder te eten' zeg je 'ik ben iemand die gezond leeft'. Dit verschuift gedrag van een doel naar een deel van je zelfbeeld, wat langduriger effect heeft.",
    "vragen": [
      {
        "v": "Welk percentage van ons gedrag bestaat uit gewoonten?",
        "opties": [
          "10%",
          "25%",
          "45%",
          "80%"
        ],
        "correct": 2
      },
      {
        "v": "Wat zijn de drie onderdelen van de gewoontelus?",
        "opties": [
          "Denken, doen, vergeten",
          "Prikkel, routine, beloning",
          "Wil, actie, resultaat",
          "Brein, lichaam, omgeving"
        ],
        "correct": 1
      },
      {
        "v": "Wat is de meest effectieve strategie om een gewoonte te veranderen?",
        "opties": [
          "Willskracht",
          "Substitutie van de routine",
          "De prikkel vermijden",
          "De beloning weggooien"
        ],
        "correct": 1
      },
      {
        "v": "Wat is een identiteitsgebaseerde gewoonte?",
        "opties": [
          "Een gewoonte die genetisch is",
          "Gedrag koppelen aan wie je bent",
          "Een gewoonte die al jaren bestaat",
          "Imitatie van anderen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-4",
    "titel": "De oceaan als klimaatregulator",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "natuur",
    "collectie": "leestest",
    "woorden": 156,
    "tekst": "De oceaan bedekt zeventig procent van het aardoppervlak en speelt een onmisbare rol in het klimaatsysteem. Ze absorbeert ruim negentig procent van de extra warmte die broeikasgassen vasthouden, en bijna een kwart van alle CO2 die mensen uitstoten. Zonder deze bufferfunctie zou de opwarming van de aarde aanzienlijk sneller verlopen. Maar de oceaan betaalt een prijs. De opname van CO2 veroorzaakt verzuring: het zeewaterwordt zuurder, wat koraalriffen oplost, schelpdieren zwakker maakt en de voedselketen verstoort. Tegelijkertijd leidt de warmteopname tot smeltende gletsjers en thermische uitzetting van water, waardoor de zeespiegel stijgt. Oceaanstromingen zoals de Golfstroom transporteren warmte van de evenaar naar de poolgebieden en houden Europa klimatologisch gematigd. Studies tonen aan dat deze stroom verzwakt door de instroom van zoet smeltwater, met mogelijk dramatische gevolgen voor het Europese klimaat: koudere winters, drogere zomers en extremere weersomstandigheden. Wetenschappers beschouwen de gezondheid van de oceaan als een van de belangrijkste indicatoren voor de stabiliteit van het hele aardsysteem.",
    "vragen": [
      {
        "v": "Welk percentage van extra warmte absorbeert de oceaan?",
        "opties": [
          "50%",
          "70%",
          "90%",
          "99%"
        ],
        "correct": 2
      },
      {
        "v": "Wat veroorzaakt oceaanverzuring?",
        "opties": [
          "Warmteopname",
          "CO2-opname",
          "Plastic vervuiling",
          "Zoutgehalte"
        ],
        "correct": 1
      },
      {
        "v": "Wat is een gevolg van een verzwakkende Golfstroom voor Europa?",
        "opties": [
          "Warmere zomers en zachtere winters",
          "Koudere winters en drogere zomers",
          "Hogere zeespiegel alleen",
          "Meer regen in de winter"
        ],
        "correct": 1
      },
      {
        "v": "Waardoor verzwakt de Golfstroom?",
        "opties": [
          "Meer CO2",
          "Instroom van zoet smeltwater",
          "Stijgende zeespiegel",
          "Hogere temperaturen alleen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-5",
    "titel": "De psychologie van besluitvorming",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 183,
    "tekst": "Mensen zijn geen rationele wezens die kosten en baten zorgvuldig afwegen. Tientallen jaren psychologisch onderzoek tonen aan dat onze beslissingen systematisch worden beïnvloed door cognitieve vertekeningen. Nobelprijswinnaar Daniel Kahneman beschrijft twee denksystemen: Systeem 1 is snel, automatisch en emotioneel. Systeem 2 is traag, bewust en analytisch. De meeste beslissingen worden genomen door Systeem 1, ook als de situatie eigenlijk om Systeem 2 vraagt. Een klassiek voorbeeld is de ankeringsvertekening: als je wordt gevraagd of de Eiffeltoren hoger of lager is dan twaalf meter, geef je daarna een lagere schatting van de hoogte dan wanneer de ankervraag vijfhonderd meter noemde. Ons brein hecht te veel gewicht aan het eerste getal. Verliesaversie is een andere krachtige kracht: een verlies van honderd euro voelt twee keer zo erg als een winst van honderd euro goed voelt. Dit verklaart waarom mensen risicovolle beleggingen vasthouden in de hoop verlies te voorkomen, ook als verkopen rationeler zou zijn. De status-quovoorkeur maakt dat we de huidige situatie prefereren boven verandering, zelfs als verandering objectief beter is. Bewustzijn van deze vertekeningen helpt betere beslissingen te nemen, maar elimineert ze niet volledig.",
    "vragen": [
      {
        "v": "Wat is Systeem 1 in Kahnemans model?",
        "opties": [
          "Traag en analytisch",
          "Snel, automatisch en emotioneel",
          "Bewust en logisch",
          "Alleen actief bij moeilijke keuzes"
        ],
        "correct": 1
      },
      {
        "v": "Wat is de ankeringsvertekening?",
        "opties": [
          "Te veel twijfelen",
          "Eerste informatie heeft te veel invloed op schattingen",
          "Verlies groter voelen dan winst",
          "De huidige situatie prefereren"
        ],
        "correct": 1
      },
      {
        "v": "Hoe voelt een verlies van €100 vergeleken met een winst van €100?",
        "opties": [
          "Even erg / goed",
          "Iets erger",
          "Twee keer zo erg",
          "Drie keer zo erg"
        ],
        "correct": 2
      },
      {
        "v": "Wat is de status-quovoorkeur?",
        "opties": [
          "Voorkeur voor verandering",
          "Huidige situatie prefereren boven verandering",
          "Rationele keuzes maken",
          "Risico's altijd vermijden"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-6",
    "titel": "Duurzame voeding en de planeet",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 176,
    "tekst": "De manier waarop we voedsel produceren is een van de grootste drijvers van klimaatverandering, biodiversiteitsverlies en waterschaarste. De veehouderij is verantwoordelijk voor ongeveer veertien komma vijf procent van alle wereldwijde broeikasgasemissies — meer dan de gehele transportsector. Runderen produceren methaangas, dat op korte termijn tachtig keer krachiger is als broeikasgas dan CO2. Naast uitstoot vereist vlees- en zuivelproductie enorme hoeveelheden land, water en voer. Om één kilo rundvlees te produceren zijn gemiddeld vijftien duizend liter water en zeven kilo graanvoer nodig. Plantaardige eiwitbronnen zoals peulvruchten, noten en tofu hebben een fractie van deze voetafdruk. Studies tonen aan dat overschakelen naar een overwegend plantaardig dieet de voedselgerelateerde uitstoot van een individu met tot zeventig procent kan verminderen. Dat hoeft geen alles-of-niets keuze te zijn: zelfs het vervangen van één vleesmaaltijd per dag door een plantaardig alternatief heeft een meetbaar effect. Voedselverspilling is een ander groot probleem: wereldwijd wordt een derde van al het geproduceerde voedsel weggegooid. Dit vertegenwoordigt niet alleen verspilling van voedsel, maar ook van alle water, energie en land die voor de productie zijn gebruikt.",
    "vragen": [
      {
        "v": "Welk percentage van broeikasgasemissies is afkomstig van de veehouderij?",
        "opties": [
          "5%",
          "14,5%",
          "30%",
          "50%"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel liter water is nodig voor 1 kilo rundvlees?",
        "opties": [
          "1.000 liter",
          "5.000 liter",
          "15.000 liter",
          "50.000 liter"
        ],
        "correct": 2
      },
      {
        "v": "Met hoeveel procent kan een plantaardig dieet de uitstoot verminderen?",
        "opties": [
          "Tot 20%",
          "Tot 40%",
          "Tot 70%",
          "Tot 100%"
        ],
        "correct": 2
      },
      {
        "v": "Welk deel van geproduceerd voedsel wordt verspild?",
        "opties": [
          "Een tiende",
          "Een kwart",
          "Een derde",
          "De helft"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lt-7",
    "titel": "De kracht van lezen",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 134,
    "tekst": "Lezen is een van de meest waardevolle vaardigheden die een mens kan beheersen. Het opent deuren naar kennis, fantasie en begrip van de wereld om ons heen. Toch lezen veel mensen langzamer dan nodig is, waardoor ze minder informatie in minder tijd verwerken. Met gerichte oefening kun je je leessnelheid significant verhogen zonder begripsverlies. De sleutel ligt in het herkennen van woordgroepen in plaats van losse woorden, het vermijden van stille meelezing en het trainen van je oogsprongen. Beginners lezen gemiddeld tweehonderd woorden per minuut. Getrainde lezers halen vier- tot vijfhonderd woorden per minuut. Toppers zoals presidenten en advocaten bereiken soms duizend woorden per minuut of meer. Het verschil zit niet in intelligentie, maar in techniek en oefening. Begin vandaag met dagelijkse leesoefeningen van tien minuten en je merkt al na twee weken verschil.",
    "vragen": [
      {
        "v": "Hoeveel woorden per minuut lezen beginners gemiddeld?",
        "opties": [
          "100 WPM",
          "200 WPM",
          "400 WPM",
          "1000 WPM"
        ],
        "correct": 1
      },
      {
        "v": "Wat is de sleutel tot sneller lezen volgens de tekst?",
        "opties": [
          "Harder je best doen",
          "Woorden één voor één lezen",
          "Woordgroepen herkennen en oogsprongen trainen",
          "Harder praten"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel minuten oefening per dag noem de tekst als startpunt?",
        "opties": [
          "5 minuten",
          "10 minuten",
          "30 minuten",
          "1 uur"
        ],
        "correct": 1
      },
      {
        "v": "Wat maakt het verschil tussen een langzame en snelle lezer?",
        "opties": [
          "Intelligentie",
          "Techniek en oefening",
          "Leeftijd",
          "Soort boek"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-8",
    "titel": "De wetenschap van slaap",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 130,
    "tekst": "Slaap is een van de meest onderschatte pijlers van onze gezondheid. Terwijl je slaapt, verwerkt je brein de ervaringen van de dag, consolideert het herinneringen en herstelt het lichaam op cellulair niveau. Een volwassene heeft gemiddeld zeven tot negen uur slaap per nacht nodig. Te weinig slaap verslechtert concentratie, geheugen en besluitvorming merkbaar. Chronisch slaaptekort verhoogt het risico op hart- en vaatziekten, diabetes en depressie. Toch slapen miljoenen mensen structureel te weinig vanwege werk, sociale verplichtingen of schermgebruik 's avonds. Het blauwe licht van smartphones en tablets onderdrukt de aanmaak van melatonine, het slaaphormoon. Experts adviseren schermen minstens een uur voor het slapengaan uit te zetten. Een vaste bedtijd, donkere slaapkamer en matige kamertemperatuur verbeteren de slaapkwaliteit aanzienlijk. Goede slaaphygiëne is geen luxe, maar een noodzaak voor optimale prestaties overdag.",
    "vragen": [
      {
        "v": "Hoeveel uur slaap heeft een volwassene gemiddeld nodig?",
        "opties": [
          "5-6 uur",
          "7-9 uur",
          "9-11 uur",
          "4-5 uur"
        ],
        "correct": 1
      },
      {
        "v": "Wat doet blauw licht van schermen?",
        "opties": [
          "Helpt je beter slapen",
          "Onderdrukt melatonine aanmaak",
          "Verhoogt je concentratie",
          "Heeft geen effect"
        ],
        "correct": 1
      },
      {
        "v": "Hoe lang voor het slapengaan adviseren experts schermen uit te zetten?",
        "opties": [
          "15 minuten",
          "30 minuten",
          "1 uur",
          "2 uur"
        ],
        "correct": 2
      },
      {
        "v": "Wat consolideer je brein tijdens slaap?",
        "opties": [
          "Spieren",
          "Herinneringen",
          "Vitaminen",
          "Energie"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-9",
    "titel": "Klimaatverandering in vogelvlucht",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 124,
    "tekst": "De aarde warmt op. Dat is geen mening maar een wetenschappelijk vastgesteld feit, onderschreven door meer dan negentig-zeven procent van klimaatwetenschappers wereldwijd. De gemiddelde temperatuur op aarde is de afgelopen honderd jaar met ongeveer één komma twee graden Celsius gestegen. De oorzaak is grotendeels de uitstoot van broeikasgassen door menselijke activiteiten: verbranding van fossiele brandstoffen, ontbossing en industriële processen. De gevolgen zijn zichtbaar en voelbaar. IJskappen smelten, zeespiegels stijgen, extreme weersomstandigheden worden vaker en heviger. Hittegolven, overstromingen, droogte en bosbranden nemen toe in frequentie en intensiteit. Om de opwarming te beperken tot anderhalve graad moeten de mondiale emissies voor het jaar tweeduizend dertig gehalveerd worden en voor tweeduizend vijftig netto nul bereiken. Dit vereist een ongekende transformatie van onze energiesystemen, mobiliteit, landbouw en consumptiepatronen.",
    "vragen": [
      {
        "v": "Met hoeveel graden is de aarde opgewarmd de afgelopen 100 jaar?",
        "opties": [
          "0,5 graden",
          "1,2 graden",
          "2,0 graden",
          "3,5 graden"
        ],
        "correct": 1
      },
      {
        "v": "Welk percentage van klimaatwetenschappers onderschrijft klimaatverandering?",
        "opties": [
          "60%",
          "75%",
          "97%",
          "100%"
        ],
        "correct": 2
      },
      {
        "v": "Wanneer moeten emissies netto nul zijn volgens de tekst?",
        "opties": [
          "2030",
          "2040",
          "2050",
          "2100"
        ],
        "correct": 2
      },
      {
        "v": "Wat is de hoofdoorzaak van klimaatverandering?",
        "opties": [
          "Vulkaanuitbarstingen",
          "Menselijke broeikasgassen",
          "Zonneactiviteit",
          "Oceaanstromingen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-10",
    "titel": "Het microbioom: de onzichtbare wereld in je darmen",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 107,
    "tekst": "In je darmen leven biljoenen micro-organismen die samen het microbioom vormen. Dit ecosysteem weegt ongeveer twee kilo en bevat meer genetisch materiaal dan je eigen cellen. De samenstelling van je microbioom is uniek, als een vingerafdruk. Het beïnvloedt je spijsvertering, je immuunsysteem en zelfs je stemming. Negentig procent van de serotonine in je lichaam wordt in de darmen geproduceerd. Onderzoek toont aan dat de darm-hersenas een tweerichtingsweg is: je darmen beïnvloeden je brein en andersom. Mensen met een divers microbioom hebben gemiddeld een betere mentale gezondheid. Voeding is de belangrijkste factor: vezels uit groenten en fruit voeden gunstige bacteriën, terwijl bewerkt voedsel en suiker schadelijke bacteriën bevorderen.",
    "vragen": [
      {
        "v": "Hoeveel weegt het microbioom ongeveer?",
        "opties": [
          "Een halve kilo",
          "Één kilo",
          "Twee kilo",
          "Vijf kilo"
        ],
        "correct": 2
      },
      {
        "v": "Welk percentage van serotonine wordt in de darmen geproduceerd?",
        "opties": [
          "50%",
          "70%",
          "80%",
          "90%"
        ],
        "correct": 3
      },
      {
        "v": "Wat voeden vezels uit groenten en fruit?",
        "opties": [
          "Schadelijke bacteriën",
          "Gunstige bacteriën",
          "Virussen",
          "Schimmels"
        ],
        "correct": 1
      },
      {
        "v": "Wat is de darm-hersenas?",
        "opties": [
          "Een zenuw in de rug",
          "Een tweerichtingscommunicatie tussen darmen en brein",
          "Een dieet",
          "Een type bacterie"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-11",
    "titel": "De geschiedenis van het schrift",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 107,
    "tekst": "Het schrift is een van de belangrijkste uitvindingen van de mensheid. Het oudste bekende schrift is spijkerschrift uit Mesopotamië, ongeveer vijfduizend jaar oud. De Egyptenaren ontwikkelden hiërogliefen, de Chinezen logogrammen en de Feniciërs het eerste alfabet. De Grieken namen het Fenicische alfabet over en voegden klinkers toe. De Romeinen pasten het aan tot het Latijnse alfabet dat we vandaag gebruiken. De uitvinding van papier in China rond het jaar honderd was een revolutie. Vóór papier schreef men op kleitabletten, papyrus en perkament. De boekdrukkunst van Gutenberg rond 1440 democratiseerde kennis door boeken betaalbaar te maken. Geletterdheid steeg explosief en ideeën konden sneller verspreid worden dan ooit tevoren.",
    "vragen": [
      {
        "v": "Wat is het oudste bekende schrift?",
        "opties": [
          "Hiërogliefen",
          "Spijkerschrift",
          "Het Latijnse alfabet",
          "Chinese logogrammen"
        ],
        "correct": 1
      },
      {
        "v": "Wie voegden klinkers toe aan het alfabet?",
        "opties": [
          "De Feniciërs",
          "De Romeinen",
          "De Grieken",
          "De Egyptenaren"
        ],
        "correct": 2
      },
      {
        "v": "Wanneer werd papier in China uitgevonden?",
        "opties": [
          "2000 v.Chr.",
          "Rond het jaar 100",
          "Rond het jaar 500",
          "Rond het jaar 1000"
        ],
        "correct": 1
      },
      {
        "v": "Wat maakte de boekdrukkunst van Gutenberg mogelijk?",
        "opties": [
          "Sneller schrijven",
          "Betaalbare boeken",
          "Digitale opslag",
          "Kleuren drukken"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-12",
    "titel": "Hoe stress je lichaam beïnvloedt",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 85,
    "tekst": "Wanneer je stress ervaart, activeert je lichaam het vecht-of-vluchtmechanisme. De bijnier produceert adrenaline en cortisol, waardoor je hartslag stijgt en je spieren aanspannen. In de moderne wereld wordt dit systeem voortdurend geactiveerd door werkdruk en sociale media. Chronische stress verhoogt het risico op hart- en vaatziekten, diabetes type twee en depressie. Het immuunsysteem verzwakt, waardoor je vatbaarder wordt voor infecties. Slaapproblemen en hoofdpijn zijn veelvoorkomende symptomen. Effectieve stressmanagement omvat ademhalingsoefeningen, mindfulness-meditatie, lichaamsbeweging en sociale verbinding. Al tien minuten dagelijkse meditatie kan het cortisolniveau meetbaar verlagen.",
    "vragen": [
      {
        "v": "Welke hormonen worden bij stress geproduceerd?",
        "opties": [
          "Insuline en melatonine",
          "Adrenaline en cortisol",
          "Dopamine en serotonine",
          "Oxytocine en endorfine"
        ],
        "correct": 1
      },
      {
        "v": "Wat is een gevolg van chronische stress?",
        "opties": [
          "Betere concentratie",
          "Sterker immuunsysteem",
          "Verhoogd risico op hart- en vaatziekten",
          "Snellere spieropbouw"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel minuten dagelijkse meditatie kan cortisol verlagen?",
        "opties": [
          "Twee minuten",
          "Vijf minuten",
          "Tien minuten",
          "Dertig minuten"
        ],
        "correct": 2
      },
      {
        "v": "Wat is het vecht-of-vluchtmechanisme?",
        "opties": [
          "Een sportoefening",
          "Een stressreactie van het lichaam",
          "Een slaapmethode",
          "Een ademhalingstechniek"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-13",
    "titel": "De kracht van meertaligheid",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 89,
    "tekst": "Wereldwijd spreekt meer dan de helft van de bevolking twee of meer talen. Tweetaligen scoren beter op taken die aandacht en taakwisseling vereisen. Het switchen tussen talen traint het executieve functienetwerk. Ouderen die twee talen spreken vertonen gemiddeld vijf jaar later symptomen van dementie. Het kinderbrein is bijzonder geschikt om talen te leren: tot zeven jaar verwerven kinderen talen moeiteloos. Na de puberteit neemt dit vermogen af. Tweetaligen rapporteren dat ze van persoonlijkheid wisselen per taal. Ze voelen zich assertiever in hun dominante taal en emotioneler in hun moedertaal.",
    "vragen": [
      {
        "v": "Tot welke leeftijd leren kinderen talen het makkelijkst?",
        "opties": [
          "Drie jaar",
          "Vijf jaar",
          "Zeven jaar",
          "Twaalf jaar"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel jaar later vertonen tweetalige ouderen dementiesymptomen?",
        "opties": [
          "Twee jaar",
          "Drie jaar",
          "Vijf jaar",
          "Tien jaar"
        ],
        "correct": 2
      },
      {
        "v": "Welk hersennetwerk wordt getraind door taalwisseling?",
        "opties": [
          "Het visuele systeem",
          "Het motorische systeem",
          "Het executieve functienetwerk",
          "Het limbisch systeem"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel van de wereldbevolking spreekt twee of meer talen?",
        "opties": [
          "Twintig procent",
          "Dertig procent",
          "Meer dan vijftig procent",
          "Negentig procent"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lt-14",
    "titel": "Fotosynthese: de motor van het leven",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 92,
    "tekst": "Fotosynthese is het proces waarbij planten zonlicht omzetten in chemische energie. Met chlorofyl vangen bladeren lichtenergie op die met water en kooldioxide wordt omgezet in glucose en zuurstof. Dit proces is de basis van vrijwel al het leven op aarde. Jaarlijks zetten planten en algen ongeveer honderd miljard ton koolstof om. Wetenschappers proberen kunstmatige fotosynthese te ontwikkelen voor schone brandstof. De efficiëntie van natuurlijke fotosynthese is slechts één tot twee procent, terwijl zonnepanelen vijftien tot twintig procent halen. Planten produceren de zuurstof die wij inademen en vormen de basis van de voedselketen.",
    "vragen": [
      {
        "v": "Wat produceren planten naast glucose bij fotosynthese?",
        "opties": [
          "Stikstof",
          "Kooldioxide",
          "Zuurstof",
          "Waterstof"
        ],
        "correct": 2
      },
      {
        "v": "Welke stof vangt lichtenergie op in bladeren?",
        "opties": [
          "Cellulose",
          "Chlorofyl",
          "Glucose",
          "Eiwit"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel ton koolstof zetten planten jaarlijks om?",
        "opties": [
          "Een miljoen ton",
          "Een miljard ton",
          "Honderd miljard ton",
          "Een biljoen ton"
        ],
        "correct": 2
      },
      {
        "v": "Hoe hoog is de efficiëntie van natuurlijke fotosynthese?",
        "opties": [
          "Een tot twee procent",
          "Vijf tot tien procent",
          "Vijftien tot twintig procent",
          "Dertig procent"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "lt-15",
    "titel": "De psychologie van procrastinatie",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 97,
    "tekst": "Uitstelgedrag is geen kwestie van luiheid maar van emotieregulatie. Wanneer een taak onplezierige gevoelens oproept kiest het brein voor directe verlichting door de taak uit te stellen. De prefrontale cortex verliest het van het limbische systeem dat onmiddellijke beloning zoekt. Ongeveer twintig procent van volwassenen is een chronische uitsteller. Perfectionisme is een verrassende oorzaak: de angst om het niet perfect te doen leidt tot helemaal niet beginnen. De vijfminutenregel is effectief: begin slechts vijf minuten aan de taak. Meestal gaat het brein daarna vanzelf door. Het opdelen van grote taken in kleine stappen vermindert het overweldigende gevoel.",
    "vragen": [
      {
        "v": "Wat is de werkelijke oorzaak van procrastinatie?",
        "opties": [
          "Luiheid",
          "Gebrek aan motivatie",
          "Emotieregulatie",
          "Te weinig slaap"
        ],
        "correct": 2
      },
      {
        "v": "Welk percentage van volwassenen is een chronische uitsteller?",
        "opties": [
          "Vijf procent",
          "Tien procent",
          "Twintig procent",
          "Vijftig procent"
        ],
        "correct": 2
      },
      {
        "v": "Welk hersengebied verliest bij uitstelgedrag?",
        "opties": [
          "Het limbische systeem",
          "De prefrontale cortex",
          "De hippocampus",
          "De amygdala"
        ],
        "correct": 1
      },
      {
        "v": "Hoe werkt de vijfminutenregel?",
        "opties": [
          "Vijf minuten pauzeren",
          "Vijf taken tegelijk doen",
          "Slechts vijf minuten beginnen aan de taak",
          "Vijf keer de taak herhalen"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lt-16",
    "titel": "De uitvinding van antibiotica",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 76,
    "tekst": "In 1928 ontdekte Alexander Fleming per ongeluk penicilline toen een schimmel op een bacteriekweek de bacteriën doodde. Deze ontdekking redde naar schatting meer dan tweehonderd miljoen mensenlevens. Vóór antibiotica was een simpele snijwond potentieel dodelijk en waren operaties levensgevaarlijk. Vandaag vormt antibioticaresistentie een groeiende bedreiging. Overmatig gebruik in de veehouderij en het niet afmaken van kuren helpen bacteriën resistentie te ontwikkelen. De Wereldgezondheidsorganisatie waarschuwt dat we een post-antibioticatijdperk naderen waarin gewone infecties weer dodelijk kunnen worden.",
    "vragen": [
      {
        "v": "Wie ontdekte penicilline?",
        "opties": [
          "Louis Pasteur",
          "Alexander Fleming",
          "Marie Curie",
          "Robert Koch"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel mensenlevens heeft antibiotica naar schatting gered?",
        "opties": [
          "Vijftig miljoen",
          "Honderd miljoen",
          "Tweehonderd miljoen",
          "Een miljard"
        ],
        "correct": 2
      },
      {
        "v": "Wat is een oorzaak van antibioticaresistentie?",
        "opties": [
          "Te weinig antibiotica",
          "Overmatig gebruik in de veehouderij",
          "Te veel vaccinaties",
          "Gebrek aan schimmels"
        ],
        "correct": 1
      },
      {
        "v": "In welk jaar werd penicilline ontdekt?",
        "opties": [
          "1901",
          "1918",
          "1928",
          "1945"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lt-17",
    "titel": "Neuroplasticiteit van de hersenen",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 93,
    "tekst": "Neuroplasticiteit is het vermogen van de hersenen om zich aan te passen en te reorganiseren. Lange tijd dachten wetenschappers dat het volwassen brein niet meer veranderde. Nu weten we dat het brein tot op hoge leeftijd nieuwe verbindingen kan vormen. London-taxichauffeurs hebben een meetbaar grotere hippocampus door jarenlang navigeren. Muzikanten hebben meer verbindingen tussen de linker- en rechterhersenhelft. Na een beroerte kan het brein functies via andere routes overnemen. Oefening en nieuwe ervaringen stimuleren neurogenese: de aanmaak van nieuwe hersencellen. Passiviteit vermindert plasticiteit. Het brein volgt het principe: use it or lose it.",
    "vragen": [
      {
        "v": "Wat is neuroplasticiteit?",
        "opties": [
          "Een hersenziekte",
          "Het aanpassingsvermogen van het brein",
          "Een type hersencel",
          "Een scantechniek"
        ],
        "correct": 1
      },
      {
        "v": "Wat is bijzonder aan London-taxichauffeurs?",
        "opties": [
          "Kleinere hippocampus",
          "Meetbaar grotere hippocampus",
          "Snellere reflexen",
          "Beter gehoor"
        ],
        "correct": 1
      },
      {
        "v": "Wat is neurogenese?",
        "opties": [
          "Afsterven van hersencellen",
          "Aanmaak van nieuwe hersencellen",
          "Een hersenoperatie",
          "Een leertechniek"
        ],
        "correct": 1
      },
      {
        "v": "Welk principe volgen de hersenen?",
        "opties": [
          "Meer is beter",
          "Use it or lose it",
          "Rust roest niet",
          "Oefening baart kunst"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-18",
    "titel": "Waterstof als energiebron",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 83,
    "tekst": "Waterstof wordt steeds vaker gezien als sleutel tot een duurzame energietoekomst. Bij verbranding produceert waterstof alleen water als bijproduct. Groene waterstof wordt gemaakt door elektrolyse met hernieuwbare energie. Grijze waterstof uit aardgas is goedkoper maar stoot CO2 uit. Groene waterstof is momenteel drie tot vijf keer duurder. Toepassingen liggen vooral in sectoren die moeilijk te elektrificeren zijn: zwaar transport, luchtvaart en staalproductie. Landen als Duitsland, Japan en Australië investeren miljarden in waterstofinfrastructuur. Transport en opslag zijn complex omdat waterstof het lichtste element is.",
    "vragen": [
      {
        "v": "Wat produceert waterstof als bijproduct?",
        "opties": [
          "CO2",
          "Stikstof",
          "Water",
          "Methaan"
        ],
        "correct": 2
      },
      {
        "v": "Hoe wordt groene waterstof geproduceerd?",
        "opties": [
          "Uit aardgas",
          "Door elektrolyse met hernieuwbare energie",
          "Door verbranding van kolen",
          "Uit kernenergie"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel keer duurder is groene waterstof momenteel?",
        "opties": [
          "Twee keer",
          "Drie tot vijf keer",
          "Tien keer",
          "Twintig keer"
        ],
        "correct": 1
      },
      {
        "v": "In welke sectoren is waterstof het meest veelbelovend?",
        "opties": [
          "Huishoudelijk gebruik",
          "Moeilijk te elektrificeren sectoren",
          "Kantoorverlichting",
          "Landbouwirrigatie"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-19",
    "titel": "De psychologie van eerste indrukken",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 83,
    "tekst": "Je brein vormt een eerste indruk in slechts zeven seconden. Het beoordeelt onbewust betrouwbaarheid, competentie en aantrekkelijkheid. Het halo-effect speelt hierbij een grote rol: als we een positieve eigenschap waarnemen schrijven we automatisch ook andere positieve eigenschappen toe. Aantrekkelijke mensen worden onbewust als intelligenter beoordeeld. Lichaamstaal is verantwoordelijk voor vijfenvijftig procent van de eerste indruk, stemtoon voor achtendertig procent en woorden voor slechts zeven procent. Eerste indrukken kunnen veranderen maar het kost gemiddeld acht positieve ontmoetingen om een negatieve eerste indruk te corrigeren.",
    "vragen": [
      {
        "v": "In hoeveel seconden vorm je een eerste indruk?",
        "opties": [
          "Drie seconden",
          "Zeven seconden",
          "Vijftien seconden",
          "Dertig seconden"
        ],
        "correct": 1
      },
      {
        "v": "Wat is het halo-effect?",
        "opties": [
          "Negatieve aannames",
          "Eén positieve eigenschap leidt tot andere positieve aannames",
          "Het vermijden van oordelen",
          "Bewust mening vormen"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel procent van de eerste indruk is lichaamstaal?",
        "opties": [
          "Tien procent",
          "Vijfendertig procent",
          "Vijfenvijftig procent",
          "Tachtig procent"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel ontmoetingen om een negatieve indruk te corrigeren?",
        "opties": [
          "Twee",
          "Vier",
          "Acht",
          "Twintig"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lt-20",
    "titel": "Oceaanstromingen en klimaat",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 82,
    "tekst": "Oceaanstromingen fungeren als een gigantisch transportsysteem dat warmte over de aarde verdeelt. De Golfstroom maakt West-Europa tot tien graden warmer dan op vergelijkbare breedtegraden. De thermohaliene circulatie wordt aangedreven door temperatuur- en zoutverschillen. Koud zout water bij de polen zinkt en stroomt naar de evenaar. Studies tonen aan dat de Golfstroom is verzwakt door instroom van zoet smeltwater van Groenland. Als deze stroom stopt zou Europa drastisch afkoelen ondanks mondiale opwarming. Dit scenario staat bekend als het kantelpunt van de Atlantische circulatie.",
    "vragen": [
      {
        "v": "Hoeveel graden warmer maakt de Golfstroom Europa?",
        "opties": [
          "Twee graden",
          "Vijf graden",
          "Tot tien graden",
          "Vijftien graden"
        ],
        "correct": 2
      },
      {
        "v": "Wat drijft de thermohaliene circulatie aan?",
        "opties": [
          "Wind",
          "Getijden",
          "Temperatuur- en zoutverschillen",
          "De maan"
        ],
        "correct": 2
      },
      {
        "v": "Waardoor verzwakt de Golfstroom?",
        "opties": [
          "Meer wind",
          "Instroom van zoet smeltwater",
          "Hogere zeespiegel",
          "Meer zout"
        ],
        "correct": 1
      },
      {
        "v": "Wat zou er gebeuren als de Golfstroom stopt?",
        "opties": [
          "Europa wordt warmer",
          "Europa koelt drastisch af",
          "Niets verandert",
          "De zeespiegel daalt"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-21",
    "titel": "De ethiek van kunstmatige intelligentie",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 84,
    "tekst": "Naarmate AI meer beslissingen neemt die mensen raken groeien de ethische vragen. Algoritmen die bepalen wie een lening krijgt zijn niet altijd eerlijk. Training op historische data kan vooroordelen versterken. Transparantie is een kernprobleem: veel AI-systemen zijn black boxes. De Europese Unie heeft de AI Act aangenomen als eerste uitgebreide AI-regulering ter wereld. Experts pleiten voor menselijk toezicht bij beslissingen met grote impact, uitlegbare AI en diverse ontwikkelteams om bias te verminderen. De vraag wie verantwoordelijk is wanneer AI fouten maakt is nog onbeantwoord.",
    "vragen": [
      {
        "v": "Wat is een black box-probleem bij AI?",
        "opties": [
          "De computer is zwart",
          "Ontwikkelaars begrijpen niet hoe het systeem beslist",
          "Het systeem werkt niet",
          "De data is versleuteld"
        ],
        "correct": 1
      },
      {
        "v": "Hoe kan AI vooroordelen versterken?",
        "opties": [
          "Door te weinig data",
          "Door training op discriminerende historische data",
          "Door snelle berekeningen",
          "Door open-source software"
        ],
        "correct": 1
      },
      {
        "v": "Wie heeft de AI Act aangenomen?",
        "opties": [
          "De Verenigde Naties",
          "De Verenigde Staten",
          "De Europese Unie",
          "China"
        ],
        "correct": 2
      },
      {
        "v": "Wat pleiten experts voor bij impactvolle AI?",
        "opties": [
          "Volledig automatiseren",
          "Menselijk toezicht",
          "Meer data verzamelen",
          "Snellere algoritmen"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-22",
    "titel": "De biologie van veroudering",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 80,
    "tekst": "Veroudering wordt beïnvloed door genen, omgeving en levensstijl. Telomeren, de beschermkappen op chromosomen, worden bij elke celdeling korter. Wanneer ze te kort worden stopt de cel met delen. Elizabeth Blackburn won de Nobelprijs voor de ontdekking van telomerase, een enzym dat telomeren kan verlengen. Caloriërestrictie verlengt de levensduur bij proefdieren met tot veertig procent. Senolytische medicijnen die verouderde cellen opruimen zijn een veelbelovend onderzoeksgebied. Levensstijlfactoren als niet roken, matig alcoholgebruik, beweging en sociale verbinding correleren met een langere gezonde levensspanne.",
    "vragen": [
      {
        "v": "Wat zijn telomeren?",
        "opties": [
          "Een type enzym",
          "Beschermkappen op chromosomen",
          "Dode cellen",
          "Een hormoon"
        ],
        "correct": 1
      },
      {
        "v": "Wie ontdekte telomerase?",
        "opties": [
          "Marie Curie",
          "Elizabeth Blackburn",
          "Alexander Fleming",
          "Charles Darwin"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel langer leven proefdieren met caloriërestrictie?",
        "opties": [
          "Tien procent",
          "Twintig procent",
          "Tot veertig procent",
          "Zestig procent"
        ],
        "correct": 2
      },
      {
        "v": "Wat doen senolytische medicijnen?",
        "opties": [
          "Telomeren verlengen",
          "Verouderde cellen opruimen",
          "Calorieën verminderen",
          "DNA repareren"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-23",
    "titel": "De economie van aandacht",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 84,
    "tekst": "In een wereld vol informatie is aandacht de schaarsste hulpbron. De gemiddelde mens ziet dagelijks vijfduizend tot tienduizend reclameboodschappen. Apps gebruiken variabele beloningen, hetzelfde principe als gokautomaten, om je vast te houden. Het kost gemiddeld drieëntwintig minuten om na een onderbreking je concentratie te herstellen. Multitasking verlaagt je IQ tijdelijk met tien punten. Technieken als tijdblokkering, de Pomodoro-methode en digitale detox helpen om de controle over je aandacht terug te winnen. Het bewust inzetten van je focus is de vaardigheid van de eenentwintigste eeuw.",
    "vragen": [
      {
        "v": "Hoeveel reclameboodschappen zie je dagelijks?",
        "opties": [
          "100 tot 500",
          "500 tot 1.000",
          "1.000 tot 3.000",
          "5.000 tot 10.000"
        ],
        "correct": 3
      },
      {
        "v": "Hoelang duurt focusherstel na een onderbreking?",
        "opties": [
          "Vijf minuten",
          "Tien minuten",
          "Drieëntwintig minuten",
          "Veertig minuten"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel IQ-punten verlies je door multitasking?",
        "opties": [
          "Twee punten",
          "Vijf punten",
          "Tien punten",
          "Twintig punten"
        ],
        "correct": 2
      },
      {
        "v": "Welk principe gebruiken apps om je vast te houden?",
        "opties": [
          "Vaste beloningen",
          "Variabele beloningen",
          "Strafmaatregelen",
          "Tijdslimieten"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-24",
    "titel": "De wonderen van menselijke zintuigen",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 79,
    "tekst": "De mens heeft niet vijf maar minstens negen zintuigen, waaronder proprioceptie, evenwicht, temperatuurwaarneming en pijnwaarneming. Het oog kan tien miljoen kleuren onderscheiden. De neus herkent meer dan een biljoen geuren. Smaak beperkt zich tot vijf basissmaken: zoet, zout, zuur, bitter en umami. Tast is het eerste zintuig dat zich ontwikkelt in de baarmoeder. Synesthesie is een fenomeen waarbij zintuigen worden gemengd: sommige mensen zien kleuren bij muziek of proeven vormen. Elk zintuig heeft zich geëvolueerd om overlevingsvoordeel te bieden.",
    "vragen": [
      {
        "v": "Hoeveel zintuigen heeft de mens minstens?",
        "opties": [
          "Vijf",
          "Zeven",
          "Negen",
          "Twaalf"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel kleuren onderscheidt het menselijk oog?",
        "opties": [
          "Honderdduizend",
          "Een miljoen",
          "Tien miljoen",
          "Een miljard"
        ],
        "correct": 2
      },
      {
        "v": "Wat is proprioceptie?",
        "opties": [
          "Evenwichtsgevoel",
          "Weten waar je lichaamsdelen zijn",
          "Pijnwaarneming",
          "Temperatuurgevoel"
        ],
        "correct": 1
      },
      {
        "v": "Hoeveel basissmaken zijn er?",
        "opties": [
          "Drie",
          "Vier",
          "Vijf",
          "Zeven"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lt-25",
    "titel": "De toekomst van voedsel",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 84,
    "tekst": "De wereldbevolking groeit naar tien miljard in 2050 en de voedselproductie moet met vijftig procent toenemen. Verticale landbouw gebruikt negentig procent minder water en geen pesticiden. De prijs van kweekvlees daalde van driehonderdduizend euro in 2013 naar minder dan tien euro. Insecten bevatten meer eiwit per kilo dan rundvlees en vereisen een fractie van het land en water. In veel Aziatische landen zijn insecten al normaal voedsel. Precisiefermentatie gebruikt micro-organismen om dierlijke eiwitten na te maken. De toekomst van voedsel is technologisch en divers.",
    "vragen": [
      {
        "v": "Hoeveel moet de voedselproductie toenemen tegen 2050?",
        "opties": [
          "Twintig procent",
          "Dertig procent",
          "Vijftig procent",
          "Honderd procent"
        ],
        "correct": 2
      },
      {
        "v": "Hoeveel minder water gebruikt verticale landbouw?",
        "opties": [
          "Vijftig procent",
          "Zeventig procent",
          "Tachtig procent",
          "Negentig procent"
        ],
        "correct": 3
      },
      {
        "v": "Hoeveel kostte de eerste kweekvleesburger?",
        "opties": [
          "Duizend euro",
          "Tienduizend euro",
          "Driehonderdduizend euro",
          "Een miljoen euro"
        ],
        "correct": 2
      },
      {
        "v": "Wat is precisiefermentatie?",
        "opties": [
          "Insecten kweken",
          "Micro-organismen voor eiwitproductie",
          "Voedsel in de ruimte produceren",
          "Genetische modificatie"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-26",
    "titel": "De invloed van architectuur op welzijn",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 72,
    "tekst": "Gebouwen beïnvloeden ons welzijn meer dan we beseffen. Daglicht in kantoren verhoogt de productiviteit met vijftien procent. Hoge plafonds stimuleren creatief denken, lage plafonds zijn beter voor gedetailleerd werk. Het zien van natuur vanuit een raam versnelt het herstel van patiënten. Biofiel ontwerp integreert natuurlijke elementen in gebouwen: groene muren, houten oppervlakken en waterpartijen verlagen stress. Geluidsisolatie is een onderschatte factor: chronische blootstelling aan lawaai verhoogt de bloeddruk. Goede architectuur is gezondheidswetenschap.",
    "vragen": [
      {
        "v": "Hoeveel procent verhoogt daglicht de productiviteit?",
        "opties": [
          "Vijf procent",
          "Tien procent",
          "Vijftien procent",
          "Dertig procent"
        ],
        "correct": 2
      },
      {
        "v": "Wat stimuleren hoge plafonds?",
        "opties": [
          "Gedetailleerd werk",
          "Creatief denken",
          "Beter slapen",
          "Meer beweging"
        ],
        "correct": 1
      },
      {
        "v": "Wat is biofiel ontwerp?",
        "opties": [
          "Veel technologie",
          "Natuurlijke elementen in gebouwen",
          "Minimalisme",
          "Energiezuinig bouwen"
        ],
        "correct": 1
      },
      {
        "v": "Wat versnelt het herstel van patiënten?",
        "opties": [
          "Televisie",
          "Natuur zien vanuit een raam",
          "Meer bezoek",
          "Langere opname"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-27",
    "titel": "Hoe kleur gedrag beïnvloedt",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 81,
    "tekst": "Kleuren sturen ons gedrag onbewust. Restaurants gebruiken rood en geel om eetlust te stimuleren. Sporters in rood winnen vaker: bij de Olympische Spelen wonnen boksers in rood significant vaker. Blauw is de populairste kleur voor bedrijfslogo's vanwege de associatie met vertrouwen. Groen is het minst vermoeiend voor de ogen, daarom zijn operatiekamers groen. Sommige gevangenissen verven cellen roze om agressie te verminderen. De kleur van medicijnen beïnvloedt het placebo-effect: blauwe pillen kalmeren beter, rode stimuleren meer. Kleurbetekenissen verschillen sterk per cultuur.",
    "vragen": [
      {
        "v": "Waarom gebruiken restaurants rood en geel?",
        "opties": [
          "Voor sfeer",
          "Om eetlust te stimuleren",
          "Omdat het goedkoop is",
          "Voor hygiëne"
        ],
        "correct": 1
      },
      {
        "v": "Welke kleur vermindert agressie in gevangenissen?",
        "opties": [
          "Blauw",
          "Groen",
          "Roze",
          "Wit"
        ],
        "correct": 2
      },
      {
        "v": "Waarom zijn operatiekamers groen?",
        "opties": [
          "Tegen infecties",
          "Goedkoopste verf",
          "Minst vermoeiend voor de ogen",
          "Traditie"
        ],
        "correct": 2
      },
      {
        "v": "Welke kleur staat voor vertrouwen in bedrijfslogo's?",
        "opties": [
          "Rood",
          "Groen",
          "Blauw",
          "Geel"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "lt-28",
    "titel": "De werking van het immuunsysteem",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 73,
    "tekst": "Het immuunsysteem beschermt het lichaam tegen ziekteverwekkers via meerdere verdedigingslinies. De huid en slijmvliezen vormen de eerste barrière. Witte bloedcellen patrouilleren door het bloed. T-cellen herkennen en vernietigen geïnfecteerde cellen. B-cellen produceren antistoffen die specifieke pathogenen markeren. Het immuunsysteem onthoudt ziekteverwekkers en reageert sneller bij herinfectie. Dit geheugen maakt vaccinaties mogelijk. Slaap, voeding en beweging beïnvloeden de afweer significant. Chronische stress verzwakt het immuunsysteem. Vitamine D en zink zijn belangrijk voor optimale immuunfunctie.",
    "vragen": [
      {
        "v": "Wat is de eerste verdedigingslinie?",
        "opties": [
          "Witte bloedcellen",
          "Huid en slijmvliezen",
          "T-cellen",
          "Antistoffen"
        ],
        "correct": 1
      },
      {
        "v": "Wat doen B-cellen?",
        "opties": [
          "Geïnfecteerde cellen vernietigen",
          "Antistoffen produceren",
          "Virussen blokkeren",
          "Bloed filteren"
        ],
        "correct": 1
      },
      {
        "v": "Waarom reageert het immuunsysteem sneller bij herinfectie?",
        "opties": [
          "Meer witte bloedcellen",
          "Het heeft een geheugen",
          "Betere voeding",
          "Sterkere huid"
        ],
        "correct": 1
      },
      {
        "v": "Welke stoffen ondersteunen het immuunsysteem?",
        "opties": [
          "Cafeïne en suiker",
          "Vitamine D en zink",
          "Alcohol en nicotine",
          "Kalium en natrium"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-29",
    "titel": "De wetenschappelijke methode",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 96,
    "tekst": "De wetenschappelijke methode is het fundament van betrouwbare kennisvorming. Het begint met een observatie die tot een vraag leidt. De onderzoeker formuleert een hypothese en ontwerpt een experiment om die te testen. De resultaten worden geanalyseerd en de hypothese bevestigd of verworpen. Cruciale kenmerken zijn herhaalbaarheid en falsificeerbaarheid. Een experiment moet door anderen herhaald kunnen worden. Een theorie moet weerlegbaar zijn: als geen uitkomst de theorie kan weerleggen is het geen wetenschap. Peer review, beoordeling door vakgenoten, is een extra kwaliteitscontrole. Toch is wetenschap niet onfeilbaar: publicatiebias en de replicatiecrisis tonen aan dat verbetering nodig blijft.",
    "vragen": [
      {
        "v": "Waarmee begint de wetenschappelijke methode?",
        "opties": [
          "Een experiment",
          "Een observatie",
          "Een conclusie",
          "Een publicatie"
        ],
        "correct": 1
      },
      {
        "v": "Wat betekent falsificeerbaarheid?",
        "opties": [
          "Een theorie moet bewezen worden",
          "Een theorie moet weerlegbaar zijn",
          "Een experiment moet slagen",
          "Resultaten moeten positief zijn"
        ],
        "correct": 1
      },
      {
        "v": "Wat is peer review?",
        "opties": [
          "Beoordeling door studenten",
          "Beoordeling door vakgenoten",
          "Beoordeling door het publiek",
          "Zelfbeoordeling"
        ],
        "correct": 1
      },
      {
        "v": "Wat is de replicatiecrisis?",
        "opties": [
          "Te veel experimenten",
          "Onderzoeksresultaten die niet herhaald kunnen worden",
          "Gebrek aan onderzoekers",
          "Te veel peer reviews"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "lt-30",
    "titel": "De geheimen van de diepzee",
    "doelgroep": "volwassen",
    "niveau": 3,
    "onderwerp": "wetenschap",
    "collectie": "leestest",
    "woorden": 115,
    "tekst": "Meer dan tachtig procent van de oceaanbodem is nog onverkend. De diepzee begint op zo een tweehonderd meter diepte, waar geen zonlicht meer doordringt. Ondanks volledige duisternis, extreme druk en temperaturen rond het vriespunt bruist het er van het leven. Hydrothermale bronnen op de oceaanbodem spuwen water van vierhonderd graden naar buiten. Rondom deze schoorstenen leven ecosystemen die niet afhankelijk zijn van zonlicht maar van chemosynthese. Diepzeevissen hebben bioluminescentie ontwikkeld: ze maken hun eigen licht om prooien aan te trekken of partners te vinden. De reuzeninktvis, lang beschouwd als mythe, werd pas in 2004 voor het eerst levend gefilmd. De diepzee bevat ook enorme minerale rijkdommen, maar de ecologische risico's van diepzeemijnbouw zijn nauwelijks begrepen.",
    "vragen": [
      {
        "v": "Hoeveel procent van de oceaanbodem is nog onverkend?",
        "opties": [
          "Vijftig procent",
          "Zestig procent",
          "Meer dan tachtig procent",
          "Negentig procent"
        ],
        "correct": 2
      },
      {
        "v": "Wat is chemosynthese?",
        "opties": [
          "Fotosynthese onder water",
          "Energiewinning zonder zonlicht",
          "Een type koraal",
          "Een diepzee-organisme"
        ],
        "correct": 1
      },
      {
        "v": "Wanneer werd de reuzeninktvis voor het eerst levend gefilmd?",
        "opties": [
          "1990",
          "1998",
          "2004",
          "2012"
        ],
        "correct": 2
      },
      {
        "v": "Wat is bioluminescentie?",
        "opties": [
          "Warmteproductie",
          "Zelf licht maken",
          "Kleuren veranderen",
          "Geluid produceren"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "j-hond-bo",
    "titel": "Bo de speurhond",
    "doelgroep": "kids6-9",
    "niveau": 1,
    "onderwerp": "dieren",
    "tekst": "Bo is een hond met een super neus. Hij kan alles ruiken. Een koekje onder het bed? Bo vindt het. Een bal diep in de tuin? Bo graaft hem op.\n\nOp een dag is Lisa haar knuffel kwijt. Ze is heel verdrietig. \"Bo, help!\" roept ze. Bo snuffelt aan het kussen van Lisa. Dan rent hij weg. Hij zoekt in de gang. Hij zoekt in de keuken. Daar! Onder de bank ligt de knuffel.\n\nBo blaft blij. Lisa geeft hem een dikke knuffel. \"Jij bent de beste speurhond van de wereld!\" zegt ze. Bo krijgt een koekje. Dat had hij al lang geroken.",
    "vragen": [
      {
        "v": "Wat kan Bo heel goed?",
        "opties": [
          "Zwemmen",
          "Ruiken",
          "Zingen",
          "Springen"
        ],
        "correct": 1
      },
      {
        "v": "Wat is Lisa kwijt?",
        "opties": [
          "Haar bal",
          "Haar knuffel",
          "Haar koekje",
          "Haar jas"
        ],
        "correct": 1
      },
      {
        "v": "Waar vindt Bo de knuffel?",
        "opties": [
          "In de tuin",
          "Onder de bank",
          "Onder het bed",
          "In de keuken"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 103
  },
  {
    "id": "j-maan",
    "titel": "De maan is een rare bal",
    "doelgroep": "kids6-9",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "tekst": "Kijk eens omhoog in de nacht. Daar hangt de maan. De maan lijkt klein. Maar dat is niet zo! De maan is een grote bal van steen. Hij lijkt klein omdat hij heel ver weg is.\n\nOp de maan is geen lucht. Je kunt er niet ademen. Er groeit ook niets. Geen gras, geen bomen, geen bloemen. Alleen maar stof en stenen.\n\nEr zijn wel eens mensen op de maan geweest. Ze gingen met een raket. Op de maan ben je heel licht. Je kunt er super hoog springen! De voetstappen van de mensen staan er nog steeds. Er is geen wind die ze wegblaast.\n\nZou jij naar de maan willen?",
    "vragen": [
      {
        "v": "Wat is de maan?",
        "opties": [
          "Een lamp",
          "Een grote bal van steen",
          "Een ster",
          "Een wolk"
        ],
        "correct": 1
      },
      {
        "v": "Waarom kun je op de maan niet ademen?",
        "opties": [
          "Het is er te koud",
          "Er is geen lucht",
          "Het is er te donker",
          "Er is te veel stof"
        ],
        "correct": 1
      },
      {
        "v": "Waarom staan de voetstappen er nog steeds?",
        "opties": [
          "Ze zijn geverfd",
          "Er is geen wind die ze wegblaast",
          "Ze zijn heel diep",
          "Iemand maakt ze elke dag opnieuw"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 111
  },
  {
    "id": "j-pinguin",
    "titel": "Pim de pinguïn kan niet vliegen",
    "doelgroep": "kids6-9",
    "niveau": 1,
    "onderwerp": "dieren",
    "tekst": "Pim is een pinguïn. Hij heeft vleugels. Maar vliegen kan hij niet. Dat vindt Pim soms jammer. De meeuwen vliegen hoog in de lucht. Pim kijkt ze na.\n\nMaar dan gaat Pim het water in. En daar... daar is Pim een ster! Hij zwemt super snel. Zijn vleugels zijn net zwemvliezen. Hij schiet door het water als een pijl. Geen meeuw kan dat!\n\nPim vangt een visje. En nog een. De meeuwen kijken jaloers toe. Zij kunnen niet zo goed duiken.\n\nIedereen kan iets goed. De meeuw kan vliegen. Pim kan zwemmen. En jij? Wat kan jij goed?",
    "vragen": [
      {
        "v": "Wat kan Pim niet?",
        "opties": [
          "Zwemmen",
          "Vliegen",
          "Vissen vangen",
          "Duiken"
        ],
        "correct": 1
      },
      {
        "v": "Waar is Pim een ster?",
        "opties": [
          "In de lucht",
          "In het water",
          "Op het ijs",
          "In het zand"
        ],
        "correct": 1
      },
      {
        "v": "Wat leert dit verhaal ons?",
        "opties": [
          "Vliegen is het beste",
          "Iedereen kan iets goed",
          "Zwemmen is moeilijk",
          "Meeuwen zijn dom"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 98
  },
  {
    "id": "j-regenboog",
    "titel": "Waar komt de regenboog vandaan?",
    "doelgroep": "kids6-9",
    "niveau": 1,
    "onderwerp": "natuur",
    "tekst": "Het regent. En de zon schijnt ook. Kijk! Een regenboog!\n\nEen regenboog is licht van de zon. Het licht van de zon lijkt wit. Maar dat is een trucje. In het witte licht zitten alle kleuren verstopt.\n\nAls het zonlicht door de regen valt, gaan de kleuren uit elkaar. Dan zie je rood, oranje, geel, groen, blauw en paars. Net een brug van kleuren in de lucht!\n\nJe kunt zelf ook een regenboog maken. Pak de tuinslang op een zonnige dag. Spuit fijne druppels in de lucht. Ga met je rug naar de zon staan. Zie je hem al?\n\nEen pot met goud vind je niet aan het einde. Maar mooi is het wel!",
    "vragen": [
      {
        "v": "Wat heb je nodig voor een regenboog?",
        "opties": [
          "Sneeuw en wind",
          "Regen en zon",
          "Wolken en mist",
          "Alleen regen"
        ],
        "correct": 1
      },
      {
        "v": "Wat zit er verstopt in wit zonlicht?",
        "opties": [
          "Goud",
          "Alle kleuren",
          "Water",
          "Sterren"
        ],
        "correct": 1
      },
      {
        "v": "Hoe maak je zelf een regenboog?",
        "opties": [
          "Met een lamp",
          "Met de tuinslang op een zonnige dag",
          "Met verf",
          "Met een spiegel in het donker"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 114
  },
  {
    "id": "j-mier-max",
    "titel": "Max de sterke mier",
    "doelgroep": "kids6-9",
    "niveau": 1,
    "onderwerp": "dieren",
    "tekst": "Max is een mier. Hij is heel klein. Kleiner dan je nagel. Maar Max is super sterk!\n\nMax kan een blaadje tillen. Dat blaadje is veel groter dan hijzelf. Het is net alsof jij een auto optilt! Zo sterk zijn mieren.\n\nMax woont met heel veel mieren samen. Hun huis heet een nest. In het nest heeft iedereen een taak. Sommige mieren zoeken eten. Andere mieren passen op de eitjes. En de koningin? Die legt alle eitjes.\n\nMieren praten niet met woorden. Ze laten een geurspoor achter. Zo zegt Max tegen de andere mieren: \"Volg mij! Ik heb eten gevonden!\" Alle mieren lopen dan achter elkaar aan. Heb je dat wel eens gezien?",
    "vragen": [
      {
        "v": "Hoe sterk is Max?",
        "opties": [
          "Hij kan een blaadje tillen dat groter is dan hijzelf",
          "Hij kan een auto tillen",
          "Hij is niet sterk",
          "Hij kan een huis dragen"
        ],
        "correct": 0
      },
      {
        "v": "Wie legt alle eitjes in het nest?",
        "opties": [
          "Max",
          "De koningin",
          "Alle mieren",
          "De sterkste mier"
        ],
        "correct": 1
      },
      {
        "v": "Hoe zeggen mieren iets tegen elkaar?",
        "opties": [
          "Met woorden",
          "Met een geurspoor",
          "Met geluid",
          "Met hun poten"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 113
  },
  {
    "id": "j-tanden",
    "titel": "Waarom vallen je tanden uit?",
    "doelgroep": "kids6-9",
    "niveau": 1,
    "onderwerp": "wetenschap",
    "tekst": "Wiebel, wiebel. Je tand zit los! Even later valt hij uit. Au? Nee hoor, het doet bijna geen pijn.\n\nWaarom vallen je tanden uit? Dat zit zo. Je eerste tanden heten melktanden. Ze komen als je een baby bent. Maar melktanden zijn klein. Je mond groeit, en de melktanden groeien niet mee.\n\nOnder elke melktand wacht een nieuwe tand. Een grote-mensen-tand! Die duwt de melktand eruit. Eerst wiebelt de tand. Dan valt hij uit. En dan groeit de nieuwe tand in het gaatje.\n\nJe krijgt zo wel twintig nieuwe tanden. Die moeten je hele leven mee. Dus poets ze goed! Twee keer per dag. Dan blijven ze sterk en wit.",
    "vragen": [
      {
        "v": "Hoe heten je eerste tanden?",
        "opties": [
          "Babytanden",
          "Melktanden",
          "Wiebeltanden",
          "Kleine tanden"
        ],
        "correct": 1
      },
      {
        "v": "Wat duwt de melktand eruit?",
        "opties": [
          "Je tong",
          "De nieuwe tand eronder",
          "Een appel",
          "De tandarts"
        ],
        "correct": 1
      },
      {
        "v": "Hoe vaak moet je je tanden poetsen?",
        "opties": [
          "Eén keer per week",
          "Twee keer per dag",
          "Alleen op school",
          "Nooit"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 110
  },
  {
    "id": "j-slak",
    "titel": "Het huisje van de slak",
    "doelgroep": "kids6-9",
    "niveau": 1,
    "onderwerp": "dieren",
    "tekst": "Een slak is nooit ver van huis. Weet je waarom? Hij draagt zijn huisje altijd op zijn rug!\n\nHet huisje van de slak groeit met hem mee. Een kleine slak heeft een klein huisje. Een grote slak heeft een groot huisje. Verhuizen hoeft dus nooit.\n\nIs er gevaar? Dan kruipt de slak snel naar binnen. Veilig! Regent het niet en is het warm? Dan blijft de slak ook binnen. Anders droogt hij uit.\n\nEen slak kruipt op één grote voet. Hij maakt slijm om beter te glijden. Daarom zie je een zilveren spoor waar de slak liep. Een slak is langzaam. Maar hij komt altijd waar hij wezen wil. Stapje voor stapje. Net als jij, als je iets moeilijks leert!",
    "vragen": [
      {
        "v": "Waar is het huisje van de slak?",
        "opties": [
          "Onder de grond",
          "Op zijn rug",
          "In een boom",
          "Bij de sloot"
        ],
        "correct": 1
      },
      {
        "v": "Wat doet de slak bij gevaar?",
        "opties": [
          "Hij rent weg",
          "Hij kruipt in zijn huisje",
          "Hij maakt geluid",
          "Hij bijt"
        ],
        "correct": 1
      },
      {
        "v": "Waarom maakt een slak slijm?",
        "opties": [
          "Om beter te glijden",
          "Omdat hij ziek is",
          "Om te eten",
          "Tegen de regen"
        ],
        "correct": 0
      }
    ],
    "collectie": "kort",
    "woorden": 120
  },
  {
    "id": "j-fiets",
    "titel": "Sam leert fietsen",
    "doelgroep": "kids6-9",
    "niveau": 1,
    "onderwerp": "verhaal",
    "tekst": "Sam krijgt een nieuwe fiets. Rood met een bel. Prachtig! Maar er is één probleem. Sam kan nog niet fietsen zonder zijwieltjes.\n\n\"Vandaag gaan we oefenen,\" zegt papa. Hij haalt de zijwieltjes eraf. Sam vindt het spannend. Papa houdt de fiets vast. \"Trappen maar!\"\n\nSam trapt. De fiets wiebelt. \"Niet loslaten, papa!\" roept Sam. \"Ik hou je vast,\" zegt papa. Sam trapt harder. Het gaat steeds beter.\n\nDan hoort Sam papa lachen. Maar... papa staat ver weg! Hij heeft al lang losgelaten. Sam fietst helemaal zelf!\n\n\"Ik kan het!\" juicht Sam. Hij belt met zijn bel. Ring ring! Vallen hoort erbij, zegt papa altijd. Maar vandaag valt Sam niet één keer.",
    "vragen": [
      {
        "v": "Wat kan Sam nog niet aan het begin van het verhaal?",
        "opties": [
          "Lopen",
          "Fietsen zonder zijwieltjes",
          "Bellen",
          "Trappen"
        ],
        "correct": 1
      },
      {
        "v": "Wat doet papa stiekem?",
        "opties": [
          "Hij laat de fiets los",
          "Hij duwt Sam om",
          "Hij gaat naar huis",
          "Hij pakt de bel af"
        ],
        "correct": 0
      },
      {
        "v": "Hoe voelt Sam zich aan het einde?",
        "opties": [
          "Verdrietig",
          "Blij en trots",
          "Boos",
          "Bang"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 111
  },
  {
    "id": "j-vuurtoren",
    "titel": "Het licht in de vuurtoren",
    "doelgroep": "kids6-9",
    "niveau": 2,
    "onderwerp": "techniek",
    "tekst": "Aan de zee staat een hoge toren. Rood met witte strepen. Het is een vuurtoren. Bovenin draait een heel fel licht.\n\nWaar is dat licht voor? Voor de schepen op zee! In de nacht is de zee pikdonker. De kapitein van een schip ziet dan bijna niets. Maar het licht van de vuurtoren ziet hij wel. Van heel ver weg al.\n\nZo weet de kapitein: daar is land! Hij weet ook waar hij moet varen. Weg van de stenen en het ondiepe water. De vuurtoren wijst de veilige weg. Net als een lamp in de nacht.\n\nVroeger woonde er iemand in de vuurtoren. De vuurtorenwachter. Elke avond deed hij het licht aan. Nu gaat het licht vanzelf aan. Maar de vuurtoren helpt nog steeds elke nacht.",
    "vragen": [
      {
        "v": "Voor wie is het licht van de vuurtoren?",
        "opties": [
          "Voor vliegtuigen",
          "Voor schepen op zee",
          "Voor auto's",
          "Voor de vissen"
        ],
        "correct": 1
      },
      {
        "v": "Wat weet de kapitein als hij het licht ziet?",
        "opties": [
          "Dat het gaat regenen",
          "Dat daar land is",
          "Dat het ochtend wordt",
          "Dat er een feest is"
        ],
        "correct": 1
      },
      {
        "v": "Wie deed vroeger elke avond het licht aan?",
        "opties": [
          "De kapitein",
          "De vuurtorenwachter",
          "De burgemeester",
          "Niemand"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 126
  },
  {
    "id": "j-eekhoorn",
    "titel": "De eekhoorn vergeet zijn nootjes",
    "doelgroep": "kids6-9",
    "niveau": 2,
    "onderwerp": "dieren",
    "tekst": "In de herfst is de eekhoorn druk. Hij verzamelt nootjes en eikels. Die verstopt hij in de grond. Hier een paar, daar een paar. Wel honderd plekjes!\n\nWaarom doet hij dat? In de winter is er bijna geen eten. Dan graaft de eekhoorn zijn nootjes weer op. Slim!\n\nMaar er is iets grappigs. De eekhoorn vergeet de helft van zijn plekjes! Hij weet niet meer waar alles ligt. Zonde? Nee, juist niet!\n\nWant wat gebeurt er met een vergeten nootje in de grond? Het groeit! Uit het nootje komt een boompje. En uit dat boompje groeit een grote boom. Met nieuwe nootjes.\n\nZo plant de vergeetachtige eekhoorn per ongeluk een heel bos. Bedankt, eekhoorn!",
    "vragen": [
      {
        "v": "Wat doet de eekhoorn in de herfst?",
        "opties": [
          "Hij slaapt",
          "Hij verstopt nootjes in de grond",
          "Hij verhuist",
          "Hij bouwt een dam"
        ],
        "correct": 1
      },
      {
        "v": "Wat vergeet de eekhoorn?",
        "opties": [
          "Zijn naam",
          "Waar de helft van de nootjes ligt",
          "Te eten",
          "Zijn staart te poetsen"
        ],
        "correct": 1
      },
      {
        "v": "Wat gebeurt er met een vergeten nootje?",
        "opties": [
          "Het verdwijnt",
          "Er groeit een boom uit",
          "Een vogel eet het op",
          "Het wordt een steen"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 114
  },
  {
    "id": "j-dino-kip",
    "titel": "De kip is een dinosaurus",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "tekst": "Wil je een echte dinosaurus zien? Kijk dan naar een kip. Echt waar: de kip is familie van de Tyrannosaurus rex!\n\nHeel lang geleden leefden er overal dinosaurussen. Toen sloeg er een enorme ruimtesteen op de aarde in. Het werd donker en koud. De grote dinosaurussen gingen dood. Maar een paar kleine dino's met veren overleefden de ramp. Zij konden vliegen en vonden overal eten.\n\nDie kleine dino's met veren veranderden heel langzaam, in miljoenen jaren. Ze werden... vogels! Alle vogels van nu stammen af van dinosaurussen. De mus in je tuin, de eend in de sloot en dus ook de kip.\n\nWetenschappers hebben het bewezen. De botten van vogels lijken sprekend op die van kleine roofdino's. Sommige dino's hadden zelfs al veren en vleugels. Ze konden alleen nog niet goed vliegen.\n\nKijk nog eens goed naar een kip. Zie je hoe ze loopt, met die stappende poten? Zie je haar scherpe ogen? Dan kijk je naar een piepklein familielid van de gevaarlijkste jager die ooit heeft geleefd. Best stoer voor een kip.",
    "vragen": [
      {
        "v": "Van welke dieren stammen alle vogels af?",
        "opties": [
          "Van vissen",
          "Van dinosaurussen",
          "Van vleermuizen",
          "Van hagedissen"
        ],
        "correct": 1
      },
      {
        "v": "Welke dino's overleefden de ramp?",
        "opties": [
          "De allergrootste",
          "Kleine dino's met veren",
          "De dino's in zee",
          "Geen enkele"
        ],
        "correct": 1
      },
      {
        "v": "Hoe hebben wetenschappers het bewezen?",
        "opties": [
          "Met oude foto's",
          "Vogelbotten lijken sprekend op die van kleine roofdino's",
          "Een kip heeft het verteld",
          "Met een tijdmachine"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 173
  },
  {
    "id": "j-poep-goud",
    "titel": "Het jongetje dat overal vragen over stelde",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "verhaal",
    "tekst": "Joep stelde altijd vragen. Honderd per dag, zei zijn moeder. Waarom is de lucht blauw? Waarom prikken brandnetels? Waarom kun je je eigen kietel niet voelen?\n\nOp school vond de meester het soms lastig. \"Joep, we gaan nu rekenen.\" Maar Joep wilde weten waaróm je moest rekenen. \"Omdat je anders je wisselgeld niet kunt tellen,\" zei de meester. Dat vond Joep een goed antwoord. Toen ging hij rekenen. Beter dan iedereen.\n\nOp een dag kwam er een echte uitvinder op school vertellen. Ze vroeg: \"Wie heeft er een vraag?\" Alle vingers bleven naar beneden. Behalve die van Joep. Hij vroeg wel tien dingen. Over robots, over raketten en over hoe je uitvinder wordt.\n\nDe uitvinder lachte. \"Weet je wat mijn geheim is?\" zei ze. \"Ik ben nooit gestopt met vragen stellen. Elke uitvinding begint met een vraag die niemand anders durft te stellen.\"\n\nJoep glom van trots. Die avond schreef hij al zijn vragen in een schrift. Bovenop schreef hij: mijn uitvindersboek.",
    "vragen": [
      {
        "v": "Wat deed Joep de hele dag?",
        "opties": [
          "Rekenen",
          "Vragen stellen",
          "Tekenen",
          "Voetballen"
        ],
        "correct": 1
      },
      {
        "v": "Wat was het geheim van de uitvinder?",
        "opties": [
          "Hard werken",
          "Nooit stoppen met vragen stellen",
          "Veel geld",
          "Goede cijfers"
        ],
        "correct": 1
      },
      {
        "v": "Wat schrijft Joep op zijn schrift?",
        "opties": [
          "Mijn dagboek",
          "Mijn uitvindersboek",
          "Mijn vragenlijst",
          "Mijn huiswerk"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 162
  },
  {
    "id": "j-ijsberg",
    "titel": "Een ijsberg is een reus onder water",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "natuur",
    "tekst": "Een ijsberg lijkt op een witte berg die in de zee drijft. Maar wat je ziet, is maar een klein stukje. Bijna negentig procent van de ijsberg zit ónder water! Daarom zeggen mensen wel eens: \"Dat is het topje van de ijsberg.\"\n\nIJsbergen zijn geboren als stukken gletsjer. Een gletsjer is een rivier van ijs die heel langzaam naar de zee schuift. Bij de kust breekt er soms een enorm stuk af. Dat afbreken heet kalven, net als bij een koe die een kalfje krijgt. Het stuk ijs plonst in het water en drijft weg. Een ijsberg is geboren!\n\nSommige ijsbergen zijn zo groot als een stad. De allergrootste ooit gemeten was groter dan een heel land! IJsbergen drijven soms jaren rond voordat ze smelten.\n\nIJsbergen zijn prachtig, maar ook gevaarlijk voor schepen. Het beroemde schip de Titanic botste in 1912 tegen een ijsberg en zonk. De kapitein zag de ijsberg te laat. Het grootste deel zat immers verstopt onder water.\n\nTegenwoordig houden satellieten alle grote ijsbergen in de gaten. Zo weten schepen precies waar ze moeten uitkijken.",
    "vragen": [
      {
        "v": "Hoeveel van een ijsberg zit onder water?",
        "opties": [
          "De helft",
          "Bijna negentig procent",
          "Tien procent",
          "Alles"
        ],
        "correct": 1
      },
      {
        "v": "Hoe heet het afbreken van een stuk gletsjer?",
        "opties": [
          "Kalven",
          "Splijten",
          "Smelten",
          "Kraken"
        ],
        "correct": 0
      },
      {
        "v": "Welk beroemd schip botste tegen een ijsberg?",
        "opties": [
          "De Batavia",
          "De Titanic",
          "De Nautilus",
          "De Vliegende Hollander"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 178
  },
  {
    "id": "j-blindegeleide",
    "titel": "Hoe een puppy een heldenhond wordt",
    "doelgroep": "kids9-12",
    "niveau": 2,
    "onderwerp": "dieren",
    "tekst": "Sommige mensen kunnen niet of bijna niet zien. Een blindengeleidehond is dan een echte held. De hond brengt zijn baas veilig door de stad. Maar hoe leert een hond dat?\n\nHet begint als de hond nog een puppy is. De puppy gaat wonen bij een gastgezin. Daar leert hij gewone dingen: netjes lopen aan de riem, rustig blijven in de bus en niet schrikken van harde geluiden. Het gastgezin neemt de puppy overal mee naartoe. Naar de winkel, de trein, zelfs naar school.\n\nNa ongeveer een jaar begint de echte opleiding. Die duurt nog eens acht maanden! De hond leert stoppen bij elke stoeprand. Hij leert om obstakels heen te lopen, zoals paaltjes en geparkeerde fietsen. Hij leert zelfs iets heel bijzonders: nee zeggen. Als de baas wil oversteken terwijl er een auto aankomt, blijft de hond gewoon staan. Dat heet intelligente ongehoorzaamheid.\n\nNiet elke hond haalt het examen. Je moet slim, rustig en heel geduldig zijn. De honden die slagen, veranderen het leven van hun baas. Samen kunnen ze overal naartoe. De hond is de ogen van zijn baas — en zijn allerbeste vriend.",
    "vragen": [
      {
        "v": "Waar woont de puppy eerst?",
        "opties": [
          "In een asiel",
          "Bij een gastgezin",
          "Op school",
          "Bij de dierenarts"
        ],
        "correct": 1
      },
      {
        "v": "Wat is intelligente ongehoorzaamheid?",
        "opties": [
          "Slim ontsnappen",
          "Nee zeggen als iets gevaarlijk is",
          "Koekjes stelen",
          "Heel hard blaffen"
        ],
        "correct": 1
      },
      {
        "v": "Waar stopt de geleidehond altijd?",
        "opties": [
          "Bij elke boom",
          "Bij elke stoeprand",
          "Bij elke winkel",
          "Bij elke hond"
        ],
        "correct": 1
      }
    ],
    "collectie": "kort",
    "woorden": 185
  }
];

/** Gefilterde selectie uit de bibliotheek. Alle filters optioneel. */
function tekstenKies({ doelgroep, maxNiveau, minNiveau, onderwerp, collectie, minWoorden, maxWoorden, exclusief = [] } = {}) {
  return TEKST_BIB.filter(t =>
    (!doelgroep   || t.doelgroep === doelgroep || (Array.isArray(doelgroep) && doelgroep.includes(t.doelgroep))) &&
    (!maxNiveau   || t.niveau <= maxNiveau) &&
    (!minNiveau   || t.niveau >= minNiveau) &&
    (!onderwerp   || t.onderwerp === onderwerp) &&
    (!collectie   || t.collectie === collectie) &&
    (!minWoorden  || t.woorden >= minWoorden) &&
    (!maxWoorden  || t.woorden <= maxWoorden) &&
    !exclusief.includes(t.id)
  );
}

/** Willekeurige tekst die aan de filters voldoet (of null). */
function tekstWillekeurig(filters) {
  const opties = tekstenKies(filters);
  return opties.length ? opties[Math.floor(Math.random() * opties.length)] : null;
}

function tekstBijId(id) {
  return TEKST_BIB.find(t => t.id === id) || null;
}

/** Doelgroepen passend bij de huidige gebruiker (kids-modus of leeftijd). */
function tekstDoelgroepen() {
  try {
    const gebruiker = JSON.parse(localStorage.getItem('snellees_gebruiker') || '{}');
    if (gebruiker.doelgroep) {
      return { 'kids6-9': ['kids6-9'], 'kids9-12': ['kids6-9', 'kids9-12'],
               'teens': ['kids9-12', 'teens'], 'volwassen': ['teens', 'volwassen'] }[gebruiker.doelgroep]
             || ['teens', 'volwassen'];
    }
    if (localStorage.getItem('kids_modus') === '1') return ['kids6-9', 'kids9-12'];
  } catch (e) { /* localStorage niet beschikbaar */ }
  return ['teens', 'volwassen'];
}

// ── Compatibiliteit met bestaande schermen ───────────────────
const LANGE_TEKSTEN = TEKST_BIB.filter(t => t.collectie === 'lang')
  .map(t => ({ id: t.id.replace(/^lang-/, ''), niveau: t.niveau, titel: t.titel, tekst: t.tekst, vragen: t.vragen }));

const LEESTEST_TEKSTEN = TEKST_BIB.filter(t => t.collectie === 'leestest')
  .map(t => ({ titel: t.titel, tekst: t.tekst, vragen: t.vragen }));
