'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    blogId: INTEGER,
    content: STRING,
  });

  Comment.associate = function() {
    app.model.Comment.belongsTo(app.model.User);
  }

  return Comment;
};