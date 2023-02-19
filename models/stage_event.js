'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stage_event.init({
    stage_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    stage_events_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull:false
    },
    event_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'stage_event',
    tableName: 'Stage Event',
    timestamps: false
  });
  return stage_event;
};