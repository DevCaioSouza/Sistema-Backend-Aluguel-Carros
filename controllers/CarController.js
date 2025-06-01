// import Car from '../models/Car.js'

// class CarController {
//   static async createCar(req, res) {
//     const car = {
//       model: req.body.model,
//       color: req.body.color,
//       licensePlate: req.body.licensePlate,
//       rentPrice: req.body.rentPrice,
//       category: req.body.category,
//     }

//     try {
//       await Car.create(car)
//       res.status(200).json('Carro adicionado.')
//     } catch (error) {
//       console.log('Não foi possível completar a ação', error)
//     }
//   }

//   static async listAllCars(req, res) {
//     const allCars = await Car.findAll()

//     // const carObj = allCars.map(item => item.get())
//     const carObj = JSON.parse(JSON.stringify(allCars))

//     res.status(302).json(carObj)
//   }

//   static async getCar(req, res) {
//     const carPlate = req.params.plate

//     const car = await Car.findOne({
//       where: {
//         licensePlate: carPlate,
//       },
//     })

//     res.status(200).json(car)
//   }

//   static async updateCar(req, res){

//     const carPlate = req.params.plate 

//     await Car.update(req.body, {
//       where: {
//         licensePlate: carPlate
//       }
//     })

//     res.status(200).json('Carro atualizado')

//   }

//   static async deleteCar(req, res){

//     const carPlate = req.params.plate

//     await Car.destroy({
//       where: {
//         licensePlate: carPlate
//       }
//     })

//     res.status(204).json('Carro deletado com sucesso da tabela de carros da empresa')

//   }
// }

// export default CarController
