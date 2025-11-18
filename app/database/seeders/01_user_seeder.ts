import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'michael@nordicskywatch.no',
      username: 'michael',
      fullName: 'Michael Starmer',
      password: 'pEi5a2Xi',
    })
  }
}