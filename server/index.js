import Express  from "express";
import { pathRouter } from "./src/routes/path.js";
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

const app = Express();

app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/_api',pathRouter);

mongoose.connect('mongodb+srv://ashuthind:Admin786@cluster0.dq7uy.azure.mongodb.net/potluck')
.then(console.log('mongoose connected'))



app.listen(3000,()=>{console.log('server started on 3000')})