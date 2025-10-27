import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'michael@nordicskywatch.no',
      fullName: 'Michael Starmer',
      password: 'test123',
    })
  }
}