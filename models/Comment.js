const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        // define an id column
        id: {
          // use the special Sequelize DataTypes object provide what type of data it is
          type: DataTypes.INTEGER,
          // this is the equivalent of SQL's `NOT NULL` option
          allowNull: false,
          // instruct that this is the Primary Key
          primaryKey: true,
          // turn on auto increment
          autoIncrement: true
        },
        // define a comment column
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              // this means the comment must be at least one characters long
              len: [1]
            }
          },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id'
            }
          },
          post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'post',
              key: 'id'
            }
          }
      },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;