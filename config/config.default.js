/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1583051700183_8569';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'heroku--default',
  };

  config.sequelize = process.env.NODE_ENV=="production"?{
    dialect: 'postgres',
    connectionUri:process.env.DATABASE_URL
  }:{
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username:'root',
    password:'fuckfuck',
    database: 'blog_development',
  };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ '*' ]
  };

  return {
    ...config,
    ...userConfig,
  };
};
