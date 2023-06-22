require('dotenv').config();
const express=require("express");
const app=express();
const bcrypt = require("bcrypt");
const cors=require('cors')
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const User=require("./models/usermodel")
app.use(cors());
app.use(express.json())
const mongodbPassword = process.env.MONGODB_PASSWORD
const mongodbUsername=process.env.MONGODB_USERNAME
mongoose.connect(`mongodb+srv://${mongodbUsername}:${mongodbPassword}@cluster0.wbxo6rf.mongodb.net/?retryWrites=true&w=majority`)

app.post("/api/register",async (req,res)=>{
    console.log(req.body)
    try{
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const user=new User({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
        });
        await user.save();
        res.json({status:"OK"})
    }
    catch(err){
        res.json({status:"error",error:"Duplicate email"})
    }
})
app.post("/api/login", async (req, res) => {
    console.log(req.body);
      const user = await User.findOne({
        email: req.body.email,
      });
      if(user)
      {
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (passwordMatch)
        {
        const token=jwt.sign(
          {
            name:user.name, 
            email:user.email,
          },'secret123'
        )
        return res.json({status:'ok',user:token})
        }
      }
      else
      {
        return res.json({status:'error',user:false})
      }
  });

app.listen(8000,()=>{
    console.log("server up and Running on port 8000")
})