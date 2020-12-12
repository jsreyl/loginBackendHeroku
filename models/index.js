//Index for the models
//Models are the tables in our DataBase
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./users'); //Import users model

//const seq = new Sequelize('DB_NAME','USER_NAME', 'passwd',{
    // You have successfully created a new database. The details are below.

    // Username: GlQGwyL9mR
    
    // Database name: GlQGwyL9mR
    
    // Password: 1tis28vWYx
    
    // Server: remotemysql.com
    
    // Port: 3306
    
    // These are the username and password to log in to your database and phpMyAdmin
const seq = new Sequelize('GlQGwyL9mR','GlQGwyL9mR', '1tis28vWYx',{
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'
});

const User = UserModel(seq, Sequelize);

seq.sync({ force: false })
.then(()=>{
    console.log('Tablas sincronizadas');
})

module.exports = {
    //Export all the models used
    User
}