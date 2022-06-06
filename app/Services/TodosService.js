import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";


let todoAPI = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/LukeYost/todos/',
  timeout: 10000
})

class TodosService{
  async getTodos(){
    const res = await todoAPI.get()
    console.log('get todo', res.data);
    ProxyState.todos = res.data.map(t => new Todo(t))
    console.log(ProxyState.todos,'wat');
  }


  async makeTodo(data){
    const res = await todoAPI.post('',data)
    console.log('making todo', res.data);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async deleteTodo(id){
    
    
    const res = await todoAPI.delete(id)
    console.log(res.data);
    ProxyState.todos = ProxyState.todos.filter(d => d.id !==id)

  }

}
export const todosService = new TodosService()