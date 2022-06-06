import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxAPI } from "../Utils/Axios.js";

class QuotesService{
  async getQuotes(){
    const res = await sandboxAPI.get('quotes')
    console.log('getin quote', res.data);
    ProxyState.quote = new Quote(res.data)
  }
}

export const quotesService = new QuotesService()