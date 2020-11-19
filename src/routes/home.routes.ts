import {calc, root} from './controllers/home.controller'

const {Router} = require('express')
const router = Router()

router.get('/', root)

router.post('/create', calc)

module.exports = router
