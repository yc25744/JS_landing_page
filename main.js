let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}
dynamic(randomString());

//word output one by one
function dynamic(randomArr){
    console.log(randomArr);
    if(randomArr.length >0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}






function blink (){
    target.classList.toggle("active");
}
setInterval(blink,500);


