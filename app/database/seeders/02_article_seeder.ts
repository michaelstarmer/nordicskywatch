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
      body: `<p>Aute mollit excepteur pariatur sit pariatur cillum ex voluptate id non excepteur nulla aliquip. Sint quis sunt nulla non quis culpa duis ipsum sint proident minim. Magna duis non qui velit fugiat enim. Duis in nisi id nulla dolore quis. Sit enim ea ipsum minim commodo aliquip mollit ullamco.</p>
<h2>Undertittel 1</h2>
<p>Reprehenderit et exercitation nulla duis duis Lorem. Dolor eu fugiat cupidatat mollit ad quis tempor. Sint anim ut mollit ut elit eu proident esse exercitation qui fugiat eu ullamco. Adipisicing ad minim elit incididunt nulla sint minim.</p>
<h2>Undertittel 2</h2>
<p>Enim fugiat in excepteur cillum. Duis ad voluptate excepteur labore ex enim voluptate. Ex incididunt irure dolore proident ut occaecat sunt cillum. Minim amet sint voluptate fugiat culpa ea ullamco pariatur veniam. Nisi cillum et officia eiusmod elit incididunt nostrud exercitation ullamco.</p>`,
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