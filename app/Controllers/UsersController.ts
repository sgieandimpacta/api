import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store(ctx: HttpContextContract) {
    const payment = await User.create(ctx.request.body())
    return ctx.response.send(payment, true)
  }
}
