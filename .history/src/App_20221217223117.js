import { useEffect, useLayoutEffect, useState } from "react";
import { getAuth ,onAuthStateChanged ,signOut , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Homescreen from "./Screens/Homescreen";
import LoginScreen from "./Screens/LoginScreen";
import app from './firebase'
import Loader from "./Screens/Loader";

function App() {
const [user ,setUser] = useState(null) ;

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

async function SignIn(){
  await signInWithPopup(auth, provider)
  .then((result) => {
    const data = result.user;
    setUser(data) ;
  }).catch((error) => {
    console.log(error)
    setUser(null)
  });

}

async function Signout(){
  await signOut(auth).then(()=>{}).catch(()=>{})
}

useEffect(()=>{ 
  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u)
    } else {
      setUser(null)
    }
  });

},[user])

const [init ,setInit] = useState(true) ;
setTimeout(function(){
setInit(false)
}, 5000 )

  if (init) return <Loader /> ;

  return (
    <div className="h-screen w-screen bg-slate-900">
      {user ? <Homescreen user={user} logout={Signout} /> : <LoginScreen login={SignIn}  /> }


    </div>
  );
}

export default App;
