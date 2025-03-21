// -------------------------------Масиви та об'єкти-----------------------------
// // #67kfznmiMl
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(...arr)
console.log('-------------------------------')

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
// являється  масивом. Кожен автор має поля name та age.
interface IBook {
    title: string;
    pageCount: number;
    genre: string;
    authors: { name: string, age: number }[]
}

let books:IBook[] = [
    {
        title: 'Lord of the Rings',
        pageCount: 800,
        genre: 'fantazy',
        authors: [
            {name: 'J.R.Tolkien', age: 80},
        ]
    },
    {
        title: 'The Great Gatsby',
        pageCount: 200,
        genre: 'adventure',
        authors: [
            {name: 'author_1', age: 50},
            {name: 'author_2', age: 40},
        ],
    },
    {
        title: 'Sherlok Homes',
        pageCount: 300,
        genre: 'detective',
        authors: [
            {name: 'Konan Doyle', age: 75}
        ]
    }
]

console.log(books)
console.log('-------------------------------')

// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
interface IUser{
    name:string,
    username:string,
    password:string,
}

let users:IUser[] = [
    {
        name: "user_1",
        username: "Andrusha_ua",
        password: "Andrik007",
    },
    {
        name: "user_2",
        username: "ShadowWolf92",
        password: "Pass1234!",
    },
    {
        name: "user_3",
        username: "CyberNinja",
        password: "Hacker_007",
    },
    {
        name: "user_4",
        username: "PixelStorm",
        password: "qwerty2024",
    },
    {
        name: "user_5",
        username: "QuantumByte",
        password: "Xyz@9876",
    },
    {
        name: "user_6",
        username: "NeonTiger",
        password: "SecurePass99",
    },
    {
        name: "user_7",
        username: "GhostRider",
        password: "LetMeIn!",
    },
    {
        name: "user_8",
        username: "DarkPhoenix",
        password: "P@ssw0rd",
    },
    {
        name: "user_9",
        username: "SkyWalker",
        password: "StarWars123",
    },
    {
        name: "user_10",
        username: "CodeMaster",
        password: "DebugMeNow",
    }

];

console.log('Passwords of users:')
for (const user of users){
    console.log(user.password);
}

console.log('--------------------------------')

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде
// одновимірний масив з 21 значенням вичключаємо одразу

interface ITemperature{
    morning:number;
    afternoon:number;
    evening:number;
}

let temperatures:ITemperature[] = [
    {
        morning: -2,
        afternoon: 1,
        evening: -1,
    },
    {
        morning: 0,
        afternoon: 3,
        evening: -2,
    },
    {
        morning: -3,
        afternoon: 4,
        evening: -1,
    },
    {
        morning: -5,
        afternoon: 2,
        evening: -4,
    },
    {
        morning: 1,
        afternoon: 5,
        evening: 0,
    },
    {
        morning: -1,
        afternoon: 6,
        evening: -3,
    },
    {
        morning: -4,
        afternoon: 2,
        evening: -2,
    },
];
