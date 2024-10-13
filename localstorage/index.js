// //1
// // to get the value of local storage in html file
// const tag = document.querySelector(".tag")
// //tag.innerHTML = localStorage.myname;

const { json } = require("express/lib/response");

// //This is real loacalstorge syntax to get the value by using getitem
// tag.innerHTML =localStorage.getItem("myname");





// //2
// // to update the value of local storage with input tag
// const nameInput = document.querySelector(".name");


// nameInput.addEventListener("input",(e)=>{
//     //localStorage.myname =e.target.value;
//     localStorage.setItem("myname",e.target.value);

//     //to cahnge the value of innerhtml
//     tag.innerHTML = localStorage.myname;
// })

// //age 

// const numInput=document.querySelector(".num");
// const numb =document.querySelector(".numtag");

// numb.innerHTML=localStorage.getItem("myage");

// numInput.addEventListener('input',(e)={
//    localStorage.setItem("myage".e.target.value)
// })


// 1
// to get the value of local storage in the HTML file
const tag = document.querySelector(".tag");
tag.innerHTML = localStorage.getItem("myname"); // Using getItem to retrieve the value

// 2
// to update the value of local storage with input tag
const nameInput = document.querySelector(".name");

// nameInput.addEventListener("input", (e) => {
//     localStorage.setItem("myname", e.target.value); // Storing the value in localStorage
//     tag.innerHTML = localStorage.getItem("myname"); // Updating innerHTML with the new value
// });

// Age
const numInput = document.querySelector(".num");
const numb = document.querySelector(".numtag");

numb.innerHTML = localStorage.getItem("myage"); // Getting the initial value of myage

// numInput.addEventListener('input', (e) => {
//     localStorage.setItem("myage", e.target.value); // Correctly saving the value of myage
//     numb.innerText = localStorage.getItem("myage"); // Updating the displayed value of myage
   
// });

// in localstorage value shoul be in sting form
// to convert the value in ob ject into string value then you have to json.stringify
// to convert the value in string into object value then you have to json.stringify


//3
// To store value in json in string with the help of JSON.stringify
// const display={
//     name:"",
//     age:''
// }

// nameInput.addEventListener("input",(e)=>{
//     display.name=e.target.value;
//     localStorage.setItem("display",JSON.stringify(display))
// })

// numInput.addEventListener('input', (e) => {
//     display.age=e.target.value;
//     localStorage.setItem("display".JSON.stringify(display))
    
// });

//4
// to get the value from localstorage and convert string value into object by using JSON.parse
// const display=JSON.parse(localStorage.getItem("display")) || {};

// nameInput.addEventListener("input",(e)=>{
//     display.name=e.target.value;
//     localStorage.setItem("display",JSON.stringify(display))
// })

// numInput.addEventListener('input', (e) => {
//     display.age=e.target.value;
//     localStorage.setItem("display",JSON.stringify(display))
    
// });


const display = JSON.parse(localStorage.getItem('display')) || {};

tag.innerHTML=display.name;
numb.innerHTML= display.age

nameInput.addEventListener("input", (e) => {
    display.name = e.target.value;
    localStorage.setItem("display", JSON.stringify(display));
});

numInput.addEventListener('input', (e) => {
    display.age = e.target.value;
    localStorage.setItem("display", JSON.stringify(display)); // Fixed the comma here
});








