var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require('express');
var router = express.Router(); /*可使用 express.Router 类创建模块化、可挂载的路由句柄*/
var bodyParser = require("body-parser");
var userModel = require('../../database/app').userModel;
// 解析以 application/json 和 application/x-www-form-urlencoded 提交的数据
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// 查询
router.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userModel.findAll()];
            case 1:
                users = _a.sent();
                res.send({
                    code: 200,
                    msg: 'success',
                    data: users
                });
                return [2 /*return*/];
        }
    });
}); });
// 添加
router.post('/add', urlencodedParser, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, userName, userPassword, userSex, userPhone, userEmail, userAvator, userIsadmin, create;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userName = _a.userName, userPassword = _a.userPassword, userSex = _a.userSex, userPhone = _a.userPhone, userEmail = _a.userEmail, userAvator = _a.userAvator, userIsadmin = _a.userIsadmin;
                return [4 /*yield*/, userModel.create({ userName: userName, userPassword: userPassword, userSex: userSex, userPhone: userPhone, userEmail: userEmail, userAvator: userAvator, userIsadmin: userIsadmin })];
            case 1:
                create = _b.sent();
                res.send({
                    code: 200,
                    msg: 'success',
                    data: {
                        message: create
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
// 删除
router.post('/delete', urlencodedParser, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var userID, deleteuser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userID = req.body.userID;
                return [4 /*yield*/, userModel.destroy({
                        where: {
                            userID: userID
                        }
                    })];
            case 1:
                deleteuser = _a.sent();
                res.send = {
                    code: 200,
                    msg: "success",
                    data: deleteuser
                };
                return [2 /*return*/];
        }
    });
}); });
// 修改
router.post('/update', urlencodedParser, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, userID, userName, userPassword, userSex, userPhone, userEmail, userAvator, userIsadmin, updateuser;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userID = _a.userID, userName = _a.userName, userPassword = _a.userPassword, userSex = _a.userSex, userPhone = _a.userPhone, userEmail = _a.userEmail, userAvator = _a.userAvator, userIsadmin = _a.userIsadmin;
                return [4 /*yield*/, userModel.update({
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
                    })];
            case 1:
                updateuser = _b.sent();
                res.send = {
                    code: 200,
                    msg: "success",
                    data: {
                        message: updateuser
                    }
                };
                return [2 /*return*/];
        }
    });
}); });
module.exports = router;
