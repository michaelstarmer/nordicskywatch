import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, beforeSave } from '@adonisjs/lucid/orm'
import User from './user.js'


export default class Article extends BaseModel {
  public static table = 'articles'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare slug: string

  @column({ columnName: 'author_id' })
  declare authorId?: number | null

  @belongsTo(() => User, { foreignKey: 'authorId' })
  declare author: BelongsTo<typeof User>

  @column()
  declare language: string

  @column()
  declare country?: string

  @column()
  declare status: 'draft' | 'published' | 'archived'

  @column.dateTime()
  declare publishedAt?: DateTime | null

  @column()
  declare sourceTitle?: string

  @column()
  declare sourceUrl?: string

  @column()
  declare canonicalUrl?: string

  @column()
  declare excerpt?: string

  @column()
  declare body: string

  @column()
  declare coverImageUrl?: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt?: DateTime | null

  // @manyToMany(() => Tag, { pivotTable: 'article_tags', pivotTimestamps: true })
  // declare tags: ManyToMany<typeof Tag>

  @beforeSave()
  public static makeSlug(article: Article) {
    if (!article.slug && article.title) {
      article.slug = article.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    }
  }
}