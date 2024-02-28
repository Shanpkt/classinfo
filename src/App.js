import Certificate from "./components/certificate/certificate";
import Discription from "./components/discription/discription";
import Enrolbtn from "./components/enrollbtn/enrolbtn";
import FormComponent from "./components/form/form";
import Header from "./components/header/header";
import Logomention from "./components/logomention/logomention";
import TimeingChart from "./components/timeingChart/timeingChart";
import Whatuget from "./components/whatuget/whatuget";


function App() {
  return (
    <div className="App">
    <Header/>
  <Discription/>
  <Logomention/>
  <Whatuget/>
  <Certificate/>
  <TimeingChart/>
  <Enrolbtn/>
  hello
  <FormComponent/>
    </div>
  );
}

export default App;
