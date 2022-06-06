

export class Todo{
  // NOTE constructor will work now
  constructor(data){
    this.description = data.description
    this.id = data.id 
    this.completed = data.completed
    this.user = data.user

    
  }

  get Template(){
    return`
    <li class="list-group-item">${this.description}<button class="btn-danger" onclick="app.todosController.deleteTodo('${this.id}')">Delete</button></li>
    `
  }

}