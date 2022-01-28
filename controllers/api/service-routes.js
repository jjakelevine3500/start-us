const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Member, Developer, Response, Service } = require('../../models');

//get all services
router.get('/', (req, res) => {
    Service.findAll({
        attributes: [
            'id',
            'service_type',
            'service_description',
            'budget',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            
        ]
    })
})