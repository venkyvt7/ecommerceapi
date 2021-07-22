const express=require('express');
const app=express();
const PORT=process.env.PORT||4001;


const sequelize=require('./db/db');



sequelize.sync({
    // force:true

}).then(()=>{

console.log("db is ready");

})
const users=require('./routes/userentry/user')
const products=require('./routes/products/products');
const orders=require('./routes/orders/order');

app.use(express.json());
app.use(products);
app.use(users);
app.use(orders);
app.get('/',(req,res)=>{

res.send("100% working");

})


app.listen(PORT);