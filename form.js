
const btn = document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
});

function test(){

 var user = document.getElementById("name").value;
 var email = document.getElementById("email").value;

//  var username = localStorage.setItem("user",user);
//  var mail = localStorage.setItem("email",email);


const obj = {

     user,
    email


}

axios.post("https://crudcrud.com/api/9c532d45ed4d4deaa0060b1082cd167a/data",obj)
.then((response)=>{
    console.log(response)
})

.catch((err)=>{
    console.log(err)
})
//   localStorage.setItem(obj.email, JSON.stringify(obj));
   shownewuseronscreen(obj)

}
window.addEventListener("DOMContentLoaded", () => {

    axios.get("https://crudcrud.com/api/9c532d45ed4d4deaa0060b1082cd167a/data")
    .then((response)=>{
        console.log(response);
        for(var i = 0;i<response.data.length;i++){
            shownewuseronscreen(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        shownewuseronscreen(userDetailsObj)
    }
})

function shownewuseronscreen(user){

     document.getElementById('email').value = '';
      document.getElementById('name').value = '';
      if(localStorage.getItem(user.email) !== null){
         removeUserFromScreen(user.email)
     }
     
    // // console.log(localStorage.getItem(user.emailId))
    // if(localStorage.getItem(user.email) !== null){
    //     removeUserFromScreen(user.email)
    // }

const parentNode = document.getElementById('users');
const childHTML = `<li id=${user.email}> ${user.user} - ${user.email}
<button onclick= deleteUser('${user.email}')> Delete User </button> </li>`
parentNode.innerHTML = parentNode.innerHTML+childHTML;
}
function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

 function removeUserFromScreen(emailId){
     const parentNode = document.getElementById('users');
     const childNodeToBeDeleted = document.getElementById(emailId);
     if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
     }
 }

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // shownewuseronscreen(obj)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // function shownewuseronscreen(user){
  
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // const parentNode = document.getElementById('users');
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // const childHTML = `<li> ${user.user} - ${user.email} </li>`
                           
                                    
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // parentNode.innerHTML = parentNode.innerHTML+childHTML;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // var a = 2;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // var c = 2;



// // // // // // // // // // // // // // // // // // // // // // // // // // // // // function b(){

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // var x = 2;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // var c = 4

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(c)

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(a);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(this.a);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(this.c)

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(this.x)

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(window.a)

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(window.x)

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(b());

// // // // // // // // // // // // // // // // // // // // // // // // // // // // function abc() {

// // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(a);
    
// // // // // // // // // // // // // // // // // // // // // // // // // // // //     }
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // // // //     abc();
    
// // // // // // // // // // // // // // // // // // // // // // // // // // // //     var a = 7;
    
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // // // function outerfunction() {

// // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(a);
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     var c = 10;
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     innerfunction();
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     function innerfunction() {
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(b);
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(c);
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     }
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     var a = 7;
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     var b =3
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // // //     outerfunction();
    
// // // // // // // // // // // // // // // // // // // // // // // // // // function outerfunction() {

// // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(a);
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     var a = 10;
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     innerfunction();
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     function innerfunction() {
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(a);
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(window.a);
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     console.log(this.a)
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     }
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     var a = 7;
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     var b =3
    
    
    
// // // // // // // // // // // // // // // // // // // // // // // // // //     outerfunction();
    
// // // // // // // // // // // // // // // // // // // // // // // // // //console.log(a)

// // // // // // // // // // // // // // // // // // // // // // // // // console.log(b);

// // // // // // // // // // // // // // // // // // // // // // // // // let a =5;

// // // // // // // // // // // // // // // // // // // // // // // // // var b =6;

// // // // // // // // // // // // // // // // // // // // // // // // // console.log(b);


// // // // // // // // // // // // // // // // // // // // // // // // console.log(a);

// // // // // // // // // // // // // // // // // // // // // // // // var a = 5;



// // // // // // // // // // // // // // // // // // // // // // // // console.log(b) //we havent initialized b, Guess the output


// // // // // // // // // // // // // // // // // // // // // // // // let a = 5;

// // // // // // // // // // // // // // // // // // // // // // // // var b = 6;



// // // // // // // // // // // // // // // // // // // // // // // // console.log(this.b);

// // // // // // // // // // // // // // // // // // // // // // // // console.log(window.b)

// // // // // // // // // // // // // // // // // // // // // // // // console.log(window.a)

// // // // // // // // // // // // // // // // // // // // // // // // console.log(this.a);


// // // // // // // // // // // // // // // // // // // // // // // let a =6;

// // // // // // // // // // // // // // // // // // // // // // // const b

// // // // // // // // // // // // // // // // // // // // // // // console.log('a');

// // // // // // // // // // // // // // // // // // // // // // // console.log('b');



// // // // // // // // // // // // // // // // // // // // // // // setTimeout(()=> console.log('c'), 1000);



// // // // // // // // // // // // // // // // // // // // // // // console.log('d');


// // // // // // // // // // // // // // // // // // // // // // console.log('a');

// // // // // // // // // // // // // // // // // // // // // // console.log('b');



// // // // // // // // // // // // // // // // // // // // // // setTimeout(()=> console.log('c'), 1000);



// // // // // // // // // // // // // // // // // // // // // // setTimeout(()=> console.log('c'), 0);



// // // // // // // // // // // // // // // // // // // // // // console.log('d');

// // // // // // // // // // // // // // // // // // // // // var a = 50;



// // // // // // // // // // // // // // // // // // // // // {

// // // // // // // // // // // // // // // // // // // // // var a =30;

// // // // // // // // // // // // // // // // // // // // // let b = 20;

// // // // // // // // // // // // // // // // // // // // // let c = 30;

// // // // // // // // // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // // // // // // // console.log(a)


// // // // // // // // // // // // // // // // // // // // const a = 50;



// // // // // // // // // // // // // // // // // // // // {

// // // // // // // // // // // // // // // // // // // // var a =30;

// // // // // // // // // // // // // // // // // // // // let b = 20;

// // // // // // // // // // // // // // // // // // // // let c = 30;

// // // // // // // // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // // // // // // console.log(a)

// // // // // // // // // // // // // // // // // // // let a = 50;



// // // // // // // // // // // // // // // // // // // {

// // // // // // // // // // // // // // // // // // // var a =30;

// // // // // // // // // // // // // // // // // // // let b = 20;

// // // // // // // // // // // // // // // // // // // let c = 30;

// // // // // // // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // // // // // console.log(a)



// // // // // // // // // // // // // // // // // let a = 50;



// // // // // // // // // // // // // // // // // function fun(){

// // // // // // // // // // // // // // // // // var a =30;

// // // // // // // // // // // // // // // // // let b = 20;

// // // // // // // // // // // // // // // // // let c = 30;

// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // fun();

// // // // // // // // // // // // // // // // // console.log(a)



// // // // // // // // // // // // // // // // const a = 10;

// // // // // // // // // // // // // // // // {

// // // // // // // // // // // // // // // // var a = 10;

// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // console.log(a)

// // // // // // // // // // // // // // // const a = 10;

// // // // // // // // // // // // // // // {

// // // // // // // // // // // // // // // const a = 20;

// // // // // // // // // // // // // // // {

// // // // // // // // // // // // // // // const a = 50;

// // // // // // // // // // // // // // // console.log(a);

// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // console.log(a)

// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // console.log(a)



// // // // // // // // // // // // // // function x(){

// // // // // // // // // // // // // //     let a = 10;
    
// // // // // // // // // // // // // //     function y(){
    
// // // // // // // // // // // // // //     console.log(a);
    
// // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // //     return y();
    
// // // // // // // // // // // // // //     }
    
    
    
// // // // // // // // // // // // // //     x();
    
    


// // // // // // // // // // // // //  function x(){

// // // // // // // // // // // // //     let a = 10;
    
// // // // // // // // // // // // //     function y(){
    
// // // // // // // // // // // // //     console.log(a);
    
// // // // // // // // // // // // //     }
    
// // // // // // // // // // // // //     return y;
    
// // // // // // // // // // // // //     }
    
    
    
// // // // // // // // // // // // //     console.log( x());
    
    


// // // // // // // // // // // // function x(){

// // // // // // // // // // // //     let a = 10;
    
// // // // // // // // // // // //     function y(){
    
// // // // // // // // // // // //     console.log(a);
    
// // // // // // // // // // // //     }
    
// // // // // // // // // // // //     return y;
    
// // // // // // // // // // // //     }
    
    
    
// // // // // // // // // // // //     const z = x()
    
// // // // // // // // // // // //     console.log(z());

// // // // // // // // // // // function x(){

// // // // // // // // // // //     let a = 10;
    
// // // // // // // // // // //     function y(){
    
// // // // // // // // // // //     console.log(a);
    
// // // // // // // // // // //     }
    
// // // // // // // // // // //     a= 50;
    
// // // // // // // // // // //     return y;
    
// // // // // // // // // // //     }
    
    
    
// // // // // // // // // // //     const z = x()
    
// // // // // // // // // // //     console.log(z());
    
    
// // // // // // // // // // function y(){



// // // // // // // // // //     setTimeout(() => console.log(a), 1000)
    
// // // // // // // // // //     console.log('Done Coding')
    
    
    
// // // // // // // // // //     }
    
// // // // // // // // // //     y();
    
// // // // // // // // // function y(){



// // // // // // // // //     setTimeout(() => console.log(a), 0)
    
// // // // // // // // //     console.log('Done Coding')
    
    
    
// // // // // // // // //     }
    
// // // // // // // // //     y();
    
// // // // // // // // function y(){



// // // // // // // //     for(var i=1;i<6;i++){
    
// // // // // // // //     setTimeout(() => console.log(i ), i * 1000)
    
// // // // // // // //     }
    
// // // // // // // //     console.log('Done Coding')
    
    
    
// // // // // // // //     }
    
// // // // // // // //     y();
    
// // // // // // // const fun=(arr)=>{

// // // // // // //     var count = 0;
// // // // // // //     return()=>{

// // // // // // //         console.log('hello'+arr[count])
// // // // // // //         count++;
// // // // // // //     }

// // // // // // // }
// // // // // // // const name = fun(['ram','shyam'])
    
// // // // // // a()

// // // // // // b()



// // // // // // function a(){

// // // // // // console.log('inside a');

// // // // // // }



// // // // // // var b = function (){

// // // // // // console.log('inside b');

// // // // // // }

// // // // // function Myfunction(a) {
// // // // //     return (b) => {
// // // // //        return (c) => {
// // // // //          return a * b * c
// // // // //          }
// // // // //         }
// // // // //      }



// // // // // Myfunction(2,3,4);

 
// // // // // var obj = {num:2};
// // // // // var adddtothis = function(a){
// // // // //     return this.num+a;

// // // // // }
// // // // // console.log(adddtothis.call(obj,3));
// // // // setTimeout(() => console.log('timer expired'), 1000)



// // // // function x(y) {

// // // // console.log('inside x');

// // // // y();

// // // // }



// // // // x(function y(){

// // // // console.log('inside y')

// // // // })

// // // setTimeout(() => console.log('timer1 expired'), 1000)



// // // setTimeout(() => console.log('timer2 expired'), 0)



// // // function x(y) {

// // // console.log('inside x');

// // // y();

// // // }



// // // x(function y(){

// // // console.log('inside y')

// // // })

// // setTimeout(() => console.log('timer1 expired'), 1000)



// // setTimeout(() => console.log('timer2 expired'), 0)



// // function x(y) {

// // console.log('inside x');

// // y();

// // }



// // x(function y(){

// // setTimeout(() => console.log('inside y'), 0)

// // })


// this.table = 'window table';
// this.garage = {

//     table :'garage table'
// };

// let johnsroom =  {
//     table:'johns table',
//     cleanTable(){
//     console.log(`cleaning ${this.table}`)
//     }
// };

// console.log(johnsroom.table);

// class student{


//     constructor(name,age,phonenumber,boardmarks){

//         this.name = name;
//         this.age = age;
//         this.phonenumber = phonenumber;
//         this.boardmarks = boardmarks;
//     }


// }