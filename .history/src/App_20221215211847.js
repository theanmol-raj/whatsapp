import { useState } from "react";
import Card from "./Components/Card";
import Homescreen from "./Screens/Homescreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  const [user ,setUser] = useState(false) ;

  const [card ,setCard] = useState(false)
  return (
    <div className="h-screen w-screen bg-slate-900">
      {/* {user ? <Homescreen /> : <LoginScreen login={setUser} /> } */}

      {card ? "Hello" : <button className=" bg-white px-4 py-2" onClick={()=>setCard(true)}>Click</button>}



    </div>
  );
}

export default App;
