const City = require('../models/City')

  const citiesControllers = {
    getAllCities: async (req, res) =>{
        const allCities = await City.find()
        res.json({respuesta: allCities, success: true})
    },
    addNewCity: async (req, res) =>{
        const {city, country, description, src} = req.body
            const citySave = new City({
                city: city,
                country: country,
                src: src,
                description: description
            })
            await citySave.save()
            const allCities = await City.find()
            res.json({success: true, respuesta: allCities})            
    },
    updateCity: async(req, res) =>{
        const idCity = req.params.id
        const cityUpdate = await City.findOneAndUpdate({_id: idCity}, {...req.body}, {new: true})
        res.json({respuesta: cityUpdate, success: true})
    },
    deleteCity: async (req, res) => {
        const idCity = req.params.id
        await City.findOneAndRemove({_id: idCity})
        res.json({success: true})

    },
    getCity: async (req, res) => {
        const idCity = req.params.id
        const city = await City.findById(idCity)

        res.json({respuesta: city, success: true})
    }
  }


  module.exports = citiesControllers