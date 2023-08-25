const express = require('express')
const app = express();
const cors = require("cors")
const stripe = require("stripe")('sk_test_51Niv15SBdFjOYqJPqmlblZ3fFAvwWfx1Jw78Pk7IXmetPelBRIRJYNVTyN3L5HC4xLRKUnInReZnCMKcEKDxZL3900DxgCphTl')

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


// checkout api
app.post("/api/create-checkout-session", async(req, res)=>{
    const {products} = req.body;
    console.log(products)

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.dish
            },
            unit_amount:product.price * 100,
            
        },
        quantity:product.qnty
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel"
    })
    res.json({id:session.id})
})


app.listen(7000, ()=>{
    console.log("server start")
})