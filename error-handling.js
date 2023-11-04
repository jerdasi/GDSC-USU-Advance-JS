import NotFoundError from "./utils/models/NotFoundError.js";

try {
    throw new NotFoundError("ID Mahasiswa 1")
} catch (err) {
    const { name, message, stack } = err;
    console.log(`Error Name: ${name}`);
    console.log(`Error Message: ${message}`);
    console.log(`Error Stack: ${stack}`);
}

console.log("\n === \n");

try {
    parsedToInt;
} catch (err) {
    const { name, message, stack } = err;
    console.log(`Error Name: ${name}`);
    console.log(`Error Message: ${message}`);
    console.log(`Error Stack: ${stack}`);
}