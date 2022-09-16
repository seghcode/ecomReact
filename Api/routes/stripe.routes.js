const express = require('express')
const router = express.Router()
const Stripe = require('stripe')
const stripe = Stripe('sk_test_51LHp8UI3BerN3tlTzd7no68CP8Z9v5Vr62x3gHQlfvgCUXA9vJgetSkEglOV5PILR1bS78DE1QXFHZNERoVlgdNl00NxfD4J84')

router.post('/payment', (req,res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    },(stripeErr, StripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(StripeRes)
        }
    })
})

module.exports = router