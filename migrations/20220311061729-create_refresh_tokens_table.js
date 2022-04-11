'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('refresh_tokens', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      token: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      users_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

    await queryInterface.addConstraint('refresh_tokens', {
      type: 'foreign key',
      name: 'REFRESH_TOKENS_USER_ID',
      fields: ['users_id'],
      references: {
        table: 'users',
        fields: ['id']
      }
    })
  }, 

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('refresh_tokens');
  }
};
