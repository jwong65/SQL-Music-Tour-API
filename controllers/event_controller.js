const events = require ('express').Router()
const db = require ('../models')

const { Event } = db

events.get('/', async(req, res)=>{
    try{
        const foundEvent = await Event.findAll()
        res.status(200).json(foundEvent)
    }catch (error){
        res.status(500).json(error)
    }})
//     }
// })
// //FIND SPECIFIC EVENT
// events.get('/:id', async(req, res)=>{
//     try {
//         const foundEvent = await Event.findOne({
//             where: { event_id: req.params.id }
//         })
//         res.status(200).json(foundBand)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// //POST
// events.post('/', async(req,res)=>{
//     try {
//         const newEvent = await Event.create(req.body)
//         res.status(200).json({
//             message: 'Successfully added a new event',
//             data: newEvent
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })
module.exports = events