import "./utils/env"
import express from "express";
import http from "http";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import { applyMiddleware, applyRoutes } from "./utils";

// Error management
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

// Build application from the Express Framework
const application = express();

// Apply all the middle ware on the router
applyMiddleware(middleware, application);

// Apply all the routes on the router
applyRoutes(routes, application)

// Apply error middle ware on the router
applyMiddleware(errorHandlers, application)

// Create the http server
const server = http.createServer(application);

server.listen(process.env.PORT, () =>
    console.log(`Server is running http://localhost:${process.env.PORT}...`)
);

// For testing
module.exports = application; 