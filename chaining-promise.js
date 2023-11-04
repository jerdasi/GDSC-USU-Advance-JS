import { getUsers, getProfile } from "./callback.js";
import { promisify } from "node:util";

const getUsersPromise = promisify(getUsers);
const getProfilePromise = promisify(getProfile);

getUsersPromise()
    .then((result) => getProfilePromise(result[1].id))
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
