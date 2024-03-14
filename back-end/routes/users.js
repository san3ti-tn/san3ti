const express = require('express')
const router = express.Router()



const { createProfile,getAllUsers,signin } = require('../controllers/users')

router.route('/users').get(getAllUsers)

router.post('/users/signup',createProfile)

router.post('/users/signin',signin)




module.exports = router