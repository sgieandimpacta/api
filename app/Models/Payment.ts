import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { uuid } from 'uuidv4'

export default class Payment extends BaseModel {
  @beforeCreate()
  public static createUuid(payment: Payment) {
    payment.id = uuid()
  }

  @column({ isPrimary: true })
  public id: string

  @column()
  public valor: number

  @column()
  public empresa: string

  @column()
  public tipo: string

  @column()
  public categoria: string

  @column()
  public recorrencia: string

  @column()
  public codigo_boleto: string

  @column()
  public codigo_barras: string

  @column()
  public chave_pix: string

  @column()
  public status: number

  @column.date()
  public data_vencimento: DateTime

  @column.dateTime({ autoCreate: true })
  public data_cadastro: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
