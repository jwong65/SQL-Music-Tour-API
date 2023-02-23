const stages = require('express').Router()
const db = require('../models')

const { Stage } = db

//INDEX
stages.get('/', async(req, res)=>{
    try{
        const foundStage = await Stage.findAll()
        res.status(200).json(foundStage)
    }catch (error){
        res.status(500).json(error)
}})

//POST
stages.post('/', async(req, res)=>{
    try{
    const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully added a new Stage',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = stages