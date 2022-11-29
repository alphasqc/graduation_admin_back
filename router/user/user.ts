const express = require('express');
const router = express.Router();   /*可使用 express.Router 类创建模块化、可挂载的路由句柄*/
const bodyParser = require("body-parser");

const { userModel } = require('../../database/app')

// 解析以 application/json 和 application/x-www-form-urlencoded 提交的数据
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 查询
router.get('/', async (req: any, res: any) => {
    const users = await userModel.findAll();
    res.send({
        code: 200,
        msg: 'success',
        data: users
    });
});

// 添加
router.post('/add', urlencodedParser, async (req: any, res: any) => {
    const { userName, userPassword, userSex, userPhone, userEmail, userAvator, userIsadmin } = req.body
    const create = await userModel.create({ userName, userPassword, userSex, userPhone, userEmail, userAvator, userIsadmin });
    res.send({
        code: 200,
        msg: 'success',
        data: {
            message: create
        }
    });
})

// 删除
router.post('/delete', urlencodedParser, async (req: any, res: any) => {
    const { userID } = req.body
    const deleteuser = await userModel.destroy({
        where: {
            userID: userID
        }
    })
    res.send = {
        code: 200,
        msg: "success",
        data: deleteuser
    }
})

// 修改
router.post('/update', urlencodedParser, async (req: any, res: any) => {
    const { userID, userName, userPassword, userSex, userPhone, userEmail, userAvator, userIsadmin } = req.body
    const updateuser = await userModel.update({
        userName: userName,
        userPassword: userPassword,
        userSex: userSex,
        userPhone: userPhone,
        userEmail: userEmail,
        userAvator: userAvator,
        userIsadmin: userIsadmin

    }, {
        where: {
            userID: userID
        }
    }
    )
    res.send = {
        code: 200,
        msg: "success",
        data: {
            message: updateuser
        }
    }
})

module.exports = router;