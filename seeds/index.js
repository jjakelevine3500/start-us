const seedMembers = require('./member-seeds');
const seedServices = require('./service-seeds');
const seedDevelopers = require('./developer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedMembers();
    console.log('--------------');

    await seedServices();
    console.log('--------------');

    await seedDevelopers();
    console.log('--------------');



    process.exit(0);
};

seedAll();