import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'articles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('slug').notNullable().unique()
      table.integer('author_id').unsigned().references('id').inTable('users').onDelete('SET NULL').index().nullable() // or use author_id FK if you have users
      table.string('language', 2).notNullable().defaultTo('en') // 'no','sv','da' later if you want
      table.string('country', 2).nullable() // NO|SE|DK if relevant per article
      table.string('status').notNullable().defaultTo('draft') // draft|published|archived
      table.timestamp('published_at', { useTz: true }).nullable()

      table.string('source_title').nullable()     // for archived news attribution
      table.string('source_url').nullable()       // canonical link if you’re archiving
      table.string('canonical_url').nullable()    // your preferred canonical URL (SEO)

      table.text('excerpt').nullable()
      table.text('body').notNullable()            // markdown or HTML; pick one and stay consistent
      table.string('cover_image_url').nullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.timestamp('deleted_at', { useTz: true }).nullable() // soft-delete friendly
      table.index(['status', 'published_at'])
      table.index(['country', 'language'])
      table.index(['slug'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}