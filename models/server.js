const express = require('express');
const cors = require('cors');

const { dbCon } = require('../database/config');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths={
            auth: '/api/auth',
            users: '/api/users'
            
        };



        //conectar DB
        this.connectDB();

        //middlewares
        this.middlewares();

        //rutas
        this.routes();


    }


    async connectDB(){
        await dbCon();
    }


    middlewares(){
        this.app.set('view engine', 'hbs');

        this.app.set('views', 'views');
        
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico (index.html)
        this.app.use(express.static('public'));

    }





    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.users, require('../routes/users'));
    }




    listen(){
        this.app.listen(this.port, () => {
        console.log('Server-port: ', this.port)
        });
    }


}

module.exports = Server;