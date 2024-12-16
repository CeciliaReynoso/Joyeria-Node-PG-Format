const express = require('express')
const morgan = require('morgan')
const joyasRoutes = require('./routes/joyasRoutes')
const cors = require('cors')
const errorMiddleware = require('./middlewares/errorMiddleware')
const reportMiddleware = require("./middlewares/reportMiddleware")
const {reportConsult} = require("./middlewares/otroMiddleware")
const app = express()

// middlewares
app.use(reportMiddleware)
app.use(express.json())
app.use(cors())

// Routes
app.use('/', joyasRoutes)

// middlewares globales
app.use(errorMiddleware)
app.use(reportConsult)
app.use(morgan('dev'))


module.exports = app