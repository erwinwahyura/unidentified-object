'use strict';
module.exports = function(sequelize, DataTypes) {
  var author = sequelize.define('author', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  })
  // associate one-to-many
  author.associate = models => {
    author.belongsTo(models.article)
  }

  return author;
};
