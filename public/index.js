let socket = io();

let LED=0;

function changeImage() {
     console.log("Hello call for change the Bulb");
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "pic_bulboff.png";
      LED=0;
      
    } else {
      image.src = "pic_bulbon.png";
      LED=1;
     
    }

    socket.emit('command', LED);
}
 

  //.................. Consumer Code for Promises.


//   cart =["Kurta", "Shoes", "Watch"];

//  const promise= createOrder(cart);

//  promise.then(function (data){

//       console.log(data);
//  })
//  .catch( function (err){

//      console.log(err);
//  })


//  // Producers code for Promise ............................................................................
//   function createOrder(cart){

//      const promise= new Promise( function (resolve, reject){

//           if(check()==true){

//               resolve("OrderID is created");
//           }else{

//               reject("Something Went Wrong");
//           }
//      })

//      return promise ;

//  }

//  function check(){

//       return true;
//  }



 var promise=  registor();

 promise.then( function (data){
       
       console.log(data);
     return sendWelcomeEmail();
 })
 .then(function(data){

    console.log(data);
    return login();
 })
 .then(function(data){

     console.log(data);
     return getUserData();
 })
 .then( function (data){

     console.log(data);
 })
 .catch(function (err){

    console.log(err);
 })

 function check(){

       return false;
 }

 function registor(){

      var promise= new Promise( function (resolve, reject){
         
             if(check()==true){

                resolve("Registor is completed");

             }else{

                  reject("Registoration  Fail");
                
             }
      })

      return promise;
}

function sendWelcomeEmail(){

    var promise= new Promise( function (resolve, reject){
       
           if(check()==true){

              resolve("Email sent ");

           }else{

                reject("send Email is  Fail");
              
           }
    })

    return promise;
}

function registor(){

    var promise= new Promise( function (resolve, reject){
       
           if(check()==true){

              resolve("Registor is completed");

           }else{

                reject("Registoration  Fail");
              
           }
    })

    return promise;
}

function login(){

    var promise= new Promise( function (resolve, reject){
       
           if(check()==true){

              resolve("Login is done ");

           }else{

                reject(" login is  Fail");
              
           }
    })

    return promise;
}

function getUserData(){

    var promise= new Promise( function (resolve, reject){
       
           if(check()==true){

              resolve("I am Rajesh");

           }else{

                reject("GetUserData is   Fail");
              
           }
    })

    return promise;
}





















  

