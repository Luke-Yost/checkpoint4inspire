import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Todo } from "../Models/Todo.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
  let todoCount = 0 
  let todoneCount = 0
  let template = ''
  ProxyState.todos.forEach(t => {
    template += t.Template
    if(t.completed){
      todoneCount++}
      else{todoCount++}
    })

    document.getElementById('count').innerText = `To-Dos: ${todoCount}| To-Dones: ${todoneCount}`
  document.getElementById('todolist').innerHTML = template
}
export class TodosController{
  constructor(){
    this.getTodos()
    console.log('todoin');
    ProxyState.on('todos', _draw)
    
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
    if(confirm('Delete To-do')){
      await todosService.deleteTodo(id)
    }
  }

  async completeTodo(id){
    try {
      await todosService.completeTodo(id)
    }
    catch(error){
      console.error(error);
    }
  }

}