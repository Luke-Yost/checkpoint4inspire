

export class Weather{
  constructor(data){
    this.kelvinTemp = data.main.temp
  }

  get Template(){
    return `
    <h1>🌤️ ${this.kelvinTemp} Kelvin</h1>
                  <h3>Boise, ID</h3>
    `
  }

}