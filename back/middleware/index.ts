
/** Import all of middleware for providing a single connection point for our server.ts. 
 * And we will put more stuff here in the future. */

import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} from "./common";
import { handleAPIDocs } from "./apiDocs";

export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleAPIDocs
];