'use strict'


var ModelAdmin = use('App/Models/Admin')

class AdminController {

	async index({view}){
		const Admin = await ModelAdmin.all()
		return view.render('welcome')
	}


	async update({view,request,response}){
		const Helpers = use('Helpers')
		const background = request.file('background',{
			types:['image'],
			size :'2mb'
		})

		const mainImage = request.file('mainImage',{
			types:['image'],
			size :'2mb'
		})

		await background.move(Helpers.publicPath('upload/'),{
			name:'background.jpg',
			overwrite:true
		})

		 mainImage.move(Helpers.publicPath('upload/'),{
			name:'main_image.jpg',
			overwrite:true
		})

		const dataAdmin =  request.only(['patern_combo','sound'])
		// const Admin = await ModelAdmin.find(1)

		const Admin = new ModelAdmin()
		// Admin.background = 'background.jpg'
		// Admin.main_image = 'main_image.jpg'
		Admin.patern_combo = dataAdmin.patern_combo
		

		const dataBackground={background:'background.jpg'}
		const dataMain = {main_image:'main_image.jpg'}

		const checkBackground = await ModelAdmin.findBy(dataBackground)
		const checkMain = await ModelAdmin.findBy(dataMain)

		console.log(checkMain)
		if(!checkMain && !checkBackground){
			const Admin = new ModelAdmin()
			Admin.background = 'background.jpg'
			Admin.main_image = 'main_image.jpg'
			await Admin.save()
		}

		

		return response.redirect('/')
	}

	async api_index({response}){
		let Admin = await ModelAdmin.find(7)
		return response.json(Admin)
	}

}

module.exports = AdminController
