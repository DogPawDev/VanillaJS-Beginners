/**
 * 사용자의 이름을 받고 출력하는 JS 파일
 */



//index.html에서 js-form 이름의 클래스를 토대로 데이터를 가져옵니다.
const form = document.querySelector(".js-form");

// form 안에 있는 input 태그를 읽어옵니다.
const input = form.querySelector("input");

// 사용자의 이름을 출력해줄 <h4> 태그의 데이터를 가져옵니다.
const greeting = document.querySelector(".js-greetings");

// 클래스에 추가, 삭제를 위한 값
const SHOWING_CN ="showing";

// 유저의 이름이 저장될 키의 이름
const USER_LS = "currentUser";



function saveName(text){
    /**
     * 이름을 LocalStorege에 저장합니다.
     */
    localStorage.setItem(USER_LS,text);
    
}

function askForName(){
    /**
     * 이름을 얻기위한 함수
     */
    
    // form 태그 화면 출력
     form.classList.add(SHOWING_CN);

    // form 이벤트를 달아 엔터 시 handlSubmit 함수 실행
    form.addEventListener("submit",handlSubmit);
}

function handlSubmit(event){
    /**
     * submit의 기본 동작을 막고 이름 입력 시 이름을 뿌려주고 localstoreg에 저장하는 함수
     */

     // event의 기본 동작 막기
    event.preventDefault();

    // 현재 input 값을 읽어옵니다.
    const currentValue = input.value;

    // 읽어온 값을 토대로 화면에 뿌려줍니다.
    paintGreeting(currentValue);

    // 읽어온 값을 localstorege에 저장합니다.
    saveName(currentValue);
}


function paintGreeting(text){
    /**
     * 사용자의 이름을 뿌려주는 함수
     */
    
    //form의 클래스인 showing을 지워 form을 화면에서 삭제합니다.
    form.classList.remove(SHOWING_CN);
  
    //greeting 클래스에 showing을 추가해 화면에 표시합니다.
    greeting.classList.add(SHOWING_CN);

    //그 화면에는 사용자가 입력한 문자열이 들어갑니다.
    greeting.innerText = `Hello ${text}`;
}



function loadName(){
    
    // 현재  LocalStorage에서 currentUser 라는 이름의 키값을 가져옵니다.
    const currentUser = localStorage.getItem(USER_LS);
    

    //
    if(currentUser === null){
        //currentUser의 값이 null이라면 사용자의 이름을 받습니다.
        askForName();
    }else{
        //만약 값이 존재한다면 이름을 html에 뿌려줍니다.
        paintGreeting(currentUser);
    }
}

function init(){
    /*
    *   greetting.js - 초기화 함수
        이름을 불러옵니다.
    */
    loadName();
}

init();