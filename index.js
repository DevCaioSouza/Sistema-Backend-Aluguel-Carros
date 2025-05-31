import express from 'express'
import conn from './db/conn.js'
import CarController from './controllers/CarController.js'
import RecordController from './controllers/RecordController.js'
import cors from 'cors'
import pkg from 'pg'
import dotenv from 'dotenv'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'
import CarControllerRemote from './controllers/CarControllerRemote.js'

dotenv.config()

const swaggerFile = YAML.load('./swagger.yaml')
const app = express()

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// CONTROLLERS REMOTE DATABASE - NEON

app.get('/carros', CarControllerRemote.listAllCars)
app.get('/carros/:plate', CarControllerRemote.getCar)
app.post('/carros', CarControllerRemote.createCar)

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))


// CONTROLLERS DATABASE LOCAL - COMMENT REMOTE CALLS TO USE THEM

// app.post('/carros', CarController.createCar)
// app.post('/carros/alugar', RecordController.rentCar)
// app.get('/carros/alugados', RecordController.showRentedCars)
// app.get('/carros/disponiveis', RecordController.showAvailableCars)
// app.get('/carros', CarController.listAllCars)
// app.get('/carros/:plate', CarController.getCar)
// app.put('/carros/:plate', CarController.updateCar)
// app.delete('/carros/:plate', CarController.deleteCar)
