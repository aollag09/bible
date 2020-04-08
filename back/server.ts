
import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";


// Error management
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

// Build router from the Express Framework
const router = express();

// Apply all the middle ware on the router
applyMiddleware(middleware, router);

// Apply all the routes on the router
applyRoutes(routes, router)

// Apply error middle ware on the router
applyMiddleware(errorHandlers, router)


// Create the http server
const { PORT = 3300 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
    console.log(`Server is running http://localhost:${PORT}...`)
);