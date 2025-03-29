namespace hw_2_task_10 {

    document.addEventListener("DOMContentLoaded", function () {

// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".

        const p_id = document.getElementById("text") as HTMLElement | null;
        const button1 = document.getElementById("b1") as HTMLButtonElement | null;

        if (p_id && button1) {
            button1.addEventListener("click", (): void => {
                p_id.style.visibility = p_id.style.visibility === "hidden" ? "visible" : "hidden";
            });
        }


// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
        const form_1 = document.getElementById('f1') as HTMLElement | null
        const input_1 = document.querySelector('input[name="your_age"]') as HTMLInputElement | null
        const info_div = document.createElement("div") as HTMLElement | null

        if (form_1 && input_1 && info_div) {

            form_1.addEventListener("submit", function (ev: SubmitEvent) {
                ev.preventDefault();
                if (input_1.value === "") {
                    info_div.innerText = 'Please, enter your age!';
                } else {
                    if (parseInt(input_1.value) < 18) {
                        info_div.innerText = 'Your age is less than 18';
                    } else if (parseInt(input_1.value) >= 18) {
                        info_div.innerText = 'Your age is more than 18 or equal 18!';
                    } else {
                        info_div.innerText = 'Please, enter correct age!';
                    }

                }
                form_1.insertAdjacentElement('afterend', info_div)
            })
        }
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом
        const form_2 = document.getElementById('f2') as HTMLFormElement | null
        const object_div = document.createElement("div") as HTMLElement | null

        if (form_2 && object_div) {

            form_2.addEventListener("submit", function (ev: SubmitEvent): void {
                ev.preventDefault();

                const form_data = new FormData(form_2);
                const data: Record<string, string> = {}

                form_data.forEach((value: FormDataEntryValue, key: string): void => {
                    data[key] = value as string;
                })

                object_div.innerText = `Name: ${data['name']}
                                Surname: ${data['surname']}
                                Age: ${data['age']}`;

                form_2.insertAdjacentElement('afterend', object_div)
            })
        }
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

        const number_div = document.getElementById('number') as HTMLElement | null
        let number: number = parseInt((localStorage.getItem('number')) || '0');
        number++;
        if (number_div) {
            number_div.innerText = JSON.stringify(number);
            localStorage.setItem('number', JSON.stringify(number));
        }

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при
// відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в
// консоль, а малювати в DOM

        const date: string = new Date().toLocaleString('en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        const attend_dates: string[] = JSON.parse((localStorage.getItem('attend_dates')) || '[]');


        attend_dates.push(date)
        localStorage.setItem('attend_dates', JSON.stringify(attend_dates));


// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок

        const weight_input = document.querySelector('input[name="weight"]') as HTMLInputElement | null
        const formatted_weight_p = document.getElementById('formatted_weight') as HTMLParagraphElement | null

        if (weight_input && formatted_weight_p) {
            weight_input.addEventListener('input', function () {
                formatted_weight_p.innerText = `Weight in lb: ${parseFloat(weight_input.value) * 2.20462}`;
            })
        }
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

        function addToLocalStorage(arrayName: string, objToAdd: Record<string, any>) {
            if (!localStorage.getItem(arrayName)) {
                console.log(`There is no such an array in localStorage!`);
            } else {
                const array = JSON.parse(localStorage.getItem(arrayName) || '[]');
                array.push(objToAdd);
                localStorage.setItem(arrayName, JSON.stringify(array));
            }
        }

        addToLocalStorage('test_arr', {name: 'Andrii', surname: 'Tokovyy'});


// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
        const row_count = document.querySelector('input[name="row_count"]') as HTMLInputElement || null
        const column_count = document.querySelector('input[name="column_count"]') as HTMLInputElement || null
        const content = document.querySelector('input[name="content"]') as HTMLInputElement || null
        const table = document.createElement('table') as HTMLTableElement || null
        const create_button = document.getElementById('create_button') as HTMLButtonElement || null

        create_button.addEventListener('click', function (): void {

            for (let i: number = 0; i <= parseInt(row_count.value); i++) {
                const tr: HTMLTableRowElement = document.createElement('tr');
                for (let i: number = 0; i <= parseInt(column_count.value); i++) {
                    const td: HTMLTableCellElement = document.createElement('td');
                    td.innerText = content.value;
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }

            document.body.appendChild(table);
        })
    });


}