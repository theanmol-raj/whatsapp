import Homescreen from "./Screens/Homescreen";

function App() {

  const y = (function (){
    let x = 0
    return  function(){
      x= 25
    }
  })()







  return (
    <div className="h-screen w-screen bg-slate-900">
      <Homescreen />
      {/* LoginScreen */}
    </div>
  );
}

export default App;
