import Article from '#models/article'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Article.create({
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
    })
  }
}