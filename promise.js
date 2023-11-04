const withDrawMoney = (amount) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const balance = 100;

            if (amount <= balance) resolve(amount)
            else reject(new Error("Not enough money to Withdraw"))
        }, 3000)
    })
}

const buyCinemaTicket = (money) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const costPerTicket = 10;
            if (money >= costPerTicket) resolve("Ticket-1")
            else reject(new Error("Your Money Not Enought to Buy Ticket"))
        })
    })
}

const goInsideCinema = (ticket) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ticket) resolve("Enjoy The Show");
            else resolve("No Ticket, No Show!")
        })
    })
}

const watchMovie = () => {
    console.log("Menggunakan Promise");
    withDrawMoney(10)
        .then((money) => {
            return buyCinemaTicket(money)
        })
        .then((ticket) => {
            return goInsideCinema(ticket)
        })
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err.message)
        })
}

watchMovie();

// Bingung? Pake Async Await aja
const asyncWatchMovie = async () => {
    try {
        const money = await withDrawMoney(5);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket);
        console.log("Async Await", result);
    } catch (err) {
        console.log("Async Await", err.message);
    }
}

asyncWatchMovie();

// Apa perbedaan Penggunaan Promise Chaining dan Async Await dalam menghadapi proses yang saling berkaitan?
// Penggunaan Async Await membuat lebih mudah untuk dibaca -> Karena keliatan berjalan seperti synchronous
// Penggunaan Async Await membuat perbedaan dalam waktu pemrosesannya -> Karena ketika await dijalankan dan belum mendapat hasil, proses selanjutnya akan dijalankan sambil menunggu proses sebelumnya mendapat hasil