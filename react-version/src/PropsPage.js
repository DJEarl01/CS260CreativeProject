import React from "react";
import './PropsPage.css';

class PropsPage extends React.Component {

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
                                <li class="nav-item ">
                                    <a class="nav-link" href="./about">About ID Cardz</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./cart">Cart</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="./props">Our Lineage<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./ye-quotes">Ye</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div >
                <div class="navbar-background"></div>
                <a class="logo-image" href="#">
                    <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
                </a>

                <div class="text-container">
                    <div class="about">
                        <p>
                            Many people ask us about our heritage.
                            In my experience, the following images have been a great tool at opening
                            a window into our people's past. Please feel free to peruse our gallery and
                            shoot us an email at <a href="mailto: idcardz.byu@gmail.com" target="_blank">idcardz.byu@gmail.com</a>
                            if you would be interested in making a donation or if you have any questions (or don't do those things, the decision is yours).
                            For all complaints please refer to <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">idcardz.complaints@gmail.com</a>.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                        <img src="./images/narod/flag.png" />
                        <img src="./images/narod/slava_2.webp" />
                        <img src="./images/narod/rabota.jpg" />
                    </div>
                    <div class="column">
                        <img src="./images/narod/ded_lenin_good.jpg" />
                        <img src="./images/narod/stroit.jpg" />
                        <img src="./images/narod/rodina.jpg" />
                    </div>
                    <div class="column">
                        <img src="./images/narod/slava.jpg" />
                        <img src="./images/narod/zad_smol.png" />
                    </div>
                </div>

                <div class="page-footer">
                    <p>DISCLAIMER: This site isn't real lol</p>
                    <p>This site was proudly written by Kollin Rogers and Nik Earl</p>
                    <a href="https://github.com/DJEarl01/CS260CreativeProject.git">Here's a Link to our GitHub</a>
                </div>

                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </div>
        );
    }
}

export default PropsPage;
