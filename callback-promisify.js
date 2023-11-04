import { promisify } from "node:util";
import { readFile } from "node:fs";
import { getUsers } from "./callback.js";

// const getUsersPromise = promisify(getUsers);

// getUsersPromise().then((result) => console.log(result)).catch(err => console.log(err.message));

// Versi Callback
// readFile("./assets/static/example.txt", "utf-8", (error, result) => {
//     if (error) console.log(error);
//     else console.log(result)
// })

// Versi Promise
const readFilePromise = promisify(readFile);
readFilePromise("./assets/static/example.txt", "utf-8").then((result) => console.log(result)).catch(err => console.log(err.message))