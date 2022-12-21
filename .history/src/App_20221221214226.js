import { useEffect, useState } from "react";
import { getAuth ,onAuthStateChanged ,signOut , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore , doc, getDoc ,setDoc  } from "firebase/firestore";
import Homescreen from "./Screens/Homescreen";
import LoginScreen from "./Screens/LoginScreen";
import app from './firebase'
import Loader from "./Screens/Loader";

function App() {
const [user ,setUser] = useState(null) ;

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

useEffect(()=>{
  if (!user) return ;
  checkNewLogin();
},[user])

async function checkNewLogin(){
  const docRef = doc(db, "users", user?.uid);
  const docSnap = await getDoc(docRef);

if (!docSnap.exists()) {
  
}
}


async function SignIn(){
  await signInWithPopup(auth, provider)
  .then((result) => {
    const {displayName ,email ,photoURL ,uid} = result.user ;
    setUser({"displayName":displayName ,"email" :email ,"photoURL" :photoURL ,"uid" :uid}) ;
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
      const {displayName ,email ,photoURL ,uid} = u ;
      setUser({"displayName":displayName ,"email" :email ,"photoURL" :photoURL ,"uid" :uid}) ;
    } else {
      setUser(null)
    }
  });

},[])

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
