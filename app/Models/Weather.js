

export class Weather{
  constructor(data){
    this.celciusTemp = data.main.temp - 273
    this.degreeTemp = ((data.main.temp - 273) * 1.8) + 32
  }

  get Template(){
    return`<div id="weatherTemp">${this.fahrenheitTemplate}</div>`
  }

  get celciusTemplate(){
    return`
    <h1>🌤️ ${Math.round(this.celciusTemp)}C </h1>
    <button class="p-1 btn btn-info" onclick="app.WeathersController.toFahrenheit()">To Fahrenheit</button>
                  <h3>Boise, ID</h3>
    `
  }

  get fahrenheitTemplate(){
    return`
    <h1>🌤️ ${Math.round(this.degreeTemp)}C </h1>
    <button class="p-1 btn btn-info" onclick="app.WeathersController.toCelcius()">To Celcius</button>
                  <h3>Boise, ID</h3>
    `
  }

}