'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING,BOOLEAN ,TEXT} = Sequelize;
    await queryInterface.createTable('blog', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      typeId:INTEGER,
      userId: INTEGER,
      title:STRING,
      content:TEXT,
      intro:TEXT,
      viewCount:INTEGER,
      svg:TEXT,
      createdAt: DATE,
      updatedAt: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('blog');
  },
};