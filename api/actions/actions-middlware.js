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

//exports
module.exports = {validateActionId};
