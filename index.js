import express from 'express'
import conn from './db/conn.js'
import CarController from './controllers/CarController.js'
import RecordController from './controllers/RecordController.js'

import YAML from 'yamljs'
const swaggerFile = YAML.load('./swagger.yaml')

import swaggerUi from 'swagger-ui-express'


const app = express()

app.use(express.json())

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

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
