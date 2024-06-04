const { Model, DataTypes, Sequelize } = require('sequelize');

class User extends Model {
  static initiate(sequelize) {
    User.init({
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
}

module.exports = User;
