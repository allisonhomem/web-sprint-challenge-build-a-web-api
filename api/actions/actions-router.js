//imports
const express = require('express');
const router = express.Router();
const {validateActionId} = require('./actions-middlware.js');
const Actions = require('./actions-model.js');

//ENDPOINTS
//Returns an array of actions (or an empty array) as the body of the response.

//Returns an action with the given `id` as the body of the response.
router.get('/:id', validateActionId, (req, res) => {
    const {id} = req.params

    Actions.get(id)
           .then(action => {
               res.status(200).json(action)
           })
})

//Returns the newly created action as the body of the response.

//Returns the updated action as the body of the response.

//Returns no response body.

//exports
module.exports = router;
