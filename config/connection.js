//import Sequelize constructor from the library
const Sequelize = require(sequelize);

//create connection to out database & pass in MySQL info for username and password 
const sequelize - new Sequelize('MVC_Tech_Blog_Challenge_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;