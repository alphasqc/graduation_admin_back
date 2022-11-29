var _a = require('sequelize'), Sequelize = _a.Sequelize, DataTypes = _a.DataTypes;
var db = {
    dialect: 'mysql',
    host: 'localhost',
    database: 'graduation_project',
    username: 'root',
    password: 'sqc19990905.' //数据库密码
};
var sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    logging: true
});
// 数据库连接测试
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }
// 关闭数据库连接（异步并返回一个Promise）
// sequelize.close()
var userModel = require('./user/user')(sequelize, DataTypes);
module.exports = { sequelize: sequelize, userModel: userModel };
