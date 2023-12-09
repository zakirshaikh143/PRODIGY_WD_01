var startTimer;
var started = 0;
const sec = document.getElementById('seconds');
let nSec = parseInt(sec.innerText);
const min = document.getElementById('minute');
let nMin = parseInt(min.innerText);
const hr = document.getElementById('hour');
let nHr = parseInt(hr.innerText);
const btnStart = document.getElementById('str');
const btnStop = document.getElementById('stp');
const btnReset = document.getElementById('rest');
const btnLap = document.getElementById('lap');
var counter = 0;

function start(){
    if(started ===1){

    }
 startTimer = setInterval(() => {
        nSec++;
        if(nSec < 10){
            sec.innerText = '0' + nSec;
        }else if (nSec < 60){
            sec.innerText = nSec;
        }
        if (nSec >= 59){
            nSec = 0;
            sec.innerText = '0' + 0;
            nMin++;
            if(nMin < 10){
                min.innerText = '0' + nMin;
            }else if (nMin < 60){
                min.innerText = nMin;
            }
            if (nMin > 59){
                nMin = 0;
                min.innerText = '0' + 0;
                nHr++;
                if(nHr < 9){
                    hr.innerText = '0' + nHr;
                }else {
                    hr.innerText = nHr;
                }   
            }
        }
    }, 10)
}
btnStart.addEventListener('click', () => {
    started++;
    start();
} );     
btnStop.addEventListener('click', () => {
    clearInterval(startTimer);
    started = 0;
});
btnReset.addEventListener('click', () => {
    sec.innerText = '00';
    min.innerText = '00';
    hr.innerText = '00';
    clearInterval(startTimer);
    started = 0;
});
btnLap.addEventListener('click', ()=> {
    counter++
    const code = <div class="lap-record">${counter}. ${hr.innerText}:${min.innerText}:${sec.innerText}</div>;
    const lapContainer = document.querySelector('.lap-container')
    lapContainer.insertAdjacentHTML('afterbegin', code)
});