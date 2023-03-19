const express = require('express')
const app = express()

// Start the server
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors: {
      origin: ["http://localhost:5173"],
      //methods: ["GET", "POST"]
    }
});

const cors = require('cors')

const bodyParser = require('body-parser');

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//Parse application/json
app.use(bodyParser.json());

//CORS is enabled for all origins
app.use(cors())

//Routes
app.use( require('./routes/index') );

// Define routes and middleware functions
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

//Database Connection
const db = require('./database/db');

try {
    db.authenticate().then( () => {
        console.log("Database connection susscesful!")
    })
} catch (error) {
    console.log("Error database connection")
}

module.exports = io
require('./sockets/socket');

server.listen(8000, () => {
  console.log('Listen on: ', 8000);
});

app.set('socketio', io)