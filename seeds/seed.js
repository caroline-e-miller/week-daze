const sequelize = require('../config/connection');
const { User, Job, Status } = require('../models');

const userData = require('./userData.json');
const jobData = require('./jobData.json');
const statusData = require('./statusData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const job of jobData) {
    await Job.create({
      ...job,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  await Status.bulkCreate(statusData, {
    returning: true,
  })
  
  process.exit(0);
};

seedDatabase();

