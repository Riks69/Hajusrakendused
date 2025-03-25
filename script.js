const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58';

fetch(url)
.then((response) =>{
    return response.json();
}).then((data)=>{
    const hour = 10;
    const timeseries = data.properties.timeseries

    for(let i = 0; i < hour; i++){
        time = timeseries[i].time;
        temp = timeseries[i].data.instant.details.air_temperature;
        console.log(time, temp)
    }

})