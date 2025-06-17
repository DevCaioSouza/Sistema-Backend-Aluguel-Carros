import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env

// const sequelize = new Sequelize('car-rent-system', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres',
//   port: 5432
// })

const sequelize = new Sequelize(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`)

try {
  
  sequelize.authenticate()
  console.log('Conectados ao postgres com sucesso')

} catch (error) {
  console.log('Não foi possível conectar. Erro: ', error)
}

export default sequelize