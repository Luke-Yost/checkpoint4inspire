import { ProxyState } from "../AppState.js";
// import { Todo } from "../Models/Todo"

let todoAPI = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/LukeYost/todos',
  timeout: 10000
})

class TodosService{

}


export const todosService = new TodosService()