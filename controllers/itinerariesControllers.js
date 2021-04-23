const Itinerary = require('../models/Itinerary')
const Intenerary = require('../models/Itinerary')

const itinerariesControllers = {
    addItenerary: async (req, res) =>{ 
        try {
            const itenerarySave = new Intenerary(req.body)
            await itenerarySave.save()
            const allItineraries = await Itinerary.find()
            res.json({ success: true, respuesta: allItineraries })
        } catch (error) {
            res.json({ success: false, respuesta: `error add Itinerary: ${error}`})
    }
    },
    getAllItineraries: async (req, res) =>{
        try {
            const allItineraries = await Itinerary.find()
            res.json({succcess: true, respuesta: allItineraries})
        } catch (error) {
            res.json({ success: false, respuesta: `error get all Itineraries: ${error}`})
        }
    },
    updateItinerary: async (req, res) =>{
        try {
            const idItinerary = req.params.id
            const itineraryUpdate = await Itinerary.findOneAndUpdate({_id: idItinerary},{...req.body}, {new: true})
            res.json({success: true, respuesta: itineraryUpdate})
        } catch (error) {
            res.json({success: false, respuesta: `error update Itinerary: ${error}`})
        }
    },
    deleteItinerary: async (req, res) =>{
        try {
            const idItinerary = req.params.id
            await Itinerary.findOneAndRemove({ _id: idItinerary })
            res.json({ success: true, respuesta: 'Delete complete' })
        } catch (error) {
            res.json({ success: false, respuesta: `error delete Itinerary: ${error}`})
        }
    },
    getItinerary: async (req, res) => {
        try {
            const idItinerary = req.params.id
            const itinerary = await Itinerary.findById(idItinerary)
            res.json({ success: true, respuesta: itinerary })
        } catch (error) {
            res.json({ success: false, respuesta: `error get Itinerary: ${error}`})
        }
    },
    getItinerariesCity: async (req, res) => {
        const idCity = req.params.id
        try {
            let itineraries = await Itinerary.find({idCity}).populate('cityId')
            res.json({success:true , respuesta: itineraries})
        } catch (error) {
            res.json({success:true , respuesta: `error: ${error}`})
        }
    }
}
module.exports = itinerariesControllers