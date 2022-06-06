import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Todo } from "../Models/Todo.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
  let todos = ProxyState.todos
  let template = ''
  todos.forEach(t => template += t.Template)
  document.getElementById('todolist').innerHTML = template
}
export class TodosController{
  constructor(){
    console.log('todoin');
    ProxyState.on('todos', _draw)
    this.getTodos()
    // this.makeTodo()
  }

  async getTodos(){
    try{
      await todosService.getTodos()
    }
    catch(error){
      console.error('to-notin');
      }
  }
  async makeTodo(){
    try{
      window.event.preventDefault()
      console.log('making todo');
      
      let form = window.event.target
      let Data = {
        description: form.name.value
      }
      await todosService.makeTodo(Data)
    }
    catch(error){
      console.error(error);
      }
  }

  async deleteTodo(id){
    try{
      todosService.deleteTodo(id)
    }
    catch(error){
      console.error(error);
    }
  }

}