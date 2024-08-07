
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const router = require('./Routes/routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use(bodyParser.json()); //adicionado para lidar com json
server.use(express.json());

server.use(router);

server.listen(3000, ()=>{ 
    console.log(`Servidor rodando em:http://localhost:${3000}`);
  
})