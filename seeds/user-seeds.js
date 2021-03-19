const { User } = require('../models');

const userData = [{
        username: 'grizz',
        password: 'psswrd1'

    },
    {
        username: 'Jane',
        password: 'psswrd2'
    },
    {
        username: 'Joe',
        password: 'psswrd3'
    },
    {
        username: 'Eric',
        password: 'psswrd4'
    },
    {
        username: 'Gene',
        password: 'psswrd5'
    },
    {
        username: 'Leane',
        password: 'psswrd6'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;