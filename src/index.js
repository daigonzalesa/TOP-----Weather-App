
const getCity=document.querySelector("#get-city");
const main=document.querySelector("#main-display");

// .------------------------------------get weather .json-----------------------------------------------
async function getWeather(city) {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=cb6defc8a23641c58ae190138260508&q=${city}`;
        const response = await fetch (url);
        const weather  = await response.json();
        console.log(weather);
        return weather;
    } catch (err) {
        console.log('error');
    }
}

getCity.addEventListener('submit', async (e) => {

    e.preventDefault(); // stop the page for refreshing!
    const city=document.getElementById("city-name").value;
    weather = await getWeather(city);
    displayWeather(weather);
})

//----------------------------------------UI-----------------------------------------------------------------


function displayWeather(weather) {
//----------------------------main Info-------------------------------------------------
    const mainInfo=document.createElement("div");
    const cityName=document.createElement("h1");
    const countryName=document.createElement("p");
    const localTime=document.createElement("p");
    const condition=document.createElement("p");
    const logo=document.createElement("img");

    cityName.textContent=weather.location.name;
    countryName.textContent=weather.location.country;
    localTime.textContent=weather.location.localtime;
    condition.textContent=weather.current.condition.text;
    logo.src=weather.current.condition.icon;

    mainInfo.classList.add("mainInfoClass");
    
    mainInfo.appendChild(cityName);
    mainInfo.appendChild(countryName);
    mainInfo.appendChild(localTime);
    mainInfo.appendChild(condition);
    mainInfo.appendChild(logo);
//--------------------------temperature box------------------------------------
    const tempBox=document.createElement("div");
    const tempC=document.createElement("p");
    const feelsTempC=document.createElement("p");
    
    tempC.textContent=weather.current.temp_c;
    feelsTempC.textContent=weather.current.feelslike_c;

    tempBox.appendChild(tempC);
    tempBox.appendChild(feelsTempC);
//----------------------------- other parameters--------------------------------
    const parametersBox=document.createElement("div");
    const rain=document.createElement("p");
    const humidity=document.createElement("p");
    const precipitation=document.createElement("p");
    const uv=document.createElement("uv");

    rain.textContent=weather.current.chance_of_rain;
    humidity.textContent=weather.current.humidity;
    precipitation.textContent=weather.current.precip_mm;
    uv.textContent=weather.current.uv;

    parametersBox.appendChild(rain);
    parametersBox.appendChild(humidity);
    parametersBox.appendChild(precipitation);
    parametersBox.appendChild(uv);

//---------------------------------------------------------------------------------

    main.appendChild(mainInfo);
    main.appendChild(tempBox);
    main.appendChild(parametersBox);

}


