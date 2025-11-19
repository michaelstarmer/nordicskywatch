import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Observation extends BaseModel {

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description?: string

  @column.dateTime()
  declare occurredAt: DateTime

  @column.dateTime()
  declare reportedAt?: DateTime

  @column() declare country: string
  @column() declare latitude: string
  @column() declare longitude: string
  @column() declare verificationLevel: number
  @column() declare category?: string
  @column() declare locAccuracyM?: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}