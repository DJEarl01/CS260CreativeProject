import React from "react";
import styles from './HomePage.module.css';


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kanyeQuote: 'Test Quote',
      wasKanyeClicked: false
    };

    this.handleKanyeClick = this.handleKanyeClick.bind(this);
    this.getKanyeQuote = this.getKanyeQuote.bind(this);
  }

  getKanyeQuote = () => {
    const url = "https://api.kanye.rest/";
    fetch(url)
      .then(function (response) {
        return response.json();
      }).then(function (json) {
        let grabbedResult = json.quote;
        this.setState({kanyeQuote: grabbedResult});
      }.bind(this));
  };

  handleKanyeClick() {
    if (this.state.wasKanyeClicked) {
      this.setState({wasKanyeClicked: false});
    } else {
      this.getKanyeQuote();
      this.setState({wasKanyeClicked: true});
    }
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
        <h2 style={{"color": "white"}}>Click the ID Card for a Surprise</h2>
      </div>
    )
    } else {
       mainCard = (
        <div>
          <h1 id={styles["main-header"]} style={{"backgroundColor": "rgba(240,240,240,0.6)", "color": "black"}}>{this.state.kanyeQuote}</h1>
          <div id={styles["base-ID-wrapper"]}>
            <div class={styles["base-ID"]}>
              <img src="./images/default-card.png" class={styles["example-photo"]} alt='Default Card' />Image
              <img src="./images/KanyeID.jpg" class={styles["example-photo"]} id={styles["overlayed"]} alt='Profile Download' />
            </div>
          </div>
          <h2 style={{"color": "white"}}>Click Again to Return to Normal</h2>
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
            <button onClick={this.handleKanyeClick} style={{"background": "none", "border": "none", "outline": "none"}}>{mainCard}</button>
          </div>
        </div>

        <h1 class={styles["options-header"]}>Current Options</h1>

        <div class={styles["base-options-container"]}>
          <a href="./PRODUCT_PAGE.html" class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Option 1</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />

            </div>
          </a>
          <a href="./PRODUCT_PAGE.html" class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Option 2</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />

            </div>
          </a>
          <a href="./PRODUCT_PAGE.html" class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Option 3</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />

            </div>
          </a>
          <a href="./PRODUCT_PAGE.html" class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Option 4</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />

            </div>
          </a>
          <a href="./PRODUCT_PAGE.html" class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Option 5</p>
              <img src="./images/default-card.png" class={styles["preview-ID"]} alt='Preview ID Card' />

            </div>
          </a>
          <a href="./PRODUCT_PAGE.html" class={styles["option-link"]}>
            <div class={styles["option"]}>
              <p>Option 6</p>
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
