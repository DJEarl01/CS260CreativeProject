const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('./passport');
// Route requires
const user = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

// connect to user database

const clientP = mongoose.connect(
    'mongodb://localhost:27017/simple-mern-passport',
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(m => m.connection.getClient())

// MIDDLEWARE
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

app.use(session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        clientPromise: clientP,
        dbName: "simple-mern-passport",
        stringify: false,
        autoRemove: 'interval',
        autoRemoveInterval: 1
    })
}));

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)

//LOADING IN THE CART SCHEMA
const cartSchema = new mongoose.Schema({
    itemName: String,
    itemPrice: Number,
    itemImage: String,
});

cartSchema.virtual('id')
    .get(function () {
        return this._id.toHexString();
    });

cartSchema.set('toJSON', {
    virtuals: true
});

const CartItem = mongoose.model('CartItem', cartSchema);

app.get('/api/cart', async (req, res) => {
    try {
        let allCartItems = await CartItem.find();
        res.send({ cart: allCartItems });
        console.log("Returned Full Cart");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/cart', async (req, res) => {
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

app.delete('/api/cart/:id', async (req, res) => {
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

app.listen(3005, () => console.log('Server listening on port 3005!'));
