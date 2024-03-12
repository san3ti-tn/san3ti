const { User } = require("../model")
require('dotenv').config()
const bcrypt = require("bcrypt")

module.exports = {
    createProfile: async (req, res) => {
        try {
            const {password,email} = req.body
            
            const checkemail = await User.findOne({ where: { email:email }})
            if (checkemail) {
                return res.status(400).json({ error: "Email already exists" })
            }
            const hashpassword = await bcrypt.hash(password, 10)

            const user = await User.create({
                email: email,
                password: hashpassword
            })
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    signin: async (req, res) => {
        
    },

    getAllUsers: async (req, res) => {
        try {
            const user = await User.findAll()
            res.status(201).json(user)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
}
