const http = require('http');
const dotenv = require('dotenv');
//const port = 5000;

const app =  require('./app');

const server = http.createServer(app);
dotenv.config();

server.listen(process.env.PORT);