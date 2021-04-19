const City = require('../models/City')

const citiesControllers = {
    getAllCities: async (req, res) => {
        try {
            const allCities = await City.find()
            res.json({ success: true, respuesta: allCities })
        }
        catch (error) {
            res.json({ success: false, respuesta: error })
        }
    },
    addNewCity: async (req, res) => {
        try {
            const { city, country, description, src } = req.body
            const citySave = new City({ 
                city: city,
                country: country,
                src: src,
                description: description
            })
            await citySave.save()
            const allCities = await City.find()
            res.json({ success: true, respuesta: allCities })
        } catch (error) {
            res.json({ success: false, respuesta: 'error' })
        }
    },
    updateCity: async (req, res) => {
        try {
            const idCity = req.params.id
            const cityUpdate = await City.findOneAndUpdate({ _id: idCity }, { ...req.body }, { new: true })
            res.json({ success: true, respuesta: cityUpdate })
        } catch (error) {
            res.json({ success: false, respuesta: error })
        }
    },
    deleteCity: async (req, res) => {
        try {
            const idCity = req.params.id
            await City.findOneAndRemove({ _id: idCity })
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, respuesta: error })
        }

    },
    getCity: async (req, res) => {
        try {
            const idCity = req.params.id
            const city = await City.findById(idCity)
            res.json({ success: true, respuesta: city })
        } catch (error) {
            res.json({ success: false, respuesta: error })
        }
    }
}


module.exports = citiesControllers