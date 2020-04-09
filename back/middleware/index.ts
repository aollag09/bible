
/** Import all of middleware for providing a single connection point for our server.ts. 
 * And we will put more stuff here in the future. */

import { handleAPIDocs } from "./apiDocs";
import { handleBodyRequestParsing, handleCompression, handleCors } from "./common";

export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleAPIDocs
];