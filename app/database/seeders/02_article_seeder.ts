import Article from '#models/article'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Article.createMany([{
      title: 'Deteksjonssystem på OSL nede',
      authorId: 1,
      language: 'NO',
      country: 'NO',
      status: 'published',
      publishedAt: null,
      sourceTitle: 'Source Title',
      sourceUrl: 'source_url',
      canonicalUrl: 'canonicalUrl',
      excerpt: 'This is the excerpt.',
      body: 'This is the body.',
      coverImageUrl: 'cover_img_url',
    },
    {
      title: 'Test Artikkel 2',
      authorId: 1,
      language: 'NO',
      country: 'NO',
      status: 'published',
      publishedAt: null,
      sourceTitle: 'Kilde Tittel',
      sourceUrl: 'source_url',
      canonicalUrl: 'canonicalUrl',
      excerpt: 'This is the excerpt for Test article 2.',
      body: 'This is the body for test article 2.',
      coverImageUrl: 'cover_img_url',
    },
    {
      title: 'Random Artikkel',
      authorId: 1,
      language: 'NO',
      country: 'NO',
      status: 'published',
      publishedAt: null,
      sourceTitle: 'Random Kilde Tittel',
      sourceUrl: 'source_url',
      canonicalUrl: 'canonicalUrl',
      excerpt: 'Random excerpt.',
      body: 'Random body.',
      coverImageUrl: 'cover_img_url',
    }]
  )
  }
}