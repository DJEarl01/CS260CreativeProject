let alreadyBeenClicked = false;

document.getElementById("base-ID-wrapper").addEventListener("click", function(event) {
    event.preventDefault();
    if (alreadyBeenClicked) {
        document.getElementById("main-header").innerHTML = "Looking For Some ID?";
        document.getElementById("homeimage").src = "./images/Y_mountain_darkened.jpeg";
        document.getElementById("main-header").style = "";
        document.getElementById("profile-photo").src = "https://xsgames.co/randomusers/avatar.php?g=male";
        document.getElementById("surpriseDirections").innerHTML = "Click the ID Card for a Surprise";
        alreadyBeenClicked = false;
    } else {
    const url = "https://api.kanye.rest/";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "";
        results += json.quote;
        document.getElementById("main-header").innerHTML = results;
        document.getElementById("homeimage").src = "./images/Kanye.webp";
        document.getElementById("main-header").style = "color: black; background-color: rgba(240,240,240,0.6);";
        document.getElementById("profile-photo").src = "./images/KanyeID.jpg";
        document.getElementById("surpriseDirections").innerHTML = "Click Again to Return to Normal";
        alreadyBeenClicked = true;
      });
    }
  });
  