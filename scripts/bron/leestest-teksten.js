const LEESTEST_TEKSTEN = [
  {
    titel: 'De werking van het menselijk geheugen',
    tekst: `Het menselijk geheugen is geen statische opslagplaats, maar een dynamisch systeem dat voortdurend verandert. Herinneringen worden niet opgeslagen als videobeelden, maar als netwerken van verbonden neuronen. Elke keer dat je een herinnering ophaalt, herschrijf je hem enigszins. Dit verklaart waarom getuigenverklaringen zo onbetrouwbaar kunnen zijn: mensen vullen onbewust gaten in met aannemelijke details. Er zijn drie soorten geheugen: het sensorisch geheugen registreert prikkels milliseconden lang, het werkgeheugen bewaart informatie tijdelijk voor verwerking en het langetermijngeheugen slaat kennis voor lange tijd op. De overgang van kort naar langetermijngeheugen heet consolidatie. Slaap speelt hierin een cruciale rol: tijdens de diepe slaapfase verbindt het brein nieuwe informatie met bestaande kennis. Herhaling, emotie en relevantie versterken herinneringen. Informatie die je meerdere keren tegenkomt in verschillende contexten, beklijft beter dan eenmalige blootstelling. Flashcard-methodes zoals het Leitner-systeem gebruiken dit principe van gespreide herhaling. Vergeten is overigens niet altijd slecht: het helpt ons onnodige details te filteren zodat we ons kunnen concentreren op het wezenlijke.`,
    vragen: [
      { v: 'Wat gebeurt er als je een herinnering ophaalt?', opties: ['Je speelt hem precies terug', 'Je herschrijft hem enigszins', 'Hij verdwijnt uit het werkgeheugen', 'Hij wordt sterker'], correct: 1 },
      { v: 'Wat is consolidatie?', opties: ['Informatie vergeten', 'Overgang van kort naar langetermijngeheugen', 'Het sensorisch geheugen activeren', 'Slaap veroorzaken'], correct: 1 },
      { v: 'Welke rol speelt slaap bij herinneringen?', opties: ['Geen rol', 'Wist herinneringen', 'Verbindt nieuwe info met bestaande kennis', 'Maakt werkgeheugen groter'], correct: 2 },
      { v: 'Wat versterkt herinneringen het meest?', opties: ['Eenmalige blootstelling', 'Herhaling, emotie en relevantie', 'Weinig slaap', 'Sensorisch geheugen'], correct: 1 },
    ]
  },
  {
    titel: 'De opkomst van kunstmatige intelligentie',
    tekst: `Kunstmatige intelligentie is niet langer sciencefiction maar een dagelijkse realiteit. Algoritmen selecteren welk nieuws je ziet, welke muziek je hoort en zelfs welke kandidaten een vacature worden uitgenodigd. De meest recente doorbraak is het grote taalmodel, een type AI dat menselijke tekst genereert op een manier die soms niet van echte tekst te onderscheiden is. Deze systemen zijn getraind op miljarden webpagina's, boeken en artikelen, waardoor ze brede kennis bezitten maar ook menselijke vooroordelen overnemen. De voordelen zijn enorm: AI kan medische scans nauwkeuriger beoordelen dan radiologen, wiskundige problemen oplossen die mensen eeuwen bezighielden en software schrijven op basis van beschrijvingen in gewone taal. De risico's zijn echter reëel. Deepfakes, automatische desinformatie en het verdwijnen van banen in de creatieve sector zijn al zichtbare gevolgen. Experts verschillen van mening over de tijdlijn van meer geavanceerde AI: sommigen voorspellen menselijk niveau binnen tien jaar, anderen denken dat fundamentele obstakels dit nog tientallen jaren vertragen. Wat zeker is, is dat de maatschappij nu al keuzes moet maken over regulering, transparantie en eerlijkheid.`,
    vragen: [
      { v: 'Wat is een groot taalmodel?', opties: ['Een soort robot', 'Een type AI dat tekst genereert', 'Een database van boeken', 'Een zoekmachine'], correct: 1 },
      { v: 'Wat is een nadeel dat al zichtbaar is?', opties: ['AI is te traag', 'Te weinig data', 'Deepfakes en desinformatie', 'AI kan niet schrijven'], correct: 2 },
      { v: 'Waarop zijn grote taalmodellen getraind?', opties: ['Alleen wetenschappelijke papers', 'Miljarden webpagina\'s, boeken en artikelen', 'Handmatig ingevoerde regels', 'Gesprekken met mensen'], correct: 1 },
      { v: 'Welk voordeel noemt de tekst in de medische wereld?', opties: ['Goedkopere ziekenhuizen', 'Nauwkeurigere beoordeling van scans', 'Sneller opereren', 'Minder medicijnen nodig'], correct: 1 },
    ]
  },
  {
    titel: 'Hoe gewoonten ons leven sturen',
    tekst: `Wetenschappers schatten dat tot vijfenveertig procent van ons dagelijkse gedrag bestaat uit gewoonten: automatische handelingen die we uitvoeren zonder bewuste sturing. Gewoonten worden gevormd door een driedelig proces dat neuropsychologen de gewoontelus noemen. Een prikkel activeert een routine, die wordt afgesloten met een beloning. Na verloop van tijd worden prikkel en beloning direct gekoppeld zonder dat het bewuste brein tussenkomt. Dit is efficiënt: het brein hoeft minder energie te besteden aan herhaalde taken. Maar het maakt gewoonten ook hardnekkig. Om een gewoonte te veranderen, is het niet effectief ze simpelweg weg te willen denken. Onderzoek van MIT en Harvard toont aan dat de meest succesvolle strategie substitutie is: vervang de routine terwijl je prikkel en beloning intact laat. Een roker die stress (prikkel) verwerkt door te roken (routine) voor ontspanning (beloning) heeft meer kans van slagen als hij de sigaret vervangt door een wandeling of ademhalingsoefening, dan als hij alleen willskracht inzet. Identiteitsgebaseerde gewoonten werken nog krachtiger. In plaats van 'ik probeer minder te eten' zeg je 'ik ben iemand die gezond leeft'. Dit verschuift gedrag van een doel naar een deel van je zelfbeeld, wat langduriger effect heeft.`,
    vragen: [
      { v: 'Welk percentage van ons gedrag bestaat uit gewoonten?', opties: ['10%', '25%', '45%', '80%'], correct: 2 },
      { v: 'Wat zijn de drie onderdelen van de gewoontelus?', opties: ['Denken, doen, vergeten', 'Prikkel, routine, beloning', 'Wil, actie, resultaat', 'Brein, lichaam, omgeving'], correct: 1 },
      { v: 'Wat is de meest effectieve strategie om een gewoonte te veranderen?', opties: ['Willskracht', 'Substitutie van de routine', 'De prikkel vermijden', 'De beloning weggooien'], correct: 1 },
      { v: 'Wat is een identiteitsgebaseerde gewoonte?', opties: ['Een gewoonte die genetisch is', 'Gedrag koppelen aan wie je bent', 'Een gewoonte die al jaren bestaat', 'Imitatie van anderen'], correct: 1 },
    ]
  },
  {
    titel: 'De oceaan als klimaatregulator',
    tekst: `De oceaan bedekt zeventig procent van het aardoppervlak en speelt een onmisbare rol in het klimaatsysteem. Ze absorbeert ruim negentig procent van de extra warmte die broeikasgassen vasthouden, en bijna een kwart van alle CO2 die mensen uitstoten. Zonder deze bufferfunctie zou de opwarming van de aarde aanzienlijk sneller verlopen. Maar de oceaan betaalt een prijs. De opname van CO2 veroorzaakt verzuring: het zeewaterwordt zuurder, wat koraalriffen oplost, schelpdieren zwakker maakt en de voedselketen verstoort. Tegelijkertijd leidt de warmteopname tot smeltende gletsjers en thermische uitzetting van water, waardoor de zeespiegel stijgt. Oceaanstromingen zoals de Golfstroom transporteren warmte van de evenaar naar de poolgebieden en houden Europa klimatologisch gematigd. Studies tonen aan dat deze stroom verzwakt door de instroom van zoet smeltwater, met mogelijk dramatische gevolgen voor het Europese klimaat: koudere winters, drogere zomers en extremere weersomstandigheden. Wetenschappers beschouwen de gezondheid van de oceaan als een van de belangrijkste indicatoren voor de stabiliteit van het hele aardsysteem.`,
    vragen: [
      { v: 'Welk percentage van extra warmte absorbeert de oceaan?', opties: ['50%', '70%', '90%', '99%'], correct: 2 },
      { v: 'Wat veroorzaakt oceaanverzuring?', opties: ['Warmteopname', 'CO2-opname', 'Plastic vervuiling', 'Zoutgehalte'], correct: 1 },
      { v: 'Wat is een gevolg van een verzwakkende Golfstroom voor Europa?', opties: ['Warmere zomers en zachtere winters', 'Koudere winters en drogere zomers', 'Hogere zeespiegel alleen', 'Meer regen in de winter'], correct: 1 },
      { v: 'Waardoor verzwakt de Golfstroom?', opties: ['Meer CO2', 'Instroom van zoet smeltwater', 'Stijgende zeespiegel', 'Hogere temperaturen alleen'], correct: 1 },
    ]
  },
  {
    titel: 'De psychologie van besluitvorming',
    tekst: `Mensen zijn geen rationele wezens die kosten en baten zorgvuldig afwegen. Tientallen jaren psychologisch onderzoek tonen aan dat onze beslissingen systematisch worden beïnvloed door cognitieve vertekeningen. Nobelprijswinnaar Daniel Kahneman beschrijft twee denksystemen: Systeem 1 is snel, automatisch en emotioneel. Systeem 2 is traag, bewust en analytisch. De meeste beslissingen worden genomen door Systeem 1, ook als de situatie eigenlijk om Systeem 2 vraagt. Een klassiek voorbeeld is de ankeringsvertekening: als je wordt gevraagd of de Eiffeltoren hoger of lager is dan twaalf meter, geef je daarna een lagere schatting van de hoogte dan wanneer de ankervraag vijfhonderd meter noemde. Ons brein hecht te veel gewicht aan het eerste getal. Verliesaversie is een andere krachtige kracht: een verlies van honderd euro voelt twee keer zo erg als een winst van honderd euro goed voelt. Dit verklaart waarom mensen risicovolle beleggingen vasthouden in de hoop verlies te voorkomen, ook als verkopen rationeler zou zijn. De status-quovoorkeur maakt dat we de huidige situatie prefereren boven verandering, zelfs als verandering objectief beter is. Bewustzijn van deze vertekeningen helpt betere beslissingen te nemen, maar elimineert ze niet volledig.`,
    vragen: [
      { v: 'Wat is Systeem 1 in Kahnemans model?', opties: ['Traag en analytisch', 'Snel, automatisch en emotioneel', 'Bewust en logisch', 'Alleen actief bij moeilijke keuzes'], correct: 1 },
      { v: 'Wat is de ankeringsvertekening?', opties: ['Te veel twijfelen', 'Eerste informatie heeft te veel invloed op schattingen', 'Verlies groter voelen dan winst', 'De huidige situatie prefereren'], correct: 1 },
      { v: 'Hoe voelt een verlies van €100 vergeleken met een winst van €100?', opties: ['Even erg / goed', 'Iets erger', 'Twee keer zo erg', 'Drie keer zo erg'], correct: 2 },
      { v: 'Wat is de status-quovoorkeur?', opties: ['Voorkeur voor verandering', 'Huidige situatie prefereren boven verandering', 'Rationele keuzes maken', 'Risico\'s altijd vermijden'], correct: 1 },
    ]
  },
  {
    titel: 'Duurzame voeding en de planeet',
    tekst: `De manier waarop we voedsel produceren is een van de grootste drijvers van klimaatverandering, biodiversiteitsverlies en waterschaarste. De veehouderij is verantwoordelijk voor ongeveer veertien komma vijf procent van alle wereldwijde broeikasgasemissies — meer dan de gehele transportsector. Runderen produceren methaangas, dat op korte termijn tachtig keer krachiger is als broeikasgas dan CO2. Naast uitstoot vereist vlees- en zuivelproductie enorme hoeveelheden land, water en voer. Om één kilo rundvlees te produceren zijn gemiddeld vijftien duizend liter water en zeven kilo graanvoer nodig. Plantaardige eiwitbronnen zoals peulvruchten, noten en tofu hebben een fractie van deze voetafdruk. Studies tonen aan dat overschakelen naar een overwegend plantaardig dieet de voedselgerelateerde uitstoot van een individu met tot zeventig procent kan verminderen. Dat hoeft geen alles-of-niets keuze te zijn: zelfs het vervangen van één vleesmaaltijd per dag door een plantaardig alternatief heeft een meetbaar effect. Voedselverspilling is een ander groot probleem: wereldwijd wordt een derde van al het geproduceerde voedsel weggegooid. Dit vertegenwoordigt niet alleen verspilling van voedsel, maar ook van alle water, energie en land die voor de productie zijn gebruikt.`,
    vragen: [
      { v: 'Welk percentage van broeikasgasemissies is afkomstig van de veehouderij?', opties: ['5%', '14,5%', '30%', '50%'], correct: 1 },
      { v: 'Hoeveel liter water is nodig voor 1 kilo rundvlees?', opties: ['1.000 liter', '5.000 liter', '15.000 liter', '50.000 liter'], correct: 2 },
      { v: 'Met hoeveel procent kan een plantaardig dieet de uitstoot verminderen?', opties: ['Tot 20%', 'Tot 40%', 'Tot 70%', 'Tot 100%'], correct: 2 },
      { v: 'Welk deel van geproduceerd voedsel wordt verspild?', opties: ['Een tiende', 'Een kwart', 'Een derde', 'De helft'], correct: 2 },
    ]
  },
  {
    titel: 'De kracht van lezen',
    tekst: `Lezen is een van de meest waardevolle vaardigheden die een mens kan beheersen. Het opent deuren naar kennis, fantasie en begrip van de wereld om ons heen. Toch lezen veel mensen langzamer dan nodig is, waardoor ze minder informatie in minder tijd verwerken. Met gerichte oefening kun je je leessnelheid significant verhogen zonder begripsverlies. De sleutel ligt in het herkennen van woordgroepen in plaats van losse woorden, het vermijden van stille meelezing en het trainen van je oogsprongen. Beginners lezen gemiddeld tweehonderd woorden per minuut. Getrainde lezers halen vier- tot vijfhonderd woorden per minuut. Toppers zoals presidenten en advocaten bereiken soms duizend woorden per minuut of meer. Het verschil zit niet in intelligentie, maar in techniek en oefening. Begin vandaag met dagelijkse leesoefeningen van tien minuten en je merkt al na twee weken verschil.`,
    vragen: [
      { v: 'Hoeveel woorden per minuut lezen beginners gemiddeld?', opties: ['100 WPM', '200 WPM', '400 WPM', '1000 WPM'], correct: 1 },
      { v: 'Wat is de sleutel tot sneller lezen volgens de tekst?', opties: ['Harder je best doen', 'Woorden één voor één lezen', 'Woordgroepen herkennen en oogsprongen trainen', 'Harder praten'], correct: 2 },
      { v: 'Hoeveel minuten oefening per dag noem de tekst als startpunt?', opties: ['5 minuten', '10 minuten', '30 minuten', '1 uur'], correct: 1 },
      { v: 'Wat maakt het verschil tussen een langzame en snelle lezer?', opties: ['Intelligentie', 'Techniek en oefening', 'Leeftijd', 'Soort boek'], correct: 1 },
    ]
  },
  {
    titel: 'De wetenschap van slaap',
    tekst: `Slaap is een van de meest onderschatte pijlers van onze gezondheid. Terwijl je slaapt, verwerkt je brein de ervaringen van de dag, consolideert het herinneringen en herstelt het lichaam op cellulair niveau. Een volwassene heeft gemiddeld zeven tot negen uur slaap per nacht nodig. Te weinig slaap verslechtert concentratie, geheugen en besluitvorming merkbaar. Chronisch slaaptekort verhoogt het risico op hart- en vaatziekten, diabetes en depressie. Toch slapen miljoenen mensen structureel te weinig vanwege werk, sociale verplichtingen of schermgebruik 's avonds. Het blauwe licht van smartphones en tablets onderdrukt de aanmaak van melatonine, het slaaphormoon. Experts adviseren schermen minstens een uur voor het slapengaan uit te zetten. Een vaste bedtijd, donkere slaapkamer en matige kamertemperatuur verbeteren de slaapkwaliteit aanzienlijk. Goede slaaphygiëne is geen luxe, maar een noodzaak voor optimale prestaties overdag.`,
    vragen: [
      { v: 'Hoeveel uur slaap heeft een volwassene gemiddeld nodig?', opties: ['5-6 uur', '7-9 uur', '9-11 uur', '4-5 uur'], correct: 1 },
      { v: 'Wat doet blauw licht van schermen?', opties: ['Helpt je beter slapen', 'Onderdrukt melatonine aanmaak', 'Verhoogt je concentratie', 'Heeft geen effect'], correct: 1 },
      { v: 'Hoe lang voor het slapengaan adviseren experts schermen uit te zetten?', opties: ['15 minuten', '30 minuten', '1 uur', '2 uur'], correct: 2 },
      { v: 'Wat consolideer je brein tijdens slaap?', opties: ['Spieren', 'Herinneringen', 'Vitaminen', 'Energie'], correct: 1 },
    ]
  },
  {
    titel: 'Klimaatverandering in vogelvlucht',
    tekst: `De aarde warmt op. Dat is geen mening maar een wetenschappelijk vastgesteld feit, onderschreven door meer dan negentig-zeven procent van klimaatwetenschappers wereldwijd. De gemiddelde temperatuur op aarde is de afgelopen honderd jaar met ongeveer één komma twee graden Celsius gestegen. De oorzaak is grotendeels de uitstoot van broeikasgassen door menselijke activiteiten: verbranding van fossiele brandstoffen, ontbossing en industriële processen. De gevolgen zijn zichtbaar en voelbaar. IJskappen smelten, zeespiegels stijgen, extreme weersomstandigheden worden vaker en heviger. Hittegolven, overstromingen, droogte en bosbranden nemen toe in frequentie en intensiteit. Om de opwarming te beperken tot anderhalve graad moeten de mondiale emissies voor het jaar tweeduizend dertig gehalveerd worden en voor tweeduizend vijftig netto nul bereiken. Dit vereist een ongekende transformatie van onze energiesystemen, mobiliteit, landbouw en consumptiepatronen.`,
    vragen: [
      { v: 'Met hoeveel graden is de aarde opgewarmd de afgelopen 100 jaar?', opties: ['0,5 graden', '1,2 graden', '2,0 graden', '3,5 graden'], correct: 1 },
      { v: 'Welk percentage van klimaatwetenschappers onderschrijft klimaatverandering?', opties: ['60%', '75%', '97%', '100%'], correct: 2 },
      { v: 'Wanneer moeten emissies netto nul zijn volgens de tekst?', opties: ['2030', '2040', '2050', '2100'], correct: 2 },
      { v: 'Wat is de hoofdoorzaak van klimaatverandering?', opties: ['Vulkaanuitbarstingen', 'Menselijke broeikasgassen', 'Zonneactiviteit', 'Oceaanstromingen'], correct: 1 },
    ]
  },
  {
    titel: 'Het microbioom: de onzichtbare wereld in je darmen',
    tekst: `In je darmen leven biljoenen micro-organismen die samen het microbioom vormen. Dit ecosysteem weegt ongeveer twee kilo en bevat meer genetisch materiaal dan je eigen cellen. De samenstelling van je microbioom is uniek, als een vingerafdruk. Het beïnvloedt je spijsvertering, je immuunsysteem en zelfs je stemming. Negentig procent van de serotonine in je lichaam wordt in de darmen geproduceerd. Onderzoek toont aan dat de darm-hersenas een tweerichtingsweg is: je darmen beïnvloeden je brein en andersom. Mensen met een divers microbioom hebben gemiddeld een betere mentale gezondheid. Voeding is de belangrijkste factor: vezels uit groenten en fruit voeden gunstige bacteriën, terwijl bewerkt voedsel en suiker schadelijke bacteriën bevorderen.`,
    vragen: [
      { v: 'Hoeveel weegt het microbioom ongeveer?', opties: ['Een halve kilo', 'Één kilo', 'Twee kilo', 'Vijf kilo'], correct: 2 },
      { v: 'Welk percentage van serotonine wordt in de darmen geproduceerd?', opties: ['50%', '70%', '80%', '90%'], correct: 3 },
      { v: 'Wat voeden vezels uit groenten en fruit?', opties: ['Schadelijke bacteriën', 'Gunstige bacteriën', 'Virussen', 'Schimmels'], correct: 1 },
      { v: 'Wat is de darm-hersenas?', opties: ['Een zenuw in de rug', 'Een tweerichtingscommunicatie tussen darmen en brein', 'Een dieet', 'Een type bacterie'], correct: 1 },
    ]
  },
  {
    titel: 'De geschiedenis van het schrift',
    tekst: `Het schrift is een van de belangrijkste uitvindingen van de mensheid. Het oudste bekende schrift is spijkerschrift uit Mesopotamië, ongeveer vijfduizend jaar oud. De Egyptenaren ontwikkelden hiërogliefen, de Chinezen logogrammen en de Feniciërs het eerste alfabet. De Grieken namen het Fenicische alfabet over en voegden klinkers toe. De Romeinen pasten het aan tot het Latijnse alfabet dat we vandaag gebruiken. De uitvinding van papier in China rond het jaar honderd was een revolutie. Vóór papier schreef men op kleitabletten, papyrus en perkament. De boekdrukkunst van Gutenberg rond 1440 democratiseerde kennis door boeken betaalbaar te maken. Geletterdheid steeg explosief en ideeën konden sneller verspreid worden dan ooit tevoren.`,
    vragen: [
      { v: 'Wat is het oudste bekende schrift?', opties: ['Hiërogliefen', 'Spijkerschrift', 'Het Latijnse alfabet', 'Chinese logogrammen'], correct: 1 },
      { v: 'Wie voegden klinkers toe aan het alfabet?', opties: ['De Feniciërs', 'De Romeinen', 'De Grieken', 'De Egyptenaren'], correct: 2 },
      { v: 'Wanneer werd papier in China uitgevonden?', opties: ['2000 v.Chr.', 'Rond het jaar 100', 'Rond het jaar 500', 'Rond het jaar 1000'], correct: 1 },
      { v: 'Wat maakte de boekdrukkunst van Gutenberg mogelijk?', opties: ['Sneller schrijven', 'Betaalbare boeken', 'Digitale opslag', 'Kleuren drukken'], correct: 1 },
    ]
  },
  {
    titel: 'Hoe stress je lichaam beïnvloedt',
    tekst: `Wanneer je stress ervaart, activeert je lichaam het vecht-of-vluchtmechanisme. De bijnier produceert adrenaline en cortisol, waardoor je hartslag stijgt en je spieren aanspannen. In de moderne wereld wordt dit systeem voortdurend geactiveerd door werkdruk en sociale media. Chronische stress verhoogt het risico op hart- en vaatziekten, diabetes type twee en depressie. Het immuunsysteem verzwakt, waardoor je vatbaarder wordt voor infecties. Slaapproblemen en hoofdpijn zijn veelvoorkomende symptomen. Effectieve stressmanagement omvat ademhalingsoefeningen, mindfulness-meditatie, lichaamsbeweging en sociale verbinding. Al tien minuten dagelijkse meditatie kan het cortisolniveau meetbaar verlagen.`,
    vragen: [
      { v: 'Welke hormonen worden bij stress geproduceerd?', opties: ['Insuline en melatonine', 'Adrenaline en cortisol', 'Dopamine en serotonine', 'Oxytocine en endorfine'], correct: 1 },
      { v: 'Wat is een gevolg van chronische stress?', opties: ['Betere concentratie', 'Sterker immuunsysteem', 'Verhoogd risico op hart- en vaatziekten', 'Snellere spieropbouw'], correct: 2 },
      { v: 'Hoeveel minuten dagelijkse meditatie kan cortisol verlagen?', opties: ['Twee minuten', 'Vijf minuten', 'Tien minuten', 'Dertig minuten'], correct: 2 },
      { v: 'Wat is het vecht-of-vluchtmechanisme?', opties: ['Een sportoefening', 'Een stressreactie van het lichaam', 'Een slaapmethode', 'Een ademhalingstechniek'], correct: 1 },
    ]
  },
  {
    titel: 'De kracht van meertaligheid',
    tekst: `Wereldwijd spreekt meer dan de helft van de bevolking twee of meer talen. Tweetaligen scoren beter op taken die aandacht en taakwisseling vereisen. Het switchen tussen talen traint het executieve functienetwerk. Ouderen die twee talen spreken vertonen gemiddeld vijf jaar later symptomen van dementie. Het kinderbrein is bijzonder geschikt om talen te leren: tot zeven jaar verwerven kinderen talen moeiteloos. Na de puberteit neemt dit vermogen af. Tweetaligen rapporteren dat ze van persoonlijkheid wisselen per taal. Ze voelen zich assertiever in hun dominante taal en emotioneler in hun moedertaal.`,
    vragen: [
      { v: 'Tot welke leeftijd leren kinderen talen het makkelijkst?', opties: ['Drie jaar', 'Vijf jaar', 'Zeven jaar', 'Twaalf jaar'], correct: 2 },
      { v: 'Hoeveel jaar later vertonen tweetalige ouderen dementiesymptomen?', opties: ['Twee jaar', 'Drie jaar', 'Vijf jaar', 'Tien jaar'], correct: 2 },
      { v: 'Welk hersennetwerk wordt getraind door taalwisseling?', opties: ['Het visuele systeem', 'Het motorische systeem', 'Het executieve functienetwerk', 'Het limbisch systeem'], correct: 2 },
      { v: 'Hoeveel van de wereldbevolking spreekt twee of meer talen?', opties: ['Twintig procent', 'Dertig procent', 'Meer dan vijftig procent', 'Negentig procent'], correct: 2 },
    ]
  },
  {
    titel: 'Fotosynthese: de motor van het leven',
    tekst: `Fotosynthese is het proces waarbij planten zonlicht omzetten in chemische energie. Met chlorofyl vangen bladeren lichtenergie op die met water en kooldioxide wordt omgezet in glucose en zuurstof. Dit proces is de basis van vrijwel al het leven op aarde. Jaarlijks zetten planten en algen ongeveer honderd miljard ton koolstof om. Wetenschappers proberen kunstmatige fotosynthese te ontwikkelen voor schone brandstof. De efficiëntie van natuurlijke fotosynthese is slechts één tot twee procent, terwijl zonnepanelen vijftien tot twintig procent halen. Planten produceren de zuurstof die wij inademen en vormen de basis van de voedselketen.`,
    vragen: [
      { v: 'Wat produceren planten naast glucose bij fotosynthese?', opties: ['Stikstof', 'Kooldioxide', 'Zuurstof', 'Waterstof'], correct: 2 },
      { v: 'Welke stof vangt lichtenergie op in bladeren?', opties: ['Cellulose', 'Chlorofyl', 'Glucose', 'Eiwit'], correct: 1 },
      { v: 'Hoeveel ton koolstof zetten planten jaarlijks om?', opties: ['Een miljoen ton', 'Een miljard ton', 'Honderd miljard ton', 'Een biljoen ton'], correct: 2 },
      { v: 'Hoe hoog is de efficiëntie van natuurlijke fotosynthese?', opties: ['Een tot twee procent', 'Vijf tot tien procent', 'Vijftien tot twintig procent', 'Dertig procent'], correct: 0 },
    ]
  },
  {
    titel: 'De psychologie van procrastinatie',
    tekst: `Uitstelgedrag is geen kwestie van luiheid maar van emotieregulatie. Wanneer een taak onplezierige gevoelens oproept kiest het brein voor directe verlichting door de taak uit te stellen. De prefrontale cortex verliest het van het limbische systeem dat onmiddellijke beloning zoekt. Ongeveer twintig procent van volwassenen is een chronische uitsteller. Perfectionisme is een verrassende oorzaak: de angst om het niet perfect te doen leidt tot helemaal niet beginnen. De vijfminutenregel is effectief: begin slechts vijf minuten aan de taak. Meestal gaat het brein daarna vanzelf door. Het opdelen van grote taken in kleine stappen vermindert het overweldigende gevoel.`,
    vragen: [
      { v: 'Wat is de werkelijke oorzaak van procrastinatie?', opties: ['Luiheid', 'Gebrek aan motivatie', 'Emotieregulatie', 'Te weinig slaap'], correct: 2 },
      { v: 'Welk percentage van volwassenen is een chronische uitsteller?', opties: ['Vijf procent', 'Tien procent', 'Twintig procent', 'Vijftig procent'], correct: 2 },
      { v: 'Welk hersengebied verliest bij uitstelgedrag?', opties: ['Het limbische systeem', 'De prefrontale cortex', 'De hippocampus', 'De amygdala'], correct: 1 },
      { v: 'Hoe werkt de vijfminutenregel?', opties: ['Vijf minuten pauzeren', 'Vijf taken tegelijk doen', 'Slechts vijf minuten beginnen aan de taak', 'Vijf keer de taak herhalen'], correct: 2 },
    ]
  },
  {
    titel: 'De uitvinding van antibiotica',
    tekst: `In 1928 ontdekte Alexander Fleming per ongeluk penicilline toen een schimmel op een bacteriekweek de bacteriën doodde. Deze ontdekking redde naar schatting meer dan tweehonderd miljoen mensenlevens. Vóór antibiotica was een simpele snijwond potentieel dodelijk en waren operaties levensgevaarlijk. Vandaag vormt antibioticaresistentie een groeiende bedreiging. Overmatig gebruik in de veehouderij en het niet afmaken van kuren helpen bacteriën resistentie te ontwikkelen. De Wereldgezondheidsorganisatie waarschuwt dat we een post-antibioticatijdperk naderen waarin gewone infecties weer dodelijk kunnen worden.`,
    vragen: [
      { v: 'Wie ontdekte penicilline?', opties: ['Louis Pasteur', 'Alexander Fleming', 'Marie Curie', 'Robert Koch'], correct: 1 },
      { v: 'Hoeveel mensenlevens heeft antibiotica naar schatting gered?', opties: ['Vijftig miljoen', 'Honderd miljoen', 'Tweehonderd miljoen', 'Een miljard'], correct: 2 },
      { v: 'Wat is een oorzaak van antibioticaresistentie?', opties: ['Te weinig antibiotica', 'Overmatig gebruik in de veehouderij', 'Te veel vaccinaties', 'Gebrek aan schimmels'], correct: 1 },
      { v: 'In welk jaar werd penicilline ontdekt?', opties: ['1901', '1918', '1928', '1945'], correct: 2 },
    ]
  },
  {
    titel: 'Neuroplasticiteit van de hersenen',
    tekst: `Neuroplasticiteit is het vermogen van de hersenen om zich aan te passen en te reorganiseren. Lange tijd dachten wetenschappers dat het volwassen brein niet meer veranderde. Nu weten we dat het brein tot op hoge leeftijd nieuwe verbindingen kan vormen. London-taxichauffeurs hebben een meetbaar grotere hippocampus door jarenlang navigeren. Muzikanten hebben meer verbindingen tussen de linker- en rechterhersenhelft. Na een beroerte kan het brein functies via andere routes overnemen. Oefening en nieuwe ervaringen stimuleren neurogenese: de aanmaak van nieuwe hersencellen. Passiviteit vermindert plasticiteit. Het brein volgt het principe: use it or lose it.`,
    vragen: [
      { v: 'Wat is neuroplasticiteit?', opties: ['Een hersenziekte', 'Het aanpassingsvermogen van het brein', 'Een type hersencel', 'Een scantechniek'], correct: 1 },
      { v: 'Wat is bijzonder aan London-taxichauffeurs?', opties: ['Kleinere hippocampus', 'Meetbaar grotere hippocampus', 'Snellere reflexen', 'Beter gehoor'], correct: 1 },
      { v: 'Wat is neurogenese?', opties: ['Afsterven van hersencellen', 'Aanmaak van nieuwe hersencellen', 'Een hersenoperatie', 'Een leertechniek'], correct: 1 },
      { v: 'Welk principe volgen de hersenen?', opties: ['Meer is beter', 'Use it or lose it', 'Rust roest niet', 'Oefening baart kunst'], correct: 1 },
    ]
  },
  {
    titel: 'Waterstof als energiebron',
    tekst: `Waterstof wordt steeds vaker gezien als sleutel tot een duurzame energietoekomst. Bij verbranding produceert waterstof alleen water als bijproduct. Groene waterstof wordt gemaakt door elektrolyse met hernieuwbare energie. Grijze waterstof uit aardgas is goedkoper maar stoot CO2 uit. Groene waterstof is momenteel drie tot vijf keer duurder. Toepassingen liggen vooral in sectoren die moeilijk te elektrificeren zijn: zwaar transport, luchtvaart en staalproductie. Landen als Duitsland, Japan en Australië investeren miljarden in waterstofinfrastructuur. Transport en opslag zijn complex omdat waterstof het lichtste element is.`,
    vragen: [
      { v: 'Wat produceert waterstof als bijproduct?', opties: ['CO2', 'Stikstof', 'Water', 'Methaan'], correct: 2 },
      { v: 'Hoe wordt groene waterstof geproduceerd?', opties: ['Uit aardgas', 'Door elektrolyse met hernieuwbare energie', 'Door verbranding van kolen', 'Uit kernenergie'], correct: 1 },
      { v: 'Hoeveel keer duurder is groene waterstof momenteel?', opties: ['Twee keer', 'Drie tot vijf keer', 'Tien keer', 'Twintig keer'], correct: 1 },
      { v: 'In welke sectoren is waterstof het meest veelbelovend?', opties: ['Huishoudelijk gebruik', 'Moeilijk te elektrificeren sectoren', 'Kantoorverlichting', 'Landbouwirrigatie'], correct: 1 },
    ]
  },
  {
    titel: 'De psychologie van eerste indrukken',
    tekst: `Je brein vormt een eerste indruk in slechts zeven seconden. Het beoordeelt onbewust betrouwbaarheid, competentie en aantrekkelijkheid. Het halo-effect speelt hierbij een grote rol: als we een positieve eigenschap waarnemen schrijven we automatisch ook andere positieve eigenschappen toe. Aantrekkelijke mensen worden onbewust als intelligenter beoordeeld. Lichaamstaal is verantwoordelijk voor vijfenvijftig procent van de eerste indruk, stemtoon voor achtendertig procent en woorden voor slechts zeven procent. Eerste indrukken kunnen veranderen maar het kost gemiddeld acht positieve ontmoetingen om een negatieve eerste indruk te corrigeren.`,
    vragen: [
      { v: 'In hoeveel seconden vorm je een eerste indruk?', opties: ['Drie seconden', 'Zeven seconden', 'Vijftien seconden', 'Dertig seconden'], correct: 1 },
      { v: 'Wat is het halo-effect?', opties: ['Negatieve aannames', 'Eén positieve eigenschap leidt tot andere positieve aannames', 'Het vermijden van oordelen', 'Bewust mening vormen'], correct: 1 },
      { v: 'Hoeveel procent van de eerste indruk is lichaamstaal?', opties: ['Tien procent', 'Vijfendertig procent', 'Vijfenvijftig procent', 'Tachtig procent'], correct: 2 },
      { v: 'Hoeveel ontmoetingen om een negatieve indruk te corrigeren?', opties: ['Twee', 'Vier', 'Acht', 'Twintig'], correct: 2 },
    ]
  },
  {
    titel: 'Oceaanstromingen en klimaat',
    tekst: `Oceaanstromingen fungeren als een gigantisch transportsysteem dat warmte over de aarde verdeelt. De Golfstroom maakt West-Europa tot tien graden warmer dan op vergelijkbare breedtegraden. De thermohaliene circulatie wordt aangedreven door temperatuur- en zoutverschillen. Koud zout water bij de polen zinkt en stroomt naar de evenaar. Studies tonen aan dat de Golfstroom is verzwakt door instroom van zoet smeltwater van Groenland. Als deze stroom stopt zou Europa drastisch afkoelen ondanks mondiale opwarming. Dit scenario staat bekend als het kantelpunt van de Atlantische circulatie.`,
    vragen: [
      { v: 'Hoeveel graden warmer maakt de Golfstroom Europa?', opties: ['Twee graden', 'Vijf graden', 'Tot tien graden', 'Vijftien graden'], correct: 2 },
      { v: 'Wat drijft de thermohaliene circulatie aan?', opties: ['Wind', 'Getijden', 'Temperatuur- en zoutverschillen', 'De maan'], correct: 2 },
      { v: 'Waardoor verzwakt de Golfstroom?', opties: ['Meer wind', 'Instroom van zoet smeltwater', 'Hogere zeespiegel', 'Meer zout'], correct: 1 },
      { v: 'Wat zou er gebeuren als de Golfstroom stopt?', opties: ['Europa wordt warmer', 'Europa koelt drastisch af', 'Niets verandert', 'De zeespiegel daalt'], correct: 1 },
    ]
  },
  {
    titel: 'De ethiek van kunstmatige intelligentie',
    tekst: `Naarmate AI meer beslissingen neemt die mensen raken groeien de ethische vragen. Algoritmen die bepalen wie een lening krijgt zijn niet altijd eerlijk. Training op historische data kan vooroordelen versterken. Transparantie is een kernprobleem: veel AI-systemen zijn black boxes. De Europese Unie heeft de AI Act aangenomen als eerste uitgebreide AI-regulering ter wereld. Experts pleiten voor menselijk toezicht bij beslissingen met grote impact, uitlegbare AI en diverse ontwikkelteams om bias te verminderen. De vraag wie verantwoordelijk is wanneer AI fouten maakt is nog onbeantwoord.`,
    vragen: [
      { v: 'Wat is een black box-probleem bij AI?', opties: ['De computer is zwart', 'Ontwikkelaars begrijpen niet hoe het systeem beslist', 'Het systeem werkt niet', 'De data is versleuteld'], correct: 1 },
      { v: 'Hoe kan AI vooroordelen versterken?', opties: ['Door te weinig data', 'Door training op discriminerende historische data', 'Door snelle berekeningen', 'Door open-source software'], correct: 1 },
      { v: 'Wie heeft de AI Act aangenomen?', opties: ['De Verenigde Naties', 'De Verenigde Staten', 'De Europese Unie', 'China'], correct: 2 },
      { v: 'Wat pleiten experts voor bij impactvolle AI?', opties: ['Volledig automatiseren', 'Menselijk toezicht', 'Meer data verzamelen', 'Snellere algoritmen'], correct: 1 },
    ]
  },
  {
    titel: 'De biologie van veroudering',
    tekst: `Veroudering wordt beïnvloed door genen, omgeving en levensstijl. Telomeren, de beschermkappen op chromosomen, worden bij elke celdeling korter. Wanneer ze te kort worden stopt de cel met delen. Elizabeth Blackburn won de Nobelprijs voor de ontdekking van telomerase, een enzym dat telomeren kan verlengen. Caloriërestrictie verlengt de levensduur bij proefdieren met tot veertig procent. Senolytische medicijnen die verouderde cellen opruimen zijn een veelbelovend onderzoeksgebied. Levensstijlfactoren als niet roken, matig alcoholgebruik, beweging en sociale verbinding correleren met een langere gezonde levensspanne.`,
    vragen: [
      { v: 'Wat zijn telomeren?', opties: ['Een type enzym', 'Beschermkappen op chromosomen', 'Dode cellen', 'Een hormoon'], correct: 1 },
      { v: 'Wie ontdekte telomerase?', opties: ['Marie Curie', 'Elizabeth Blackburn', 'Alexander Fleming', 'Charles Darwin'], correct: 1 },
      { v: 'Hoeveel langer leven proefdieren met caloriërestrictie?', opties: ['Tien procent', 'Twintig procent', 'Tot veertig procent', 'Zestig procent'], correct: 2 },
      { v: 'Wat doen senolytische medicijnen?', opties: ['Telomeren verlengen', 'Verouderde cellen opruimen', 'Calorieën verminderen', 'DNA repareren'], correct: 1 },
    ]
  },
  {
    titel: 'De economie van aandacht',
    tekst: `In een wereld vol informatie is aandacht de schaarsste hulpbron. De gemiddelde mens ziet dagelijks vijfduizend tot tienduizend reclameboodschappen. Apps gebruiken variabele beloningen, hetzelfde principe als gokautomaten, om je vast te houden. Het kost gemiddeld drieëntwintig minuten om na een onderbreking je concentratie te herstellen. Multitasking verlaagt je IQ tijdelijk met tien punten. Technieken als tijdblokkering, de Pomodoro-methode en digitale detox helpen om de controle over je aandacht terug te winnen. Het bewust inzetten van je focus is de vaardigheid van de eenentwintigste eeuw.`,
    vragen: [
      { v: 'Hoeveel reclameboodschappen zie je dagelijks?', opties: ['100 tot 500', '500 tot 1.000', '1.000 tot 3.000', '5.000 tot 10.000'], correct: 3 },
      { v: 'Hoelang duurt focusherstel na een onderbreking?', opties: ['Vijf minuten', 'Tien minuten', 'Drieëntwintig minuten', 'Veertig minuten'], correct: 2 },
      { v: 'Hoeveel IQ-punten verlies je door multitasking?', opties: ['Twee punten', 'Vijf punten', 'Tien punten', 'Twintig punten'], correct: 2 },
      { v: 'Welk principe gebruiken apps om je vast te houden?', opties: ['Vaste beloningen', 'Variabele beloningen', 'Strafmaatregelen', 'Tijdslimieten'], correct: 1 },
    ]
  },
  {
    titel: 'De wonderen van menselijke zintuigen',
    tekst: `De mens heeft niet vijf maar minstens negen zintuigen, waaronder proprioceptie, evenwicht, temperatuurwaarneming en pijnwaarneming. Het oog kan tien miljoen kleuren onderscheiden. De neus herkent meer dan een biljoen geuren. Smaak beperkt zich tot vijf basissmaken: zoet, zout, zuur, bitter en umami. Tast is het eerste zintuig dat zich ontwikkelt in de baarmoeder. Synesthesie is een fenomeen waarbij zintuigen worden gemengd: sommige mensen zien kleuren bij muziek of proeven vormen. Elk zintuig heeft zich geëvolueerd om overlevingsvoordeel te bieden.`,
    vragen: [
      { v: 'Hoeveel zintuigen heeft de mens minstens?', opties: ['Vijf', 'Zeven', 'Negen', 'Twaalf'], correct: 2 },
      { v: 'Hoeveel kleuren onderscheidt het menselijk oog?', opties: ['Honderdduizend', 'Een miljoen', 'Tien miljoen', 'Een miljard'], correct: 2 },
      { v: 'Wat is proprioceptie?', opties: ['Evenwichtsgevoel', 'Weten waar je lichaamsdelen zijn', 'Pijnwaarneming', 'Temperatuurgevoel'], correct: 1 },
      { v: 'Hoeveel basissmaken zijn er?', opties: ['Drie', 'Vier', 'Vijf', 'Zeven'], correct: 2 },
    ]
  },
  {
    titel: 'De toekomst van voedsel',
    tekst: `De wereldbevolking groeit naar tien miljard in 2050 en de voedselproductie moet met vijftig procent toenemen. Verticale landbouw gebruikt negentig procent minder water en geen pesticiden. De prijs van kweekvlees daalde van driehonderdduizend euro in 2013 naar minder dan tien euro. Insecten bevatten meer eiwit per kilo dan rundvlees en vereisen een fractie van het land en water. In veel Aziatische landen zijn insecten al normaal voedsel. Precisiefermentatie gebruikt micro-organismen om dierlijke eiwitten na te maken. De toekomst van voedsel is technologisch en divers.`,
    vragen: [
      { v: 'Hoeveel moet de voedselproductie toenemen tegen 2050?', opties: ['Twintig procent', 'Dertig procent', 'Vijftig procent', 'Honderd procent'], correct: 2 },
      { v: 'Hoeveel minder water gebruikt verticale landbouw?', opties: ['Vijftig procent', 'Zeventig procent', 'Tachtig procent', 'Negentig procent'], correct: 3 },
      { v: 'Hoeveel kostte de eerste kweekvleesburger?', opties: ['Duizend euro', 'Tienduizend euro', 'Driehonderdduizend euro', 'Een miljoen euro'], correct: 2 },
      { v: 'Wat is precisiefermentatie?', opties: ['Insecten kweken', 'Micro-organismen voor eiwitproductie', 'Voedsel in de ruimte produceren', 'Genetische modificatie'], correct: 1 },
    ]
  },
  {
    titel: 'De invloed van architectuur op welzijn',
    tekst: `Gebouwen beïnvloeden ons welzijn meer dan we beseffen. Daglicht in kantoren verhoogt de productiviteit met vijftien procent. Hoge plafonds stimuleren creatief denken, lage plafonds zijn beter voor gedetailleerd werk. Het zien van natuur vanuit een raam versnelt het herstel van patiënten. Biofiel ontwerp integreert natuurlijke elementen in gebouwen: groene muren, houten oppervlakken en waterpartijen verlagen stress. Geluidsisolatie is een onderschatte factor: chronische blootstelling aan lawaai verhoogt de bloeddruk. Goede architectuur is gezondheidswetenschap.`,
    vragen: [
      { v: 'Hoeveel procent verhoogt daglicht de productiviteit?', opties: ['Vijf procent', 'Tien procent', 'Vijftien procent', 'Dertig procent'], correct: 2 },
      { v: 'Wat stimuleren hoge plafonds?', opties: ['Gedetailleerd werk', 'Creatief denken', 'Beter slapen', 'Meer beweging'], correct: 1 },
      { v: 'Wat is biofiel ontwerp?', opties: ['Veel technologie', 'Natuurlijke elementen in gebouwen', 'Minimalisme', 'Energiezuinig bouwen'], correct: 1 },
      { v: 'Wat versnelt het herstel van patiënten?', opties: ['Televisie', 'Natuur zien vanuit een raam', 'Meer bezoek', 'Langere opname'], correct: 1 },
    ]
  },
  {
    titel: 'Hoe kleur gedrag beïnvloedt',
    tekst: `Kleuren sturen ons gedrag onbewust. Restaurants gebruiken rood en geel om eetlust te stimuleren. Sporters in rood winnen vaker: bij de Olympische Spelen wonnen boksers in rood significant vaker. Blauw is de populairste kleur voor bedrijfslogo's vanwege de associatie met vertrouwen. Groen is het minst vermoeiend voor de ogen, daarom zijn operatiekamers groen. Sommige gevangenissen verven cellen roze om agressie te verminderen. De kleur van medicijnen beïnvloedt het placebo-effect: blauwe pillen kalmeren beter, rode stimuleren meer. Kleurbetekenissen verschillen sterk per cultuur.`,
    vragen: [
      { v: 'Waarom gebruiken restaurants rood en geel?', opties: ['Voor sfeer', 'Om eetlust te stimuleren', 'Omdat het goedkoop is', 'Voor hygiëne'], correct: 1 },
      { v: 'Welke kleur vermindert agressie in gevangenissen?', opties: ['Blauw', 'Groen', 'Roze', 'Wit'], correct: 2 },
      { v: 'Waarom zijn operatiekamers groen?', opties: ['Tegen infecties', 'Goedkoopste verf', 'Minst vermoeiend voor de ogen', 'Traditie'], correct: 2 },
      { v: 'Welke kleur staat voor vertrouwen in bedrijfslogo\'s?', opties: ['Rood', 'Groen', 'Blauw', 'Geel'], correct: 2 },
    ]
  },
  {
    titel: 'De werking van het immuunsysteem',
    tekst: `Het immuunsysteem beschermt het lichaam tegen ziekteverwekkers via meerdere verdedigingslinies. De huid en slijmvliezen vormen de eerste barrière. Witte bloedcellen patrouilleren door het bloed. T-cellen herkennen en vernietigen geïnfecteerde cellen. B-cellen produceren antistoffen die specifieke pathogenen markeren. Het immuunsysteem onthoudt ziekteverwekkers en reageert sneller bij herinfectie. Dit geheugen maakt vaccinaties mogelijk. Slaap, voeding en beweging beïnvloeden de afweer significant. Chronische stress verzwakt het immuunsysteem. Vitamine D en zink zijn belangrijk voor optimale immuunfunctie.`,
    vragen: [
      { v: 'Wat is de eerste verdedigingslinie?', opties: ['Witte bloedcellen', 'Huid en slijmvliezen', 'T-cellen', 'Antistoffen'], correct: 1 },
      { v: 'Wat doen B-cellen?', opties: ['Geïnfecteerde cellen vernietigen', 'Antistoffen produceren', 'Virussen blokkeren', 'Bloed filteren'], correct: 1 },
      { v: 'Waarom reageert het immuunsysteem sneller bij herinfectie?', opties: ['Meer witte bloedcellen', 'Het heeft een geheugen', 'Betere voeding', 'Sterkere huid'], correct: 1 },
      { v: 'Welke stoffen ondersteunen het immuunsysteem?', opties: ['Cafeïne en suiker', 'Vitamine D en zink', 'Alcohol en nicotine', 'Kalium en natrium'], correct: 1 },
    ]
  },
  {
    titel: 'De wetenschappelijke methode',
    tekst: `De wetenschappelijke methode is het fundament van betrouwbare kennisvorming. Het begint met een observatie die tot een vraag leidt. De onderzoeker formuleert een hypothese en ontwerpt een experiment om die te testen. De resultaten worden geanalyseerd en de hypothese bevestigd of verworpen. Cruciale kenmerken zijn herhaalbaarheid en falsificeerbaarheid. Een experiment moet door anderen herhaald kunnen worden. Een theorie moet weerlegbaar zijn: als geen uitkomst de theorie kan weerleggen is het geen wetenschap. Peer review, beoordeling door vakgenoten, is een extra kwaliteitscontrole. Toch is wetenschap niet onfeilbaar: publicatiebias en de replicatiecrisis tonen aan dat verbetering nodig blijft.`,
    vragen: [
      { v: 'Waarmee begint de wetenschappelijke methode?', opties: ['Een experiment', 'Een observatie', 'Een conclusie', 'Een publicatie'], correct: 1 },
      { v: 'Wat betekent falsificeerbaarheid?', opties: ['Een theorie moet bewezen worden', 'Een theorie moet weerlegbaar zijn', 'Een experiment moet slagen', 'Resultaten moeten positief zijn'], correct: 1 },
      { v: 'Wat is peer review?', opties: ['Beoordeling door studenten', 'Beoordeling door vakgenoten', 'Beoordeling door het publiek', 'Zelfbeoordeling'], correct: 1 },
      { v: 'Wat is de replicatiecrisis?', opties: ['Te veel experimenten', 'Onderzoeksresultaten die niet herhaald kunnen worden', 'Gebrek aan onderzoekers', 'Te veel peer reviews'], correct: 1 },
    ]
  },
  {
    titel: 'De geheimen van de diepzee',
    tekst: `Meer dan tachtig procent van de oceaanbodem is nog onverkend. De diepzee begint op zo een tweehonderd meter diepte, waar geen zonlicht meer doordringt. Ondanks volledige duisternis, extreme druk en temperaturen rond het vriespunt bruist het er van het leven. Hydrothermale bronnen op de oceaanbodem spuwen water van vierhonderd graden naar buiten. Rondom deze schoorstenen leven ecosystemen die niet afhankelijk zijn van zonlicht maar van chemosynthese. Diepzeevissen hebben bioluminescentie ontwikkeld: ze maken hun eigen licht om prooien aan te trekken of partners te vinden. De reuzeninktvis, lang beschouwd als mythe, werd pas in 2004 voor het eerst levend gefilmd. De diepzee bevat ook enorme minerale rijkdommen, maar de ecologische risico's van diepzeemijnbouw zijn nauwelijks begrepen.`,
    vragen: [
      { v: 'Hoeveel procent van de oceaanbodem is nog onverkend?', opties: ['Vijftig procent', 'Zestig procent', 'Meer dan tachtig procent', 'Negentig procent'], correct: 2 },
      { v: 'Wat is chemosynthese?', opties: ['Fotosynthese onder water', 'Energiewinning zonder zonlicht', 'Een type koraal', 'Een diepzee-organisme'], correct: 1 },
      { v: 'Wanneer werd de reuzeninktvis voor het eerst levend gefilmd?', opties: ['1990', '1998', '2004', '2012'], correct: 2 },
      { v: 'Wat is bioluminescentie?', opties: ['Warmteproductie', 'Zelf licht maken', 'Kleuren veranderen', 'Geluid produceren'], correct: 1 },
    ]
  },
];
