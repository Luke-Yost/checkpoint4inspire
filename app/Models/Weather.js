

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
    <div class="card">
    <div class="card-body">
    <h1>🌤️ ${Math.round(this.celciusTemp)}C </h1>
    <button class="p-1 btn btn-info" onclick="app.weathersController.toFahrenheit()">To Fahrenheit</button>
                  <h3>Boise, ID</h3>
    </div>
  </div>
    `
  }

  get fahrenheitTemplate(){
    return`
    <div class="card">
    <div class="card-body">
    <h1>🌤️ ${Math.round(this.degreeTemp)}F </h1>
<button class="p-1 btn btn-info" onclick="app.weathersController.toCelcius()">To Celcius</button>
              <h3>Boise, ID</h3>
    </div>
  </div>
    `
  }

}
