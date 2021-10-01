//imports
const express = require('express');
const server = express();

//building routers
const projectsRouter = require('./projects/projects-router.js');
const actionsRouter = require('./actions/actions-router.js');

//configuring server
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

//exports
module.exports = server;
