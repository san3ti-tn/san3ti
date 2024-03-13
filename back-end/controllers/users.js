const { User } = require("../model")
require('dotenv').config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
        try {
            const {email,password} = req.body

            if (!email || !password) {
                return res.status(404).json({ error: "password not found." });
            }

            const user = await User.findOne({ where: { email:email } });
            console.log("user :", user)

            if (!user) {
                return res.status(400).json({ error: "user not found." });
            }
            const passwordMatch = await bcrypt.compare(password, user.password)
            console.log("password :",password)
            console.log("user.password : ",user.password)
                console.log("compared password result :",passwordMatch)
            if (!passwordMatch) {
                return res.status(401).json({ error: "password is incorrect." });
            }

            const token = jwt.sign({
                    userId: user.id
                },
                        process.env.jwt_Secret,
                {
                    expiresIn:"86400",
                }

            )

            const base64Url = token.split('.')[1]

            console.log("base64Url :",base64Url)
            
            const base64 = base64Url.replace('-', '+').replace('_', '/')

            const payload = JSON.parse(atob(base64))

            res.status(200).json({ payload, token, message: 'succeeded' })

        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },

    // just for testing purpose nothing than that
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
