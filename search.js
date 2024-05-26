function handleClick() {
    const apiKey = '40c3d03f10244726a0645559242305';
    let city = document.getElementById("search").value
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10&api=no&alerts=no`;
   
    let status = 'day';
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let Situation = (`${data.location.name},${data.location.country}`);
            let Temperture_C = (data.current.temp_c);
            let Temperture_F = (data.current.temp_f);
            let condition = (data.current.condition.text);
            let condition_code = (data.current.condition.code);
            let wind_mph = (data.current.wind_mph);
            let humidity = (data.current.humidity)
            let pressure = (data.current.pressure_mb)
            let icon_img = (data.current.condition.icon);
            let image = `<img src="${icon_img}" alt="${condition}">` 
            

            document.getElementById("weather_1").innerHTML = `<h1>${Situation}</h1>
                                                                <br><h1 id="change_1">${Temperture_C} <img width="90" src="img_C&F/C.png" alt="celsius"></h1>
                                                                ${image}
                                                                <p id ="change_2" >Wind <img width="25" src="Other_img/windy.png" alt="windy"> ${wind_mph} mph      
                                                                Humidity <img width="25" src="Other_img/humidity.png" alt="humidity"> ${humidity}%     
                                                                
                                                                Pressure <img width="35" src="Other_img/air.png" alt="air"> ${pressure} mb</p>`;
        var div = document.getElementById("myBackgroundDiv");
        if (condition=="Partly cloudy") {
            div.style.backgroundImage = "url('img_bg/Partly cloudy.jpg')";
        }
        else if (condition == "Sunny"){
            div.style.backgroundImage = "url('img_bg/Sunny.jpg')";            }
        else if (condition == "Cloudy"){
            div.style.backgroundImage = "url('img_bg/Partly cloudy.jpg')";            }
        else if (condition == "Overcast"){
            div.style.backgroundImage = "url('img_bg/Overcast.jpg')";
        }
        else if (condition == "Mist"){
            div.style.backgroundImage = "url('img_bg/mist.jpg')";
        }
        else if (condition == "Patchy rain possible"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";        }

        else if (condition == "Patchy snow possible"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Patchy sleet possible"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Patchy freezing drizzle possible"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Thundery outbreaks possible"){
            div.style.backgroundImage = "url('img_bg/lighting.jpg')";
        }
        else if (condition == "Blowing snow"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Blizzard"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Fog"){
            div.style.backgroundImage = "url('img_bg/mist.jpg')";
        }
        else if (condition == "Freezing fog"){
            div.style.backgroundImage = "url('img_bg/mist.jpg')";
        }
        else if (condition == "Patchy light drizzle"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Light drizzle"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Freezing drizzle"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Heavy freezing drizzle"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Patchy light rain"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Light rain"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Moderate rain at times"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Moderate rain"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Heavy rain at times"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Heavy rain"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Light freezing rain"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";        }

        else if (condition == "Moderate or heavy freezing rain"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Light sleet"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Moderate or heavy sleet"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Patchy light snow"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Light snow"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Patchy moderate snow"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Moderate snow"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Patchy heavy snow"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Heavy snow"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Ice pellets"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Light rain shower"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";            }

        else if (condition == "Moderate or heavy rain shower"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Torrential rain shower"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Light sleet showers"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Moderate or heavy sleet showers"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Light snow showers"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Moderate or heavy snow showers"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Light showers of ice pellets"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Moderate or heavy showers of ice pellets"){
            div.style.backgroundImage = "url('img_bg/sleet.jpeg')";
        }
        else if (condition == "Patchy light rain with thunder"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Moderate or heavy rain with thunder"){
            div.style.backgroundImage = "url('img_bg/rain.jpg')";
        }
        else if (condition == "Patchy light snow with thunder"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else if (condition == "Moderate or heavy snow with thunder"){
            div.style.backgroundImage = "url('img_bg/snow.jpg')";
        }
        else {
            console.error("Element with ID 'myBackgroundDiv' not found.");
        }
        

        let day1_date = (data.forecast.forecastday[1].date);
        let day1_maxtemp_c = (data.forecast.forecastday[1].day.maxtemp_c);
        let day1_maxtemp_f = (data.forecast.forecastday[1].day.maxtemp_f);
        let day1_mintemp_c = (data.forecast.forecastday[1].day.mintemp_c);
        let day1_mintemp_f = (data.forecast.forecastday[1].day.mintemp_f);
        let day1_avgtemp_c = (data.forecast.forecastday[1].day.avgtemp_c);
        let day1_avgtemp_f = (data.forecast.forecastday[1].day.avgtemp_f);
        let day1_maxwind_mph = (data.forecast.forecastday[1].day.maxwind_mph);
        let day1_avghumidity = (data.forecast.forecastday[1].day.avghumidity);
        let day1_condition = (data.forecast.forecastday[1].day.condition.code);
        let day1_icon = (data.forecast.forecastday[1].day.condition.icon);
        let day1_sunrise = (data.forecast.forecastday[1].astro.sunrise);
        let day1_sunset = (data.forecast.forecastday[1].astro.sunset);

        let day2_date = (data.forecast.forecastday[2].date);
        let day2_maxtemp_c = (data.forecast.forecastday[2].day.maxtemp_c);
        let day2_maxtemp_f = (data.forecast.forecastday[2].day.maxtemp_f);
        let day2_mintemp_c = (data.forecast.forecastday[2].day.mintemp_c);
        let day2_mintemp_f = (data.forecast.forecastday[2].day.mintemp_f);
        let day2_avgtemp_c = (data.forecast.forecastday[2].day.avgtemp_c);
        let day2_avgtemp_f = (data.forecast.forecastday[2].day.avgtemp_f);
        let day2_maxwind_mph = (data.forecast.forecastday[2].day.maxwind_mph);
        let day2_avghumidity = (data.forecast.forecastday[2].day.avghumidity);
        let day2_condition = (data.forecast.forecastday[2].day.condition.code);
        let day2_icon = (data.forecast.forecastday[2].day.condition.icon);
        let day2_sunrise = (data.forecast.forecastday[2].astro.sunrise);
        let day2_sunset = (data.forecast.forecastday[2].astro.sunset);

        let day3_date = (data.forecast.forecastday[3].date);
        let day3_maxtemp_c = (data.forecast.forecastday[3].day.maxtemp_c);
        let day3_maxtemp_f = (data.forecast.forecastday[3].day.maxtemp_f);
        let day3_mintemp_c = (data.forecast.forecastday[3].day.mintemp_c);
        let day3_mintemp_f = (data.forecast.forecastday[3].day.mintemp_f);
        let day3_avgtemp_c = (data.forecast.forecastday[3].day.avgtemp_c);
        let day3_avgtemp_f = (data.forecast.forecastday[3].day.avgtemp_f);
        let day3_maxwind_mph = (data.forecast.forecastday[3].day.maxwind_mph);
        let day3_avghumidity = (data.forecast.forecastday[3].day.avghumidity);
        let day3_condition = (data.forecast.forecastday[3].day.condition.code);
        let day3_icon = (data.forecast.forecastday[3].day.condition.icon);
        let day3_sunrise = (data.forecast.forecastday[3].astro.sunrise);
        let day3_sunset = (data.forecast.forecastday[3].astro.sunset);

        let day4_date = (data.forecast.forecastday[4].date);
        let day4_maxtemp_c = (data.forecast.forecastday[4].day.maxtemp_c);
        let day4_maxtemp_f = (data.forecast.forecastday[4].day.maxtemp_f);
        let day4_mintemp_c = (data.forecast.forecastday[4].day.mintemp_c);
        let day4_mintemp_f = (data.forecast.forecastday[4].day.mintemp_f);
        let day4_avgtemp_c = (data.forecast.forecastday[4].day.avgtemp_c);
        let day4_avgtemp_f = (data.forecast.forecastday[4].day.avgtemp_f);
        let day4_maxwind_mph = (data.forecast.forecastday[4].day.maxwind_mph);
        let day4_avghumidity = (data.forecast.forecastday[4].day.avghumidity);
        let day4_condition = (data.forecast.forecastday[4].day.condition.code);
        let day4_icon = (data.forecast.forecastday[4].day.condition.icon);
        let day4_sunrise = (data.forecast.forecastday[4].astro.sunrise);
        let day4_sunset = (data.forecast.forecastday[4].astro.sunset);

        let day5_date = (data.forecast.forecastday[5].date);
        let day5_maxtemp_c = (data.forecast.forecastday[5].day.maxtemp_c);
        let day5_maxtemp_f = (data.forecast.forecastday[5].day.maxtemp_f);
        let day5_mintemp_c = (data.forecast.forecastday[5].day.mintemp_c);
        let day5_mintemp_f = (data.forecast.forecastday[5].day.mintemp_f);
        let day5_avgtemp_c = (data.forecast.forecastday[5].day.avgtemp_c);
        let day5_avgtemp_f = (data.forecast.forecastday[5].day.avgtemp_f);
        let day5_maxwind_mph = (data.forecast.forecastday[5].day.maxwind_mph);
        let day5_avghumidity = (data.forecast.forecastday[5].day.avghumidity);
        let day5_condition = (data.forecast.forecastday[5].day.condition.code);
        let day5_icon = (data.forecast.forecastday[5].day.condition.icon);
        let day5_sunrise = (data.forecast.forecastday[5].astro.sunrise);
        let day5_sunset = (data.forecast.forecastday[5].astro.sunset);

        let day6_date = (data.forecast.forecastday[6].date);
        let day6_maxtemp_c = (data.forecast.forecastday[6].day.maxtemp_c);
        let day6_maxtemp_f = (data.forecast.forecastday[6].day.maxtemp_f);
        let day6_mintemp_c = (data.forecast.forecastday[6].day.mintemp_c);
        let day6_mintemp_f = (data.forecast.forecastday[6].day.mintemp_f);
        let day6_avgtemp_c = (data.forecast.forecastday[6].day.avgtemp_c);
        let day6_avgtemp_f = (data.forecast.forecastday[6].day.avgtemp_f);
        let day6_maxwind_mph = (data.forecast.forecastday[6].day.maxwind_mph);
        let day6_avghumidity = (data.forecast.forecastday[6].day.avghumidity);
        let day6_condition = (data.forecast.forecastday[6].day.condition.code);
        let day6_icon = (data.forecast.forecastday[6].day.condition.icon);
        let day6_sunrise = (data.forecast.forecastday[6].astro.sunrise);
        let day6_sunset = (data.forecast.forecastday[6].astro.sunset);

        let day7_date = (data.forecast.forecastday[7].date);
        let day7_maxtemp_c = (data.forecast.forecastday[7].day.maxtemp_c);
        let day7_maxtemp_f = (data.forecast.forecastday[7].day.maxtemp_f);
        let day7_mintemp_c = (data.forecast.forecastday[7].day.mintemp_c);
        let day7_mintemp_f = (data.forecast.forecastday[7].day.mintemp_f);
        let day7_avgtemp_c = (data.forecast.forecastday[7].day.avgtemp_c);
        let day7_avgtemp_f = (data.forecast.forecastday[7].day.avgtemp_f);
        let day7_maxwind_mph = (data.forecast.forecastday[7].day.maxwind_mph);
        let day7_avghumidity = (data.forecast.forecastday[7].day.avghumidity);
        let day7_condition = (data.forecast.forecastday[7].day.condition.code);
        let day7_icon = (data.forecast.forecastday[7].day.condition.icon);
        let day7_sunrise = (data.forecast.forecastday[7].astro.sunrise);
        let day7_sunset = (data.forecast.forecastday[7].astro.sunset);


        document.getElementById("card-day1").innerHTML= `<h5 class="card-title"> ${day1_date}</h5>
                                                <img src="${day1_icon}" id="day1_img" style="width: 100px; height: 100px;" class="card-img-top"  alt="...">
                                                <p class="card-text"><p>Avg Temperature ${day1_avgtemp_c}<img width="30" src="img_C&F/C.png" alt="celsius"></p><p>Min Temp ${day1_mintemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"> - Max Temp ${day1_maxtemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"><br>
                                                Wind ${day1_maxwind_mph} <img width="20" src="Other_img/windy.png" alt="windy">    Humidity ${day1_avghumidity} <img width="20" src="Other_img/humidity.png" alt="humidity"><br>
                                                Sunrise <img width="20" src="Other_img/sunrise.png" alt="Sunrise"> ${day1_sunrise} | Sunset <img width="20" src="Other_img/sunset.png" alt="sunset"> ${day1_sunset}</p>`

document.getElementById("card-day2").innerHTML= `<h5 class="card-title"> ${day2_date}</h5>
                                                <img src="${day2_icon}" id="day2_img" style="width: 100px; height: 100px;" class="card-img-top"  alt="...">
                                                <p class="card-text"><p>Avg Temperature ${day2_avgtemp_c}<img width="30" src="img_C&F/C.png" alt="celsius"></p><p>Min Temp ${day2_mintemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"> - Max Temp ${day2_maxtemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"><br>
                                                Wind ${day2_maxwind_mph} <img width="20" src="Other_img/windy.png" alt="windy">    Humidity ${day2_avghumidity} <img width="20" src="Other_img/humidity.png" alt="humidity"><br>
                                                Sunrise <img width="20" src="Other_img/sunrise.png" alt="Sunrise"> ${day2_sunrise} | Sunset <img width="20" src="Other_img/sunset.png" alt="sunset"> ${day2_sunset}</p>`

document.getElementById("card-day3").innerHTML= `<h5 class="card-title"> ${day3_date}</h5>
                                                <img src="${day3_icon}" id="day3_img" style="width: 100px; height: 100px;" class="card-img-top"  alt="...">
                                                <p class="card-text"><p>Avg Temperature ${day3_avgtemp_c}<img width="30" src="img_C&F/C.png" alt="celsius"></p><p>Min Temp ${day3_mintemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"> - Max Temp ${day3_maxtemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"><br>
                                                Wind ${day3_maxwind_mph} <img width="20" src="Other_img/windy.png" alt="windy">    Humidity ${day3_avghumidity} <img width="20" src="Other_img/humidity.png" alt="humidity"><br>
                                                Sunrise <img width="20" src="Other_img/sunrise.png" alt="Sunrise"> ${day3_sunrise} | Sunset <img width="20" src="Other_img/sunset.png" alt="sunset"> ${day3_sunset}</p>`

document.getElementById("card-day4").innerHTML= `<h5 class="card-title"> ${day4_date}</h5>
                                                <img src="${day4_icon}" id="day4_img" style="width: 100px; height: 100px;" class="card-img-top"  alt="...">
                                                <p class="card-text"><p>Avg Temperature ${day4_avgtemp_c}<img width="30" src="img_C&F/C.png" alt="celsius"></p><p>Min Temp ${day4_mintemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"> - Max Temp ${day4_maxtemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"><br>
                                                Wind ${day4_maxwind_mph} <img width="20" src="Other_img/windy.png" alt="windy">    Humidity ${day4_avghumidity} <img width="20" src="Other_img/humidity.png" alt="humidity"><br>
                                                Sunrise <img width="20" src="Other_img/sunrise.png" alt="Sunrise"> ${day4_sunrise} | Sunset <img width="20" src="Other_img/sunset.png" alt="sunset"> ${day4_sunset}</p>`

document.getElementById("card-day5").innerHTML= `<h5 class="card-title"> ${day5_date}</h5>
                                                <img src="${day5_icon}" id="day5_img" style="width: 100px; height: 100px;" class="card-img-top"  alt="...">
                                                <p class="card-text"><p>Avg Temperature ${day5_avgtemp_c}<img width="30" src="img_C&F/C.png" alt="celsius"></p><p>Min Temp ${day5_mintemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"> - Max Temp ${day5_maxtemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"><br>
                                                Wind ${day5_maxwind_mph} <img width="20" src="Other_img/windy.png" alt="windy">    Humidity ${day5_avghumidity} <img width="20" src="Other_img/humidity.png" alt="humidity"><br>
                                                Sunrise <img width="20" src="Other_img/sunrise.png" alt="Sunrise"> ${day5_sunrise} | Sunset <img width="20" src="Other_img/sunset.png" alt="sunset"> ${day5_sunset}</p>`
                                                
document.getElementById("card-day6").innerHTML= `<h5 class="card-title"> ${day6_date}</h5>
                                                <img src="${day6_icon}" id="day6_img" style="width: 100px; height: 100px;" class="card-img-top"  alt="...">
                                                <p class="card-text"><p>Avg Temperature ${day6_avgtemp_c}<img width="30" src="img_C&F/C.png" alt="celsius"></p><p>Min Temp ${day6_mintemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"> - Max Temp ${day6_maxtemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"><br>
                                                Wind ${day6_maxwind_mph} <img width="20" src="Other_img/windy.png" alt="windy">    Humidity ${day6_avghumidity} <img width="20" src="Other_img/humidity.png" alt="humidity"><br>
                                                Sunrise <img width="20" src="Other_img/sunrise.png" alt="Sunrise"> ${day6_sunrise} | Sunset <img width="20" src="Other_img/sunset.png" alt="sunset"> ${day6_sunset}</p>`
                                               
document.getElementById("card-day7").innerHTML= `<h5 class="card-title"> ${day7_date}</h5>
                                                <img src="${day7_icon}" id="day7_img" style="width: 100px; height: 100px;" class="card-img-top"  alt="...">
                                                <p class="card-text"><p>Avg Temperature ${day7_avgtemp_c}<img width="30" src="img_C&F/C.png" alt="celsius"></p><p>Min Temp ${day7_mintemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"> - Max Temp ${day7_maxtemp_c}<img width="20" src="img_C&F/C.png" alt="celsius"><br>
                                                Wind ${day7_maxwind_mph} <img width="20" src="Other_img/windy.png" alt="windy">    Humidity ${day7_avghumidity} <img width="20" src="Other_img/humidity.png" alt="humidity"><br>
                                                Sunrise <img width="20" src="Other_img/sunrise.png" alt="Sunrise"> ${day7_sunrise} | Sunset <img width="20" src="Other_img/sunset.png" alt="sunset"> ${day7_sunset}</p>`


        })
        .catch(error => {
            console.error("Error fetching the weather data:", error);
        });



}

document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('button-addon2').click(); 
    }
});  

