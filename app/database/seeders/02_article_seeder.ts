import Article from '#models/article'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Article.createMany([{
      title: 'Hvorfor finnes Nordic Skywatch',
      slug: 'hvorfor-finnes-nordic-skywatch',
      authorId: 1,
      language: 'NO',
      country: 'NO',
      status: 'published',
      publishedAt: null,
      sourceTitle: 'Source Title',
      sourceUrl: 'source_url',
      canonicalUrl: 'canonicalUrl',
      excerpt: 'This is the excerpt.',
      body: `<p>Mellom september og november 2025 ble det gjort en rekke observasjoner av uidentifiserte droner over luftrommet i flere nordiske land, blant annet Norge, Sverige og Danmark. I Danmark var aktiviteten særlig høy. Politi og forsvar satte raskt inn store ressurser, statsministeren omtalte situasjonen som et sikkerhetspolitisk angrep og et mulig hybridangrep, og landet ba om støtte fra både NATO og EU.</p>

<p>Kort tid etter skjedde et markant skifte i den offentlige kommunikasjonen. Observasjoner som tidligere var bekreftet av myndighetene og dokumentert fra flere hold, forsvant gradvis ut av mediebildet. Sentralpolitiske og politifaglige stemmer begynte å så tvil om troverdigheten til hendelsene – til tross for at blant annet Københavns Lufthavn selv fastholdt at uautoriserte droner faktisk var til stede i luftrommet og var blitt fanget på video.</p>

<p>Her i Norge har kommunikasjonen vært enda mer knapp. Offentlige etater har i hovedsak valgt å tie eller bagatellisere, samtidig som ekspertkommentarer i pressen antyder massehysteri, feilidentifisering og banale forklaringer. Dette skjer til tross for at sentrale systemer for dronedeteksjon sto nede i samme tidsrom som de første observasjonene over både Danmark og Norge, og til tross for at norske myndigheter hevder at det «ikke er noen holdepunkter» for sammenheng mellom hendelsene.</p>

<p>Vi mener det er lite som tyder på at dette bare kan avskrives som massehysteri. Tvert imot peker tilgjengelige rapporter på at det faktisk ble observert store, uidentifiserte objekter over kritisk infrastruktur – ofte over lengre tid, med lysmønstre som etterligner luftfart, og uten at man har kunnet identifisere operatør, opprinnelse eller kapasitet. Når slike hendelser skjer over flyplasser og militære installasjoner, berører det både nasjonal sikkerhet og befolkningens rett til å være informert.</p>

<p>Samtidig ser vi et svært tydelig mønster i narrativkontrollen:</p>


<p>Først en akutt fase der myndighetene bekrefter reelle observasjoner, iverksetter omfattende tiltak og fremstår reaktive fremfor kontrollerende. Deretter en lukket fase der sensor-data (radar, FLIR, optiske opptak, rapporter) klassifiseres, politikere og journalister møter taushet, og uttalelsene blir korte og innholdsløse. Til slutt en definisjonsfase der fenomenet gradvis omtolkes fra «uidentifisert og potensielt farlig» til «trolig ufarlig», «hobbydroner» eller «ikke unormalt» – uten at noen data frigis og uten at saken faktisk blir løst.</p>

<p>Resultatet er et informasjonsvakuum. Det skaper et de facto informasjonsmonopol der noen få ikke-valgte tjenestemenn i praksis får definere hva som «har skjedd» og hva som ikke har skjedd. Dette er ikke nødvendigvis et uttrykk for én stor konspirasjon, men for en struktur der hensynet til hemmelighold, juridisk risiko og kapasitetsvern systematisk veier tyngre enn offentlighetens behov for innsikt.</p>

<p>Nordic Sky Watch finnes som en motvekt til dette vakuumet. Vi anerkjenner fullt ut at myndigheter må beskytte detaljer om sårbare installasjoner, sensorer, operative metoder og etterretningskapasitet. Men vi mener samtidig at selve observasjonene – det faktum at uidentifiserte objekter har operert i norsk og nordisk luftrom – som hovedregel kan og bør beskrives langt mer åpent enn i dag. Det må være mulig å gi delvis innsyn i rapporter og sensorbeskrivelser, med nødvendig sladding, uten å sette reelle sikkerhetshensyn i fare.</p>

<p>Vårt mål er derfor:</p>

<ul>
<li>å dokumentere og systematisere rapporterte hendelser over Nord-Europa</li>
<li>å synliggjøre mønstre i både observasjonene og i den offisielle kommunikasjonen</li>
<li>å arbeide for økt transparens fra norske og nordiske myndigheter</li>
<li>å gi et kunnskapsgrunnlag for borgere som ønsker å forstå fenomenet, ikke bare få det bortforklart</li>
</ul>
<p>Nordic Sky Watch er ikke laget for å overbevise de som helst vil avfeie alt som feilidentifisering eller hysteri. Denne siden er laget for dem som allerede har en genuin interesse, som ser at noe ikke henger sammen i dagens håndtering, og som ønsker mer data, mer åpenhet og et mer ærlig offentlig ordskifte om hva som faktisk skjer i luftrommet vårt.</p>`,
      coverImageUrl: 'cover_img_url',
    },
    {
      title: 'Test Artikkel 2',
      authorId: 1,
      language: 'NO',
      country: 'NO',
      status: 'draft',
      publishedAt: null,
      sourceTitle: 'Kilde Tittel',
      sourceUrl: 'source_url',
      canonicalUrl: 'canonicalUrl',
      excerpt: 'This is the excerpt for Test article 2.',
      body: `<p>Aute mollit excepteur pariatur sit pariatur cillum ex voluptate id non excepteur nulla aliquip. Sint quis sunt nulla non quis culpa duis ipsum sint proident minim. Magna duis non qui velit fugiat enim. Duis in nisi id nulla dolore quis. Sit enim ea ipsum minim commodo aliquip mollit ullamco.</p>
<h2>Undertittel 1</h2>
<p>Reprehenderit et exercitation nulla duis duis Lorem. Dolor eu fugiat cupidatat mollit ad quis tempor. Sint anim ut mollit ut elit eu proident esse exercitation qui fugiat eu ullamco. Adipisicing ad minim elit incididunt nulla sint minim.</p>
<h2>Undertittel 2</h2>
<p>Enim fugiat in excepteur cillum. Duis ad voluptate excepteur labore ex enim voluptate. Ex incididunt irure dolore proident ut occaecat sunt cillum. Minim amet sint voluptate fugiat culpa ea ullamco pariatur veniam. Nisi cillum et officia eiusmod elit incididunt nostrud exercitation ullamco.</p>`,
      coverImageUrl: 'cover_img_url',
    },
    {
      title: 'Random Artikkel',
      authorId: 1,
      language: 'NO',
      country: 'NO',
      status: 'draft',
      publishedAt: null,
      sourceTitle: 'Random Kilde Tittel',
      sourceUrl: 'source_url',
      canonicalUrl: 'canonicalUrl',
      excerpt: 'Random excerpt.',
      body: `<p>Aute mollit excepteur pariatur sit pariatur cillum ex voluptate id non excepteur nulla aliquip. Sint quis sunt nulla non quis culpa duis ipsum sint proident minim. Magna duis non qui velit fugiat enim. Duis in nisi id nulla dolore quis. Sit enim ea ipsum minim commodo aliquip mollit ullamco.</p>
<h2>Undertittel 1</h2>
<p>Reprehenderit et exercitation nulla duis duis Lorem. Dolor eu fugiat cupidatat mollit ad quis tempor. Sint anim ut mollit ut elit eu proident esse exercitation qui fugiat eu ullamco. Adipisicing ad minim elit incididunt nulla sint minim.</p>
<h2>Undertittel 2</h2>
<p>Enim fugiat in excepteur cillum. Duis ad voluptate excepteur labore ex enim voluptate. Ex incididunt irure dolore proident ut occaecat sunt cillum. Minim amet sint voluptate fugiat culpa ea ullamco pariatur veniam. Nisi cillum et officia eiusmod elit incididunt nostrud exercitation ullamco.</p>`,
      coverImageUrl: 'cover_img_url',
    }]
    )
  }
}