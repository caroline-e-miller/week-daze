const User = require('./User');
const Job = require('./Job');
const Status = require('./Status')

User.hasMany(Job, {
    foreignKey: 'user_id',
});

Job.belongsTo(User, {
    foreignKey: 'user_id'
});

Job.hasOne(Status, {
    foreignKey: 'status_id'
});

Status.belongsTo(Job, {
    foreignKey:'status_id'
})

module.exports = { User, Job, Status };