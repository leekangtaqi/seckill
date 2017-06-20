export default class UserController {
  async find (ctx) {
    const { app } = ctx
    try {
      let ranks = await app.ctx.services.RankService().find()
      ctx.body = ranks
    } catch (e) {
      throw e
    }
  }

  async create (ctx) {
    const { app } = ctx
    try {
      let rank = await app.ctx.services.RankService().create(ctx.request.body)
      ctx.body = rank
    } catch (e) {
      throw e
    }
  }

  async findById (ctx) {
    const { params, app } = ctx
    try {
      ctx.body = await app.ctx.services.RankService().findById(params.id)
    } catch (e) {
      throw e
    }
  }
}