//imports
const express = require('express');
const router = express.Router();
const {validateProjectId, validateProjectNameDes, validateProjectCompleted} = require('./projects-middleware.js');
const Projects = require('./projects-model.js');


//ENDPOINTS
//Returns an array of projects as the body of the response.
router.get('/', (req, res) => {
    Projects.get()
            .then(projects => {
                res.status(200).json(projects)
            })
})

//Returns a project with the given `id` as the body of the response.
router.get('/:id', validateProjectId, async (req,res) => {
    res.json(req.project)
})

//Returns the newly created project as the body of the response.
router.post('/', validateProjectNameDes, validateProjectCompleted, async (req,res) => {
    const {name, description, completed} = req.body

    Projects.insert({name, description, completed})
            .then(newProject =>{
                res.status(201).json(newProject)
            })
            .catch(err => {
                res.status(500).json({message: "an error occurred creating the new project"})
            })
})

//Returns the updated project as the body of the response.
router.put('/:id', validateProjectNameDes, validateProjectCompleted, validateProjectId, async (req,res) => {

})

//Returns no response body.
router.delete('/:id', validateProjectId, async (req,res) => {

})

//Returns an array of actions (could be empty) belonging to a project with the given `id`.
router.get('/:id/actions', validateProjectId, async (req,res) => {

})

//exports
module.exports = router;

