import Express  from "express";
import { pathRouter } from "./src/routes/path.js";
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
//require('dotenv').config()

const app = Express();

app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/_api',pathRouter);

//console.log("path "+)
let dotenv = require('dotenv').config({path:__dirname+'/.env'})
console.log(dotenv);


mongoose.connect(process.env['MONGODB_URL'])    
.then(console.log('mongoose connected'))



app.listen(3000,()=>{console.log('server started on 6000',{path:__dirname})})