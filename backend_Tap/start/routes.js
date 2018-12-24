'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

Route.group(()=>{
	Route.post('players','PlayerController.store')
	Route.get('players','PlayerController.index')
	Route.get('players/:id','PlayerController.show')
	Route.put('players/:id','PlayerController.update')
	Route.delete('players/:id','PlayerController.delete')

	Route.get('assets','AdminController.api_index')
	
}).prefix('api/v1')


Route.get('admin','AdminController.index')
Route.post('update','AdminController.update')
Route.get('image','AdminController.image')



