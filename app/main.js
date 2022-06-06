import { ClocksController } from "./Controllers/ClocksController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { Weather } from "./Models/Weather.js";

class App {
  // valuesController = new ValuesController();

  weathersController = new WeathersController()
  imagesController = new ImagesController()

  quotesController = new QuotesController()

  clocksController = new ClocksController()

}

window["app"] = new App();
