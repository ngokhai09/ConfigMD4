import express from "express";
import {AppDataSource} from './src/data-source'
import bodyParser from "body-parser";
import multer from 'multer';
const upload = multer();


const PORT = 3000;


AppDataSource.initialize().then(async connection =>{
    const app = express();
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
    app.use(bodyParser.json());
    app.use(express.json());

    app.listen(PORT, ()=>{
        console.log('App is running on: http://localhost:' + PORT );
    })
})

