let cname = data.name;
            let currtemp = kelvinToCelsius(data.main.temp);
            let weatherDesc = data.weather[0].description;
            let hume = data.main.humidity;
            let pres = data.main.pressure;
            let windspeed = data.wind.speed;
            console.log(windspeed);
            <i class="fa-solid fa-gauge text-center me-3"></i>