
import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather(){

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