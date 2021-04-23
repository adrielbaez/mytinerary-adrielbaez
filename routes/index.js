const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const validator = require('../config/validator')

const {getAllCities, addNewCity, updateCity, deleteCity, getCity} = citiesControllers

const {addItenerary,deleteItinerary, updateItinerary, getAllItineraries,getItinerary} = itinerariesControllers

router.route('/cities')
.get(getAllCities)
.post(validator, addNewCity)

router.route('/city/:id')
.get(getCity)
.put(updateCity) 
.delete(deleteCity)

router.route('/itineraries')
.post(addItenerary)
.get(getAllItineraries)

router.route('/itinerary/:id')
.get(getItinerary)
.put(updateItinerary) 
.delete(deleteItinerary)

router.route('/city/itineraries/:id')

module.exports = router