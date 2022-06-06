import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


function _drawQuote(){
  // console.log(ProxyState.quote);
  document.getElementById("quotePlace").innerHTML = ProxyState.quote.Template
}
export class QuotesController{
  constructor(){
    // console.log('loaded quotes controller');
    this.getQuotes()
    // console.log(ProxyState.quote);
    ProxyState.on('quote',  _drawQuote)
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