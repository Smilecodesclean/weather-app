
let weatherinput = document.getElementById("cityInput");
let searchbtn = document.getElementById("searchButton");
 let city = document.getElementById("cityName");
 let town = document.getElementById("townName");
 let temp = document.getElementById("temperature");
let weatherinfo = document.getElementById("weatherInfo");
let icon = document.getElementById("weatherIcon");
let alert_msg = document.getElementById("alert");
let description = document.getElementById("description");
searchbtn.addEventListener("click", async () => {
    if(!weatherinput.value){
        alert_msg.style.display = "block";
    }else{
        try{
            let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${weatherinput.value}&days=3&aqi=yes&alerts=yes`);
            let data = await response.json();
            alert_msg.style.display = "none";
            city.textContent = data.location.country;
            town.textContent = data.location.name;
            temp.textContent = data.current.temp_c + "°C";
            description.textContent = data.current.condition.text;
            icon.style.display = "block";
            icon.src = data.current.condition.icon;
            icon.alt = data.current.condition.text;
            weatherinfo.style.display = "flex";
        }
        catch (error ) { 
            alert_msg.textContent = error;
        alert_msg.style.display = "block";
        }
    }

    })