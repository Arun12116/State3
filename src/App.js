import Pass from "./Components/Pass";
import {lowercase, uppercase, number,symbols} from "./Components/Password"
// console.log(lowercase);
function App() {
  return (
   <>
   <Pass lowercase={lowercase} uppercase={uppercase} number={number} symbols={symbols}/>
   </>
  );
}

export default App;
