namespace hw_1_task_6 {
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

    const strings: string[] = ['hello world', 'lorem ipsum', 'javascript is cool']
    strings.forEach(element => console.log(element.length))

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

    const upper_strings: string[] = strings.map(value => value.toUpperCase())
    console.log(upper_strings);

// #ClDsAm7xba7
// - Перевести до нижнього регістру наступні стрінгові значення

    const strings_2: string[] = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']

    const lower_strings: string[] = strings_2.map(value => value.toLowerCase())
    console.log(lower_strings);

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// підглянув з розбору
// const str: string = ' dirty string   '
// console.log(str.trim())

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

    const str: string = 'Ревуть воли як ясла повні';
    const str_to_array = (str: string): string[] | string => {
        if (str) {
            return str.split(' ')
        } else {
            return ''
        }

    }
    const arr: string | string[] = str_to_array(str)
    console.log(arr);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

    const array: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
    const new_str_array: string[] = array.map(value => value.toString())
//з консультації:
// const strings: string[] = numbers.map(number => number + '');

    console.log(new_str_array);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.

    const nums: number[] = [11, 21, 3];

    function sortNums(array: number[], direction: string): number[] {
        if (direction !== 'asc' && direction !== 'desc') {
            console.log('Please, choose correct direction! (asc/desc')
        }

        const sortedArray: number[] = array.sort((a, b) => direction === 'asc' ? a - b : b - a)

        console.log(sortedArray)
        return sortedArray
    }

    sortNums(nums, 'asc') // [3,11,21]
    sortNums(nums, 'desc') // [21,11,3]

// #yo06d74c1C
// - є масив
    interface ICourse {
        title: string,
        monthDuration: number;
        id?: number,
    }

    let coursesAndDurationArray: ICourse[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
// -- відсортувати його за спаданням за monthDuration
    const sorted_courses: ICourse[] =
        [...coursesAndDurationArray].sort((a: ICourse, b: ICourse): number => {
            return b.monthDuration - a.monthDuration
        })
    console.log(sorted_courses)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    const filtered_courses: ICourse[] = coursesAndDurationArray.filter(value => value.monthDuration >= 5)
    console.log(filtered_courses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
    const mapped_courses: ICourse[] = coursesAndDurationArray.map(
        (value: ICourse, index: number): ICourse => {
            return {id: index + 1, ...value}
        }
    )
    console.log(mapped_courses)


// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

    interface IDeck {
        cardSuit: string,
        value: any,
        color: string,
    }

    const deck: IDeck[] = []

    const suits: string[] = ['spade', 'diamond', 'heart', 'clubs']
    const values: any[] = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king']

    suits.forEach((suit: string): void => {
        values.forEach((value: string | number): void => {
            deck.push({
                cardSuit: suit,
                value: value,
                color: suit === 'diamond' || suit === 'heart' ? 'red' : 'black',
            })
        })
    })

// - знайти піковий туз

    const ace_of_spades: IDeck[] | IDeck | undefined =
        deck.find((value: IDeck): boolean => value.cardSuit === 'spade' && value.value === 'ace' && value.color === 'black')
    console.log(ace_of_spades)

// - всі шістки

    const cards_6: IDeck | IDeck[] | undefined = deck.filter((value: IDeck): boolean => value.value === 6)
    console.log(cards_6);

// - всі червоні карти

    const red_cards: IDeck | IDeck[] | undefined = deck.filter((value: IDeck): boolean => value.color === 'red')
    console.log(red_cards);

// - всі буби

    const diamond_cards: IDeck | IDeck[] | undefined = deck.filter((value: IDeck): boolean => value.cardSuit === 'diamond')
    console.log(diamond_cards);

// - всі трефи від 9 та більше
    const club_cards: IDeck | IDeck[] | undefined =
        deck.filter((card: IDeck): boolean => card.cardSuit === 'clubs' && (card.value >= 9 ||
            ['ace', 'jack', 'queen', 'king'].includes(card.value)))
    console.log(club_cards);

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

    type Card = {
        card_value: any;
        card_color: string;
    }

    type Accumulator = {
        spades: Card[],
        diamonds: Card[],
        hearts: Card[],
        clubs: Card[],
    }


    const suit_object =
        deck.reduce((accumulator: Accumulator, card: IDeck) => {
            if (card.cardSuit === 'spade') {
                accumulator.spades.push({card_value: card.value, card_color: card.color})
            } else if (card.cardSuit === 'diamond') {
                accumulator.diamonds.push({card_value: card.value, card_color: card.color})
            } else if (card.cardSuit === 'heart') {
                accumulator.hearts.push({card_value: card.value, card_color: card.color})
            } else if (card.cardSuit === 'clubs') {
                accumulator.clubs.push({card_value: card.value, card_color: card.color})
            }
            return accumulator
        }, {
            spades: [],
            diamonds: [],
            hearts: [],
            clubs: [],
        })
    console.log(suit_object)

// #4LJn7zBx
// взяти з arrays.js масив coursesArray

    type Course = {
        title: string,
        monthDuration: number,
        hourDuration: number,
        modules: string[],
    }

    const coursesArray: Course[] = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

// --написати пошук всіх об'єктів, в яких в modules є sass

    const sass_objects: Course | Course[] | undefined =
        coursesArray.filter((course: Course): boolean => course.modules.includes('sass'))
    console.log(sass_objects)

// --написати пошук всіх об'єктів, в яких в modules є docker

    const docker_objects: Course | Course[] | undefined =
        coursesArray.filter((course: Course): boolean => course.modules.includes('docker'))
    console.log(docker_objects)

}