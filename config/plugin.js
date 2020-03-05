'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
// };

exports.sequelize = {
  enable:true,
  package:'egg-sequelize',
}
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
module.exports.passport = {
  enable: true,
  package: 'egg-passport',
};

module.exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};