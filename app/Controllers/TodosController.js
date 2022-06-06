import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";

export class TodosController{
  constructor(){
    console.log('todoin');
  }

  async getTodos(){
    try{
      await todosService.getTodos()
    }
    catch(error){
      console.error('to-notin');
      }
  }

}