import { ClocksController } from "./Controllers/ClocksController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { Weather } from "./Models/Weather.js";

class App {
  // valuesController = new ValuesController();

  weathersController = new WeathersController()
  imagesController = new ImagesController()

  quotesController = new QuotesController()

  clocksController = new ClocksController()

  todosController = new TodosController()

}

window["app"] = new App();
