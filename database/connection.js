const Sequelize = require("sequelize");

// const sequelize= new Sequelize("simplepos_db","root","password",{
//     host: '127.0.0.1',
//     dialect: 'mysql',
//     operatorsAliases: false
// });

var sequelize;
 
if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize("simplepos_db","root","password",{
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false
    });
  }


module.exports = sequelize;
global.sequelize = sequelize;


//postgres://yivembiwyjmhdz:3318b12315046efe96735e8b6cca492d5caf9da42ae37fa0685353078dbe3bcb@ec2-54-225-72-238.compute-1.amazonaws.com:5432/d8m18giasgs34u



