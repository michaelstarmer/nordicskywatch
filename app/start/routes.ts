/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ObservationsController from '#controllers/observations_controller'
import ArticlesController from '#controllers/articles_controller'
import MainsController from '#controllers/main_controller'

// router.on('/').render('pages/home')
router.get('/', [MainsController, 'index'])
router.get('/observasjoner', [ObservationsController, 'index'])
router.on('/innsyn').render('pages/innsyn')
router.on('/arkiv').render('pages/arkiv')
router.get('/artikler', [ArticlesController, 'index'])