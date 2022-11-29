const { Sequelize, DataTypes } = require('sequelize');

const db = {
    dialect: 'mysql',               //数据库类型
    host: 'localhost',              //主机名
    database: 'graduation_project', //数据库名
    username: 'root',               //用户名
    password: 'sqc19990905.'        //数据库密码
}

const sequelize = new Sequelize(
    db.database,
    db.username,
    db.password,
    {
        host: db.host,
        dialect: db.dialect,
        logging: true,
    }
);


// 数据库连接测试
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

// 关闭数据库连接（异步并返回一个Promise）
// sequelize.close()

const userModel = require('./user/user')(sequelize, DataTypes)

module.exports  = { sequelize, userModel }