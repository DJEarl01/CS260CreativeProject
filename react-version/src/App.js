import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div>
      <div class="bootstrap-navbar">
        <nav class="navbar navbar-expand-lg fixed-top navbar-light">
          <a class="navbar-brand" href="./">
            <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
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
                <a class="nav-link" href="./about.html">About ID Cardz</a>
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
    </div >

    <div class="navbar-background"></div>
    <div class="main-image-item-container">
        <img src="./images/Y_mountain_darkened.jpeg" id="homeimage" />
        <a class="logo-image" href="./">
            <img src="./images/ID-Cardz-Logo.svg" width="60" height="60" alt='' />
        </a>
        <div class="over-image-items">
            <h1 id="main-header">Looking For Some ID?</h1>
            <div id="base-ID-wrapper">
                <div class="base-ID">
                    <img src="./images/default-card.png" class="example-photo" />
                    <img src="https://xsgames.co/randomusers/avatar.php?g=male" class="example-photo overlayed" id="profile-photo"/>
                </div>
            </div>
            <h2 id="surpriseDirections">Click the ID Card for a Surprise</h2>
        </div>
    </div>

    <h1 class="options-header">Current Options</h1>

    <div class="base-options-container">
        <a href="./PRODUCT_PAGE.html" class="option-link">
            <div class="option">
                <p>Option 1</p>
                <img src="./images/default-card.png" class="preview-ID" />

            </div>
        </a>
        <a href="./PRODUCT_PAGE.html" class="option-link">
            <div class="option">
                <p>Option 2</p>
                <img src="./images/default-card.png" class="preview-ID" />

            </div>
        </a>
        <a href="./PRODUCT_PAGE.html" class="option-link">
            <div class="option">
                <p>Option 3</p>
                <img src="./images/default-card.png" class="preview-ID" />

            </div>
        </a>
        <a href="./PRODUCT_PAGE.html" class="option-link">
            <div class="option">
                <p>Option 4</p>
                <img src="./images/default-card.png" class="preview-ID" />

            </div>
        </a>
        <a href="./PRODUCT_PAGE.html" class="option-link">
            <div class="option">
                <p>Option 5</p>
                <img src="./images/default-card.png" class="preview-ID" />

            </div>
        </a>
        <a href="./PRODUCT_PAGE.html" class="option-link">
            <div class="option">
                <p>Option 6</p>
                <img src="./images/default-card.png" class="preview-ID" />

            </div>
        </a>
    </div>

    <div class="page-footer">
        <p>DISCLAIMER: This site isn't real lol</p>
        <p>This site was proudly written by Kollin Rogers and Nik Earl</p>
        <a href="https://github.com/DJEarl01/CS260CreativeProject.git">Here's a Link to our GitHub</a>
    </div>
  </div >
  );
}

export default App;
