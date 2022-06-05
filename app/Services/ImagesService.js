
import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandboxAPI } from "../Utils/Axios.js";

class ImagesService{
  async getImage(){
    const res = await sandboxAPI.get('images')
    console.log('mr url arrived', res.data);
    ProxyState.image = new Image(res.data)
  }
}

export const imagesService = new ImagesService()