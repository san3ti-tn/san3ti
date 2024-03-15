const express = require('express')
const router = express.Router()



const { createProfile,getAllUsers,signin } = require('../controllers/users')

router.route('/').get(getAllUsers)

router.post('/signup',createProfile)

router.post('/signin',signin)




module.exports = router