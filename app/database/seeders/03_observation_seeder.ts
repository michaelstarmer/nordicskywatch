import Observation from '#models/observation'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Observation.createMany([{
      title: 'Observasjon tittel',
      description: 'Beskrivelse av observasjonen. Veniam ullamco elit veniam exercitation sit sunt irure ipsum nisi proident non mollit elit. Mollit in voluptate sit cupidatat Lorem incididunt ex. Adipisicing commodo pariatur ea in Lorem enim sint quis labore magna. Proident aliqua et deserunt eiusmod minim commodo veniam quis commodo consequat adipisicing eu. Elit Lorem magna do nulla nulla adipisicing labore aliqua. Anim consectetur aute minim sunt dolore laboris ad anim anim mollit ad mollit consectetur. Ex do ad aliquip tempor consectetur incididunt eu anim irure.',
      occurredAt: DateTime.fromISO('2014-08-06T13:07:04.054'),
      country: "NO",
      latitude: '59.947294',
      longitude: '10.756909',
      verificationLevel: 9,
      category: 'Droner',
      locAccuracyM: 5,
    },
    {
      title: 'Droner stengte Kastrup',
      description: 'Beskrivelse av droner førte til at København flyplass ble stengt ned. Veniam ullamco elit veniam exercitation sit sunt irure ipsum nisi proident non mollit elit. Mollit in voluptate sit cupidatat Lorem incididunt ex. Adipisicing commodo pariatur ea in Lorem enim sint quis labore magna. Proident aliqua et deserunt eiusmod minim commodo veniam quis commodo consequat adipisicing eu. Elit Lorem magna do nulla nulla adipisicing labore aliqua. Anim consectetur aute minim sunt dolore laboris ad anim anim mollit ad mollit consectetur. Ex do ad aliquip tempor consectetur incididunt eu anim irure.',
      occurredAt: DateTime.fromISO('2014-08-06T13:07:04.054'),
      country: "DK",
      latitude: '58.947294',
      longitude: '10.756909',
      verificationLevel: 9,
      category: 'Droner',
      locAccuracyM: 9,
    },
    ])
  }
}