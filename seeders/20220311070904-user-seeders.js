'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'adib',
        profession: 'Kang Koding',
        role: 'admin',
        email: 'kangkoding@gmail.com',
        password: await bcrypt.hash('kangkoding1799', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'santi',
        profession: 'Kang Masak',
        role: 'student',
        email: 'kangmasak@gmail.com',
        password: await bcrypt.hash('kangmasak1799', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
