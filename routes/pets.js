const express = require('express')
const router = express.Router()
const petCtrl = require('../controllers/pets')



router.get('/', petCtrl.getPets)
router.post('/', petCtrl.create)


module.exports = router