const LANGE_TEKSTEN = [

// ── NIVEAU 1: STARTER (~480 woorden) ──────────────────────
{
  id: 'n1a', niveau: 1,
  titel: 'Waarom bewegen je gezond houdt',
  tekst: `Bewegen is een van de eenvoudigste en krachtigste dingen die je kunt doen voor je gezondheid. Toch zit de gemiddelde Nederlander meer dan negen uur per dag. Dat is meer dan hij slaapt. En het heeft duidelijke gevolgen.

Wanneer je beweegt, pompt je hart sneller. Meer bloed stroomt naar je spieren en organen. Je longen werken harder om zuurstof te leveren. Na verloop van tijd worden hart en longen sterker. Dit verlaagt je rusthartslag en vermindert het risico op hart- en vaatziekten.

Bewegen heeft ook een sterk effect op je hersenen. Tijdens lichaamsbeweging maakt je lichaam endorfines aan, stofjes die je een goed gevoel geven. Mensen die regelmatig sporten, rapporteren minder stress, betere slaap en meer energie overdag. Depressie en angststoornissen nemen af bij mensen die drie tot vijf keer per week matig intensief bewegen.

Je hoeft geen topsporter te zijn. Dertig minuten stevig wandelen per dag is al genoeg om de meeste gezondheidsvoordelen te krijgen. Fietsen naar je werk, de trap nemen in plaats van de lift, even stretchen tijdens je pauze: kleine keuzes tellen op.

Kinderen en jongeren hebben meer beweging nodig: minstens een uur per dag. Voor ouderen is bewegen bijzonder belangrijk, omdat het vallen voorkomt door spierversterking en balansverbetering. Krachttraining twee keer per week houdt botten sterk en de stofwisseling actief.

Er zijn ook langetermijnvoordelen. Mensen die actief blijven, leven gemiddeld vijf tot tien jaar langer. Ze hebben minder kans op diabetes type 2, kanker en dementie. Zelfs hersenfunctie blijft beter behouden bij regelmatige beweging.

Het goede nieuws: je kunt op elk moment beginnen. Studies tonen aan dat mensen die pas op hun zestigste starten met regelmatig bewegen alsnog enorme gezondheidswinst boeken.

Begin klein. Kies iets wat je leuk vindt. Maak het een gewoonte door het aan een vast moment te koppelen. Leg je sportschoenen klaar bij de deur. Plan een wandeling in je agenda. Beweeg samen met een vriend, want sociale steun vergroot de kans dat je doorgaat.

Je lichaam en je geest zullen je dankbaar zijn.`,
  vragen: [
    { v: 'Hoeveel uur per dag zit de gemiddelde Nederlander?', opties: ['Vijf uur', 'Zeven uur', 'Negen uur', 'Twaalf uur'], correct: 2 },
    { v: 'Welke stofjes maakt je lichaam aan tijdens het bewegen, waardoor je je beter voelt?', opties: ['Insuline', 'Endorfines', 'Adrenaline', 'Melatonine'], correct: 1 },
    { v: 'Hoeveel minuten wandelen per dag volstaat al voor de meeste gezondheidsvoordelen?', opties: ['Tien minuten', 'Twintig minuten', 'Dertig minuten', 'Zestig minuten'], correct: 2 },
  ]
},

{
  id: 'n1b', niveau: 1,
  titel: 'Hoe je beter kunt slapen',
  tekst: `Slaap is de basis van alles. Als je slecht slaapt, word je prikkelbaar, vergeet je meer en presteer je minder goed op school of werk. Toch kampt een groot deel van de bevolking met slaapproblemen. De meeste mensen weten niet dat veel van die problemen oplosbaar zijn met eenvoudige gewoonten.

Je lichaam heeft een interne klok, het circadiaans ritme. Die klok wordt gestuurd door licht. In de ochtend zorgt daglicht ervoor dat je wakker en alert wordt. In de avond, als het donker wordt, maakt je brein melatonine aan: het slaaphormoon. Maar kunstlicht — en zeker het blauwe licht van telefoons en laptops — verstoort dit proces. Je brein denkt dat het nog dag is en maakt minder melatonine aan.

De oplossing is eenvoudig: zet je schermen een uur voor het slapengaan uit. Of gebruik een blauwlichtfilter op je apparaten. Dim het licht in je huis 's avonds. Deze kleine aanpassing kan al een groot verschil maken.

Temperatuur speelt ook een rol. Je lichaam moet afkoelen om goed in slaap te vallen. Een slaapkamer van rond de achttien graden Celsius is voor de meeste mensen ideaal. Een warme douche of bad vlak voor het slapengaan helpt paradoxaal genoeg: het warme water trekt het bloed naar de huid, waarna je lichaamskern snel afkoelt.

Een vaste bedtijd is minstens zo belangrijk als hoeveel uren je slaapt. In het weekend uitslapen klinkt heerlijk, maar het verschuift je interne klok. Maandag voel je je dan versuft, alsof je door een tijdzone gereisd bent. Probeer elke dag op dezelfde tijd op te staan, ook in het weekend.

Cafeïne blijft zes tot acht uur in je bloed. Een kop koffie om drie uur 's middags kan er voor zorgen dat je om elf uur 's avonds nog klaarwakker bent. Beperk cafeïne na het middaguur.

Goed slapen is geen luxe. Het is de fundering waarop concentratie, geheugen en stemming rusten.`,
  vragen: [
    { v: 'Wat is het circadiaans ritme?', opties: ['Een slaapstoornis', 'De interne klok van je lichaam', 'Een soort melatonine', 'Een oefening om beter te slapen'], correct: 1 },
    { v: 'Waarom is een warme douche voor het slapengaan juist goed?', opties: ['Het maakt je moe door inspanning', 'Warmte verhoogt melatonine', 'Je lichaamskern koelt daarna snel af', 'Het blauwe licht valt weg'], correct: 2 },
    { v: 'Hoelang blijft cafeïne actief in je bloed?', opties: ['Twee uur', 'Vier uur', 'Zes tot acht uur', 'Twaalf uur'], correct: 2 },
  ]
},

// ── NIVEAU 2: GEVORDERD (~750 woorden) ────────────────────
{
  id: 'n2a', niveau: 2,
  titel: 'Sociale media en het tienerbrein',
  tekst: `Tieners brengen gemiddeld meer dan zes uur per dag door op sociale media. Dat is meer tijd dan ze op school zitten. En terwijl deze platforms ontworpen zijn om zo verslavend mogelijk te zijn, is het tienerbrein bijzonder kwetsbaar voor precies de mechanismen die ze gebruiken.

Het tienerbrein is nog volop in ontwikkeling. De prefrontale cortex — het deel dat verantwoordelijk is voor impulscontrole, planning en het afwegen van risico's — is pas volledig ontwikkeld rond het vijfentwintigste levensjaar. Tieners zijn biologisch gezien gevoeliger voor sociale beloning en afwijzing. Een like op Instagram geeft een dopaminepiek die vergelijkbaar is met het eten van suiker of het winnen van een spelletje. Een ontbrekende reactie of een negatief commentaar voelt disproportioneel pijnlijk.

Platforms als Instagram, TikTok en Snapchat maken hier bewust gebruik van. Variabele beloningen — soms veel likes, soms weinig, nooit voorspelbaar — zijn de meest verslavende vorm van beloning die er bestaat. Het is hetzelfde principe als een gokautomaat. Je weet nooit wanneer de beloning komt, dus je blijft kijken.

Onderzoek van de Universiteit van Pennsylvania toonde aan dat het beperken van sociale mediagebruik tot dertig minuten per dag significante vermindering gaf van angst, depressie en eenzaamheid bij jongeren. Een studie van Jean Twenge laat zien dat de mentale gezondheid van tieners in de westerse wereld sterk is verslechterd vanaf 2012 — precies het jaar dat smartphones massaal gemeengoed werden.

Maar de relatie is niet simpel. Passief gebruik — scrollen, kijken, vergelijken — is schadelijker dan actief gebruik, zoals berichten sturen, reageren en creëren. Tieners die sociale media gebruiken om contact te onderhouden met vrienden die ze ook in het echte leven zien, lijken minder negatieve effecten te ervaren dan tieners die voornamelijk onbekenden volgen of zichzelf vergelijken met influencers.

Er is ook een genderverschil. Meisjes lijken gemiddeld meer schade te ondervinden van sociale media dan jongens. Dit wordt deels verklaard door het type gebruik: meisjes vergelijken zichzelf vaker op uiterlijk via foto's en video's, terwijl jongens meer gamen en competitief interacteren. Beide vormen hebben risico's, maar lichaamsbeeldproblemen bij meisjes zijn beter gedocumenteerd.

Wat kunnen ouders en scholen doen? Verbieden werkt zelden goed — het verhoogt de aantrekkingskracht en verplaatst het gebruik naar het geheim. Betere strategieën zijn: mediageletterdheid onderwijzen, zodat tieners begrijpen hoe platforms werken en hen manipuleren; samen afspraken maken over schermvrije momenten en plekken; alternatieve activiteiten faciliteren die dezelfde behoeften bevredigen — sociale verbinding, erkenning, stimulatie.

De kern van het probleem is niet de technologie zelf, maar het gebrek aan bewustzijn en controle. Een tiener die begrijpt waarom hij of zij het gevoel heeft te moeten scrollen, is beter in staat die drang te weerstaan. Digitale zelfkennis is de vaardigheid van de eenentwintigste eeuw.`,
  vragen: [
    { v: 'Wanneer is de prefrontale cortex volledig ontwikkeld?', opties: ['Rond het achttiende jaar', 'Rond het twintigste jaar', 'Rond het vijfentwintigste jaar', 'Rond het dertigste jaar'], correct: 2 },
    { v: 'Welk type sociale mediagebruik is schadelijker?', opties: ['Berichten sturen naar vrienden', 'Passief scrollen en vergelijken', 'Creëren van eigen inhoud', 'Reageren op posts van bekenden'], correct: 1 },
    { v: 'Welke aanpak werkt het best voor ouders en scholen?', opties: ['Volledig verbieden', 'Negeren en afwachten', 'Mediageletterdheid en gezamenlijke afspraken', 'Alleen schermtijd meten'], correct: 2 },
  ]
},

{
  id: 'n2b', niveau: 2,
  titel: 'De stille revolutie van duurzame energie',
  tekst: `In 2010 kostte een kilowattuur zonne-energie meer dan driehonderd dollar om te produceren. In 2024 is die prijs gedaald naar minder dan twee dollar. Dat is een daling van meer dan negentig-acht procent in veertien jaar. Geen enkele technologie in de geschiedenis van de mensheid heeft zo'n snelle prijsdaling meegemaakt. En toch begint de wereld maar langzaam te begrijpen wat dit betekent.

Zonne- en windenergie zijn inmiddels de goedkoopste vormen van nieuwe elektriciteitsopwekking in bijna elk land ter wereld. Nieuwe kolencentrales kunnen niet meer concurreren. Nieuwe kerncentrales evenmin, zonder enorme subsidies. De energietransitie is niet meer een kwestie van idealisme, maar van economische logica.

De uitdaging is niet langer productie, maar opslag en netwerk. De zon schijnt niet altijd, de wind waait niet altijd. Oplossingen zijn in volle ontwikkeling: lithiumbatterijen schalen snel op, waterstof wordt gezien als oplossing voor seizoensopslag, en vraagsturing — waarbij machines hun stroomverbruik aanpassen aan het aanbod — wint terrein.

Het elektriciteitsnet zelf moet worden heruitgevonden. Het huidige net is ontworpen voor gecentraliseerde opwekking: grote centrales sturen stroom naar consumenten. Duurzame energie is gedecentraliseerd: miljoenen zonnepanelen op daken, windparken op zee, batterijen in huishoudens. Dit vraagt om een intelligent, tweerichtingsnet dat vraag en aanbod dynamisch in balans houdt.

In China werden in 2023 meer elektrische auto's verkocht dan auto's met verbrandingsmotor. In Europa rijdt al een op de vijf nieuwe auto's elektrisch. De transportsector, verantwoordelijk voor ongeveer twintig procent van de wereldwijde CO2-uitstoot, is in transitie. Vliegtuigen en schepen volgen trager, maar ook daar worden waterstof en batterijen ingezet.

De landbouw, de industrie en de verwarming van gebouwen zijn nog grotere uitdagingen. Staal en cement produceren vereist enorme hoeveelheden energie en heeft nog geen goedkope groene alternatieven op schaal. Hier liggen de hardste noten om te kraken.

Toch is de richting duidelijk. De vraag is niet meer of de energietransitie plaatsvindt, maar hoe snel. En die snelheid bepaalt hoeveel klimaatschade we nog oplopen onderweg.`,
  vragen: [
    { v: 'Hoeveel kostte zonne-energie per kilowattuur in 2010?', opties: ['Tien dollar', 'Vijftig dollar', 'Honderd dollar', 'Meer dan driehonderd dollar'], correct: 3 },
    { v: 'Wat is de huidige grootste uitdaging voor duurzame energie?', opties: ['Productie is te duur', 'Opslag en netwerk', 'Te weinig zonlicht in Europa', 'Politieke weerstand'], correct: 1 },
    { v: 'Welke sectoren zijn nog het moeilijkst te verduurzamen?', opties: ['Transport en landbouw', 'Zonne-energie en wind', 'Staal, cement en industrie', 'Elektrische auto\'s'], correct: 2 },
  ]
},

// ── NIVEAU 3: EXPERT (~1100 woorden) ──────────────────────
{
  id: 'n3a', niveau: 3,
  titel: 'De psychologie van intrinsieke motivatie',
  tekst: `Waarom doen mensen sommige dingen met plezier en andere met tegenzin, zelfs als de beloning gelijk is? Het antwoord ligt in een van de meest besproken theorieën uit de psychologie: de zelfdeterminatietheorie van Deci en Ryan. Deze theorie onderscheidt intrinsieke motivatie — dingen doen omdat ze op zichzelf bevredigend zijn — van extrinsieke motivatie, waarbij het gedrag wordt aangedreven door externe beloningen of straffen.

Decennia van onderzoek laten zien dat mensen floreren wanneer aan drie basisbehoeften wordt voldaan: autonomie, competentie en verbondenheid. Autonomie betekent dat je het gevoel hebt zelf richting te geven aan je gedrag, dat je keuzes maakt die overeenkomen met je waarden en interesses. Competentie verwijst naar de behoefte om je bekwaam te voelen, uitdagingen te kunnen overwinnen en te groeien. Verbondenheid, ten slotte, is de behoefte aan betekenisvolle relaties met anderen.

De paradox van beloning is een van de meest intrigerende bevindingen in dit veld. In een klassiek experiment van Lepper en collega's uit 1973 kregen kinderen die al graag tekenden een beloning aangeboden voor hun tekeningen. Later, toen de beloning wegviel, tekenden ze minder dan kinderen die nooit een beloning hadden ontvangen. De externe beloning had de intrinsieke motivatie ondermijnd. Dit fenomeen staat bekend als het overjustificatie-effect: als je iemand betaalt voor iets wat hij of zij leuk vindt, kan de persoon gaan geloven dat hij het alleen voor het geld deed.

Dit heeft verreikende implicaties voor opvoeding, onderwijs en management. Een leraar die kinderen puur beloont met stickers en punten, loopt het risico hun nieuwsgierigheid te doden. Een manager die medewerkers alleen extrinsiek motiveert met bonussen, creëert werknemers die precies doen wat nodig is voor de bonus — en niets meer. Autonomie en eigenaarschap zijn machtiger drijfveren dan geld.

Toch is de werkelijkheid genuanceerder. Extrinsieke motivatie is niet per definitie slecht. Deci en Ryan onderscheiden verschillende vormen van extrinsieke regulatie op een continuüm van extern naar intern. Aan het externe eind staat puur gedrag uit angst voor straf. Meer intern is geïntrojecteerde regulatie: dingen doen om schuldgevoelens te vermijden of trots te voelen. Nog verder op het continuüm staat geïdentificeerde regulatie: gedrag dat niet inherent leuk is, maar dat je doet omdat je de waarde ervan inziet. En het meest geïnternaliseerde type is geïntegreerde regulatie: gedrag dat volledig in lijn is met je persoonlijke waarden en identiteit.

In de praktijk is veel van ons gedrag een mix. Een wetenschapper kan zijn onderzoek intrinsiek motiverend vinden maar extrinsiek gedreven zijn door publicatiedruk. Een atleet kan van zijn sport houden maar ook gemotiveerd worden door de verwachtingen van zijn coach. De vraag is niet of iemand intrinsiek of extrinsiek gemotiveerd is, maar waar op het continuüm zijn regulatie ligt en hoe omgevingsfactoren dat beïnvloeden.

Scholen en werkgevers die intrinsieke motivatie willen ondersteunen, doen er goed aan drie dingen te doen: autonomie te geven door mensen inspraak te geven in hoe ze een taak aanpakken; structuur te bieden die competentiegroei ondersteunt zonder te controleren; en een sfeer van verbondenheid te creëren waarin mensen zich gezien en gewaardeerd voelen.

Digitale platforms hebben deze psychologische mechanismen op ongekende schaal toegepast. Sociale media bieden variabele beloningen in de vorm van likes en reacties, spelen in op de behoefte aan verbondenheid, en geven een gevoel van autonomie door gebruikers te laten kiezen wat ze delen. Maar tegelijkertijd ondermijnen ze autonomie door algoritmen die het gedrag sturen en vergelijking die competentiebeleving beschadigt.

Inzicht in de zelfdeterminatietheorie helpt niet alleen om gedrag van anderen te begrijpen, maar ook om jezelf beter te kennen. Welke activiteiten geven je energie, en welke zuigen die weg? Wanneer voel je je competent en autonoom, en wanneer voelt werk als een opgelegde verplichting? Door deze vragen eerlijk te beantwoorden, kun je bewuster kiezen hoe je je tijd en energie inzet. Motivatie is niet iets wat je hebt of niet hebt — het is iets wat je kunt cultiveren.`,
  vragen: [
    { v: 'Wat zijn de drie basisbehoeften in de zelfdeterminatietheorie?', opties: ['Veiligheid, beloning en erkenning', 'Autonomie, competentie en verbondenheid', 'Vrijheid, geld en status', 'Intrinsiek, extrinsiek en gemengd'], correct: 1 },
    { v: 'Wat toont het overjustificatie-effect aan?', opties: ['Beloningen verhogen altijd de motivatie', 'Externe beloningen kunnen intrinsieke motivatie ondermijnen', 'Kinderen tekenen beter als ze betaald worden', 'Straf werkt beter dan beloning'], correct: 1 },
    { v: 'Welke regulatievorm staat het dichtst bij intrinsieke motivatie?', opties: ['Externe regulatie', 'Geïntrojecteerde regulatie', 'Geïdentificeerde regulatie', 'Geïntegreerde regulatie'], correct: 3 },
  ]
},

{
  id: 'n3b', niveau: 3,
  titel: 'Globalisering en de paradox van welvaart',
  tekst: `Globalisering heeft de afgelopen vijftig jaar de meest spectaculaire armoedevermindering in de menselijke geschiedenis teweeggebracht. Tussen 1990 en 2015 daalde het aantal mensen dat in extreme armoede leeft van bijna twee miljard naar minder dan zevenhonderd miljoen. China alleen al haalde meer dan zevenhonderd miljoen mensen uit de armoede. Dit is een prestatie zonder weerga, mogelijk gemaakt door internationale handel, technologieoverdracht en buitenlandse investeringen.

En toch voelt globalisering in de rijkste landen van de wereld als een bedreiging. Industrie verdwijnt naar lageloonlanden. Banen zijn verdwenen. Gemeenschappen die decennialang bloeiden dankzij de staalindustrie of textiel zijn verpauperd. De politieke reactie is populisme, protectionisme en nostalgie naar een verleden dat niet terugkomt.

Dit is de paradox van globalisering: het heeft de wereld als geheel rijker gemaakt, maar de baten zijn ongelijk verdeeld. Economen als Dani Rodrik wijzen op het trilemma van globalisering: je kunt niet tegelijkertijd maximale economische integratie, nationale soevereiniteit en democratie hebben. Iets moet wijken. In de afgelopen decennia was dat veelal de nationale soevereiniteit — staten verloren de greep op belastingbeleid, arbeidsstandaarden en industriepolitiek.

De financiële crisis van 2008 legde kwetsbaarheden bloot die eerder waren verhuld door schijnbare welvaart. Gecomplexe internationale financiële ketens zorgden ervoor dat een hypothekencrisis in de Amerikaanse markt binnen weken mondiale banken neersloeg. Globale integratie betekent dat schokken snel en breed worden doorgegeven. Geen land is meer een eiland.

De COVID-19-pandemie toonde een andere kant van de kwetsbaarheid: de afhankelijkheid van mondiale toeleveringsketens voor essentiële goederen. Mondmaskers, medicijnen en chips waren plotseling schaars, niet omdat ze niet bestonden, maar omdat de productie was gecentraliseerd in een handvol landen. Landen herontdekten het concept van strategische autonomie.

Tegelijkertijd is er geen realistisch alternatief voor globalisering. Deglobalisering — het terugdraaien van internationale handelsbanden — zou de kosten van goederen dramatisch verhogen, innovatie afremmen en miljoenen mensen in opkomende economieën terugwerpen in armoede. Het is gemakkelijker te roepen dat we de klok terugdraaien dan om te onderzoeken wat de prijs daarvan is.

De productievere vraag is: hoe maken we globalisering inclusiever en weerbaarder? Economen wijzen op de noodzaak van beter herverdelingsbeleid — niet als liefdadigheid, maar als economische logica: mensen die verliezen door handelsliberalisering moeten worden gecompenseerd en omgeschoold. Landen moeten kritieke sectoren strategisch beschermen zonder in protectionisme te vervallen. En internationale instituties moeten worden hervormd zodat ze de stemmen van ontwikkelingslanden beter vertegenwoordigen.

De wereld is onherroepelijk verweven. Klimaatverandering, pandemieën, kunstmatige intelligentie en kernwapens zijn problemen die geen enkel land alleen kan oplossen. Globalisering is niet slechts een economisch fenomeen — het is de conditie van de hedendaagse beschaving. De keuze is niet of we samenwerken, maar hoe we dat doen op een manier die rechtvaardig, democratisch en veerkrachtig is.`,
  vragen: [
    { v: 'Hoeveel mensen daalde de extreme armoede tussen 1990 en 2015?', opties: ['Van 500 miljoen naar 100 miljoen', 'Van 1 miljard naar 300 miljoen', 'Van bijna 2 miljard naar minder dan 700 miljoen', 'Van 3 miljard naar 1 miljard'], correct: 2 },
    { v: 'Wat is het trilemma van globalisering volgens Rodrik?', opties: ['Handel, inflatie en werkgelegenheid', 'Economische integratie, soevereiniteit en democratie', 'Vrijhandel, protectionisme en subsidies', 'Armoede, welvaart en ongelijkheid'], correct: 1 },
    { v: 'Wat toonde de COVID-19-pandemie over globalisering?', opties: ['Dat globalisering armoede reduceert', 'Dat internationale handel niet werkt', 'Kwetsbaarheid door afhankelijkheid van mondiale toeleveringsketens', 'Dat klimaatverandering erger is dan pandemieën'], correct: 2 },
  ]
},

// ── NIVEAU 1: STARTER (extra teksten) ────────────────────

{
  id: 'n1c', niveau: 1,
  titel: 'Hoe je beter leert',
  tekst: `Leren is een vaardigheid die je kunt verbeteren. Veel studenten besteden uren aan het herlezen van teksten, maar onderzoek toont aan dat dit een van de minst effectieve leermethoden is. Je brein heeft de illusie dat het materiaal kent, simpelweg omdat het vertrouwd aanvoelt.

Actief ophalen is veel effectiever. Dit betekent dat je jezelf test op het materiaal in plaats van het opnieuw te lezen. Maak bijvoorbeeld oefenvragen of probeer uit je hoofd samen te vatten wat je hebt gelezen. Dit dwingt je brein om het geheugenpad te versterken.

Gespreid oefenen, ook wel spaced repetition genoemd, is een andere krachtige techniek. In plaats van alles in één sessie te studeren, verdeel je je oefenmomenten over meerdere dagen. De onderbrekingen geven je brein de kans om informatie te consolideren.

Interleaving, het afwisselen van verschillende onderwerpen of vaardigheidstypes, verbetert eveneens het leerresultaat. In plaats van tien rekensommen van hetzelfde type te maken, wissel je af. Dit voelt moeilijker maar produceert dieper begrip.

Slaap speelt een cruciale rol. Tijdens de slaap verwerkt je brein wat je overdag hebt geleerd. Studeren vlak voor het slapengaan en dan een goede nacht slapen is effectiever dan een nacht doorhalen.

De omgeving doet ertoe. Varieer je studielocatie. Studies tonen aan dat leren in verschillende contexten het geheugen versterkt, omdat je brein meer associaties vormt.

Beweeg. Een korte wandeling of een reeks oefeningen voor het studeren verhoogt de doorbloeding van je brein en verbetert de concentratie. Zit niet urenlang stil achter je bureau.

Maak je leerproces persoonlijk. Verbind nieuwe kennis met iets wat je al weet of met je eigen ervaring. Hoe meer verbindingen je maakt, hoe sterker het geheugenspoor.`,
  vragen: [
    { v: 'Wat is effectiever dan herlezen volgens onderzoek?', opties: ['Markeren', 'Actief ophalen', 'Samenvattingen overschrijven', 'Luisteren naar muziek'], correct: 1 },
    { v: 'Wat is spaced repetition?', opties: ['Alles in één keer leren', 'Oefenmomenten over meerdere dagen verspreiden', 'Alleen voor het examen studeren', 'Hetzelfde type opgaven herhalen'], correct: 1 },
    { v: 'Wanneer verwerkt je brein wat je hebt geleerd?', opties: ['Tijdens het eten', 'Tijdens het sporten', 'Tijdens de slaap', 'Tijdens het douchen'], correct: 2 },
  ]
},

{
  id: 'n1d', niveau: 1,
  titel: 'De kracht van gewoonten',
  tekst: `Bijna de helft van wat je dagelijks doet, doe je op de automatische piloot. Van tanden poetsen tot de route naar je werk: gewoonten besparen mentale energie. Je brein automatiseert herhaalde handelingen zodat het zich kan concentreren op nieuwe uitdagingen.

Gewoonten werken via een driedelige lus. Eerst is er een trigger, een signaal dat het gedrag in gang zet. Dan volgt de routine, het automatische gedrag zelf. En tot slot is er de beloning die het patroon bekrachtigt. Een voorbeeld: je telefoon zoemt (trigger), je checkt je berichten (routine), je voelt een kort moment opluchting of nieuwsgierigheid (beloning).

Het vormen van een nieuwe gewoonte duurt gemiddeld zesenzestig dagen, al varieert dit sterk per persoon en type gedrag. De sleutel is consistentie: doe het elke dag, zelfs als het maar een minimale versie is. Wil je dagelijks lezen? Begin met één pagina.

Een slechte gewoonte kun je niet zomaar wissen. Het neurale pad bestaat al. De effectiefste strategie is substitutie: vervang de routine door een gezonder alternatief terwijl je de trigger en beloning behoudt. In plaats van na het eten op de bank te ploffen, ga je een rondje wandelen.

Kleine gewoonten stapelen is een populaire methode. Koppel een nieuwe gewoonte aan een bestaande. Na het zetten van koffie doe je vijf minuten stretchen. De bestaande gewoonte dient als betrouwbare trigger.

Omgevingsontwerp helpt enorm. Leg je sportkleding klaar, zet gezond eten op ooghoogte in de koelkast, verwijder apps die je afleiden. Maak goede gewoonten makkelijk en slechte gewoonten moeilijk.

Verandering begint klein. De kracht van gewoonten zit niet in het individuele moment maar in de herhaling over weken en maanden.`,
  vragen: [
    { v: 'Hoeveel procent van ons dagelijks gedrag is automatisch?', opties: ['Tien procent', 'Twintig procent', 'Bijna vijftig procent', 'Tachtig procent'], correct: 2 },
    { v: 'Uit welke drie elementen bestaat een gewoonte?', opties: ['Begin, midden, eind', 'Trigger, routine, beloning', 'Plan, actie, resultaat', 'Doel, uitvoering, evaluatie'], correct: 1 },
    { v: 'Wat is de beste strategie om een slechte gewoonte te doorbreken?', opties: ['Wilskracht', 'Substitutie', 'Straffen', 'Negeren'], correct: 1 },
  ]
},

{
  id: 'n1e', niveau: 1,
  titel: 'Waarom water zo belangrijk is',
  tekst: `Het menselijk lichaam bestaat voor ongeveer zestig procent uit water. Dit maakt water de belangrijkste voedingsstof. Elk orgaan, elke cel en elk weefsel heeft water nodig om te functioneren. Toch drinken de meeste mensen te weinig.

Water regelt je lichaamstemperatuur. Wanneer je warm bent, zweet je. Het verdampen van zweet koelt je huid en je bloed af. Zonder voldoende water kan dit koelsysteem niet goed werken, wat kan leiden tot oververhitting.

Je nieren hebben water nodig om afvalstoffen uit je bloed te filteren. Bij onvoldoende vochtinname moeten de nieren harder werken en kan urine geconcentreerder worden. Op lange termijn verhoogt dit het risico op nierstenen.

Zelfs een mild vochttekort van twee procent vermindert je concentratie, geheugen en reactietijd meetbaar. Dit is bijzonder relevant voor studenten en kantoorwerkers die lange periodes geconcentreerd moeten werken.

Dorst is een laat signaal. Tegen de tijd dat je dorst voelt, is je lichaam al licht gedehydrateerd. Regelmatig kleine slokjes water drinken is effectiever dan wachten tot je dorst hebt.

De kleur van je urine is een betrouwbare indicator. Lichtgeel betekent goede hydratatie. Donkergeel of amberkleurig betekent dat je meer moet drinken.

Hoeveel water je nodig hebt verschilt per persoon. Factoren zijn je lichaamsgewicht, het klimaat, je activiteitenniveau en wat je eet. Groenten en fruit bevatten ook veel water.

Begin je dag met een glas water. Zet een fles op je bureau. Maak er een gewoonte van. Je lichaam en je brein zullen je dankbaar zijn.`,
  vragen: [
    { v: 'Hoeveel procent van je lichaam bestaat uit water?', opties: ['Dertig procent', 'Vijftig procent', 'Zestig procent', 'Zeventig procent'], correct: 2 },
    { v: 'Wat gebeurt er bij een vochttekort van twee procent?', opties: ['Je wordt ziek', 'Je concentratie neemt meetbaar af', 'Je krijgt koorts', 'Er verandert niets merkbaars'], correct: 1 },
    { v: 'Wat betekent donkergele urine?', opties: ['Goede hydratatie', 'Te veel water', 'Je moet meer drinken', 'Een infectie'], correct: 2 },
  ]
},

{
  id: 'n1f', niveau: 1,
  titel: 'De wetenschap van geluid',
  tekst: `Geluid is een trilling die zich voortplant door lucht, water of vaste stoffen. Wanneer een gitaarsnaar trilt, duwt hij luchtmoleculen samen en trekt ze uit elkaar. Deze drukgolven reizen naar je oor met een snelheid van ongeveer driehonderdveertig meter per seconde.

In je oor vangt het trommelvlies de trillingen op. Drie kleine botjes, de hamer, het aambeeld en de stijgbeugel, versterken het signaal en geven het door aan het slakkenhuis. Daar zetten haarcellen de mechanische trillingen om in elektrische signalen die naar het brein worden gestuurd.

Geluid wordt gemeten in decibel. Een normaal gesprek is ongeveer zestig decibel. Een rockconcert kan honderdtien decibel bereiken. Boven de vijfentachtig decibel kan langdurige blootstelling leiden tot gehoorschade.

De frequentie van geluid, gemeten in hertz, bepaalt de toonhoogte. Lage frequenties klinken als een bas, hoge frequenties als een fluittoon. Het menselijk oor hoort frequenties van twintig tot twintigduizend hertz. Met de leeftijd neemt het vermogen om hoge frequenties te horen af.

Geluidsoverlast is een onderschat gezondheidsprobleem. Chronische blootstelling aan lawaai verhoogt de bloeddruk, verstoort de slaap en kan leiden tot hart- en vaatziekten. In steden is verkeerslawaai de belangrijkste bron.

Stilte is daarentegen helend. Onderzoek toont aan dat twee minuten stilte meer ontspanning geeft dan het luisteren naar ontspannende muziek. Stilte activeert het standaardnetwerk van de hersenen, wat creativiteit en zelfreflectie bevordert.

Ons brein is gebouwd om geluiden te interpreteren. Muziek raakt ons emotioneel, vogelgezang kalmeert en een onverwacht hard geluid activeert onmiddellijk ons vecht-of-vluchtsysteem.`,
  vragen: [
    { v: 'Hoe snel reist geluid door lucht?', opties: ['100 m/s', '340 m/s', '700 m/s', '1000 m/s'], correct: 1 },
    { v: 'Boven hoeveel decibel kan gehoorschade ontstaan?', opties: ['60 decibel', '75 decibel', '85 decibel', '100 decibel'], correct: 2 },
    { v: 'Wat toont onderzoek over stilte?', opties: ['Het is slecht voor je', 'Het geeft meer ontspanning dan muziek', 'Het verstoort concentratie', 'Het heeft geen effect'], correct: 1 },
  ]
},

{
  id: 'n1g', niveau: 1,
  titel: 'Hoe planten communiceren',
  tekst: `Planten lijken stil en passief, maar ze communiceren voortdurend. Ze waarschuwen elkaar voor gevaar, trekken hulptroepen aan en delen voedingsstoffen met hun buren.

Wanneer een rups aan een blad knaagt, produceert de plant vluchtige stoffen die de lucht in gaan. Naburige planten vangen deze chemische signalen op en beginnen preventief afweerstoffen aan te maken, nog voordat ze zelf worden aangevallen.

Sommige planten roepen hulp in. Wanneer rupsen aan maïsplanten knagen, geven de planten een specifieke geurstof af die parasitaire wespen aantrekt. Deze wespen leggen hun eitjes in de rupsen, waardoor de plaag wordt bestreden.

Onder de grond vormen planten netwerken via schimmeldraden, ook wel het Wood Wide Web genoemd. Deze mycorrhiza-netwerken verbinden de wortels van verschillende bomen en planten. Via dit netwerk kunnen planten suikers, water en mineralen met elkaar delen.

Moederbomen gebruiken dit netwerk om hun zaailingen te voeden. Ze sturen extra koolstof naar jonge bomen die in de schaduw staan en onvoldoende zonlicht krijgen om zelf genoeg suikers te maken.

Planten reageren ook op geluid. Sommige planten produceren meer nectar wanneer ze de trillingen van bijenvleugels detecteren. Ze kunnen niet horen zoals wij, maar ze voelen trillingen via hun cellen.

Zelfs aanraking beïnvloedt planten. De venusfliegenvanger klapt dicht bij aanraking. Klimplanten voelen een stok en winden zich eromheen. Dit heet thigmotropisme.

De plantenwereld is veel actiever en socialer dan we lang hebben gedacht.`,
  vragen: [
    { v: 'Hoe waarschuwen planten elkaar voor gevaar?', opties: ['Door geluid', 'Via vluchtige chemische stoffen', 'Door hun bladeren te bewegen', 'Via licht'], correct: 1 },
    { v: 'Wat is het Wood Wide Web?', opties: ['Een internetsite over bomen', 'Een schimmelnetwerk tussen plantenwortels', 'Een type wortelsysteem', 'Een regenwoud'], correct: 1 },
    { v: 'Wat is thigmotropisme?', opties: ['Reactie op licht', 'Reactie op warmte', 'Reactie op aanraking', 'Reactie op geluid'], correct: 2 },
  ]
},

// ── NIVEAU 2: GEVORDERD (extra teksten) ───────────────────

{
  id: 'n2c', niveau: 2,
  titel: 'De wetenschap van overtuigingskracht',
  tekst: `Robert Cialdini identificeerde zes principes van overtuiging die universeel werken, ongeacht cultuur of context. Deze principes worden dagelijks op ons toegepast door marketeers, politici en verkopers — vaak zonder dat we het doorhebben.

Het eerste principe is wederkerigheid. Wanneer iemand iets voor ons doet, voelen we de drang om iets terug te doen. Gratis monsters in de supermarkt, een collega die koffie voor je haalt: het creëert een onbewuste verplichting. Verkopers bieden kleine geschenken aan om dit mechanisme te activeren.

Het tweede principe is schaarste. Dingen worden aantrekkelijker wanneer ze schaars zijn. Berichten als 'nog slechts drie beschikbaar' of 'aanbieding eindigt vandaag' spelen hierop in. De angst om iets te missen, FOMO, is een krachtige motivator.

Het derde principe is autoriteit. We volgen experts en gezagsfiguren. Een arts in een witte jas overtuigt meer dan dezelfde persoon in vrijetijdskleding. Titels, uniformen en referenties versterken dit effect.

Sociale bewijskracht is het vierde principe. We kijken naar wat anderen doen om ons eigen gedrag te bepalen. Reviews, sterrenscores en het aantal volgers beïnvloeden onze keuzes. Als duizenden mensen een product kopen, moet het wel goed zijn, denken we.

Het vijfde principe is commitment en consistentie. Zodra we een standpunt innemen, voelen we druk om consistent te blijven. Verkopers gebruiken de voet-in-de-deur-techniek: eerst een klein verzoek, dan een groot.

Het zesde principe is sympathie. We laten ons eerder overtuigen door mensen die we aardig vinden. Fysieke aantrekkelijkheid, gelijkenissen en complimenten vergroten de kans op instemming.

Kennis van deze principes maakt je niet immuun, maar wel bewuster van de mechanismen die je beslissingen beïnvloeden. In een wereld vol persuasieve technologie is dat geen luxe maar een noodzaak.`,
  vragen: [
    { v: 'Hoeveel principes van overtuiging identificeerde Cialdini?', opties: ['Drie', 'Vier', 'Zes', 'Acht'], correct: 2 },
    { v: 'Wat is de voet-in-de-deur-techniek?', opties: ['Een fysieke verkooptechniek', 'Eerst een klein verzoek, dan een groot', 'Een deur-aan-deur methode', 'Een autoriteitstechniek'], correct: 1 },
    { v: 'Welk principe speelt in op de angst om iets te missen?', opties: ['Wederkerigheid', 'Autoriteit', 'Schaarste', 'Sympathie'], correct: 2 },
  ]
},

{
  id: 'n2d', niveau: 2,
  titel: 'Hoe het geheugen werkt en faalt',
  tekst: `Het geheugen is geen videorecorder. Het is een reconstructieproces waarbij je brein fragmenten van ervaringen combineert tot een coherent verhaal — een verhaal dat niet altijd klopt.

Het sensorisch geheugen vangt de constante stroom van zintuiglijke informatie op en houdt die minder dan een seconde vast. Slechts een fractie bereikt het werkgeheugen, dat vier tot zeven items tegelijk kan vasthouden. Dit verklaart waarom telefoonnummers in groepjes worden gepresenteerd.

Van het werkgeheugen wordt een selectie overgebracht naar het langetermijngeheugen via een proces dat consolidatie heet. De hippocampus speelt hierin een sleutelrol: hij fungeert als een sorteerstation dat beslist welke ervaringen permanente opslag verdienen. Slaap is essentieel voor dit proces.

Emotionele gebeurtenissen worden sterker opgeslagen. De amygdala, het emotiecentrum, versterkt de consolidatie van ervaringen met een hoge emotionele lading. Daarom herinner je je precies waar je was op elf september 2001, maar niet wat je vorige week dinsdag at.

Het problematische is dat emotionele herinneringen niet per se nauwkeuriger zijn — alleen levendiger. Onderzoek van Elizabeth Loftus toonde aan dat valse herinneringen verrassend makkelijk te creëren zijn. Door suggestieve vragen kunnen mensen overtuigd raken van gebeurtenissen die nooit hebben plaatsgevonden.

Het zogenaamde vergeetcurve van Ebbinghaus laat zien dat we binnen een uur vijftig procent van nieuwe informatie vergeten, en binnen een dag zeventig procent. Actieve herhaling op gespacede intervallen kan dit dramatisch vertragen.

De geheugenpaleis-techniek, ook wel de loci-methode genoemd, koppelt informatie aan locaties in een vertrouwde ruimte. Geheugensporten gebruiken deze techniek om honderden kaarten of honderden cijfers in minuten te memoriseren. Het werkt omdat het brein van nature goed is in ruimtelijk geheugen.

Vergeten is geen defect maar een functie. Het brein filtert irrelevante informatie om de essentiële kennis toegankelijk te houden.`,
  vragen: [
    { v: 'Hoeveel items kan het werkgeheugen tegelijk vasthouden?', opties: ['Twee tot drie', 'Vier tot zeven', 'Acht tot twaalf', 'Meer dan twintig'], correct: 1 },
    { v: 'Hoeveel procent vergeten we binnen een uur volgens Ebbinghaus?', opties: ['Twintig procent', 'Dertig procent', 'Vijftig procent', 'Zeventig procent'], correct: 2 },
    { v: 'Wat toonde het onderzoek van Elizabeth Loftus aan?', opties: ['Dat emotionele herinneringen perfect zijn', 'Dat valse herinneringen makkelijk te creëren zijn', 'Dat slaap onbelangrijk is voor geheugen', 'Dat kinderen beter onthouden dan volwassenen'], correct: 1 },
  ]
},

{
  id: 'n2e', niveau: 2,
  titel: 'De verborgen wereld van schimmels',
  tekst: `Schimmels vormen een apart rijk van het leven, apart van planten en dieren. Er bestaan naar schatting meer dan vijf miljoen soorten, waarvan we er slechts honderdduizend hebben geïdentificeerd. Ze zijn overal: in de lucht die je inademt, in de grond waarop je loopt en in je eigen lichaam.

Het zichtbare deel van een paddenstoel is slechts het voortplantingsorgaan. Het eigenlijke organisme is het mycelium, een ondergronds netwerk van microscopisch dunne draden die zich over enorme afstanden kunnen uitstrekken. Het grootste bekende organisme op aarde is een honingzwam in Oregon waarvan het myceliumnetwerk zich uitstrekt over meer dan negen vierkante kilometer.

Mycorrhiza-schimmels vormen symbiotische relaties met meer dan negentig procent van alle plantensoorten. De schimmeldraden vergroten het wortelsysteem van de plant honderd- tot duizendvoudig. In ruil voor suikers uit fotosynthese levert de schimmel mineralen en water. Bossen zonder deze schimmelpartners zouden instorten.

Deze netwerken transporteren ook signalen. Wanneer een boom wordt aangevallen door insecten, kan hij via het schimmelnetwerk waarschuwingssignalen sturen naar naburige bomen. Onderzoekers aan de Universiteit van British Columbia ontdekten dat moederbomen extra koolstof sturen naar hun zaailingen via dit netwerk.

In de geneeskunde zijn schimmels van onschatbare waarde. Penicilline, het eerste antibioticum, is afkomstig van een schimmel. Ciclosporine, het medicijn dat orgaantransplantatie mogelijk maakt, eveneens. Psilocybine uit paddenstoelen wordt onderzocht als behandeling voor therapieresistente depressie.

Schimmels zijn ook essentieel voor de koolstofcyclus. Ze breken dood organisch materiaal af en recyclen voedingsstoffen terug naar de bodem. Zonder schimmels zou de aarde bedolven raken onder onverteerd organisch afval.

De toepassingen van myceliummaterialen groeien snel: verpakkingsmateriaal, bouwstenen en zelfs leer gemaakt van schimmeldraden. De schimmel is het meest onderschatte rijk van het leven.`,
  vragen: [
    { v: 'Hoeveel soorten schimmels bestaan er naar schatting?', opties: ['Honderdduizend', 'Een miljoen', 'Meer dan vijf miljoen', 'Tien miljoen'], correct: 2 },
    { v: 'Met hoeveel procent van plantensoorten vormen mycorrhiza-schimmels symbiose?', opties: ['Vijftig procent', 'Zeventig procent', 'Meer dan negentig procent', 'Honderd procent'], correct: 2 },
    { v: 'Welk medicijn dat orgaantransplantatie mogelijk maakt komt van een schimmel?', opties: ['Aspirine', 'Ciclosporine', 'Paracetamol', 'Insuline'], correct: 1 },
  ]
},

{
  id: 'n2f', niveau: 2,
  titel: 'De psychologie van besluitvorming',
  tekst: `We nemen dagelijks naar schatting vijfendertigduizend beslissingen. Van triviale keuzes als wat te eten tot levensbepalende beslissingen als welke baan te nemen. De meeste van deze beslissingen nemen we op de automatische piloot, gestuurd door mentale snelwegen die psychologen heuristieken noemen.

Daniel Kahneman onderscheidt twee denksystemen. Systeem 1 is snel, automatisch en intuïtief. Het herkent patronen, maakt snelle inschattingen en stuurt het meeste van ons dagelijks gedrag. Systeem 2 is langzaam, bewust en analytisch. Het doet aan logisch redeneren en berekeningen. Systeem 2 is lui: het wordt pas geactiveerd wanneer Systeem 1 faalt of wanneer we bewust aandacht besteden.

Het ankerheuristiek laat zien hoe manipuleerbaar onze schattingen zijn. Als je iemand eerst vraagt of Gandhi ouder of jonger dan honderdvijftig jaar werd, en daarna vraagt hoe oud hij werd, schatten mensen significant hoger dan wanneer je eerst de vraag stelt met vijfendertig jaar als anker. Het eerste getal beïnvloedt het oordeel, zelfs als het duidelijk irrelevant is.

Het verliesaversie-effect toont dat we verliezen ongeveer twee keer zo zwaar wegen als gelijkwaardige winsten. Honderd euro verliezen voelt veel erger dan honderd euro winnen goed voelt. Dit verklaart waarom mensen suboptimale investeringen vasthouden: verkopen zou het verlies concreet maken.

De beschikbaarheidsheuristiek zorgt ervoor dat we de kans op gebeurtenissen overschatten wanneer we er makkelijk een voorbeeld van kunnen bedenken. Na een vliegtuigramp schatten mensen de kans op een volgend ongeluk hoger in, terwijl vliegen statistisch gezien het veiligste vervoermiddel is.

Bevestigingsbias is de neiging om informatie te zoeken die onze bestaande overtuigingen bevestigt en tegenbewijs te negeren. Sociale media versterken dit effect via filterbubbels.

In een complexe wereld is het negeren van deze valkuilen niet langer optioneel. Bewustwording van onze cognitieve beperkingen is de eerste stap naar betere beslissingen.`,
  vragen: [
    { v: 'Hoeveel beslissingen nemen we dagelijks naar schatting?', opties: ['Duizend', 'Vijfduizend', 'Vijfendertigduizend', 'Honderdduizend'], correct: 2 },
    { v: 'Wat is Systeem 1 volgens Kahneman?', opties: ['Langzaam en analytisch', 'Snel en intuïtief', 'Bewust en berekenend', 'Logisch en methodisch'], correct: 1 },
    { v: 'Hoeveel zwaarder wegen verliezen dan winsten bij verliesaversie?', opties: ['Even zwaar', 'Anderhalf keer', 'Twee keer', 'Vijf keer'], correct: 2 },
  ]
},

{
  id: 'n2g', niveau: 2,
  titel: 'De toekomst van onderwijs',
  tekst: `Het onderwijssysteem dat we vandaag kennen is ontworpen in het industriële tijdperk. Leerlingen zitten in rijen, luisteren naar een leraar en worden getoetst op kennisreproductie. Dit model was effectief voor het opleiden van fabrieksarbeiders en ambtenaren. Maar de wereld is veranderd.

De vaardigheden die de eenentwintigste eeuw vraagt — kritisch denken, creativiteit, samenwerking en digitale geletterdheid — worden nauwelijks getoetst in traditionele examens. Een leerling kan een onvoldoende halen voor een toets en toch briljant zijn in precies de vaardigheden die werkgevers zoeken.

Technologie maakt gepersonaliseerd leren mogelijk. Adaptieve software past het tempo en het niveau aan op basis van de prestaties van de individuele leerling. Khan Academy, Duolingo en andere platforms laten zien dat miljoenen mensen effectief kunnen leren zonder traditionele klaslokalen.

Maar technologie vervangt de leraar niet. De rol van de leraar verschuift van kennisoverdrager naar coach en mentor. In een wereld waar informatie overal beschikbaar is, is de vaardigheid om informatie te evalueren, te verbinden en toe te passen waardevoller dan het memoriseren van feiten.

Het Finse onderwijssysteem wordt vaak als voorbeeld aangehaald. Finland heeft korte schooldagen, weinig huiswerk, geen gestandaardiseerde toetsen tot de leeftijd van zestien, en toch scoren Finse leerlingen consequent hoog op internationale vergelijkingen. De sleutel is de kwaliteit en het aanzien van leraren: het is een gerespecteerd beroep waarvoor een masterdiploma vereist is.

Gamification, het toepassen van spelelementen in het leerproces, verhoogt de motivatie en het engagement. Punten, badges en voortgangsbalken geven leerlingen een gevoel van prestatie en autonomie. De grens tussen leren en spelen vervaagt.

De toekomst van onderwijs is geen single model maar een ecosysteem van benaderingen, aangepast aan de behoeften van het individu.`,
  vragen: [
    { v: 'Voor welk doel was het huidige onderwijssysteem oorspronkelijk ontworpen?', opties: ['Universitair onderzoek', 'Het industriële tijdperk', 'Digitale vaardigheden', 'Sociale integratie'], correct: 1 },
    { v: 'Wat is bijzonder aan het Finse onderwijssysteem?', opties: ['Lange schooldagen', 'Veel gestandaardiseerde toetsen', 'Korte dagen, weinig huiswerk, hoge kwaliteit leraren', 'Strikte discipline'], correct: 2 },
    { v: 'Wat is gamification in het onderwijs?', opties: ['Computerspellen spelen', 'Spelelementen toepassen in het leerproces', 'Een toetsmethode', 'Een onderwijsfilosofie uit Japan'], correct: 1 },
  ]
},

// ── NIVEAU 3: EXPERT (extra teksten) ──────────────────────

{
  id: 'n3c', niveau: 3,
  titel: 'De neurowetenschappen van bewustzijn',
  tekst: `Bewustzijn is het meest fundamentele aspect van ons bestaan en tegelijkertijd het grootste raadsel van de wetenschap. Wat is het precies om iets te ervaren? Waarom voelt de kleur rood rood? Waarom is er überhaupt een subjectieve ervaring, in plaats van dat ons brein informatie verwerkt zonder dat iemand het ervaart?

De filosoof David Chalmers noemde dit het hard problem of consciousness. Het easy problem — hoe het brein informatie verwerkt, reageert op prikkels en gedrag stuurt — is moeilijk maar in principe oplosbaar met neurowetenschappelijk onderzoek. Het hard problem — waarom er een subjectieve ervaring gekoppeld is aan die informatieprocessen — lijkt van een heel andere orde.

Verschillende theorieën proberen bewustzijn te verklaren. De Global Workspace Theory van Bernard Baars stelt dat bewustzijn ontstaat wanneer informatie breed wordt uitgezonden naar vele hersengebieden tegelijk, als een spotlight op een donker podium. Onbewuste processen verlopen lokaal; bewuste ervaringen worden globaal gedeeld.

De Integrated Information Theory van Giulio Tononi neemt een wiskundige benadering. Bewustzijn, uitgedrukt als Phi, is de mate van geïntegreerde informatie in een systeem. Hoe meer een systeem informatie op een geïntegreerde manier verwerkt die niet te reduceren is tot de som van zijn delen, hoe bewuster het is. Deze theorie impliceert controversieel dat ook eenvoudige systemen een minimale vorm van bewustzijn kunnen bezitten — panpsychisme.

De predictive processing theory ziet het brein als een voorspellingsmachine die continu modellen genereert van de werkelijkheid en deze bijstelt op basis van binnenkomende sensorische informatie. Bewustzijn zou dan het resultaat zijn van het verschil tussen voorspelling en werkelijkheid — de prediction error. Hallucinaties zijn in dit model voorspellingen zonder corrigerende sensorische input.

Anesthesie biedt een raadselachtig venster op bewustzijn. Onder narcose verdwijnt het bewustzijn volledig, hoewel het brein nog steeds actief is. De verbindingen tussen hersengebieden worden verstoord: informatie wordt lokaal verwerkt maar niet meer globaal geïntegreerd. Dit ondersteunt zowel de Global Workspace als de Integrated Information benadering.

Kunstmatige intelligentie voegt een nieuwe dimensie toe aan het debat. Grote taalmodellen produceren tekst die bewust lijkt, maar is er iemand thuis? De Turing-test, die beoordeelt of een machine van een mens te onderscheiden is, zegt niets over daadwerkelijk bewustzijn. Een perfect acterende zombie zou de test ook passen.

De studie van bewustzijn dwingt ons tot bescheidenheid. We bevinden ons in een positie vergelijkbaar met die van wetenschappers vóór Darwin: we zien de complexiteit maar missen nog het overkoepelende raamwerk dat alles verbindt.`,
  vragen: [
    { v: 'Wat is het hard problem of consciousness volgens Chalmers?', opties: ['Hoe het brein informatie verwerkt', 'Waarom er een subjectieve ervaring is', 'Hoe neuronen communiceren', 'Hoeveel hersengebieden er zijn'], correct: 1 },
    { v: 'Wat meet Phi in de Integrated Information Theory?', opties: ['Hersenactiviteit', 'De mate van geïntegreerde informatie', 'Het aantal neuronen', 'De snelheid van denken'], correct: 1 },
    { v: 'Wat gebeurt er met bewustzijn onder narcose?', opties: ['Het brein stopt volledig', 'Verbindingen tussen hersengebieden worden verstoord', 'Alleen dromen verdwijnen', 'Het geheugen wordt gewist'], correct: 1 },
  ]
},

{
  id: 'n3d', niveau: 3,
  titel: 'De economie van ongelijkheid',
  tekst: `De rijkste een procent van de wereldbevolking bezit meer dan veertig procent van alle mondiale rijkdom. De onderste vijftig procent bezit minder dan twee procent. Deze ongelijkheid is de afgelopen vier decennia dramatisch toegenomen, na een periode van relatieve nivellering in de naoorlogse jaren.

Thomas Piketty demonstreerde in zijn werk Capital in the Twenty-First Century dat ongelijkheid een inherente tendens is van het kapitalisme. Wanneer het rendement op kapitaal (r) groter is dan de economische groeivoet (g), concentreert rijkdom zich steeds meer bij degenen die al kapitaal bezitten. Dit is geen aberratie maar de standaardmodus van het systeem.

De gevolgen zijn niet alleen economisch maar ook sociaal en politiek. Epidemiologen Richard Wilkinson en Kate Pickett toonden aan dat ongelijkere samenlevingen slechter scoren op vrijwel alle sociale indicatoren: meer criminaliteit, slechtere gezondheid, lagere levensverwachting, minder sociaal vertrouwen en hogere niveaus van mentale ziekte. Dit geldt niet alleen voor de armen maar voor de gehele bevolking, inclusief de rijken.

De mechanismen zijn complex. Ongelijkheid creëert statusangst: het constant vergelijken met anderen activeert stresssystemen. Het ondermijnt sociale cohesie: in ongelijke samenlevingen vertrouwen mensen elkaar minder. Het vermindert sociale mobiliteit: kinderen uit arme gezinnen hebben minder toegang tot goed onderwijs, gezonde voeding en cultureel kapitaal.

De Great Gatsby-curve laat een verrassend verband zien: landen met meer inkomensongelijkheid hebben minder sociale mobiliteit. De Amerikaanse droom — dat iedereen het kan maken ongeacht afkomst — is statistisch gezien makkelijker te realiseren in Denemarken dan in de Verenigde Staten.

Technologie versterkt de ongelijkheidsdynamiek. Automatisering elimineert middenklassebanen. De digitale economie creëert winner-takes-all markten waarin een handvol bedrijven een disproportioneel deel van de waarde absorbeert. De platformeconomie verschuift risico van bedrijven naar individuele werkers.

Beleidsoplossingen bestaan: progressieve belastingen, vermogensbelasting, investeringen in onderwijs en gezondheidszorg, versterking van vakbonden en een hoger minimumloon. De politieke wil om deze maatregelen te implementeren is de eigenlijke bottleneck. In democratieën waar geld politieke macht koopt, is het moeilijk om beleid te voeren dat de belangen van de meerderheid dient ten koste van de rijksten.

De vraag is niet of we ongelijkheid kunnen verminderen, maar of we als samenleving besluiten dat het de moeite waard is.`,
  vragen: [
    { v: 'Hoeveel procent van de mondiale rijkdom bezit de rijkste een procent?', opties: ['Tien procent', 'Twintig procent', 'Meer dan veertig procent', 'Zestig procent'], correct: 2 },
    { v: 'Wat beschrijft de formule r > g van Piketty?', opties: ['Dat economische groei altijd wint', 'Dat rendement op kapitaal hoger is dan economische groei', 'Dat rijken meer belasting betalen', 'Dat lonen sneller stijgen dan prijzen'], correct: 1 },
    { v: 'Wat toont de Great Gatsby-curve?', opties: ['Dat rijkdom geluk brengt', 'Dat ongelijkheid en sociale mobiliteit omgekeerd samenhangen', 'Dat Amerika het meest gelijke land is', 'Dat belastingen ongelijkheid vergroten'], correct: 1 },
  ]
},

{
  id: 'n3e', niveau: 3,
  titel: 'Kwantumcomputers en de grenzen van berekening',
  tekst: `Klassieke computers werken met bits die ofwel nul ofwel één zijn. Een kwantumcomputer werkt met qubits die beide waarden tegelijkertijd kunnen aannemen dankzij het principe van superpositie. Dit is geen kwestie van niet weten welke waarde het is — de qubit bevindt zich daadwerkelijk in een combinatie van beide toestanden totdat deze wordt gemeten.

Verstrengeling, het tweede fundamentele kwantumprincipe, zorgt ervoor dat qubits onlosmakelijk met elkaar verbonden kunnen raken. De toestand van de ene qubit is onmiddellijk gecorreleerd met die van de andere, ongeacht de afstand ertussen. Einstein noemde dit spukhafte Fernwirkung — spookachtige werking op afstand — en was er diep sceptisch over, maar experimenten hebben herhaaldelijk bewezen dat het een reëel fenomeen is.

De rekenkracht van een kwantumcomputer schaalt exponentieel met het aantal qubits. Terwijl drie klassieke bits acht mogelijke combinaties één voor één verwerken, kan drie qubits alle acht combinaties tegelijkertijd representeren. Bij driehonderd qubits is het aantal gelijktijdige toestanden groter dan het aantal atomen in het waarneembare universum.

In 2019 claimde Google kwantumsuperioriteit: hun Sycamore-processor voerde een berekening uit in tweehonderd seconden waarvoor de krachtigste supercomputer naar schatting tienduizend jaar nodig zou hebben. IBM betwistte deze claim en stelde dat hun systeem het in tweeënhalve dag kon. Het debat illustreert dat de grens van kwantumsuperioriteit niet absoluut maar contextafhankelijk is.

De killer app voor kwantumcomputers is cryptografie. Het RSA-algoritme, dat de beveiliging van internetbankieren en digitale communicatie onderbouwt, berust op het feit dat het factoriseren van zeer grote getallen ondoenlijk lang duurt voor klassieke computers. Het algoritme van Shor, ontworpen voor kwantumcomputers, kan dit exponentieel sneller. Als kwantumcomputers krachtig genoeg worden, zijn huidige encryptiestandaarden gekraakt. Post-quantum cryptografie — encryptie die bestand is tegen kwantumaanvallen — is al in ontwikkeling.

Andere beloftevolle toepassingen zijn het simuleren van moleculaire structuren voor medicijnontwikkeling, het optimaliseren van complexe logistieke netwerken en het trainen van machine learning-modellen. Veel van deze toepassingen zijn nog theoretisch: huidige kwantumcomputers zijn foutgevoelig en beperkt in het aantal bruikbare qubits.

Fouttolerantie is het kernprobleem. Qubits zijn extreem gevoelig voor omgevingsinvloeden — temperatuur, trillingen, elektromagnetische straling — die decoherentie veroorzaken. Huidige systemen opereren nabij het absolute nulpunt en vereisen extremes in isolatie en koeling.

De kwantumcomputerrevolutie staat niet op het punt om morgen te beginnen, maar de fundamenten worden nu gelegd.`,
  vragen: [
    { v: 'Wat is superpositie bij qubits?', opties: ['Een qubit is altijd nul', 'Een qubit kan beide waarden tegelijk aannemen', 'Qubits werken sneller dan bits', 'Superpositie is een fout'], correct: 1 },
    { v: 'Waarom is het algoritme van Shor een bedreiging voor encryptie?', opties: ['Het vernietigt data', 'Het kan grote getallen exponentieel sneller factoriseren', 'Het hackt wachtwoorden', 'Het vertraagt het internet'], correct: 1 },
    { v: 'Wat is het kernprobleem van huidige kwantumcomputers?', opties: ['Ze zijn te groot', 'Fouttolerantie door decoherentie', 'Ze zijn te duur', 'Er zijn te weinig programmeurs'], correct: 1 },
  ]
},

{
  id: 'n3f', niveau: 3,
  titel: 'Epigenetica: hoe je levensstijl je DNA beïnvloedt',
  tekst: `Het dogma van de genetica was jarenlang eenvoudig: DNA bepaalt je eigenschappen en je kunt je DNA niet veranderen. Epigenetica heeft dit beeld fundamenteel bijgesteld. Hoewel de DNA-sequentie zelf niet verandert, kunnen chemische markeringen op het DNA bepalen welke genen aan- of uitgeschakeld worden. Je levensstijl beïnvloedt deze markeringen.

Methylgroepen zijn de meest bestudeerde epigenetische markering. Wanneer een methylgroep zich aan een gen hecht, wordt dat gen uitgeschakeld — als een dimmer die het licht verlaagt zonder de lamp te verwijderen. Histonmodificaties zijn een ander mechanisme: door de eiwitten waaromheen DNA is gewikkeld te veranderen, wordt de toegankelijkheid van genen vergroot of verkleind.

De ontdekking dat omgevingsfactoren epigenetische veranderingen veroorzaken was revolutionair. Voeding, stress, beweging, roken en blootstelling aan toxische stoffen beïnvloeden het epigenoom. Studies met eeneiige tweelingen — genetisch identiek — tonen aan dat hun epigenetische profielen met de leeftijd steeds meer gaan verschillen, gedreven door verschillende levenservaringen.

Het meest controversiële aspect is transgenerationele epigenetica: het idee dat epigenetische veranderingen kunnen worden doorgegeven aan volgende generaties. De Hongerwinter van 1944-45 in Nederland bood een uniek natuurlijk experiment. Kinderen van moeders die tijdens de hongersnood zwanger waren, hadden een hoger risico op obesitas, diabetes en hart- en vaatziekten — en ditzelfde patroon was ook zichtbaar bij de kleinkinderen, die de hongersnood zelf niet hadden meegemaakt.

Bij dieren is transgenerationele overerving overtuigender aangetoond. In een beroemd experiment bij muizen werden mannetjes blootgesteld aan de geur van kersenbloesem, gevolgd door een elektrische schok. Hun nakomelingen, die nooit de schok hadden ervaren, vertoonden een verhoogde angstreactie op dezelfde geur. Het gen voor de relevante geurreceptor was epigenetisch gemodificeerd in het sperma van de vaders.

De implicaties voor de geneeskunde zijn verstrekkend. Kanker wordt steeds meer begrepen als een epigenetische ziekte: genen die celgroei controleren worden uitgeschakeld door aberrante methylering. Epigenetische therapieën die deze markeringen herstellen zijn in ontwikkeling.

De boodschap is zowel empowerend als confronterend. Je genen zijn niet je lot. Je keuzes — wat je eet, hoe je beweegt, hoe je met stress omgaat — schrijven mee aan het script dat bepaalt welke genen actief zijn. Die verantwoordelijkheid strekt zich mogelijk uit naar je kinderen en kleinkinderen.

Epigenetica biedt het begin van een antwoord op de eeuwenoude nature-nurture vraag: het is geen kwestie van óf je genen óf je omgeving, maar van een voortdurende dialoog tussen beide.`,
  vragen: [
    { v: 'Wat doen methylgroepen als epigenetische markering?', opties: ['Ze verwijderen genen', 'Ze schakelen genen uit zonder ze te verwijderen', 'Ze verdubbelen genen', 'Ze repareren DNA-schade'], correct: 1 },
    { v: 'Wat leerde de Hongerwinter over epigenetica?', opties: ['Dat honger genen verandert', 'Dat epigenetische effecten mogelijk meerdere generaties beïnvloeden', 'Dat tweelingen identiek blijven', 'Dat stress geen effect heeft op DNA'], correct: 1 },
    { v: 'Hoe wordt kanker steeds meer begrepen in relatie tot epigenetica?', opties: ['Als een genetische mutatie alleen', 'Als een epigenetische ziekte met aberrante methylering', 'Als onbehandelbaar', 'Als een virusinfectie'], correct: 1 },
  ]
},

{
  id: 'n3g', niveau: 3,
  titel: 'De filosofie van technologie en vrijheid',
  tekst: `Technologie wordt vaak gepresenteerd als neutraal gereedschap: een hamer kan een huis bouwen of een raam breken. Maar technologiefilosofen als Langdon Winner en Neil Postman betogen dat technologie nooit neutraal is. Elke technologie bevat ingebouwde waarden en herstructureert de samenleving op manieren die niet altijd zichtbaar zijn.

Winner illustreerde dit met de bruggen van Robert Moses in New York. Moses ontwierp viaducten boven de toegangswegen naar stranden met een doorrijhoogte die te laag was voor bussen. Het effect: arme en zwarte New Yorkers, die afhankelijk waren van openbaar vervoer, konden de stranden niet bereiken. Discriminatie was letterlijk ingebouwd in de architectuur.

Het concept van technologisch determinisme — het idee dat technologie de samenleving onvermijdelijk in een bepaalde richting duwt — is te simplistisch maar bevat een waarheid. De auto maakte suburbanisatie mogelijk. De smartphone maakte continue bereikbaarheid de norm. Sociale media maakten viraliteit het nieuwe keermerk van succes. Geen van deze ontwikkelingen was onvermijdelijk, maar eenmaal geadopteerd herstructureerden ze de samenleving op voorspelbare manieren.

Shoshana Zuboff introduceerde het concept surveillance capitalism: het bedrijfsmodel waarbij menselijke ervaring wordt geoogst als gratis grondstof voor voorspelling en beïnvloeding van gedrag. Google en Facebook verdienen niet aan dienstverlening maar aan het voorspellen en sturen van menselijk gedrag. De gebruiker is niet de klant maar het product — of preciezer, de grondstof.

De paradox van keuzevrijheid in het digitale tijdperk is schrijnend. We hebben meer opties dan ooit maar minder autonomie. Algoritmen bepalen wat we zien, recommender systems sturen ons naar content die engagement maximaliseert ongeacht de gevolgen, en dark patterns manipuleren ons naar keuzes die het platform dienen. De architectuur van keuze is zelf een machtsstructuur.

De filosoof Byung-Chul Han betoogt dat we leven in een prestatiesamenleving waarin de dwang niet meer van buiten komt maar van binnenuit. We exploiteren onszelf. De smartphone is niet een ketting maar een elegant device dat we vrijwillig nooit neerleggen. De burn-out is de ziekte van de eenentwintigste eeuw, niet veroorzaakt door onderdrukking maar door onbeperkte verwachtingen.

Tegenover technologisch pessimisme staat het idee van waardengericht ontwerp. Technologie kan bewust worden ontworpen om menselijke waarden als autonomie, privacy, welzijn en democratie te bevorderen. Time Well Spent, de beweging gestart door Tristan Harris, pleit voor ethisch ontwerp dat de belangen van de gebruiker boven die van het platform stelt.

De kernvraag is niet of we technologie gebruiken, maar wie de technologie dient. Technische geletterdheid — begrijpen hoe systemen werken en welke belangen ze dienen — is een voorwaarde voor vrijheid in het digitale tijdperk.`,
  vragen: [
    { v: 'Wat is surveillance capitalism volgens Zuboff?', opties: ['Big Brother door de overheid', 'Het oogsten van menselijke ervaring voor gedragsvoorspelling', 'Camera\'s op openbare plekken', 'Het hacken van computers'], correct: 1 },
    { v: 'Wat illustreerde Langdon Winner met de bruggen van Moses?', opties: ['Dat bruggen mooi moeten zijn', 'Dat technologie ingebouwde waarden bevat', 'Dat New York goed ontworpen is', 'Dat bussen te hoog zijn'], correct: 1 },
    { v: 'Wat betoogt Byung-Chul Han over moderne dwang?', opties: ['Dat overheidscontrole toeneemt', 'Dat dwang van buiten komt', 'Dat we onszelf exploiteren vanuit prestatiedruk', 'Dat technologie vrij maakt'], correct: 2 },
  ]
},

// ── EXTRA STARTER ─────────────────────────────────────────

{
  id: 'n1h', niveau: 1,
  titel: 'De magie van muziek',
  tekst: `Muziek is een universeel menselijk fenomeen. Elke cultuur in de geschreven geschiedenis heeft muziek voortgebracht. Van wiegeliedjes tot oorlogstrommen, muziek speelt een rol bij vrijwel elke menselijke activiteit.

Wanneer je muziek luistert, activeer je meer hersengebieden tegelijk dan bij welke andere activiteit dan ook. Het auditieve systeem verwerkt de klanken, het motorische systeem reageert op het ritme, het limbisch systeem ervaart de emotie en de prefrontale cortex analyseert de structuur.

Muziek verandert je stemming, je hartslagfrequentie en je bloeddruk. Vrolijke muziek in een majeur toonladder verhoogt dopamineproductie. Langzame muziek in een mineur toonladder kan ontroering opwekken. Het rileffect, kippenvel bij muziek, is een fysiologische reactie op onverwachte harmonische wendingen.

Muzikale training verandert het brein structureel. Kinderen die een instrument leren spelen ontwikkelen een groter corpus callosum, het bundel zenuwvezels dat de twee hersenhelften verbindt. Ze scoren beter op wiskunde, taalvaardigheid en werkgeheugen.

Het Mozart-effect, het idee dat naar Mozart luisteren je slimmer maakt, is grotendeels ontkracht. Wat wel bewezen is, is dat actief muziek maken cognitieve voordelen heeft die een leven lang meegaan.

Muziektherapie wordt ingezet bij Parkinson-patiënten om motoriek te verbeteren, bij dementie om herinneringen op te halen en bij depressie als aanvulling op medicatie.

Liedjes blijven plakken omdat ze worden opgeslagen in het procedureel geheugen, hetzelfde systeem als fietsen of zwemmen. Daarom kunnen Alzheimer-patiënten vaak nog meezingen met bekende liedjes
als ze hun eigen naam niet meer herinneren.`,
  vragen: [
    { v: 'Wat activeert muziek volgens de tekst?', opties: ['Alleen het auditieve systeem', 'Meer hersengebieden dan elke andere activiteit', 'Alleen emotie', 'Het visuele systeem'], correct: 1 },
    { v: 'Wat is het rileffect bij muziek?', opties: ['Misselijkheid', 'Kippenvel bij onverwachte harmonieën', 'Slaperigheid', 'Verhoogde concentratie'], correct: 1 },
    { v: 'Wat is er bewezen over het Mozart-effect?', opties: ['Het werkt sterk', 'Het is grotendeels ontkracht', 'Het werkt alleen bij kinderen', 'Het verdubbelt het IQ'], correct: 1 },
  ]
},

{
  id: 'n1i', niveau: 1,
  titel: 'De wetenschap van slaap',
  tekst: `Slaap is geen passieve toestand maar een actief biologisch proces dat essentieel is voor gezondheid en overleving. Tijdens de slaap doorloop je meerdere cycli van ongeveer negentig minuten, elk bestaande uit lichte slaap, diepe slaap en REM-slaap.

In de diepe slaapfase repareert het lichaam weefsels, bouwt het spierweefsel op en versterkt het het immuunsysteem. Groeihormoon wordt voornamelijk tijdens de diepe slaap uitgescheiden. Kinderen en tieners die onvoldoende slapen, groeien letterlijk minder.

REM-slaap is de droomfase. Het brein verwerkt de emotionele ervaringen van de dag. Studies tonen aan dat mensen die na een emotionele gebeurtenis goed slapen, de volgende dag beter omgaan met de bijbehorende emoties.

Chronisch slaapgebrek heeft ernstige gevolgen. Zes uur slaap per nacht gedurende twee weken leidt tot dezelfde cognitieve achteruitgang als twee nachten volledig wakker blijven. Het risico op obesitas, diabetes en hart- en vaatziekten stijgt significant.

Het circadiaans ritme, je interne biologische klok, wordt aangestuurd door het hormoon melatonine. Blauw licht van schermen onderdrukt de melatonineproductie, waardoor het inslapen wordt bemoeilijkt.

Tips voor betere slaap: houd een vast slaapschema aan, maak je slaapkamer donker en koel, vermijd cafeïne na twee uur 's middags en stop een uur voor bedtijd met beeldschermen.

Slaap is geen luxe maar een biologische noodzaak die je gezondheid, cognitie en emotioneel welzijn fundamenteel bepaalt.`,
  vragen: [
    { v: 'Hoe lang duurt een gemiddelde slaapcyclus?', opties: ['Dertig minuten', 'Zestig minuten', 'Negentig minuten', 'Twee uur'], correct: 2 },
    { v: 'Wat wordt vooral tijdens diepe slaap uitgescheiden?', opties: ['Melatonine', 'Adrenaline', 'Groeihormoon', 'Cortisol'], correct: 2 },
    { v: 'Waarmee is twee weken zes uur slaap per nacht vergelijkbaar?', opties: ['Eén nacht wakker', 'Twee nachten volledig wakker', 'Een week wakker', 'Geen effect'], correct: 1 },
  ]
},

{
  id: 'n1j', niveau: 1,
  titel: 'Hoe bijen de wereld voeden',
  tekst: `Bijen zijn verantwoordelijk voor de bestuiving van ongeveer zeventig procent van de gewassen die de mensheid voedt. Zonder bijen zouden supermarkten een derde van hun producten verliezen: appels, amandelen, aardbeien, tomaten, komkommers en vele andere.

Een honingbij bezoekt per dag tussen de vijftig en duizend bloemen. Om één pot honing te produceren moeten bijen samen meer dan twee miljoen bloemen bezoeken. Het is een enorme inspanning voor het kleine diertje.

Bijen communiceren via de bijendans, ontdekt door Karl von Frisch. De kwispeldans vertelt andere bijen precies de richting en afstand van een voedselbron. De hoek van de dans ten opzichte van de zon geeft de richting aan, de duur de afstand.

De bijenstand neemt wereldwijd af. Colony Collapse Disorder, waarbij werkbijen massaal een kolonie verlaten, is een groeiend probleem. Pesticiden, met name neonicotinoïden, verzwakken het zenuwstelsel van bijen. Monoculturen beperken hun voedselaanbod. De varroa-mijt, een parasiet, zuigt het bloed van larven en volwassen bijen.

Stadsbijenteelt groeit in populariteit. Steden bieden verrassend veel voedsel voor bijen dankzij parken, tuinen en balkons met bloemen. Stadshoning bevat soms meer variatie dan honing van het platteland.

Iedereen kan helpen: plant bijvriendelijke bloemen, vermijd pesticiden in je tuin en laat een hoekje wild groeien. Bijen zijn klein maar onmisbaar.`,
  vragen: [
    { v: 'Welk percentage van gewassen wordt door bijen bestoven?', opties: ['Twintig procent', 'Vijftig procent', 'Zeventig procent', 'Negentig procent'], correct: 2 },
    { v: 'Wat is de bijendans?', opties: ['Een huwelijksritueel', 'Communicatie over voedsellocatie', 'Een verdedigingsmanoeuvre', 'Een ritmische hobby'], correct: 1 },
    { v: 'Wat is Colony Collapse Disorder?', opties: ['Bijen worden te groot', 'Werkbijen verlaten massaal de kolonie', 'De koningin sterft', 'Het bijennest valt om'], correct: 1 },
  ]
},

// ── EXTRA GEVORDERD ───────────────────────────────────────

{
  id: 'n2h', niveau: 2,
  titel: 'De wetenschap van verslaving',
  tekst: `Verslaving is een chronische hersenziekte, geen moreel falen. Dit inzicht, hoewel inmiddels breed geaccepteerd in de neurowetenschappen, is nog niet doorgedrongen tot het publieke bewustzijn. Veel mensen beschouwen verslaafden nog steeds als zwak of onverantwoordelijk.

Het mesolimbische beloningssysteem, ook wel het dopaminesysteem genoemd, speelt de centrale rol. Wanneer je iets plezierigs doet, wordt dopamine vrijgegeven in de nucleus accumbens. Dit signaal zegt: onthoud dit en doe het opnieuw. Bij verslavende stoffen is de dopamine-uitstoot vele malen sterker dan bij natuurlijke beloningen.

Heroïne veroorzaakt een dopaminevloed die tien keer zo sterk is als een orgasme. Methamfetamine produceert een piek die twaalf keer zo sterk is. Het brein past zich aan door het aantal dopaminereceptoren te verminderen. Het gevolg: de gebruiker heeft steeds meer nodig voor hetzelfde effect, en alledaagse genoegens voelen steeds vlakker.

Het brein verandert structureel. De prefrontale cortex, verantwoordelijk voor impulscontrole en besluitvorming, krimpt bij chronisch gebruik. De amygdala, betrokken bij stress en angst, wordt overactief. De verslaafde verliest letterlijk het vermogen om rationeel te kiezen.

Genetische factoren verklaren veertig tot zestig procent van de kwetsbaarheid voor verslaving. Trauma in de kindertijd verhoogt het risico substantieel. De ACE-studie toonde aan dat elke extra traumatische ervaring in de kindertijd het risico op verslaving meetbaar verhoogt.

Effectieve behandeling combineert medicatie, gedragstherapie en sociale ondersteuning. Medicijnen als methadon en buprenorfine halveren de sterftekans bij opiatenverslaving. Cognitieve gedragstherapie helpt patronen te doorbreken. Sociale verbinding is misschien de krachtigste factor: het tegenovergestelde van verslaving is niet nuchterheid maar verbinding.`,
  vragen: [
    { v: 'Welke hersenstructuur speelt de centrale rol bij verslaving?', opties: ['De hippocampus', 'Het mesolimbische beloningssysteem', 'De visuele cortex', 'Het cerebellum'], correct: 1 },
    { v: 'Hoeveel procent van verslavingskwetsbaarheid is genetisch?', opties: ['Tien tot twintig procent', 'Veertig tot zestig procent', 'Zeventig tot tachtig procent', 'Negentig procent'], correct: 1 },
    { v: 'Wat is volgens de tekst het tegenovergestelde van verslaving?', opties: ['Nuchterheid', 'Medicatie', 'Verbinding', 'Discipline'], correct: 2 },
  ]
},

{
  id: 'n2i', niveau: 2,
  titel: 'De fysica van het dagelijks leven',
  tekst: `Natuurkunde is overal, maar we merken het zelden op. Elke keer dat je een auto remt, een bal gooit of een broodje in de magnetron opwarmt, zijn de wetten van de fysica aan het werk.

Newtons eerste wet verklaart waarom je naar voren schiet als een auto plotseling remt: een lichaam in beweging wil in beweging blijven. Je lichaam wil rechtdoor terwijl de auto stopt. Daarom is een gordel noodzakelijk.

De werking van een magnetron berust op diëlektrische verwarming. Microgolven laten watermoleculen in je eten miljarden keren per seconde roteren. De wrijving tussen de moleculen genereert warmte. Daarom worden droge materialen als porselein niet warm, terwijl waterrijk voedsel wel opwarmt.

Koelkasten verwarmen je keuken. Ze pompen warmte van binnen naar buiten via de verdamping en condensatie van een koelmiddel. De spoelen aan de achterkant stralen de onttrokken warmte af. Een koelkast met open deur verwarmt de kamer netto.

Vliegtuigen vliegen dankzij het Bernoulli-effect. De bovenkant van een vleugel is boller dan de onderkant. Lucht stroomt sneller over de bovenkant, wat lagere druk creëert. Het drukverschil tussen boven en onder genereert lift.

Wanneer je door een tunnel rijdt en je oren ploppen, ervaar je de wet van Boyle: bij hogere druk wordt het volume van gas kleiner. Je trommelvlies buigt door het drukverschil.

GPS-satellieten moeten corrigeren voor Einsteins relativiteitstheorie. Door de zwakkere zwaartekracht op hoge hoogte tikken de klokken in satellieten iets sneller. Zonder correctie zou je GPS-positie dagelijks elf kilometer verschuiven.

Fysica is niet abstract. Het is de handleiding van de werkelijkheid.`,
  vragen: [
    { v: 'Waarom schiet je naar voren als een auto remt?', opties: ['Zwaartekracht', 'Newtons eerste wet: traagheid', 'De wind', 'Magnetisme'], correct: 1 },
    { v: 'Waarom wordt porselein niet warm in een magnetron?', opties: ['Het is te hard', 'Het bevat geen watermoleculen', 'Het reflecteert microgolven', 'Het is te dun'], correct: 1 },
    { v: 'Hoeveel zou GPS-verschuiven zonder relativiteitscorrectie?', opties: ['Een meter', 'Honderd meter', 'Een kilometer', 'Elf kilometer per dag'], correct: 3 },
  ]
},

{
  id: 'n2j', niveau: 2,
  titel: 'De geschiedenis van geld',
  tekst: `Geld is een van de meest succesvolle ficties van de mensheid. Het heeft alleen waarde omdat we collectief geloven dat het waarde heeft. Een briefje van honderd euro is fysiek een stukje papier. De waarde zit in het gedeelde vertrouwen.

De eerste vormen van geld waren gebruiksvoorwerpen: veeteelt produceerde vee als ruilmiddel, boeren gebruikt graan, kustvolk schelpen. Het Latijnse woord pecunia, geld, is afgeleid van pecus, vee.

Munten ontstonden rond zevenhonderd voor Christus in Lydië, het huidige Turkije. Koning Croesus sloeg de eerste gestandaardiseerde gouden munten. Standaardisatie was de sleutel: je hoefde niet meer elk stuk metaal te wegen en te testen.

Papiergeld werd uitgevonden in China tijdens de Tang-dynastie, rond de zevende eeuw. De Chinezen ontdekten al snel de gevaren: te veel bijdrukken leidde tot inflatie. Marco Polo was verbijsterd toen hij in China papier als betaalmiddel zag.

De goudstandaard koppelde de waarde van papiergeld aan fysiek goud. Dit systeem bood stabiliteit maar beperkte de flexibiliteit van overheden. President Nixon maakte in 1971 een einde aan de goudstandaard. Sindsdien is geld fiatgeld: het heeft waarde omdat de overheid zegt dat het waarde heeft.

Digitaal geld domineert vandaag. Meer dan negentig procent van al het geld ter wereld bestaat alleen als nullen en enen op bankcomputers. Contactloos betalen, online overboekingen en cryptovaluta hebben het fysieke aspect van geld grotendeels overbodig gemaakt.

Bitcoin, gelanceerd in 2009 door het pseudoniem Satoshi Nakamoto, introduceerde gedecentraliseerd geld zonder tussenkomst van banken of overheden. De blockchaintechnologie erachter wordt beschouwd als een even fundamentele innovatie als het internet zelf.`,
  vragen: [
    { v: 'Waar is het woord pecunia van afgeleid?', opties: ['Perkament', 'Pecus (vee)', 'Peculiar', 'Petra (steen)'], correct: 1 },
    { v: 'Wanneer werd de goudstandaard afgeschaft?', opties: ['1929', '1945', '1971', '2001'], correct: 2 },
    { v: 'Hoeveel procent van al het geld is nog fysiek?', opties: ['Minder dan tien procent', 'Dertig procent', 'Vijftig procent', 'Zeventig procent'], correct: 0 },
  ]
},

// ── EXTRA EXPERT ──────────────────────────────────────────

{
  id: 'n3h', niveau: 3,
  titel: 'De paradoxen van de tijd',
  tekst: `Tijd is het meest vertrouwde en tegelijkertijd het meest raadselachtige concept in de natuurkunde. We ervaren tijd als een constante stroom van verleden naar toekomst, maar de fundamentele wetten van de fysica maken geen onderscheid tussen de twee richtingen.

Einsteins speciale relativiteitstheorie uit 1905 toonde aan dat tijd niet absoluut is maar relatief. Een klok die beweegt ten opzichte van een waarnemer loopt langzamer. Dit is geen illusie maar een meetbaar fysisch effect. Astronauten op het International Space Station verouderen microseconden langzamer dan mensen op aarde. GPS-satellieten moeten dagelijks corrigeren voor dit effect.

De algemene relativiteitstheorie voegde zwaartekracht toe aan het plaatje. Tijd verloopt langzamer in een sterker zwaartekrachtveld. Een klok op zeeniveau loopt meetbaar langzamer dan een klok op een bergtop. Bij een zwart gat wordt dit effect extreem: voor een waarnemer op afstand lijkt de tijd aan de rand van het zwarte gat stil te staan.

De thermodynamische pijl van de tijd — de richting waarin entropie toeneemt — biedt de meest bevredigende verklaring voor waarom we tijd als lineair ervaren. Entropie, de mate van wanorde, neemt in een gesloten systeem altijd toe. Een gebroken ei assembleert niet spontaan tot een heel ei. Dit statistische argument geeft tijd een richting, maar verklaart niet fundamenteel waarom.

Kwantummechanica complicert het tijdsvraagstuk verder. Het Wheeler-DeWitt-vergelijking, die kwantumgravitatie beschrijft, bevat helemaal geen tijdvariabele. Sommige fysici concluderen dat tijd niet fundamenteel is maar emergent: het verschijnt als een macroscopisch fenomeen, vergelijkbaar met hoe temperatuur verschijnt uit de beweging van atomen.

De block universe-interpretatie, populair onder veel fysici, stelt dat verleden, heden en toekomst gelijktijdig bestaan als een vierdimensionaal blok. Er is geen bewegend heden. Onze ervaring van een stromende tijd is een illusie van ons bewustzijn.

De vraag of tijd reizen mogelijk is, is geen sciencefiction maar serieuze fysica. Reizen naar de toekomst is een bewezen feit via tijddilatatie. Reizen naar het verleden is theoretisch mogelijk via gesloten tijdachtige curven in de buurt van roterende zwarte gaten, maar de praktische en paradoxale bezwaren zijn overweldigend.

De vraag wat tijd werkelijk is, blijft een van de diepste open vragen van de natuurkunde.`,
  vragen: [
    { v: 'Wat toonde de speciale relativiteitstheorie over tijd?', opties: ['Dat tijd altijd constant is', 'Dat tijd relatief is en afhangt van snelheid', 'Dat tijd een illusie is', 'Dat tijd alleen vooruit gaat'], correct: 1 },
    { v: 'Wat stelt de block universe-interpretatie?', opties: ['Dat alleen het heden bestaat', 'Dat verleden, heden en toekomst gelijktijdig bestaan', 'Dat tijd sneller gaat bij meer massa', 'Dat het universum uit blokken bestaat'], correct: 1 },
    { v: 'Waarom ervaren we tijd als lineair volgens de thermodynamica?', opties: ['Door zwaartekracht', 'Omdat entropie altijd toeneemt', 'Door de kwantummechanica', 'Door onze hersenen'], correct: 1 },
  ]
},

{
  id: 'n3i', niveau: 3,
  titel: 'De complexiteit van taal en denken',
  tekst: `De relatie tussen taal en denken is een van de hardnekkigste vraagstukken in de cognitieve wetenschappen. Bepaalt de taal die je spreekt hoe je denkt, of is taal slechts een instrument om pre-linguïstische gedachten uit te drukken?

De sterke versie van de Sapir-Whorf-hypothese stelt dat taal het denken bepaalt: zonder een woord voor een concept kun je het concept niet begrijpen. Deze versie is grotendeels verworpen. De zwakke versie, dat taal het denken beïnvloedt zonder het volledig te bepalen, heeft aanzienlijk meer empirische ondersteuning.

Het Russisch heeft twee aparte woorden voor lichtblauw en donkerblauw. Russischtaligen onderscheiden deze tinten sneller dan Engelstaligen, die slechts blue kennen. Dit effect verdwijnt wanneer de proefpersonen gelijktijdig een verbale taak uitvoeren, wat suggereert dat de taalverwerking actief betrokken is bij de kleurperceptie.

De Piraha, een inheems volk in het Amazonegebied, hebben geen woorden voor exacte getallen. Ze kennen slechts een, twee en veel. Experimenten tonen aan dat zij moeite hebben met taken die exact tellen vereisen boven drie. Dit lijkt de Sapir-Whorf-hypothese te ondersteunen, maar critici beweren dat het een gevolg is van culturele, niet linguïstische factoren.

Tweetaligen rapporteren systematisch dat ze anders denken, voelen en zelfs ethische oordelen anders vellen afhankelijk van de taal die ze gebruiken. Het beroemde trolleyprobleem wordt significant vaker utilitair beantwoord in een tweede taal dan in de moedertaal. De emotionele afstand van een niet-primaire taal vergemakkelijkt rationele keuzes.

De fysieke structuur van taal beïnvloedt ruimtelijke cognities. Sprekers van Kuuk Thaayorre, een Aboriginal taal die absolute richtingen gebruikt in plaats van links en rechts, hebben een ongeëvenaard ruimtelijk oriëntatievermogen. Ze weten altijd waar het noorden is, zelfs in een donkere kamer.

De link tussen taal en denken is geen alles-of-niets kwestie. Taal is een lens die de werkelijkheid kleurt zonder haar fundamenteel te vervormen. Het leren van nieuwe talen is daarmee niet alleen een communicatieve maar ook een cognitieve verrijking.

Noam Chomsky argumenteerde dat de capaciteit voor taal aangeboren is, ingebouwd in ons brein als een universele grammatica. Steven Pinker bouwde hierop voort met het concept dat we denken in een mentale taal, mentalees, die dieper ligt dan welke gesproken taal dan ook.`,
  vragen: [
    { v: 'Wat stelt de zwakke Sapir-Whorf-hypothese?', opties: ['Dat taal het denken volledig bepaalt', 'Dat taal het denken beïnvloedt zonder het te bepalen', 'Dat taal en denken los van elkaar staan', 'Dat denken taal bepaalt'], correct: 1 },
    { v: 'Hoe beantwoorden tweetaligen het trolleyprobleem in hun tweede taal?', opties: ['Emotioneler', 'Identiek', 'Vaker utilitair', 'Ze weigeren te antwoorden'], correct: 2 },
    { v: 'Wat is bijzonder aan de Kuuk Thaayorre-taal?', opties: ['Geen werkwoorden', 'Absolute richtingen ipv links/rechts', 'Geen tijdsaanduidingen', 'Alleen gebarentaal'], correct: 1 },
  ]
},

{
  id: 'n3j', niveau: 3,
  titel: 'De evolutie van samenwerking',
  tekst: `Een van de grote raadselen van de evolutie is hoe samenwerking kan ontstaan in een wereld die gedreven wordt door competitie. Natuurlijke selectie beloont individuen die beter overleven en zich voortplanten. Waarom zou een individu dan middelen investeren in het helpen van anderen?

De eerste verklaring is verwantenselectie, geformuleerd door William Hamilton. Omdat verwanten een deel van je genen dragen, kan het helpen van familie indirect je eigen genetisch succes vergroten. J.B.S. Haldane vatte het bondig samen: ik zou mijn leven geven voor twee broers of acht neven. De wiskundige logica klopt: twee broers dragen elk vijftig procent van je genen, acht neven elk twaalf en een half procent.

Robert Trivers introduceerde wederzijds altruïsme. Als twee individuen herhaaldelijk met elkaar interacteren, kan het lonen om samen te werken zolang de ander dat ook doet. De tit-for-tat-strategie, begin met samenwerken en kopieer daarna het gedrag van de ander, bleek in computersimulaties van het herhaalde gevangenendilemma de meest succesvolle strategie.

Martin Nowak identificeerde vijf mechanismen voor de evolutie van samenwerking: verwantenselectie, directe wederkerigheid, indirecte wederkerigheid (reputatie), netwerkselectie (groepsstructuur) en groepsselectie. Het menselijk succes als soort is grotendeels te danken aan onze ongekende capaciteit voor samenwerking met niet-verwanten.

Indirecte wederkerigheid, gebaseerd op reputatie, is uniek menselijk. We helpen mensen die we niet kennen, gedeeltelijk omdat dit onze reputatie verbetert. In jager-verzamelaarsamenlevingen was reputatie een kwestie van leven en dood: wie als vrijbuiter bekend stond, werd uitgesloten van hulp in tijden van nood.

De evolutie van taal was cruciaal voor de schaal van menselijke samenwerking. Taal maakte het mogelijk om roddel te verspreiden, afspraken te maken, normen te communiceren en complexe plannen te coördineren. Yuval Noah Harari betoogt dat het vermogen om ficties te delen, van religies tot naties tot bedrijven, de basis vormt van menselijke grootschalige samenwerking met vreemden.

Moderne instituties als wetten, contracten, markten en democratieën zijn culturele oplossingen voor het probleem van samenwerking tussen niet-verwante vreemden. Ze creëren structuren die samenwerking belonen en uitbuiting bestraffen.

De uitdaging van de eenentwintigste eeuw is het uitbreiden van samenwerking naar mondiale schaal voor problemen als klimaatverandering en pandemieën, terwijl de evolutionaire mechanismen die samenwerking ondersteunen primair lokaal en op kleine schaal opereren.`,
  vragen: [
    { v: 'Wat is verwantenselectie?', opties: ['Selectie van de sterkste', 'Helpen van familieleden vergroot indirect eigen genetisch succes', 'Competitie tussen verwanten', 'Willekeurige selectie'], correct: 1 },
    { v: 'Welke strategie was het meest succesvol in simulaties?', opties: ['Altijd samenwerken', 'Altijd bedriegen', 'Tit-for-tat', 'Willekeurig kiezen'], correct: 2 },
    { v: 'Wat maakt volgens Harari grootschalige menselijke samenwerking mogelijk?', opties: ['Fysieke kracht', 'Wapens', 'Het delen van ficties', 'Genetische verwantschap'], correct: 2 },
  ]
},

];
