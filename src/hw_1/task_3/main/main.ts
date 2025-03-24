namespace hw_1_task_3 {

    //завдання, де використовується document.write() пропущено

    //#4WrHwFTEop0
    // є масив
    interface IUser {
        name:string,
        age: number,
        status:boolean,
    }

    let users:IUser[] = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];

    // за допомоги циклу вивести:
    //     - користувачів зі статусом true
    // - користувачів зі статусом false
    // - користувачів які старші за 30 років

    console.log(`Users with 'True' status:`)
    for (let user of users) {
        // if (user.status ===  true){ //змінив після перегляду розбору дз
        if (user.status) {
            console.log(user.name)
        }
    }
    console.log("Users with 'False' status:")
    for (let user of users) {
        // if (user.status === false){ //змінив після перегляду розбору дз
        if (!user.status) {
            console.log(user.name)
        }
    }
    console.log("Users who are older than 30 y.o.:")
    for (let user of users) {
        if (user.age > 30) {
            console.log(user.name)
        }
    }

}