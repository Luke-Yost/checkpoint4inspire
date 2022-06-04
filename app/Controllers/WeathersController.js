
import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather(){

  // let weather = ProxyState.weather
  // console.log(weather);
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export class WeathersController{
  constructor(){
    console.log('raining?');
    ProxyState.on('weather', _drawWeather) 
    this.getWeather()
    console.log(ProxyState.weather);
  }

  getWeather(){
    weathersService.getWeather()
  }

  toCelcius(){
    console.log('wat');
    document.getElementById("weatherTemp").innerHTML = ProxyState.weather.celciusTemplate
  }

  toFahrenheit(){
    console.log('us wat');
    document.getElementById("weatherTemp").innerHTML = ProxyState.weather.fahrenheitTemplate
  }

}