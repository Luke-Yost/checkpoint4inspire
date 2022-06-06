

export class Quote{
  constructor(data){
    this.quote = data.content
    this.author = data.author
  }

  get Template(){
    return `
    <div  class="card">
    <div class="card-body text-info">
      <div class="quotePlace">${this.quote}</div>
      <div class="hidden">${this.author}</div>
    </div>
  </div>
    `
  }

}