'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Type = app.model.define('type', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    order: INTEGER,
    svg:STRING,
  });
  return Type;
};