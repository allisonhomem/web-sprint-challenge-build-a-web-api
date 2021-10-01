//imports
const Projects = require('./projects-model.js');

//MIDDLEWARE FUNCTIONS
//checks that project with id exists
async function validateProjectId(req, res, next){
    try {
        const {id} = req.params

        const project = await Projects.get(id)

        if(!project){
            res.status(404).json({message: "no project exists with that id"})
        }
        else{
            req.project = project;
            next();
        }
    }
    catch {
        res.status(500).json({message: "an error occurred while validating user id"})
    }
}

//checks if request body has name and description
async function validateProjectNameDes(req,res,next){
    try {
        const {name, description} = req.body

        if(!name || !description){
            res.status(400).json({message: "please fill out all fields"})
        }
        else{
            next();
        }
    }
    catch{
        res.status(500).json({message: "an error occurred while validating project body"})
    }
}

//checks that completed field is not empty
// async function validateProjectCompleted(req,res,next){
//     try{
//         const {completed} = req.body

//         if(completed.notHere)
//     }
// }

//exports
module.exports = {validateProjectId, validateProjectNameDes};
