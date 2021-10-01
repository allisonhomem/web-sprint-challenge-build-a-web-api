//imports
const express = require('express');
const router = express.Router();
const {validateProjectId} = require('./projects-middleware.js');


//ENDPOINTS
//Returns an array of projects as the body of the response.
router.get('/', async (req, res) => {

})

//Returns a project with the given `id` as the body of the response.
router.get('/:id', validateProjectId, async (req,res) => {

})

//Returns the newly created project as the body of the response.
router.post('/', async (req,res) => {

})

//Returns the updated project as the body of the response.
router.put('/:id', validateProjectId, async (req,res) => {

})

//Returns no response body.
router.delete('/:id', validateProjectId, async (req,res) => {

})

//Returns an array of actions (could be empty) belonging to a project with the given `id`.
router.get('/:id/actions', validateProjectId, async (req,res) => {
    
})

//exports
module.exports = router;

