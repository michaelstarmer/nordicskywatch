import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'observations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.text('description').defaultTo(null)
      table.timestamp('occurred_at', { useTz: true }).notNullable()
      table.timestamp('reported_at', { useTz: true }).defaultTo(this.now())
      table.string('country', 2).notNullable() // NO, SE, DK, etc.
      table.string('latitude', 20).notNullable()
      table.string('longitude', 20).notNullable()
      table.integer('verification_level').notNullable().defaultTo(1) // 1..5
      table.string('category').defaultTo('uap') // uap|drone|unknown
      table.integer('loc_accuracy_m').defaultTo(null)
      table.timestamps(true) // created_at, updated_at with tz
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}