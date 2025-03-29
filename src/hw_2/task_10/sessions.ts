document.addEventListener('DOMContentLoaded', function (): void {
    const attend_dates = JSON.parse(localStorage.getItem('attend_dates') || '[]') as string[]
    const info_div: HTMLDivElement = document.createElement('div')
    for (let attend_date of attend_dates) {
        const info: HTMLParagraphElement = document.createElement('p');
        info.innerText = `Visited on ${attend_date}`;
        info_div.appendChild(info);
    }
    document.body.appendChild(info_div);
    const clear_button: HTMLElement | null = document.getElementById('clear')
    if (clear_button) {

        clear_button.addEventListener('click', function () {
            localStorage.clear()
            info_div.innerText = '';
        })
    }
})