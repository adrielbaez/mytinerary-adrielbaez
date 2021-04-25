const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title:{type: String, required: true},
    authorName:{type: String, required: true},
    authorPicture:{type: String, required: true},
    price:{type: Number, required: true, min:1 , max:5},
    duration:{type: Number, required: true, min:1 },
    likes:{type: Number, default: 0},
    hashtags:[{type: String}],
    comments:[{userId:{type: mongoose.Types.ObjectId, ref: 'user'},comment:{type: String}}],
    usersLiked:[{type: String}],
    cityId:{type: mongoose.Types.ObjectId, ref: 'city'}
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary