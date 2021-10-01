//imports
const express = require('express');
const router = express.Router();
const {validateActionId, validateActionBody} = require('./actions-middlware.js');
const {validateProjectId} = require('../projects/projects-middleware.js');
const Actions = require('./actions-model.js');


//ENDPOINTS
//Returns an array of actions (or an empty array) as the body of the response.
router.get('/', (req, res) => {
    Actions.get()
           .then(actions => {
               res.status(200).json(actions)
           })
           .catch(err => {
               res.status(500).json({message: "an error occurred while fetching actions"})
           })
})

//Returns an action with the given `id` as the body of the response.
router.get('/:id', validateActionId, (req, res) => {
    const {id} = req.params

    Actions.get(id)
           .then(action => {
               res.status(200).json(action)
           })
           .catch(err => {
            res.status(500).json({message: "an error occurred while fetching the action with that id"})
           })
})

//Returns the newly created action as the body of the response.
router.post('/', validateActionBody, validateProjectId, (req, res) => {
    const {project_id, description, notes, completed} = req.body
    
    Actions.insert({project_id, description, notes, completed})
           .then(newAction => {
               res.status(201).json(newAction)
           })
           .catch(err => {
            res.status(500).json({message: "an error occurred while adding new action" })
           })
})

//Returns the updated action as the body of the response.
router.put('/:id', validateActionId, validateActionBody, (req, res) => {
    const {id} = req.params
    const {project_id, description, notes, completed} = req.body

    Actions.update(id, {project_id, description, notes, completed})
           .then(updatedAction => {
               res.status(200).json(updatedAction)
           })
           .catch(err => {
            res.status(500).json({message: "an error occurred while updating action" })
           })
})

//Returns no response body.
router.delete('/:id', validateActionId, (req, res) => {
    const {id} = req.params

    Actions.remove(id)
           .then(deletedAction => {
               res.status(200).json(deletedAction)
           })
           .catch(err => {
            res.status(500).json({message: "an error occurred while deleting action" })
           })
})

//exports
module.exports = router;
