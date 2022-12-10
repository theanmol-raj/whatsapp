import Homescreen from "./Screens/Homescreen";

function App() {
  
//  Create a state variable with user .. boolean values .. if true show home screen else show login screen


  return (
    <div className="h-screen w-screen bg-slate-900">
      <Homescreen />
      {/* LoginScreen */}
    </div>
  );
}

export default App;
