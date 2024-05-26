    let apiKey = '40c3d03f10244726a0645559242305';
  let city = 'London'; // Example city
  let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10&api=no&alerts=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
 
            let = Temperture_C = (data.current.temp_c);
            let = Temperture_F = (data.current.temp_f);
     
        })
       


       














