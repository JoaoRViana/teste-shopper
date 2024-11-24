import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class DriverModel extends Model<InferAttributes<DriverModel>, InferCreationAttributes<DriverModel>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: string;
  declare vehicle: string;
  declare comment: string;
  declare rating:number;
  declare value: number;
  declare km_mínimo: number;
}

DriverModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  vehicle: {
    type: DataTypes.STRING,
  },
  comment:{
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  value: {
    type: DataTypes.INTEGER,
  },
  km_mínimo: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'drivers',
  timestamps:false,
});

export default DriverModel;
