const {Model,DataTypes} =require('sequelize');

const sequelize=require('./db');


class Orders extends Model{};

Orders.init({

  userid:{
      type:DataTypes.STRING
  },
  productsid:{
      type:DataTypes.STRING
  }
  ,
    address:{
        type:DataTypes.STRING
    }
   

},{

sequelize,
modelName:"orders"

})


module.exports=Orders;