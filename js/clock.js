const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${min}:${sec}`;
}
// string에 길이를 2로 맞추고 안맞는 것은 숫자 0을 붙이도록 수정
// setTimeout(sayHello, 5000); 5초 기다린 후 한번 실행
// setI}nterval(sayHello, 5000); 5초마다 실행
getClock(); 
setInterval(getClock, 1000);  // 1초마다 갱신
