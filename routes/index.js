const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const usersControllers = require('../controllers/usersControllers')
const validator = require('../config/validator')
const passport = require('../config/passport')

const {getAllCities, addNewCity, updateCity, deleteCity, getCity} = citiesControllers

const {addItenerary,deleteItinerary, updateItinerary, getAllItineraries,getItinerary, getItinerariesCity} = itinerariesControllers

const {createNewAccount, logInUser, loginForzado} = usersControllers

// rutas para las ciudades-----------
router.route('/cities')
.get(getAllCities)
.post(addNewCity)

router.route('/city/:id')
.get(getCity)
.put(updateCity) 
.delete(deleteCity)

// rutas para las itinerarios---------
router.route('/itineraries')
.post(addItenerary)
.get(getAllItineraries)

router.route('/itinerary/:id')
.get(getItinerary)
.put(updateItinerary) 
.delete(deleteItinerary)

router.route('/city/itineraries/:id')
.get(getItinerariesCity)

// rutas para las users---------
router.route('/user/signup')
.post(validator, createNewAccount)

router.route('/user/signin')
.post(logInUser)

router.route('/user/logingLS')
.get(passport.authenticate('jwt', {session: false}) ,loginForzado)

module.exports = router