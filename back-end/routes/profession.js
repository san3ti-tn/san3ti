const express = require('express');
const router = express.Router();

const {getAllProfession} = require('../controllers/profession')
const isAuthenticated = require('../middlewares/isUserAuthenticated.js')

router.get("/profession/getAll",isAuthenticated,getAllProfession)

module.exports = router    