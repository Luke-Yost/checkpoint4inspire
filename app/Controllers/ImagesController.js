import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
export class ImagesController{
  constructor(){

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