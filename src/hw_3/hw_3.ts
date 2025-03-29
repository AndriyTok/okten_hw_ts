namespace hw_3 {
    //Стоврити функцію, яка робить запити на апі на віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
    // Сигнатур функції під час виклику foobar<SomeType>(‘/url)
    // SomeType – ваш тим відповіді
    // url – ваш ендпоінт з якого чекаємо відповідь

    async function api_fetcher<T>(url: string): Promise<T> {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`)
        }

        return response.json();
    }

    interface Cart {
        id: number;
        total: number;
        products: { id: number; title: string; price: number }[];
    }

    api_fetcher<Cart[]>('https://dummyjson.com/carts')
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
}