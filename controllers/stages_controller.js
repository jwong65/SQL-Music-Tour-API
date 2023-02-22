const stages = require('express').Router()
const db = require('../models')

const { Stage } = db

//INDEX
stages.get('/', async(req, res)=>{
    try{
        const foundStage = await Event.findAll()
        res.status(200).json(foundStage)
    }catch (error){
        res.status(500).json(error)
}})



module.exports = stages