const sequelize = require('../config/connection');
const { Prompt } = require('../models');

const promptData = require('./promptData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Prompt.bulkCreate(promptData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
