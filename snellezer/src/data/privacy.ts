/** Eén bron voor de privacyverklaring: in de app en als openbare pagina (scripts/web-extras.mjs). */
export const PRIVACY_UPDATED = '22 september 2026';
export const PRIVACY_CONTACT = 'info@elev8solutions.nl';
export const PRIVACY_SECTIONS: {title: string; body: string[]}[] = [
  {title: 'Wie wij zijn', body: [
    'Snellezer wordt aangeboden door Elev8 Solutions, gevestigd te Almelo. Voor vragen over privacy kun je mailen naar ' + PRIVACY_CONTACT + '.',
  ]},
  {title: 'Wat er op je apparaat blijft', body: [
    'Snellezer werkt zonder account. Je naam, leeftijdsgroep, leesdoel, leesinstellingen, oefenresultaten en eigen teksten worden alleen lokaal op je apparaat bewaard: in de app-opslag op je telefoon of tablet, of in de browseropslag als je de webversie gebruikt.',
    'Ook e-books en PDF’s die je importeert, worden alleen op je apparaat bewaard en verwerkt. Ze worden nergens naartoe gestuurd.',
    'Wij ontvangen deze gegevens niet. Er is geen synchronisatie, geen advertentietracking en geen analysesoftware in de app.',
  ]},
  {title: 'Een artikel ophalen via een link', body: [
    'Als je een link invult om een artikel te importeren, haalt je apparaat die pagina rechtstreeks op bij de website zelf. Die website ziet dan, zoals bij elk bezoek, je IP-adres en technische verbindingsgegevens. Snellezer stuurt de link niet naar ons of naar een tussendienst.',
    'Alleen beveiligde links (https) naar openbare websites worden opgehaald. Gebruik deze functie niet voor vertrouwelijke links; je kunt tekst ook altijd zelf plakken.',
  ]},
  {title: 'Delen en doneren', body: [
    'Als je je groei deelt, opent het deelmenu van je apparaat met een tekst die je zelf verstuurt. Snellezer deelt niets automatisch.',
    'De doneerknop opent de eigen pagina van Stichting Lezen & Schrijven. Die stichting verwerkt een eventuele gift volgens haar eigen privacybeleid. Snellezer verwerkt geen betaalgegevens en houdt niet bij of je op de knop tikt.',
  ]},
  {title: 'De webversie', body: [
    'Wanneer je de webversie opent, verwerkt onze hostingpartij (Vercel) technische gegevens zoals je IP-adres om de pagina te kunnen leveren en te beveiligen. Dat gebeurt volgens het privacybeleid van die partij. Wij gebruiken die gegevens niet om je te volgen.',
  ]},
  {title: 'Kinderen', body: [
    'Snellezer heeft een kindermodus. Omdat er geen account is en er geen gegevens naar ons worden verstuurd, verzamelen wij geen gegevens van kinderen. Laat jonge kinderen de app bij voorkeur samen met een ouder of verzorger gebruiken.',
  ]},
  {title: 'Je gegevens wissen', body: [
    'In de app kun je bij Jouw leesplek je voortgang wissen. Je eigen teksten verwijder je in je bibliotheek. Verwijder je de app, of wis je de websitegegevens in je browser, dan zijn alle gegevens weg. Wij kunnen ze niet herstellen, omdat wij ze nooit hebben ontvangen.',
  ]},
  {title: 'Je rechten', body: [
    'Je hebt recht op inzage, correctie en verwijdering van persoonsgegevens. Omdat Snellezer je gegevens alleen op je apparaat bewaart, heb je die zelf volledig in handen. Heb je toch een vraag of klacht, mail dan naar ' + PRIVACY_CONTACT + '. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.',
  ]},
  {title: 'Wijzigingen', body: [
    'Als Snellezer in de toekomst bijvoorbeeld accounts of synchronisatie krijgt, passen we deze verklaring vooraf aan en vragen we waar nodig je toestemming.',
  ]},
];
