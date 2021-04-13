const User = require('./User');
const Job = require('./Job');
const Status = require('./Status');

User.hasMany(Job, {
    foreignKey: 'user_id'
});

Job.belongsTo(User, {
    foreignKey: 'user_id'
});

Job.hasMany(Status, {
    foreignKey: 'job_id'
});

Status.belongsTo(Job, {
    foreignKey: 'job_id'
});

User.hasMany(Status, {
    foreignKey: 'user_id'
});

Status.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Job, Status };