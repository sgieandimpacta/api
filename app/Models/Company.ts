import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { uuid } from 'uuidv4'

export default class Company extends BaseModel {
  @beforeCreate()
  public static createUuid(payment: Company) {
    payment.id = uuid()
  }

  @column({ isPrimary: true })
  public id: string

  @column()
  public documento: string

  @column()
  public descricao: string

  @column()
  public descricao_resumida: string

  @column()
  public categoria: string

  @column()
  public representante: string

  @column()
  public tipo_contato: number

  @column()
  public contato: string

  @column.dateTime({ autoCreate: true })
  public data_cadastro: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
