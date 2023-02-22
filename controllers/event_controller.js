const events = require ('express').Router()
const db = require ('../models')

const { Event } = db
//INDEX
events.get('/', async(req, res)=>{
    try{
        const foundEvent = await Event.findAll()
        res.status(200).json(foundEvent)
    }catch (error){
        res.status(500).json(error)
    }})

//FIND SPECIFIC EVENT SHOW ROUTE
events.get('/:id', async(req, res)=>{
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

//POST CREATE EVENT
events.post('/', async(req,res)=>{
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully added a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//UPDATE ROUTE
events.put('/:id', async(req, res)=>{
    try{
        const updatedEvent = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `This event has been updated ${updatedEvent}`
        })
    } catch (error){
        res.status(500).json(error)
    }
})

//DELETE ROUTE
events.delete('/:id', async(req, res)=>{
    try{
        const deletedEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `This has been deleted, ${deletedEvent}`
        })
    }catch(error){
        res.status(500).json(error)
    }
})
module.exports = events
