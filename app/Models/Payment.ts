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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
