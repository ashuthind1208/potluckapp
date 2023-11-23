import Express  from "express";
import { pathRouter } from "./routes/path.js";
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from 'path';
import cors from 'cors'


const app = Express();
app.use(cors());
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/_api', pathRouter);



dotenv.config();

mongoose.connect(process.env.MONGODB_URL,console.log('mongoose connected'))



app.listen(3001,()=>{console.log('server started on 3001')})