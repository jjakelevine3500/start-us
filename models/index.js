// import all models
const Member = require('./Member');
const Developer = require('./Developer');
const Service = require('./Service');
const Response = require('./Response');

//associations
Service.belongsTo(Member, {
    foreignKey: 'member_id'
});

Developer.hasMany(Response, {
    foreignKey: 'developer_id'
});

//Response associations
Response.belongsTo(Service, {
    foreignKey: 'service_id'
});
Response.belongsTo(Developer, {
    foreignKey: 'developer_id'
});

Response.hasMany(Service, {
    foreignKey: 'response_id'
});


module.exports = { Member, Developer, Service, Response };