import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://admin:POSTGRES_PASSWORD.com:5432/board');

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()