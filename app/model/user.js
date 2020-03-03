'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE ,BOOLEAN} = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    password:STRING,
    lastLoginTime:DATE,
    isAdmin:BOOLEAN,
  });
  return User;
};