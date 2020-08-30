let express = require('express');
let app = express();
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req,res,next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

// handler for 404
app.use((req,res,next) => {
    res.status(404).send('Go home you lost dude')
})

// handler for 500



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server started ${PORT}`))