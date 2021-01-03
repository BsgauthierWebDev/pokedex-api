const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
    res.send("What's shakin', bacon??")
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`)
})