import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import db from './index';
import DriverModel from './DriverModel';

class RideHistoryModel extends Model<InferAttributes<RideHistoryModel>, InferCreationAttributes<RideHistoryModel>> {
  declare id: CreationOptional<number>;
  declare customer_id: string;
  declare driver_id: number;
  declare origin: string;
  declare destination: string;
  declare distance: number;
  declare duration: string;
  declare value: number;
  declare date: Date;
  declare driver?: {
    id: number;
    name: string;
  };
}

RideHistoryModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
    },
    destination: {
      type: DataTypes.STRING,
    },
    distance: {
      type: DataTypes.INTEGER,
    },
    duration: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.FLOAT,
    },
  },
  {
    sequelize: db,
    underscored: true,
    modelName: 'rideHistories',
    timestamps: false,
  }
);

RideHistoryModel.belongsTo(DriverModel, { foreignKey: 'driver_id', as: 'driver' });

export default RideHistoryModel;
