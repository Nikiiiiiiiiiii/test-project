import {createConnection} from 'typeorm'
import {arrDB} from "./entity/arr";

const express = require('express')
const readline = require('readline');
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

        await createConnection()
            .then(async () => await arrDB.clear()) //clear, чтобы постоянно обращаться к актульному id: 1 (Удобно для тестирования на работоспособность)

        app.listen(PORT)

    } catch (e) {
        console.log(e)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export let userArray: Array<number> = []

 start().then(() => {

     rl.question('Введите числа через пробел: ', (value: string) => {
         rl.close()
         userArray = value.trim().split(' ').map(parseFloat)
     })

 })
