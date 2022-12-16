import { useState } from "react";
import { getAuth , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Homescreen from "./Screens/Homescreen";
import LoginScreen from "./Screens/LoginScreen";
import app from './firebase'

function App() {
const [user ,setUser] = useState(false) ;

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// function Signup(){
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     const data = result.user;
//     setUser(data) ;
//   }).catch((error) => {
//     console.log(error)
//   });

// }



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







  return (
    <div className="h-screen w-screen bg-slate-900">
      {user ? <Homescreen /> : <LoginScreen  /> }




    </div>
  );
}

export default App;
