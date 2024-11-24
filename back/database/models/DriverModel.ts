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
  declare nome: string;
  declare descrição: string;
  declare carro: string;
  declare avaliação: string;
  declare taxa: string;
  declare km_mínimo: number;
}

DriverModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
  descrição: {
    type: DataTypes.STRING,
  },
  carro: {
    type: DataTypes.STRING,
  },
  avaliação: {
    type: DataTypes.STRING,
  },
  taxa: {
    type: DataTypes.STRING,
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
