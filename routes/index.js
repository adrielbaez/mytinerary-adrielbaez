const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const usersControllers = require('../controllers/usersControllers')
const activitiesControllers = require('../controllers/activitiesControllers')
const validator = require('../config/validator')
const passport = require('../config/passport')

const {getAllCities, addNewCity, updateCity, deleteCity, getCity} = citiesControllers

const {addItenerary,deleteItinerary, updateItinerary, getAllItineraries,getItinerary, getItinerariesCity , like, dislike, addComment,deleteComment, updateComment} = itinerariesControllers
const {addActivity, deleteActivity, getActivitiesItinerary, getActivity, getAllActivities, updateActivity} = activitiesControllers
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

router.route('/likes')
.post(passport.authenticate('jwt', {session: false}), like)

router.route('/dislike')
.post(passport.authenticate('jwt', {session: false}), dislike)

router.route('/comments')
.post(passport.authenticate('jwt', {session: false}),addComment)
.put(passport.authenticate('jwt', {session: false}),deleteComment)

router.route('/comments/update')
.put(passport.authenticate('jwt', {session: false}),updateComment)
// rutas para las users---------
router.route('/user/signup')
.post(validator, createNewAccount)

router.route('/user/signin')
.post(logInUser)

router.route('/user/logingLS')
.get(passport.authenticate('jwt', {session: false}) ,loginForzado)

// routes for activities
router.route('/activities')
.get(getAllActivities) 
.post(addActivity)

router.route('/activity/:id')
.get(getActivity)
.delete(deleteActivity)
.put(updateActivity)

router.route('/activities/itinerary/:id')
.get(getActivitiesItinerary)


module.exports = router