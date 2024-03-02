
import { Form, Route, Routes } from "react-router-dom";
import Info from "./components/pages/info";
import Formfill from "./components/pages/formfill";
function App() {
  return (
    <div className="App">

      <Routes>
      <Route  path="/"  element={<Info/>} />  
      <Route   path="/form" element={<Formfill/>} />
   </Routes>
  
    </div>
  );
}

export default App;
