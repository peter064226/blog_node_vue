'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Blog = app.model.define('blog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    typeId: INTEGER,
    userId: INTEGER,
    title: STRING,
    content: STRING,
    intro:STRING,
    viewCount:INTEGER,
    svg:STRING,
  });

  Blog.associate = function() {
    app.model.Blog.belongsTo(app.model.User);
  }

  return Blog;
};