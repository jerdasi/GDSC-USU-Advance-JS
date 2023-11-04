import NotFoundError from "./utils/models/NotFoundError.js";

export const getUsers = (callback) => {
    setTimeout(() => {
        const isOffline = Math.random() > 0.5;
        const users = [
            {
                id: 1,
                name: "Jeremia"
            },
            {
                id: 2,
                name: "Daniel"
            },
            {
                id: 3,
                name: "Silitonga"
            }
        ];

        if (isOffline) callback(new Error("Terjadi kesalahan pada pemanggilan API"), null);
        else callback(null, users);
    }, 3000)
}

export const getProfile = (idUser, callback) => {
    setTimeout(() => {
        const isOffline = Math.random > 0.5;

        const profile = [
            {
                id: 1,
                id_user: 3,
                job: "Cyber Security"
            },
            {
                id: 2,
                id_user: 2,
                job: "Cyber Security"
            },
            {
                id: 3,
                id_user: 4,
                job: "Cyber Security"
            }
        ]

        const filteredProfile = profile.filter(item => item.id_user === idUser);
        if (isOffline) callback(new Error("Terjadi Kesalahan pada Pemanggilan API"), null);
        else {
            if (!filteredProfile.length) callback(new NotFoundError(`Id User ${idUser}`), null);
            else callback(null, filteredProfile)
        }
    }, 3000)
}

// Contoh Callback Hell
// getUsers((error, result) => {
//     if (error) console.log(error.message);
//     else {
//         getProfile(result[0].id, (error, result) => {
//             if (error) console.log(error.message)
//             else console.log(result)
//         })
//     }
// })