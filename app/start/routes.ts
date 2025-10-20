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

// router.on('/').render('pages/home')
router.on('/').render('pages/root')
router.on('/test').render('pages/test')
router.get('/observation', [ObservationsController, 'index'])
