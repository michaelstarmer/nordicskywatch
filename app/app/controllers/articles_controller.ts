import type { HttpContext } from '@adonisjs/core/http'
import Article from '#models/article'

export default class ArticlesController {
    async index({response}: HttpContext)
    {
        const articles = await Article.all();

        return response.json(articles)
    }
}