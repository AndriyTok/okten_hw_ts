namespace hw_1_task_4 {
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    function rectangle_square(x: number, y: number): number {
        return x * y;
    }

    console.log(rectangle_square(10, 2))

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
    function circle_square(r: number): number {
        return Math.PI * r ** 2
    }

    console.log(circle_square(9));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    function cylinder_square(h: number, r: number): number {
        return 2 * Math.PI * r * h
    }

    console.log(cylinder_square(9, 7));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
    function read_arr(arr: any[]): void {
        for (const item of arr) {
            console.log(item)
        }
    }

    read_arr([1, 2, 3, 4, 5, 6])

//#pghbnSB
// - створити функцію яка повертає найменьше число з масиву

//created random arr
    let random_array: number[] = []
    for (let i: number = 0; i < 10; i++) {
        random_array.push(Math.floor(Math.random() * 100))
    }
    console.log(random_array);

    function min_arr(array: number[]): number {
        let min: number = array[0]
        for (let i: number = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
            }
        }
        return min
    }

    console.log(min_arr(random_array))

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13

    function sum(arr: number[]): number {
        let sum: number = 0
        for (const item of arr) {
            sum += item
        }
        return sum
    }

    console.log(sum([1, 2, 3, 4, 5]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
    function swap(arr: any[], index1: number, index2: number) { //pos = position
        if (index1 < arr.length && index2 < arr.length) {
            let x: any = arr[index1]
            arr[index1] = arr[index2]
            arr[index2] = x
        }
        return arr
    }

    console.log(swap([1, 2, 3, 4, 5], 0, 4))

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
    interface ICurrency {
        currency: string,
        value: number,
    }

    function exchange(sumUAH: number, currencyValues: ICurrency[], exchangeCurrency: string): number | undefined {
        for (const item of currencyValues) {
            if (exchangeCurrency === item.currency) {
                return sumUAH / item.value
            }
        }
    }

    console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
}