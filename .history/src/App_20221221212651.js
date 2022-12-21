import { useEffect, useState } from "react";
import { getAuth ,onAuthStateChanged ,signOut , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore , doc, getDoc  } from "firebase/firestore";
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
  const docRef = doc(db, "cities", "SF");
  const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

}


async function SignIn(){
  await signInWithPopup(auth, provider)
  .then((result) => {
    const data = result.user;
    const {} = result.user ;
    setUser(data) ;
    console.log(data)
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
