import { DataTypes } from 'sequelize'

import db from '../db/conn.js'

const Record = db.define('Record', {
  plate: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  initialDate: {
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  },
  finalDate: {
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  },
})

export default Record