# Snellezer — design kit

Alles wat je nodig hebt om in Codex te beginnen.

```
snellezer-design-kit/
├── DESIGNBRIEF.md          De volledige brief, inclusief de prompt voor Codex (§8)
├── theme.ts                Design tokens — kopieer dit als eerste in je project
└── assets/
    ├── app-icon/           App-iconen, 1024 × 1024 SVG
    │   ├── icon-chunk.svg          ← de aanbevolen variant
    │   ├── icon-chunk-dark.svg
    │   ├── icon-chunk-light.svg
    │   ├── icon-sprong.svg
    │   ├── icon-monogram.svg
    │   └── icon-blikveld.svg
    └── illustraties/
        ├── studie.svg              Onboarding — leesdoel
        ├── werk.svg
        ├── plezier.svg
        ├── dyslexie.svg            Trainen — speciale modules
        ├── eigen-tekst.svg
        ├── leerweg.svg             Vandaag — leerwegkaart
        ├── snelheid.svg            Trainen — vaardigheidsgroepen
        ├── begrip.svg
        ├── blikveld.svg
        ├── focus.svg
        └── resultaat-hero.svg      Resultaatscherm
```

## Zo begin je

1. Zet `theme.ts` in je Expo-project.
2. Zet de `assets/`-map ernaast en installeer `react-native-svg` plus `react-native-svg-transformer`, dan kun je een SVG direct importeren als component.
3. Plak de prompt uit §8 van DESIGNBRIEF.md in Codex, met `theme.ts` erbij.
4. Voeg per scherm een export uit het designcanvas toe als referentiebeeld.

## App-icoon

`icon-chunk.svg` is de aanbevolen variant: drie regels tekst waarvan de middelste geel oplicht. Het gele balkje blijft op 29 px het eerste wat je ziet.

Voor de store heb je een PNG nodig. Zet de SVG om op 1024 × 1024, zonder transparantie. Voor Android adaptive icons: het groene vlak als achtergrondlaag, de drie balkjes als voorgrondlaag.

## Fonts

- Outfit (600) — cijfers en koppen
- Figtree (400, 600) — al het overige

Beide zitten in Google Fonts: `expo install @expo-google-fonts/outfit @expo-google-fonts/figtree`.

## Illustraties uitbreiden

De regels staan in §7 van de brief. Kort: platte vlakken, geen omlijning, maximaal drie kleuren uit het palet, achtergrond altijd de lichte tint van de hoofdkleur. Geen gezichten, gradiënten, schaduw of emoji.
