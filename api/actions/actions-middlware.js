//imports
const Actions = require('./actions-model.js');

//MIDDLEWARE FUNCTIONS
//validates that an action exists with given id
async function validateActionId(req,res,next){
    try{
        const {id} = req.params
        const action = await Actions.get(id)

        if(!action){
            res.status(404).json({message: "no action exists with that id"})
        }
        else{
            req.action = action;
            next();
        }
    }
    catch{
        res.status(500).json({message: "an error occurred fetching the action with that id"})
    }
}

//validates request body to make sure required fields are filled out
function validateActionBody(req, res, next){
    try {
        const {project_id, description, notes, completed} = req.body

        if(!project_id || !description || !notes || typeof completed==="undefined"){
            res.status(400).json({message: "please fill out all fields"})
        }
        else {
            next();
        }
    }
    catch{
        res.status(500).json({message: "an error occurred validating the action with that id"})
    }
}

//exports
module.exports = {validateActionId, validateActionBody};
