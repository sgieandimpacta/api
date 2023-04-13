import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    const companies = await User.all()
    return ctx.response.send(companies, true)
  }

  public async store(ctx: HttpContextContract) {
    const payment = await User.create(ctx.request.body())
    return ctx.response.send(payment, true)
  }

  public async show(ctx: HttpContextContract) {
    const user = await User.find(ctx.request.param('id'))
    return ctx.response.send(user, true)
  }

  public async destroy(ctx: HttpContextContract) {
    const user = await User.findOrFail(ctx.request.param('id'))
    await user.delete()
  }
}
