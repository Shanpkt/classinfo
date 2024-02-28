import Certificate from "./components/certificate/certificate";
import Discription from "./components/discription/discription";
import Header from "./components/header/header";
import Logomention from "./components/logomention/logomention";
import Whatuget from "./components/whatuget/whatuget";


function App() {
  return (
    <div className="App">
    <Header/>
  <Discription/>
  <Logomention/>
  <Whatuget/>
  <Certificate/>
    </div>
  );
}

export default App;
