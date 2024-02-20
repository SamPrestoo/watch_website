const product_box = document.querySelectorAll('.product-box');
product_box.forEach((product_box) => {
    product_box.addEventListener("click", () => {
        const productId = Number(product_box.dataset.productId);
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: [
                    { id: 1, quantity: 1 },
                ],
            }),
        })
        .then(res => {
            console.log(res);
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
        .then(({ url }) => {
            window.location = url
        })
        .catch(e => {
            console.error(e.error)
        })
    })
})


require('dotenv').config();

console.log(process.env.SERVER_URL); // 'localhost'


