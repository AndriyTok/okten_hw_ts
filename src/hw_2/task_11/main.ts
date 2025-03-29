// Тип для кожного продукту
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    total: number;
    thumbnail: string;
}

// Тип для кожного кошика
interface Cart {
    id: number;
    products: Product[];
    total: number;
    totalQuantity: number;
}

// Тип для відповіді від API
interface CartApiResponse {
    carts: Cart[];
}

// @ts-ignore
const container = document.getElementById('container') as HTMLDivElement | null;

fetch('https://dummyjson.com/carts')
    .then((result: Response): Promise<CartApiResponse> => result.json())  // типізуємо відповідь
    .then((result: CartApiResponse) => {
        console.log(result.carts);
        result.carts.forEach(cart => {
            const cart_div = document.createElement('div');
            cart_div.classList.add('cart');
            cart_div.innerHTML = `<p>Cart: ${cart.id}</p>`;

            const ul = document.createElement('ul');
            cart_div.appendChild(ul);

            // Виводимо всі поля кошика
            Object.entries(cart)
                .filter(([key]) => key !== 'id')  // виключаємо id
                .forEach(([key, value]) => {
                    if (key !== 'products') {
                        const li = document.createElement('li');
                        li.innerText = `${key}: ${value}`;
                        ul.appendChild(li);
                    } else {
                        const li = document.createElement('li');
                        li.innerText = `products`;
                        const product_ul_list = document.createElement('ul');

                        // Виводимо продукти в кошику
                        cart.products.forEach((product, index) => {
                            const product_li = document.createElement('li');
                            product_li.innerText = `product ${index + 1}`;
                            product_ul_list.appendChild(product_li);

                            const product_ul = document.createElement('ul');
                            Object.entries(product).forEach(([key, value]) => {
                                if (key === 'thumbnail') {
                                    const product_detail_li = document.createElement('li');
                                    product_detail_li.innerHTML = `<label>photo:</label>
                    <br><img src='${value}' alt='some_alt'>`;
                                    product_ul.appendChild(product_detail_li);
                                } else {
                                    const product_detail_li = document.createElement('li');
                                    product_detail_li.innerText = `${key}: ${value}`;
                                    product_ul.appendChild(product_detail_li);
                                }
                            });
                            product_li.appendChild(product_ul);
                            product_ul_list.appendChild(product_li);
                        });

                        li.appendChild(product_ul_list);
                        ul.appendChild(li);
                    }
                });
            if (container) {
                container.appendChild(cart_div);
            }
        });
    })
    .catch(error => console.error('Error fetching carts:', error));
