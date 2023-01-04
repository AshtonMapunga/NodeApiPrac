const express = require('express')
const mongoose = require('mongoose')
const { unless } = require('express-unless')
const dbconfig = require('./dbconfig/dbConfig')
const auth = require('./middlewares/auth')
const erors = require('./middlewares/error')

const app = express()

mongoose.connect(dbconfig.db, {})
    .then(
        () => {
            console.log('database is connected')
        },
        (error) => {
            console.log('not connected to database' + error)
        }
    );

auth.authenticateToken.unless = unless;
app.use(
    auth.authenticateToken.unless({
        path: [
            { url: '/users/login', methods: ['POST'] },
            { url: '/users/register', methods: ['POST'] }

        ],
    })
)

app.use(express.json());
app.use('/users', require('./routes/router'));
app.use(erors.errorHandler);


app.listen(process.env.port || 9090, function() {
    console.log('conected to the server')
})