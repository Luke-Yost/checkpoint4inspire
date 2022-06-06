

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
    <li class="list-group-item"><input type="checkbox">${this.description}<button class="btn-danger btn-sm " onclick="app.todosController.deleteTodo('${this.id}')">Delete</button></li>
    `
  }

}