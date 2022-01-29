const sequelize = require('../config/connection');
const { Developer } = require('../models');

const developerdata = [
    {
        devname: 'alicia456',
        email: 'alicia@456.com',
        password: 'password456'
    },
    {
        devname: 'heather456',
        email: 'heather@456.com',
        password: 'password456'
    },
    {
        devname: 'lisa456',
        email: 'lisa@456.com',
        password: 'password456'
    },
    {
        devname: 'chris456',
        email: 'chris@456.com',
        password: 'password456'
    },
    {
        devname: 'brad456',
        email: 'brad@456.com',
        password: 'password456'
    },
    {
        devname: 'jeff456',
        email: 'jeff@456.com',
        password: 'password456'
    },

];

const seedDevelopers = () => Developer.bulkCreate(developerdata, {individualHooks: true});

module.exports = seedDevelopers;