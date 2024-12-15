const express = require('express')
const morgan = require('morgan')
const joyasRoutes = require('./routes/joyasRoutes')
const cors = require('cors')
const errorMiddleware = require('./middlewares/errorMiddleware')
const reportMiddeleware = require("./middlewares/reportMiddleware")

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


// Routes
app.use('/', joyasRoutes)

// middlewares globales
app.use(errorMiddleware)
app.use(reportMiddeleware)

module.exports = app