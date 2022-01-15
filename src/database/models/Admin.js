import { DataTypes, Sequelize } from "sequelize"
const sequelize = new Sequelize('mysql')

export const Admin = sequelize.define("admins", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  login: {
    type: DataTypes.STRING(80),
    unique: true
  },
  password: DataTypes.STRING
}, {
  timestamps: false
})