import type { HttpContext } from '@adonisjs/core/http'
import Article from '#models/article'

export default class ArticlesController {
    async index({response, view}: HttpContext)
    {
        const articles = await Article.all();

        return view.render('pages/article')
    }

    async show({ response, view, request }: HttpContext)
    {
        const slug = request.param('slug');
        try {
            const article = await Article.findByOrFail('slug', slug);
            return view.render('pages/article', {article});
        } catch (error) {
            return response.json({success: false, error})
        }
    }
}