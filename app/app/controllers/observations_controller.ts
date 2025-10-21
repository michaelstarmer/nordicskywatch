import type { HttpContext } from '@adonisjs/core/http'
import Observation from '#models/observation'

export default class ObservationsController {
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext)
  {
    const observations = await Observation
      .query()
      .orderBy('occurredAt', 'desc')
      .limit(10)

    // return response.json(observations);
    return view.render('pages/observasjoner', { observations });
  }


  async create({}: HttpContext) {}


  async store({ request }: HttpContext) {}


  async show({ params }: HttpContext) {}


  async edit({ params }: HttpContext) {}


  async update({ params, request }: HttpContext) {}


  async destroy({ params }: HttpContext) {}
}