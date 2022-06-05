
import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandboxAPI } from "../Utils/Axios.js";

class ImagesService{
  async getImage(){
    const res = await sandboxAPI.get('images')
    console.log('mr url arrived', res.data);
    ProxyState.image = res.data.url
   console.log(ProxyState.image);
  }
}

export const imagesService = new ImagesService()