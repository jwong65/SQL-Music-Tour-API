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
//FIND SPECIFC
stages.get('/:stage_name', async(req,res)=>{
    try{
        const foundStage = await Stage.findOne({
            where: {stage_name: req.params.stage_name}
        })
        res.status(200).json(foundStage)
    }catch(error){
        res.status(500).json(error)
    }
})
//POST
stages.post('/', async(req, res)=>{
    try{
    const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully added a new Stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
//UPDATE
stages.put('/:id', async(req, res)=>{
    try{
        const updatedStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `This event has been updated ${updatedStage}`
        })
    } catch (error){
        res.status(500).json(error)
    }
})
//DELETE
stages.delete('/:id', async(req, res)=>{
    try{
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `This has been deleted, ${deletedStage}`
        })
    }catch(error){
        res.status(500).json(error)
    }
})




module.exports = stages