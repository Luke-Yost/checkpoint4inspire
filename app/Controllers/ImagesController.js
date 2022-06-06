import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawImage(){
console.log(ProxyState.image);
  document.body.style.backgroundImage = `url(${ProxyState.image.img})`
}
export class ImagesController{
  constructor(){
    console.log('img workin');
    this.getImage()
    ProxyState.on('image', _drawImage)
  }

  async getImage(){
    try{
      await imagesService.getImage()
    }
    catch(error){
      console.error(error,'no mr url for you');
    }
  }

}