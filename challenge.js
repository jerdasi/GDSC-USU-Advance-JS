class FormValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "Form Validation Error";
    }
}

const loginApiCall = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!username || !password) reject(new FormValidationError("Username dan Password tidak boleh kosong"))
            else {
                if (username !== "GDSCUSU") reject(new FormValidationError("Username tidak ditemukan"));
                else {
                    if (password === "1234567") resolve("Login Berhasil")
                    else reject(new FormValidationError("Username dan Password tidak sesuai"))
                }
            }
        }, 2000)
    })
}

loginApiCall("GDSCUSU", "1234567").then(res => console.log(res)).catch(err => console.log(`${err.name} | ${err.message}`));
loginApiCall("GDSCUSU").then(res => console.log(res)).catch(err => console.log(`${err.name} | ${err.message}`));
loginApiCall("GDSCUSU", "123457").then(res => console.log(res)).catch(err => console.log(`${err.name} | ${err.message}`));
loginApiCall("GDSCSU", "1234567").then(res => console.log(res)).catch(err => console.log(`${err.name} | ${err.message}`));