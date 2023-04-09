import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'

export default class CompaniesController {
  public async index(ctx: HttpContextContract) {
    const companies = (await Company.all()).sort((a, b) =>
      a.descricao_resumida.toLowerCase().localeCompare(b.descricao_resumida.toLowerCase())
    )
    return ctx.response.send(companies, true)
  }

  public async store(ctx: HttpContextContract) {
    const company = await Company.create(ctx.request.body())
    return ctx.response.send(company, true)
  }

  public async show(ctx: HttpContextContract) {
    const company = await Company.find(ctx.request.param('id'))
    return ctx.response.send(company, true)
  }

  public async update(ctx: HttpContextContract) {
    await Company.query().where('id', ctx.request.param('id')).update(ctx.request.body())
    return ctx.response.send(await Company.findOrFail(ctx.request.param('id')), true)
  }

  public async destroy(ctx: HttpContextContract) {
    const company = await Company.findOrFail(ctx.request.param('id'))
    await company.delete()
  }
}
