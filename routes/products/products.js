const express=require('express');
const sequelize = require('../../db/db');
const Products=require('../../db/products.js');
const router =express.Router();
router.post('/addproducts',(req,res)=>{

    // console.log("sdkds");
    Products.create(req.body).then(()=>{

        res.send("products is created");
    })



})

router.get('/getproducts',async (req,res)=>{

    console.log("sdkds");
  const AllProducts= await Products.findAll();

  res.send(AllProducts);



});

module.exports=router;