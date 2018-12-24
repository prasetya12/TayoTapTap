'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerSchema extends Schema {
  up () {
    this.create('players', (table) => {
      table.increments()
      table.string('userId').nullable()
      table.string('name').nullable()
      table.integer('score').nullable()
      table.timestamps()
    })

    
  }

  down () {
    this.drop('players')
   
  }
}

module.exports = PlayerSchema
