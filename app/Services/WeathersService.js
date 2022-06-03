import { Weather } from "../Models/Weather.js";
import { ProxyState } from "../AppState.js"; 
import { sandboxAPI } from "../Utils/Axios.js";

class WeathersService{

  async getWeather(){
    try{
    const res = await sandboxAPI.get('weather')
    console.log(res.data);
    }
    catch(error){
      console.error('error');
    }
  }

}


export const weathersService = new WeathersService()