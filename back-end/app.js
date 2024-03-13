const express = require('express')
const cors = require('cors')
const usersRouter = require('./routes/users')
const professionsRouter = require('./routes/profession')
var morgan = require('morgan')
const app = express()
const port = 3000
app.use(morgan('dev'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', usersRouter)
app.use('/api', professionsRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})