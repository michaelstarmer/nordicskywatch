import type { HttpContext } from '@adonisjs/core/http'

export default class AdminController {
    async show_login({view}: HttpContext)
    {
        return view.render('pages/login');
    }
}