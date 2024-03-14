const express = require('express');
const router = express.Router();

const {getAllProfession, createProfession,updateProfession,deleteProfession} = require('../controllers/profession')

const isAuthenticated = require('../middlewares/isUserAuthenticated.js')

router.get("/profession/getAll",isAuthenticated,getAllProfession)

router.post("/profession/add",isAuthenticated,createProfession)

router.put("/profession/update/:id",isAuthenticated,updateProfession)
router.delete("/profession/delete/:id",isAuthenticated,deleteProfession)

module.exports = router    