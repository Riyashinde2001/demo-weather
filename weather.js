const apiKey ="939a83bf0ccba2d563968597cdf6576e";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weathericon =document.querySelector(".weather-icon");

//ASync function
async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
   if(data.weather[0].main == "clouds"){

    weathericon.src ="images/clouds.png";
    }

    else if(data.weather[0].main == "Clear"){
        weathericon.src ="/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src ="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzel"){
        weathericon.src ="images/drizzel.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src ="images/mist.png";
    }
   
}
searchBtn.addEventListener("click" ,()=>{
    checkweather(searchBox.value);
})
// checkweather();