import { Sequelize, DataTypes } from 'sequelize'; 
import 'dotenv/config';

export const sequelize = new Sequelize(

        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PASS , { 
        host: process.env.DB_HOST, 
        dialect: process.env.DIALECT
}); 


export const UserActivity = sequelize.define('UserActivity', { 

    name: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    }, 

    activity: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    }, 
});
