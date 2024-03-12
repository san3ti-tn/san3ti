const express = require('express')
const router = express.Router()



const { createProfile } = require('../controllers/users')


router.route('/users').get()


router.post('/users/signup',createProfile)
router.post('/users/signin',)




module.exports = router