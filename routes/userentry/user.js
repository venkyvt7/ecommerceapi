const express=require('express');
// const { where } = requi{re('sequelize/types');
const sequelize = require('../../db/db');
const User=require('../../db/user.js');


const router =express.Router();


router.post('/signup',(req,res)=>{

const {username,email,password,address}=req.body;

User.create(req.body).then(()=>{
res.send("inserted");

})


});

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
const userdetail= await User.findOne({where:{email:email}})

console.log(userdetail.password);

if(!userdetail)
{
    res.send("user Not Found");

}
else
{
  if(userdetail.password==password)
  {
      res.send(userdetail);
  }
  
  else{
 
    res.send("wrong password");

  }
}
// res.send(userdetail);
});


module.exports=router;
