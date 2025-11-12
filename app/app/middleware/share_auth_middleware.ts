import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ShareAuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {



    // If ctx.auth isn't available (can happen on some non-app routes), bail out
    if (!ctx.auth) {
      console.log('ctx auth not available')
      await next()
      return
    }

    await ctx.auth.check()

    const userData = {
      user: ctx.auth.user ?? null,
      isLoggedIn: ctx.auth.isAuthenticated ?? false,

    }

    ctx.view.share(userData)
    console.log(userData)

    const output = await next()
    return output
  }
}