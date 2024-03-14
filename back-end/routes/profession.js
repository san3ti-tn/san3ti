const express = require('express');
const router = express.Router();

const {getAllProfession, createProfession,updateProfession,deleteProfession , getOne} = require('../controllers/profession')

const isAuthenticated = require('../middlewares/isUserAuthenticated.js')

router.get("/profession/getAll",isAuthenticated,getAllProfession)
router.get("/profession/getOne/:id",isAuthenticated,getOne)
router.post("/profession/add",isAuthenticated,createProfession)

router.put("/profession/update/:id",isAuthenticated,updateProfession)
router.delete("/profession/delete/:id",isAuthenticated,deleteProfession)

module.exports = router    