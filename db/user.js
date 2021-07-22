const {Model,DataTypes}=require('sequelize');
const sequelize=require('./db');


class User extends Model{}

User.init({
    username: {
   
        type:DataTypes.STRING

    },

    email:{
   
        type:DataTypes.STRING

    },
    password:{
   
        type:DataTypes.STRING

    },
    address:{
        type:DataTypes.STRING
    }
   

},
{
sequelize,
modelName:'user'

}
)


module.exports=User;