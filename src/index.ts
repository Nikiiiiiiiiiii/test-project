import {createConnection} from 'typeorm'

const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'));

app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/home.routes'))

const PORT = 3000

async function start() {
    try {
        await createConnection().then(() => console.log('db connect'))

        app.listen(PORT, () => {
            console.log(`Server has been started on http://localhost:${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }
}

start()
