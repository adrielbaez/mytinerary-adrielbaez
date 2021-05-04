const Activity = require('../models/Activity')

const activitiesControllers = {
    addActivity: async (req, res) => {
        try {
            const activitySave = new Activity(req.body)
            await activitySave.save()
            const allActivities = await Activity.find()
            res.json({success: true, respuesta: allActivities})
        } catch (error) {
            res.json({success: false, respuesta: `error add activity: ${error}`})
        }
    },
    getAllActivities: async (req, res)=>{
        try {
            const allActivities = await Activity.find()
            res.json({success: true, respuesta: allActivities})
        } catch (error) {
            res.json({success:false, respuesta: `error get all Activities: ${error}`})
        }
    },
    updateActivity: async (req, res)=>{
        try {
            const idActivity = req.params.id;
            const activityUpdate = await Activity.findOneAndUpdate({_id: idActivity}, {...req.body}, {new: true})
            res.json({success: true, respuesta: activityUpdate})
            
        } catch (error) {
            res.json({success: false, respuesta: `error update Activity: ${error}`})
        }
    },
    deleteActivity: async (req, res)=>{
        try {
            const idActivity = req.params.id
            await Activity.findOneAndRemove({_id: idActivity})
            res.json({success: true, respuesta: 'Delete complete'})
        } catch (error) {
            res.json({success: false, respuesta: `Error Delete Activity: ${error}`})
        }
    },
    getActivity: async (req, res) =>{
        try {
            const idActivity = req.params.id
            const activity = await Activity.findById(idActivity)
            res.json({success: true, respuesta: activity})
        } catch (error) {
            res.json({ success: false, respuesta: `error get activity: ${error}`})
        }
    },
    getActivitiesItinerary: async (req, res)=>{
        const itineraryId= req.params.id
        try {
            let activities = await Activity.find({itineraryId})
            res.json({success: true, respuesta: activities})
        } catch (error) {
            res.json({ success: false, respuesta: `error Activity: ${error}`})
        }
    }
}

module.exports = activitiesControllers