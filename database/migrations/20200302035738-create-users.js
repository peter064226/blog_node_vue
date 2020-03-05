'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING,BOOLEAN } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username:STRING,
      password:STRING,
      avatar:STRING,
      lastLoginTime:DATE,
      oauthName:STRING,
      oauthId:INTEGER,
      isAdmin:BOOLEAN,
      createdAt: DATE,
      updatedAt: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};