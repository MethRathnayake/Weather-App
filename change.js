function change_f(){
document.getElementById('change_1').textContent = `${Temperture_F}`;
document.getElementById('change_1').innerHTML += `<img width="90" src="img_C&F/F.png" alt="Fahrenheit">`;
document.getElementById('weather_2').innerHTML = `<button class="btn btn-primary" type="button" id="button-addon3" onclick="change_c()">Celsius</button>`;
// document.getElementById("card-day2").innerHTML= `<h5 class="card-title"> ${day1_date}</h5>
//                                                 <img src="${day1_icon}" id="day1_img" style="width: 100px; height: 100px;" class="card-img-top"  alt="...">
//                                                 <p class="card-text"><p>Avg Temperature ${day1_avgtemp_f}<img width="30" src="img_C&F/F.png" alt="Fahrenheit"></p><p>Min Temp ${day1_mintemp_f}<img width="20" src="img_C&F/F.png" alt="Fahrenheit"> - Max Temp ${day1_maxtemp_f}<img width="20" src="img_C&F/F.png" alt="Fahrenheit"><br>
//                                                 Wind ${day1_maxwind_mph} <img width="20" src="Other_img/windy.png" alt="windy">    Humidity ${day1_avghumidity} <img width="20" src="Other_img/humidity.png" alt="humidity"><br>
//                                                 Sunrise <img width="20" src="Other_img/sunrise.png" alt="Sunrise"> ${day1_sunrise} | Sunset <img width="20" src="Other_img/sunset.png" alt="sunset"> ${day1_sunset}</p>`;


};
function change_c(){
    document.getElementById('change_1').textContent = `${Temperture_C}`;
    document.getElementById('change_1').innerHTML += `<img width="90" src="img_C&F/C.png" alt="Celsius">`;
    document.getElementById('weather_2').innerHTML = `<button class="btn btn-primary" type="button" id="button-addon3" onclick="change_f()">Farenhiet</button>`;
}