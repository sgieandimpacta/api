import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.double('valor')
      table.string('empresa')
      table.string('tipo')
      table.string('categoria')
      table.string('recorrencia')
      table.double('status').defaultTo(0)
      table.string('codigo_boleto').nullable()
      table.string('codigo_barras').nullable()
      table.string('chave_pix').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.date('data_vencimento')
      table.dateTime('data_cadastro', { useTz: true })
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
