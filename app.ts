const { sequelize } = require('./database/app');

const express = require('express')
const app = express(); // 用于声明服务器端所能提供的http服务

// 声明一个处理get请求的服务
app.get('/', async (req: any, res: any) => {
    await res.send("Hello Express");
});

(async () => {
    // 同步所有模型
    await sequelize.sync({ force: false });
})();

app.use('/user',require('./router/user/user'))

app.listen(3000);