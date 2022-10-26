import React from "react";
import './CartPage.css';

class CartPage extends React.Component {

    render() {
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
                                    <a class="nav-link" href="./ye-quotes">Ye</a>
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
                            <a href="#" class="item-in-cart">
                                <h2 class="item-header">Default Card</h2>
                                <h3 class="item-price">$20.00</h3>
                                <img src="./images/default-card.png" class="preview-image" />
                            </a>
                            <a href="#" class="item-in-cart">
                                <h2 class="item-header">Default Card</h2>
                                <h3 class="item-price">$20.00</h3>
                                <img src="./images/default-card.png" class="preview-image" />
                            </a>
                        </div>
                        <div class="subtotal-checkout">
                            <h2>Subtotal: $40.00</h2>
                            <button>Check Out</button>
                        </div>
                    </div>


                    <div class="page-footer">
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
}

export default CartPage;