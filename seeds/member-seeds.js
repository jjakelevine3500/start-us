const sequelize = require('../config/connection');
const { Member, Service } = require('../models');

const memberdata = [
    {
        membername: 'alex123',
        email: 'alex@123.com',
        password: 'password123'
    },
    {
        membername: 'frank123',
        email: 'frank@123.com',
        password: 'password123'
    },
    {
        membername: 'john123',
        email: 'john@123.com',
        password: 'password123'
    },
    {
        membername: 'ben123',
        email: 'ben@123.com',
        password: 'password123'
    },
    {
        membername: 'tom123',
        email: 'tom@123.com',
        password: 'password123'
    },
    {
        membername: 'julia123',
        email: 'julia@123.com',
        password: 'password123'
    },

];

const seedMembers = () => Member.bulkCreate(memberdata, {individualHooks: true});

module.exports = seedMembers;