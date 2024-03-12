const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('profession', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: "mysql",
})

const User = require('../model/user.model.js')(sequelize, DataTypes);


const db = {}

db.sequelize= sequelize
db.Sequelize= Sequelize
db.User= User






const connect = async () => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync({force :false})
        console.log('Connected to database successfully')
    } catch (error) {
        console.error('Connection failed to connect with database', error)
    }
}


connect();

module.exports = db;