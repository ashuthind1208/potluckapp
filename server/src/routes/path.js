import Express from "express"
import {potluckModel}  from "../models/potluckModel.js";

const router = Express.Router();

router.get('/getGuests', async (req,res)=>{
    const list = await potluckModel.find({});
    res.json({"message":"all the guest list",list})
});

router.post('/addGuests', async (req,res)=>{
    const { name, dishName } = req.body

    const guest = new potluckModel({name, dishName});
    await guest.save();
    res.json({
        "message":"name is added", 
        name,dishName
        }
    )
})


export {router as pathRouter}