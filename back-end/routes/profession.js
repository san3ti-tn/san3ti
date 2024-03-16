const express = require('express');
const router = express.Router();

const {getAllProfession, createProfession,updateProfession,deleteProfession , getOne} = require('../controllers/profession')

const isAuthenticated = require('../middlewares/isUserAuthenticated.js')

router.get("/getAll",isAuthenticated,getAllProfession)
router.get("/getOne/:id",isAuthenticated,getOne)
router.post("/add",isAuthenticated,createProfession)

router.put("/update/:id",isAuthenticated,updateProfession)
router.delete("/delete/:id",isAuthenticated,deleteProfession)

module.exports = router    