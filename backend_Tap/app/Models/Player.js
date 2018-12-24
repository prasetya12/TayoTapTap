'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Player extends Model {
	static get table(){
		return 'players'
	}

	static get primaryKey(){
		return'id'
	}
}

module.exports = Player
