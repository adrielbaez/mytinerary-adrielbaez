const Itinerary = require('../models/Itinerary')
const Intenerary = require('../models/Itinerary')

const itinerariesControllers = {
    addItenerary: async (req, res) => {
        try {
            const itenerarySave = new Intenerary(req.body)
            await itenerarySave.save()
            const allItineraries = await Itinerary.find()
            res.json({ success: true, respuesta: allItineraries })
        } catch (error) {
            res.json({ success: false, respuesta: `error add Itinerary: ${error}` })
        }
    },
    getAllItineraries: async (req, res) => {
        try {
            const allItineraries = await Itinerary.find()
            res.json({ succcess: true, respuesta: allItineraries })
        } catch (error) {
            res.json({ success: false, respuesta: `error get all Itineraries: ${error}` })
        }
    },
    updateItinerary: async (req, res) => {
        try {
            const idItinerary = req.params.id
            const itineraryUpdate = await Itinerary.findOneAndUpdate({ _id: idItinerary }, { ...req.body }, { new: true })
            res.json({ success: true, respuesta: itineraryUpdate })
        } catch (error) {
            res.json({ success: false, respuesta: `error update Itinerary: ${error}` })
        }
    },
    deleteItinerary: async (req, res) => {
        try {
            const idItinerary = req.params.id
            await Itinerary.findOneAndRemove({ _id: idItinerary })
            res.json({ success: true, respuesta: 'Delete complete' })
        } catch (error) {
            res.json({ success: false, respuesta: `error delete Itinerary: ${error}` })
        }
    },
    getItinerary: async (req, res) => {
        try {
            const idItinerary = req.params.id
            const itinerary = await Itinerary.findById(idItinerary)
            res.json({ success: true, respuesta: itinerary })
        } catch (error) {
            res.json({ success: false, respuesta: `error get Itinerary: ${error}` })
        }
    },
    getItinerariesCity: async (req, res) => {
        const cityId = req.params.id
        try {
            let itineraries = await Itinerary.find({ cityId }).populate('cityId')
            res.json({ success: true, respuesta: itineraries })
        } catch (error) {
            res.json({ success: true, respuesta: `error: ${error}` })
        }
    },
    like: async (req, res) => {
        console.log('hola1');
        const itineraryId = req.body.id
        const userId = req.user._id
        try {
            let updateLikes = await Itinerary.findOneAndUpdate({ _id: itineraryId }, { $addToSet: { usersLiked: userId } }, { new: true })

            res.json({ success: true, respuesta: updateLikes })

        } catch (error) {
            console.log(error);
        }
    },
    dislike: async (req, res) => {
        console.log('hola2');
        const itineraryId = req.body.id
        const userId = req.user._id
        try {
            let updateLikes = await Itinerary.findOneAndUpdate({ _id: itineraryId }, { $pull: { usersLiked: userId } }, { new: true })
            res.json({ success: true, respuesta: updateLikes })
        } catch (error) {
            console.log(error);
        }
    },
    addComment: async (req, res) => {
        const { id, comment } = req.body
        const { firstName, userPicture } = req.user
        try {
            let addNewComment = await Itinerary.findOneAndUpdate({ _id: id }, { $push: { comments: { firstName, userPicture, comment } } }, { new: true })
            res.json({ success: true, respuesta: addNewComment })
        } catch (error) {
            console.log(error);
        }
    },
    updateComment: async (req, res) => {
        const {idComment, comment, idItinerary} = req.body
 
        try {
             // comparo el _id que me otorga mongoose de el itinerario y del comentario con el que le mando desde el front.
            let updateComment = await Itinerary.findOneAndUpdate({ _id: idItinerary, 'comments._id': idComment },{ $set: { 'comments.$.comment': comment } },{ new: true })

            res.json({ success: true, respuesta: updateComment })
        } catch (error) {
            console.log(error);
        }
    },
      deleteComment: async (req, res) => {
        const {idComment,idItinerary} = req.body

        try {
           let deleteComment = await Itinerary.findOneAndUpdate({_id: idItinerary},{$pull: {comments: {_id: idComment}}},{new: true})
           res.json({ success: true, respuesta: deleteComment })
        } catch (error) {
            console.log(error);
        }

    }
    
}
module.exports = itinerariesControllers

