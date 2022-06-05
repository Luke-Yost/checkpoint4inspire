import { ImagesController } from "./Controllers/ImagesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { Weather } from "./Models/Weather.js";

class App {
  // valuesController = new ValuesController();

  weathersController = new WeathersController()
  imagesController = new ImagesController()

}

window["app"] = new App();
