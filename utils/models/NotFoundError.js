export default class NotFoundError extends Error {
    constructor(nameOfNotFound) {
        super();
        this.name = "Not Found Error";
        this.message = `Terjadi Kesalahan. Tidak dapat menemukan ${nameOfNotFound}`;
    }
}