import React from "react";

class YeQuotesPage extends React.Component {

    render() {
        return (
            <div>
                <div class="bootstrap-navbar">
                    <nav class="navbar navbar-expand-lg fixed-top navbar-light">
                        <a class="navbar-brand" href="#">
                            <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="./index.html">Home</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="./about.html">About ID Cardz<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./cart.html">Cart</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./props.html">Our Lineage</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./ye_quotes.html">Ye</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="navbar-background"></div>
                <a class="logo-image" href="#">
                    <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
                </a>

                <div class="quoteBox">
                    <h1 class="intro">Looking for Kanye quotes? Look no further.</h1>
                    <div class="intro">Click button for a cool Kanye Quote</div>
                    <button class="newQ">Ye Quote</button>
                    <div class="warning">WARNING: Some content may be explicit. We are not responsible for any incidents.</div>
                    <div class="box">
                        <div class="quotes">Look here for cool quotes from Kanye West</div>
                    </div>

                    <div class="page-footer">
                        <p>DISCLAIMER: This site isn't real lol</p>
                        <p>This site was proudly written by Kollin Rogers and Nik Earl</p>
                        <a href="https://github.com/DJEarl01/CS260CreativeProject.git">Here's a Link to our GitHub</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default YeQuotesPage;