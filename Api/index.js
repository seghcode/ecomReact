const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRoute = require('./routes/user.routes')
const authRoute = require('./routes/auth.routes')
const productRoute = require('./routes/product.routes')
const cartRoute = require('./routes/cart.routes')
const orderRoute = require('./routes/order.routes')
const stripeRoute = require('./routes/stripe.routes')
const cors = require('cors')
// configure env file
dotenv.config()

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected successfully!!"))
  .catch((err) => console.log(err));

// connect to middleware
app.use(express.json())
app.use(cors())


app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkout', stripeRoute)


// listen to request
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running in port", process.env.PORT);
});
