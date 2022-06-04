

export class Weather{
  constructor(data){
    this.celciusTemp = data.main.temp - 273
    this.degreeTemp = (this.celciusTemp * 1.8) + 32
  }

  get Template(){
    return `
    <h1>🌤️ ${Math.round(this.degreeTemp)}F </h1>
                  <h3>Boise, ID</h3>
    `
  }

}