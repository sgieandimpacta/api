import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Payment from 'App/Models/Payment'

export default class PostsController {
  public async index(ctx: HttpContextContract) {
    const payments = await Payment.all()
    return ctx.response.send(payments, true)
  }

  public async store(ctx: HttpContextContract) {
    const payment = await Payment.create(ctx.request.body())
    return ctx.response.send(payment, true)
  }

  public async show(ctx: HttpContextContract) {
    const payment = await Payment.find(ctx.request.param('id'))
    return ctx.response.send(payment, true)
  }

  public async update(ctx: HttpContextContract) {
    await Payment.query().where('id', ctx.request.param('id')).update(ctx.request.body())
    return ctx.response.send(await Payment.findOrFail(ctx.request.param('id')), true)
  }

  public async destroy(ctx: HttpContextContract) {
    const payment = await Payment.findOrFail(ctx.request.param('id'))
    await payment.delete()
  }
}
