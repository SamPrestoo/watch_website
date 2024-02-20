require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


require('dotenv').config();

console.log(process.env.DB_HOST); // 'localhost'


const storeItems = new Map([
    [1, { priceInCents: 10000, name: "Learn React Today"}],
    [2, { priceInCents: 20000, name: "Learn CSS Today"}],
    [3, { priceInCents: 10000, name: "Learn React Today"}],
    [4, { priceInCents: 20000, name: "Learn CSS Today"}],
    [5, { priceInCents: 10000, name: "Learn React Today"}],
    [6, { priceInCents: 20000, name: "Learn CSS Today"}],
    [7, { priceInCents: 10000, name: "Learn React Today"}],
    [8, { priceInCents: 20000, name: "Learn CSS Today"}],
    [9, { priceInCents: 10000, name: "Learn React Today"}],
    [10, { priceInCents: 20000, name: "Learn CSS Today"}],
    [11, { priceInCents: 10000, name: "Learn React Today"}],
    [12, { priceInCents: 20000, name: "Learn CSS Today"}],
    [13, { priceInCents: 10000, name: "Learn React Today"}],
    [14, { priceInCents: 20000, name: "Learn CSS Today"}],
    [15, { priceInCents: 10000, name: "Learn React Today"}],
    [16, { priceInCents: 20000, name: "Learn CSS Today"}],
    [17, { priceInCents: 10000, name: "Learn React Today"}],
    [18, { priceInCents: 20000, name: "Learn CSS Today"}],
    [19, { priceInCents: 10000, name: "Learn React Today"}],
    [20, { priceInCents: 20000, name: "Learn CSS Today"}],
    [21, { priceInCents: 10000, name: "Learn React Today"}],
    [22, { priceInCents: 20000, name: "Learn CSS Today"}],
    [23, { priceInCents: 10000, name: "Learn React Today"}],
    [24, { priceInCents: 20000, name: "Learn CSS Today"}],
    [25, { priceInCents: 20000, name: "Learn CSS Today"}],
])

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                }
            }),
            success_url: `${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/cancel.html`
        })
        res.json({ url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

app.listen(3000)
