import React from "react";
import "./MainStyles.css"

class AboutPage extends React.Component {

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
                                    <a class="nav-link" href="./">Home</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="./about">About ID Cardz<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./cart">Cart</a>
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

                <a class="logo-image" href="#">
                    <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
                </a>
                <div class="header-background"></div>
                <section class="description-text">
                    <div class="about-us">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Nikolas Cage (proud keeper of the US constitution) and Kollin Rogers (son of Aaron Rodgers)</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Our Journey</h6>
                                <p class="card-text">
                                    We met in our hometown of Южно-Сахалинск, Россия in 2005.
                                    Our friend had just thrown a frozen egg through the window of our math tutor,
                                    who promptly threw his table back at us.
                                    This scared us, so we decided to collect all possible personal information about this tutor to scare him.
                                    During this process, we discovered that collecting such information about people was challening.
                                    More importantly, it was very beneficial to our wallets.
                                </p>
                                <p class="card-text">
                                    In order to make things easier on ourselves, we decided to break into both BYU's databases and the FBI's databases.
                                    Having done so, we discovered that the FBI is super boring, but BYU is very exciting.
                                    So we continued to gather and sell everyone's personal information in an attempt to pay for not only our own tuition,
                                    but we've even started giving out scholarships to those who will freely give us their personal information.
                                    In this way, we've really started to give back to the community and truly help those who have supported us in our journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="page-footer">
                    <p>DISCLAIMER: This site isn't real lol</p>
                    <p>This site was proudly written by Kollin Rogers and Nik Earl</p>
                    <a href="https://github.com/DJEarl01/CS260CreativeProject.git">Here's a Link to our GitHub</a>
                </div>

            </div>
        );
    }
}

export default AboutPage;
