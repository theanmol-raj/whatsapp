import { useState } from "react";
import Homescreen from "./Screens/Homescreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  const [user ,setUser] = useState(true) ;


  return (
    <div className="h-screen w-screen bg-slate-900">
      <Homescreen />
      <LoginScreen />
    </div>
  );
}

export default App;
