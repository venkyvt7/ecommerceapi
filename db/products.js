const {Model,DataTypes}=require('sequelize');

const sequelize=require('./db');


class Products extends Model{}

Products.init({
   
    name:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.DOUBLE
    },



},{
    sequelize,
    modelName:'products'
    
    })


    module.exports=Products;