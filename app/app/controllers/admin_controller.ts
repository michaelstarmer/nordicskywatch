import Article from '#models/article';
import User from '#models/user';
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash';

export default class AdminController {
    async show_login({view}: HttpContext)
    {
        return view.render('pages/login');
    }

    async login({ request, response, auth }: HttpContext)
    {
        const username = request.input('username');
        const password = request.input('password');

        
        const user = await User.findByOrFail('username', username);
        if (!user) {
            return response.json({success: false, msg: "User don't exist. Something is fucked."})   
        }
    

        const isValidPassword = await hash.verify(user.password, password);
        if (!isValidPassword) {
            return response.send("Wrong password nigger")
        }

        try {
            await auth.use('web').login(user);
            return response.redirect('/dashboard')
        } catch (error) {
            return response.badRequest('Invalid credentials.')
        }
        
        return response.json({ success: true, msg: "You are logged in." });
    }

    async logout({ auth, response }: HttpContext)
    {
        await auth.use('web').logout()
        return response.redirect('/login')
    }

    async show_dashboard({ view, auth, response }: HttpContext)
    {
        await auth.use('web').authenticate()
        const articles = await Article.all();

        console.log(`Loaded ${articles.length} articles.`);
        
        return view.render('pages/admin/dashboard', {articles});
    }

    async edit_article({ view, request }: HttpContext)
    {
        console.log('Edit article')
        const article_id = request.param('id');
        const article = await Article.find(article_id);

        console.log(`Editing article "${article?.title}" (ID: ${article?.id})`)

        return view.render('pages/admin/edit_article', { article });
    }
}