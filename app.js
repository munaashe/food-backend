const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

const app = express();
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

/*app.get('/', (req, res) => {
    res.send('Hello');
})*/
dotenv.config();
//app.use(cors());
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

module.exports = app;