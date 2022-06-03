import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { Weather } from "./Models/Weather.js";

class App {
  // valuesController = new ValuesController();

  weathersController = new WeathersController()

}

window["app"] = new App();
