import { useState } from "react";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import Homescreen from "./Screens/Homescreen";
import LoginScreen from "./Screens/LoginScreen";
import app from '../firebase'

function App() {
const [user ,setUser] = useState(false) ;

const auth = getAuth(app);
const provider = new GoogleAuthProvider();









  return (
    <div className="h-screen w-screen bg-slate-900">
      {user ? <Homescreen /> : <LoginScreen login={setUser} /> }




    </div>
  );
}

export default App;
