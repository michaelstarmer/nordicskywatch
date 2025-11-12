import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ShareAuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (!ctx.auth) {
      await next()
    }
    await ctx.auth.check()
    ctx.view.share({
      ctx,
      user: ctx.auth.user,
      isLoggedIn: ctx.auth.isAuthenticated,

    })
    console.log({
      ctx,
      user: ctx.auth.user,
      isLoggedIn: ctx.auth.isAuthenticated,

    })

    /**

     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}