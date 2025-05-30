import express from 'express'
import conn from './db/conn.js'
import CarController from './controllers/CarController.js'
import RecordController from './controllers/RecordController.js'
import cors from 'cors'
import pkg from 'pg'
import dotenv from 'dotenv'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'

dotenv.config()

const swaggerFile = YAML.load('./swagger.yaml')
const {Pool} = pkg
const app = express()
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false }
})

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get("/carros", async (req, res) => {
  const client = await pool.connect()

  try {
    const result = await client.query("SELECT * FROM cars")

    res.json(result.rows)
  } catch (error) {
    console.log(error)
  } finally {
    client.release()
  }
  res.status(404)
})

app.get("/carros/:plate", async(req, res) => {
  const client = await pool.connect()

  try {
    const selectedPlate = req.params.plate
    
    // const result = await client.query("SELECT * FROM cars WHERE plate = ")
    const result = await client.query(`SELECT * FROM "cars" WHERE "cars"."licensePlate" = '${selectedPlate}'`)

    res.json(result.rows)
  } catch (error) {
    console.log(error)
  } finally {
    client.release()
  }
  res.status(404)
})

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))

app.post('/carros', CarController.createCar)
app.post('/carros/alugar', RecordController.rentCar)
app.get('/carros/alugados', RecordController.showRentedCars)
app.get('/carros/disponiveis', RecordController.showAvailableCars)
app.get('/carros', CarController.listAllCars)
app.get('/carros/:plate', CarController.getCar)
app.put('/carros/:plate', CarController.updateCar)
app.delete('/carros/:plate', CarController.deleteCar)
