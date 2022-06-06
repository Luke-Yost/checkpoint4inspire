import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

export class QuotesController{
  constructor(){
    console.log('loaded quotes controller');
    this.getQuotes()
  }

  async getQuotes(){
    try{
      await quotesService.getQuotes()
    }
    catch(error){
      console.error(error,'no load quote');
    }
  }

}