// import all models
const Member = require('./Member');
const Developer = require('./Developer');
const Service = require('./Service');


//associations
Service.belongsTo(Member, {
    foreignKey: 'member_id'
});

Member.hasMany(Service, {
    foreignKey: 'member_id'
});

Member.hasMany(Developer, {
    foreignKey: 'member_id'
});


module.exports = { Member, Developer, Service };