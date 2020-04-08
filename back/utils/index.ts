
import { Router } from "express";

type Wrapper = ((router: Router) => void);

/**
 * To apply the middleware, here a function which
 * grabs this list of middleware and applies it on a routerTo apply our middleware
 * @param middleware 
 * @param router 
 */
export const applyMiddleware = (
    middleware: Wrapper[],
    router: Router
) => {
    for (const f of middleware) {
        f(router);
    }
};
