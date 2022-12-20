import { useEffect, useState } from "react";
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

const [a ,sA] = useState(true)



useEffect(() =>{
console.log("I was excuted")


},[]);
// The function will run atleast 1 time

  return (
    <div className="h-screen w-screen bg-slate-900">
      {/* {user ? <Homescreen /> : <LoginScreen login={Signup}  /> } */}




    </div>
  );
}

export default App;
