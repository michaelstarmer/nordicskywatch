import type { HttpContext } from '@adonisjs/core/http'
import Article from '#models/article'

export default class MainsController {
    async index({ view }: HttpContext) {
        const articles = await Article.query()
            .where('status', 'published')
            .limit(3)
        return view.render('pages/home', { articles });
    }
}