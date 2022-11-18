const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/cartStore', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

//LOADING IN THE CART SCHEMA
const cartSchema = new mongoose.Schema({
    itemName: String, 
    itemPrice: Number, 
    itemImage: String,
});

cartSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
});

cartSchema.set('toJSON', {
    virtuals: true
});

const CartItem = mongoose.model('CartItem', cartSchema);

app.get('/cardzapi/cart', async (req, res) => {
    try {
        let allCartItems = await CartItem.find();
        res.send({cart: allCartItems});
        console.log("Returned Full Cart");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/cardzapi/cart', async (req, res) => {
    const cartItem = new CartItem({
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemImage: req.body.itemImage
    });
    try {
        await cartItem.save();
        res.send({ cartItem: cartItem });
        console.log("Added A New Cart Item To Server");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/cardzapi/cart/:id', async (req, res) => {
    try {
        await CartItem.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
        console.log("Deleted A Cart Item");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3002, () => console.log('Server listening on port 3002!'));
