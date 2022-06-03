
import { Weather } from "../Models/Weather.js";
import { weathersService } from "../Services/WeathersService.js";

export class WeathersController{
  constructor(){
    console.log('raining?');
    this.getWeather()
  }

  getWeather(){
    weathersService.getWeather()
  }

}