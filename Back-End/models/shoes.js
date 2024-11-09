const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Shoes extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Shoes.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    shoe: {
        type: DataTypes.JSON, allowNull: false, required: true
    },
},
    {
        sequelize: sequelizeInstance, modelName: 'Shoes', timestamps: true, freezeTableName: true
    }
)
module.exports = Shoes;


