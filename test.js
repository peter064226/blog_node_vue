const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('blog_development', 'root', 'fuckfuck', {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username:'root',
  password:'fuckfuck',
  database: 'blog_development',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Model = Sequelize.Model;

class Task extends Model {}
Task.init({ title: Sequelize.STRING }, { sequelize, modelName: 'task' });
class User extends Model {}
User.init({ username: Sequelize.STRING,password: Sequelize.STRING }, { sequelize, modelName: 'user' });

User.hasMany(Task); // Will add userId to Task model
Task.belongsTo(User); // Will also add userId to Task model


sequelize.sync()


