// capturing hard-codes elements
var mainContainer = document.querySelector("#main-container");
var searchContainer = document.querySelector("#search-container");
var weatherContainer = document.querySelector("weather-container");

// creating initial HTML elements for search column
var searchBox = document.createElement("nav");
searchBox.className = "panel is-info";
searchContainer.appendChild(searchBox);

var searchTitle = document.createElement("p")
searchTitle.className = "panel-heading";
searchTitle.textContent = "Search by city"
searchBox.appendChild(searchTitle);

var formContainer = document.createElement("div");
formContainer.className = "panel-block";
searchBox.appendChild(formContainer);

var inputTextEl = document.createElement("p");
inputTextEl.className = "control has-icons-left";
inputTextEl.innerHTML = "<form id ='input-form'><input class='input' id='cityname' type='text' placeholder='Search city name'> <span class ='icon is-left'><i class='fas fa-search' aria-hidden='true'></i></span></form>"
formContainer.appendChild(inputTextEl);

var inputForm = document.querySelector("#cityname")


// function to get location data
var getLocationData = function(cityName) {

    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=f36d17786468fcf6dab864e03af92392";
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
          console.log(data);
        });

      });

}

// add event listender to submission form
searchContainer.addEventListener("submit", function(event) {

    event.preventDefault();

    var cityName = inputForm.value.trim().toLowerCase();
    console.log(cityName);

    if (cityName) {

        getLocationData(cityName);
        inputForm.value = " ";
    } else {

        alert("Please enter a valid city name")

    }

});

