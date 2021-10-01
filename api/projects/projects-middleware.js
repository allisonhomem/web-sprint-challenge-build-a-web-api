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

//exports
module.exports = {validateProjectId};
