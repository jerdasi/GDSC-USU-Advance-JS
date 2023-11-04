const GDSC = (input) => {
    if (input === "G") console.log("Google")
    else if (input === "D") console.log("Developer")
    else if (input === "S") console.log("Students")
    else if (input === "C") console.log("Club")
    else console.log("Input tidak jelas!")
}

const period = "2023/2024";

// module.exports = GDSC;
// module.exports = { GDSC, period };

// export default GDSC;
export { GDSC, period };