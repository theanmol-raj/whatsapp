import { useState } from "react";
import { getAuth , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Homescreen from "./Screens/Homescreen";
import LoginScreen from "./Screens/LoginScreen";
import app from './firebase'

function App() {
const [user ,setUser] = useState(null) ;

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

async function Signup(){
  await signInWithPopup(auth, provider)
  .then((result) => {
    const data = result.user;
    setUser(data) ;
  }).catch((error) => {
    console.log(error)
    setUser(null)
  });

}



// function A(){
//   console.log("A")
// }
// async function B(){
//   console.log("B")
// }
// A() ; //async
// B() ; 
// C();
// D() ; //async
// Callback Function


// Promises
// function rest(A , B){
//   //working Code ......


//   // 
//   A(); // =>Success
//   B(); //=>error

// }
// let value = new Promise(rest)

// let prom = new Promise(function (A ,B){
//   let name = "lubna56" ;

//   if(name === "lubna"){
//     A("Yes this is the correct value")
//   }else{
//     B("No the name was not  same")
//   }
// })
// // console.log(prom)

// prom.then(function(va){
//   console.log(va)

// }).catch(function(err){
//   console.log(err)

// })

async function XY(){
  let ppo = new Promise(function (A){
    A(500)
  })
  let newval = await ppo ; // e and S
  newval.then( r => {
    return r
  } )

}
console.log(XY() );




  return (
    <div className="h-screen w-screen bg-slate-900">
      {user ? <Homescreen /> : <LoginScreen login={Signup}  /> }




    </div>
  );
}

export default App;
