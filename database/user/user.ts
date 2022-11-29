module.exports = (sequelize: any, DataTypes: any) => {
    const User = sequelize.define('User', {
            userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,       //主键
                autoIncrement: true,     //自增长
                comment: '用户ID'
                // defaultValue: "" 默认值
            },
            userName: {
                type: DataTypes.STRING(20),
                allowNull: false,
                comment: '用户名',
            },
            userPassword: {
                type: DataTypes.STRING(16),
                allowNull: false,
                comment: '用户密码'
            },
            userSex: {
                type: DataTypes.STRING(1),
                allowNull: false,
                comment: '用户性别'
            },
            userPhone: {
                type: DataTypes.STRING(11),
                allowNull: false,
                comment: '用户电话'
            },
            userEmail: {
                type: DataTypes.STRING(320),
                allowNull: false,
                comment: '用户邮箱'
            },
            userAvator: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: '用户头像'
            },
            userIsadmin: {
                type: DataTypes.STRING(1),
                allowNull: false,
                comment: '用户权限'
            }
        }, 
        {
            sequelize,
            tableName: 'users',
            timestamps: true,
            createdAt: 'createTime',
            updatedAt: 'updateTime'
        }

    )

    User.sync({ force: true });

    return User
}
