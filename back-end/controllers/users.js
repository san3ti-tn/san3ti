const { User } = require("../model")
require('dotenv').config()

module.exports = {
    createProfile: async (req, res) => {
        
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
