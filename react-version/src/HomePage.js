import React from "react";
import axios from 'axios';
import styles from './HomePage.module.css';


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kanyeQuote: 'Test Quote',
      wasKanyeClicked: false,
      error: '',
      popupHidden: ''
    };

    this.handleKanyeClick = this.handleKanyeClick.bind(this);
    this.getKanyeQuote = this.getKanyeQuote.bind(this);
    this.createCartItem = this.createCartItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.alertUserOfCartAddition = this.alertUserOfCartAddition.bind(this);
  }

  getKanyeQuote = () => {
    const url = "https://api.kanye.rest/";
    fetch(url)
      .then(function (response) {
        return response.json();
      }).then(function (json) {
        let grabbedResult = json.quote;
        this.setState({ kanyeQuote: grabbedResult });
      }.bind(this));
  };

  handleKanyeClick() {
    if (this.state.wasKanyeClicked) {
      this.setState({ wasKanyeClicked: false });
    } else {
      this.getKanyeQuote();
      this.setState({ wasKanyeClicked: true });
    }
  }

  alertUserOfCartAddition(name, isError) {
    var popup = document.getElementById("cartAddedPopup");
    popup.innerHTML = name + " Added To Cart";
    popup.classList.toggle("show");
    if (this.state.popupHidden) {
      setTimeout(function () {
        popup.classList.toggle("hide");
        if (isError) {
          popup.classList.toggle("error");
        }
      }, 950);
      this.setState({ popupHidden: false });
    } else {
      popup.classList.toggle("hide");
      if (isError) {
        popup.classList.toggle("error");
      }
      this.setState({ popupHidden: true });
    }
  }

  createCartItem = async (currentName, currentPrice, currentImage) => {
    try {
      await axios.post("http://localhost:3002/cardzapi/cart", { itemName: currentName, itemPrice: currentPrice, itemImage: currentImage });
      this.alertUserOfCartAddition(currentName, false);
      setTimeout(() => {
        this.alertUserOfCartAddition(currentName, false);
      }, 3000);
    } catch (currentError) {
      this.setState({ error: currentError + ": Couldn't Get " + currentName + " "});
      this.alertUserOfCartAddition((currentError + ": Couldn't Get " + currentName + " "), true);
      setTimeout(() => {
        this.alertUserOfCartAddition((currentError + ": Couldn't Get " + currentName + " "), true);
      }, 3000);
    }
  }

  addToCart = async (name, price, image = "./images/default-card.png") => {
    await this.createCartItem(name, price, image);
  }

  render() {
    let mainCard = '';
    if (!this.state.wasKanyeClicked) {
      mainCard = (
        <div>
          <h1 id={styles["main-header"]}>Looking For Some ID?</h1>
          <div id={styles["base-ID-wrapper"]}>
            <div class={styles["base-ID"]}>
              <img src="./images/default-card.png" class={styles["example-photo"]} alt='Default Card' />Image
              <img src="https://xsgames.co/randomusers/avatar.php?g=male" class={styles["example-photo"]} id={styles["overlayed"]} alt='Profile Download' />
            </div>
          </div>
          <h2 style={{ "color": "white" }}>Click the ID Card for a Surprise</h2>
        </div>
      )
    } else {
      mainCard = (
        <div>
          <h1 id={styles["main-header"]} style={{ "backgroundColor": "rgba(240,240,240,0.6)", "color": "black" }}>{this.state.kanyeQuote}</h1>
          <div id={styles["base-ID-wrapper"]}>
            <div class={styles["base-ID"]}>
              <img src="./images/default-card.png" class={styles["example-photo"]} alt='Default Card' />Image
              <img src="./images/KanyeID.jpg" class={styles["example-photo"]} id={styles["overlayed"]} alt='Profile Download' />
            </div>
          </div>
          <h2 style={{ "color": "white" }}>Click Again to Return to Normal</h2>
        </div>
      )
    }

    let backgroundImg = '';
    if (!this.state.wasKanyeClicked) {
      backgroundImg = (<img src="./images/Y_mountain_darkened.jpeg" id={styles["homeimage"]} alt="Background" />)
    } else {
      backgroundImg = (<img src="./images/Kanye.webp" id={styles["kanyehomeimage"]} alt="funny Background" />)
    }

    return (
      <div>
        <div class="bootstrap-navbar">
          <nav class="navbar navbar-expand-lg fixed-top navbar-light">
            <a class="navbar-brand" href="./">
              <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='Main Logo' />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="./">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./about">About ID Cardz</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./cart">Cart</a>
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
        </div >

        <div class={styles["navbar-background"]}></div>
        <div class={styles["main-image-item-container"]}>
          {backgroundImg}
          <a class="logo-image" href="./">
            <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='Card Logo' />
          </a>
          <div class={styles["over-image-items"]}>
            <button onClick={() => { this.handleKanyeClick() }} style={{ "background": "none", "border": "none", "outline": "none" }}>{mainCard}</button>
          </div>
        </div>

        <h1 class={styles["options-header"]}>Current Options</h1>
        <h3 class={styles["options-subheader"]}>Click One To Add To Cart</h3>
        <div class="popup" onClick={() => { this.alertUserOfCartAddition("Queen Latifah's Mom's Hairdresser") }}>
          <span class="popuptext hide" id="cartAddedPopup">Popup text...</span>
        </div>
        <div class={styles["base-options-container"]}>
          <a onClick={() => { this.addToCart("Kanye West", 54.32) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Kanye West</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
          <a onClick={() => { this.addToCart("Dan Smith", 66.66) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Dan Smith</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
          <a onClick={() => { this.addToCart("Mackquinzeigh MarkPatJoeBillDinosaur", 12.34) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Mackquinzeigh MarkPatJoeBillDinosaur</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
          <a onClick={() => { this.addToCart("Meghan Trainor", 10000000.00) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Meghan Trainor</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
          <a onClick={() => { this.addToCart("Joseph Smith", 54.65) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Joseph Smith</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
          <a onClick={() => { this.addToCart("President Worthen", 95.22) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>President Worthen</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
          <a onClick={() => { this.addToCart("Crayon Gibson", 15.00) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Crayon Gibson</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
          <a onClick={() => { this.addToCart("Mark Peanus", 954.21) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Mark Peanus</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
          <a onClick={() => { this.addToCart("Kippy Yee", 12.95) }} class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Kippy Yee</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />
            </div>
          </a>
        </div>

        <div class={styles["page-footer"]}>
          <p>DISCLAIMER: This site isn't real lol</p>
          <p>This site was proudly written by Kollin Rogers and Nik Earl</p>
          <a href="https://github.com/DJEarl01/CS260CreativeProject.git">Here's a Link to our GitHub</a>
        </div>
      </div >
    );
  }
}

export default HomePage;
