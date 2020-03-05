'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE ,BOOLEAN} = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    password:STRING,
    avatar:STRING,
    lastLoginTime:DATE,
    isAdmin:BOOLEAN,
    oauthName:STRING,
    oauthId:INTEGER,
  });
  return User;
};