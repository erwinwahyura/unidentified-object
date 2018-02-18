'use strict';
module.exports = function(sequelize, DataTypes) {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    tag: DataTypes.STRING,
    id_author: DataTypes.INTEGER,
    reading_time: DataTypes.INTEGER
  });
  // associate one-to-many
  article.associate = models => {
    article.hasMany(models.author)
  }

  return article;
};
