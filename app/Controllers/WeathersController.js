
import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather(){
  // let template = `<h1>🌤️ ${ProxyState.weather} Kelvin</h1>
  // <h3>Boise, ID</h3>`
  let weather = ProxyState.weather
  console.log(weather);
  document.getElementById('weather').innerHTML = weather.Template
}

export class WeathersController{
  constructor(){
    console.log('raining?');
    this.getWeather()
    ProxyState.on('weather', _drawWeather) 
  }

  getWeather(){
    weathersService.getWeather()
  }

}