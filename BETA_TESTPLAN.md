# Snellezer Beta Testplan

Gebruik dit plan voor een gesloten beta met 5 tot 10 lezers. Test met iPhone Safari, Android Chrome en een desktopbrowser. Laat iedere tester de stappen zonder hulp uitvoeren.

## Voorbereiding

- Gebruik een testaccount dat nog geen training heeft gedaan.
- Test minstens eenmaal als gast en eenmaal met een account.
- Noteer toestel, browser, datum en of de app als PWA is geinstalleerd.
- Deel geen echte prive- of bedrijfsgevoelige teksten tijdens de test.

## Kernroute: eerste waarde

1. Open de app als nieuwe gebruiker.
2. Rond de onboarding af en start de begintest.
3. Voltooi de eerste aanbevolen missie.
4. Controleer of de uitslag WPM, begrip en een heldere volgende stap toont.
5. Sluit de app volledig, open opnieuw en start de volgende startweeksessie.

Geslaagd wanneer: de gebruiker begrijpt zonder uitleg wat hij moet doen, ziet wat er beter ging en weet wat de volgende actie is.

## Kernroute: begintest

1. Open de begintest en noteer hoeveel testteksten beschikbaar zijn.
2. Start de officiële test twee keer en controleer dat een andere tekst verschijnt.
3. Beantwoord de drie vragen en controleer dat WPM en begrip samen worden getoond.
4. Kies `Meet met eigen tekst` en controleer dat de app naar Eigen tekst gaat.
5. Meet een bekende eigen tekst en controleer dat de officiële beginscore niet wordt overschreven.

Geslaagd wanneer: de officiële test een onbekende tekst roteert, drie vragen stelt en de eigen oefenmeting duidelijk apart houdt.

## Kernroute: Dyslexie Leeslab

1. Start les 1 en controleer of luisteren opnieuw kan zonder straf.
2. Maak bewust fouten en controleer of het juiste woord direct wordt uitgelegd.
3. Rond een les af met minder dan 80% en controleer dat de volgende les dicht blijft.
4. Rond dezelfde les af met minimaal 80% en controleer dat de volgende les opent en XP slechts eenmaal wordt toegekend.
5. Doorloop minimaal Luister & Kies, Letter Jacht, Woorddelen en Zin & Betekenis.
6. Pas lettertype, grootte, afstand en achtergrond aan en controleer de leesbaarheid op mobiel.

Geslaagd wanneer: de leerweg fouten gericht herhaalt, nauwkeurigheid boven snelheid beloont, geen diagnoseclaim maakt en zonder uitleg begrijpelijk blijft.

## Kernroute: eigen tekst

1. Open `Eigen tekst`.
2. Plak een Nederlandse tekst van minimaal 100 woorden.
3. Start dezelfde tekst achtereenvolgens in RSVP en chunks.
4. Sla de tekst op, heropen de app en controleer dat de tekst nog beschikbaar is.
5. Deel op Android vanuit de browser een artikel naar de geinstalleerde Snellezer-PWA.

Geslaagd wanneer: de gedeelde tekst als actieve oefentekst verschijnt. Bij minder dan 20 woorden moeten titel, link en tekst in het invoerveld klaarstaan, zonder automatische training.

## Betrouwbaarheid en privacy

1. Maak een account aan en voltooi een sessie.
2. Log uit en weer in; controleer voortgang en startweek.
3. Herhaal met een tweede testaccount om te bevestigen dat gegevens niet zichtbaar zijn tussen accounts.
4. Open accountbeheer en doorloop de tweestaps-verwijdering met een apart testaccount.
5. Open de app na een eerdere online sessie zonder netwerkverbinding.

Geslaagd wanneer: de app-shell offline opent, sessies lokaal blijven werken, synchronisatie geen fouten toont en accountverwijdering daadwerkelijk in Supabase is bevestigd.

## Waarnemingen per tester

Leg na afloop vast:

- Waar iemand stopte of twijfelde.
- Of de eerste trainingswaarde geloofwaardig voelde.
- Begrip tijdens de snelheidsrondes: te snel, passend of te traag.
- Een moment dat energie gaf en een moment dat energie kostte.
- Een concrete fout met schermafbeelding, toestel en stappen om hem te herhalen.

## Besluit na de beta

- Los eerst alle blokkades en herhaalbare fouten op.
- Pas tempo of moeilijkheid alleen aan wanneer begrip onder 70% blijft.
- Zet pas een open beta live wanneer ten minste vijf testers de kernroute zelfstandig afronden.
- Start de native TestFlight- en Play-test pas na een geslaagde privacy-, sync- en offlinecontrole.
