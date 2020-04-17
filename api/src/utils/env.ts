import {resolve} from "path"
import {config} from "dotenv"

// Import environment variables in .env file
let result = config({ path: resolve(__dirname,"../../.env")})
if( result.error){
    throw result.error
}
console.log(".env file loaded")