import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import './CartPage.css';
import styles from './HomePage.module.css';

function ProductPage() {
    
    
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
                                <a class="nav-link" href="./product">Product</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="navbar-background"></div>

            <a class="logo-image" href="./">
                <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
            </a>

            <div class={styles["base-options-container-product"]}>
                <div class={styles["option-link-product"]}>
                    <div class={styles["option"]}>
                        <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
                    </div>
                </div>
                <div class={styles["description"]}>
                    <h3>Joseph Smith</h3>
                    <p>
                        Full name: Joseph Smith Jr. <br />
                        DOB:  December 23, 1805 <br />
                        BYU-ID: 00-000-0000 <br />
                    </p>
                    <br />
                    <p>
                        <b>Price: ₽3470.27</b>
                    </p>
                </div>
                <div class={styles["more-products"]}>
                    <h2>
                        You might also like: 
                    </h2>
                    
                </div>
            </div>
            <div class={styles["base-options-container"]}>
                <a onClick={() => { this.addToCart("Kanye West", 54.32) }} class={styles["option-link"]}>
                    <div class={styles["option"]}>
                        <p>Kanye West</p>
                        <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
                    </div>
                </a>
                <a onClick={() => { this.addToCart("President Worthen", 95.22) }} class={styles["option-link"]}>
                    <div class={styles["option"]}>
                        <p>President Worthen</p>
                        <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
                    </div>
                </a>
            </div>

            <img src="./images/shopping-cart-background-lightmode.png" class="background-picture" />

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </div>
    );

}

export default ProductPage;
