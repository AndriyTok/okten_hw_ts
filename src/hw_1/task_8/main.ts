namespace hw_1_task_8 {

// #iz6emEsP2BA
// - є масив
    interface ICourse{
        id?: number,
        title: string,
        monthDuration: number,
    }

    const coursesAndDurationArray: ICourse[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

    const new_courses_array: ICourse[] = coursesAndDurationArray.map(({title, monthDuration}, index) =>
        ({id: index + 1, title, monthDuration})
    )
    console.log(new_courses_array);
}