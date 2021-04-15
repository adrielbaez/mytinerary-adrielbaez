const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
// const validator = require('../config/validator')

const {getAllCities, addNewCity, updateCity, deleteCity, getCity} = citiesControllers
router.route('/cities')
.get(getAllCities)
.post(addNewCity)

router.route('/city/:id')
.get(getCity)
.put(updateCity)
.delete(deleteCity)

module.exports = router