



function _getDatetime(){
let now =  Date()
// console.log(now);
document.getElementById('clock').innerHTML = `<div class="card">
<div class="card-body text-info">
  ${now}
</div>
</div>`
}

export class ClocksController{
  constructor(){
    // console.log('load time');
    setInterval(_getDatetime, 1000)
    
  }

  // async getTime(){
  //   try{
  //     await clocksService.getTime()
  //   }
  //   catch(error){
  //     console.error('out of time :(');
  //   }
  // }

}