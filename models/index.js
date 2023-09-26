const User = require('./User');
const Stats = require('./Stats');
const Prompt = require('./Prompts');
const Doodle = require('./Doodles');

User.hasMany(Stats, {
    foreignKey: 'username',
});

Stats.belongsTo(User, {
    foreignKey: 'username',
});

User.hasMany(Prompt, {
    foreignKey: 'username',
});

Prompt.belongsTo(User, {
    foreignKey: 'username',
});

User.hasMany(Doodle, {
    foreignKey: 'username',
});

Doodle.belongsTo(User, {
    foreignKey: 'username',
});

module.exports = { User, Stats, Prompt, Doodle };
