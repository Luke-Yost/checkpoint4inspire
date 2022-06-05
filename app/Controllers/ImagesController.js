import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawImage(){
  document.getElementById("image").style.backgroundImage = `url('${ProxyState.image}')`
}
export class ImagesController{
  constructor(){
    console.log('img workin');
    this.getImage()
    _drawImage()
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