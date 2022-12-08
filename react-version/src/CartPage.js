import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import './CartPage.css';

function CartPage() {
    
    const [cart, setCart] = useState({
        cart: [

        ]
    });
    const [update, setUpdate] = useState(Boolean);
    const [error, setError] = useState("");
    const [totalPrice, setTotalPrice] = useState(Number);

    const fetchCart = async (state) => {
        try {
            const response = await axios.get("http://localhost:3005/cardzapi/cart");
            setCart(response.data);
            console.log(cart);
            setUpdate(false);
            setError("");
            setTotalPrice(10.0);
            let totalPriceAdder = 0;
            cart.cart.forEach(element => {
                totalPriceAdder += element.itemPrice;
            });
            setTotalPrice(totalPriceAdder);
        } catch (error) {
            setError("error retrieving cart: " + error);
        }
    }

    const deleteOneCartItem = async (cartItem) => {
        try {
            await axios.delete("http://localhost:3005/cardzapi/cart/" + cartItem.id);
        } catch (error) {
            setError("error deleting a cart item" + error);
        }
    }

    useEffect(() => {
        setUpdate(true);
    }, [])

    // fetch cart data
    useEffect(() => {
        fetchCart();
    }, [update]);

    const deleteCartItem = async (cartItem) => {
        await deleteOneCartItem(cartItem);
        fetchCart();
        setUpdate(true);
    }

    const logout = (event) => {
        event.preventDefault()
        console.log('logging out')
        axios.post('http://localhost:3005/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error: ' + error)
        })
      };

    const loggedIn = true
    const username = "dummy";
    console.log('navbar render, props: ')
    console.log(loggedIn);

    return (
        <div>
            <div class="bootstrap-navbar">
                <nav class="navbar navbar-expand-lg fixed-top navbar-light">
                    <a class="navbar-brand" href="./">
                        <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="./">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./about">About ID Cardz</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="./cart">Cart<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./props">Our Lineage</a>
                            </li>
                            <li class="nav-item">
                                {/* greet user if logged in: */}
                                {loggedIn ?
                                    <a class="nav-link" onClick={logout}>
                                        Welcome back, {username}
                                    </a>
                                    :
                                    <a class="nav-link" href="./login">
                                        Login
                                    </a>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="navbar-background"></div>

            <a class="logo-image" href="./">
                <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
            </a>

            <div class="main-content-container">
                <div class="main-cart-container">
                    <div class="products-in-cart">
                        <h1 class="shopping-cart-header">Shopping Cart</h1>
                        {error}
                        {cart.cart.map(cartItem => (
                            <a href="#" class="item-in-cart">
                                <h2 class="item-header">{cartItem.itemName}</h2>
                                <h3 class="item-price"><button className="delete-button" onClick={e => deleteCartItem(cartItem)}>Delete</button>${cartItem.itemPrice}</h3>
                                <img src={cartItem.itemImage} className="preview-image" />
                            </a>
                        ))}
                        <br />
                        <p>Feel free to add items to the cart from the home page!</p>
                    </div>
                    <div className="subtotal-checkout">
                        <h2>Subtotal: ${totalPrice}</h2>
                        <button className="checkout-button" onClick={e => fetchCart()}>Check Out</button>
                    </div>
                </div>


                <div className="page-footer">
                    <p>DISCLAIMER: This site isn't real lol</p>
                    <p>This site was proudly written by Kollin Rogers and Nik Earl</p>
                    <a href="https://github.com/DJEarl01/CS260CreativeProject.git">Here's a Link to our GitHub</a>
                </div>

            </div>

            <img src="./images/shopping-cart-background-lightmode.png" class="background-picture" />

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </div>
    );

}

export default CartPage;