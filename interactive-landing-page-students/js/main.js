let wrap = document.querySelector('.wrapper');
let timeClass = document.querySelector('.time');
let discription = document.querySelector('.greeting');
let inputemail = document.querySelector('.input-email');
let subbutn = document.querySelector('.submit-msg')
// let today = new Date();
let today = new Date(2011, 0, 1, 23, 20, 30);
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let ampm = today.getHours() >= 12 ? 'pm' : 'am';
let n = time + " " + ampm;
timeClass.innerHTML = n;

// backGroundChange = ['../img/morning-bg.jpg', '../img/evening.png', '../img/afternoon.jpg']
let y = today.getHours();
if(y <=18 && y >=12){
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
discription.innerHTML = "GOOD AFTERNOON"
}else if(y > 18 && y <= 24){
    document.body.style.backgroundImage = "url('../img/evening.png')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
discription.innerHTML = "GOOD EVENING"
}else if(y < 12){
    document.body.style.backgroundImage = "url('../img/morning-bg.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
discription.innerHTML = "GOOD MORNING"
}
function printerror (){
let v = inputemail.value;
    let x = v.indexOf("@");

if(v.length!=0){
        if(x===-1){
            subbutn.innerHTML="not email"
        }
        else{
            subbutn.innerHTML="success"
            subbutn.style.color = "green";
        }
}
else{
    subbutn.innerHTML = "empty email"
    subbutn.style.color = "red";
}
// if (v.length == 0){
//     subbutn.innerHTML="Enter your email...."
// }
// else if (v.indexOf("@") == -1){
//     let x = v.indexOf("@");
//     subbutn.innerHTML=x
//     console.log(v.indexOf("@"))
// }
// else{
//     subbutn.innerHTML="Subscribed sucsesfuly....";
//     subbutn.style.color = "green";
// }
}
onsubmit = printerror;