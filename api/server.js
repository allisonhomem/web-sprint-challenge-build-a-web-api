//imports
const express = require('express');
//building routers
const projectsRouter = require('./projects/projects-router.js');
const actionsRouter = require('./actions/actions-router.js');
const server = express();


//configuring server
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

//exports
module.exports = server;
