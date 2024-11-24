import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from './index';
  
  class CustomerModel extends Model<InferAttributes<CustomerModel>,
  InferCreationAttributes<CustomerModel>> {
    declare id: CreationOptional<number>;
    declare name :string;
    declare password :string;
  }
  CustomerModel.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize: db,
    modelName: 'customers',
    timestamps: false,
  });
  
  export default CustomerModel;