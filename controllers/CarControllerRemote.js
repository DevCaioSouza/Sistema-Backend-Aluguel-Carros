import dotenv from 'dotenv'
import pool from '../db/pool.js'

dotenv.config()

class CarControllerRemote {
  static async listAllCars(req, res) {
    const client = await pool.connect()

    try {
      const result = await client.query('SELECT * FROM cars')

      res.json(result.rows)
    } catch (error) {
      console.log(error)
    } finally {
      client.release()
    }
    res.status(404)
  }

  static async createCar(req, res) {
    const client = await pool.connect()

    const car = {
      model: req.body.model,
      color: req.body.color,
      licensePlate: req.body.licensePlate,
      rentPrice: req.body.rentPrice,
      category: req.body.category,
    }

    try {
      const result = await client.query(
        `INSERT INTO "cars" ("id","model","color","licensePlate","rentPrice","category","createdAt","updatedAt") VALUES (DEFAULT, '${car.model}', '${car.color}', '${car.licensePlate}', '${car.rentPrice}', '${car.category}', DEFAULT, DEFAULT) RETURNING "id","model","color","licensePlate","rentPrice","category","createdAt","updatedAt" `
      )
      res.json(result.rows)
    } catch (error) {
      console.log(error)
    } finally {
      client.release()
    }
  }

  static async getCar(req, res) {
    const client = await pool.connect()

    try {
      const selectedPlate = req.params.plate

      // const result = await client.query("SELECT * FROM cars WHERE plate = ")
      const result = await client.query(
        `SELECT * FROM "cars" WHERE "cars"."licensePlate" = '${selectedPlate}'`
      )

      res.json(result.rows)
    } catch (error) {
      console.log(error)
    } finally {
      client.release()
    }
    res.status(404)
  }
}

export default CarControllerRemote
