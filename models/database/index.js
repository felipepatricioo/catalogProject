const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_BASE, process.env.DB_USER,process.env.DB_PASS, process.env.DATABASE_URL, {
  host:  process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres"
});

async function connected(){
    try{
        await sequelize.authenticate();
        console.log('Connected to database');
    }catch (error){
        console.log('Error connecting to database');
    }
}


module.exports = {sequelize, connected};


