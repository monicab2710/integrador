
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Header />}>
      <Route
        path="/register" element={<Register/>}/>
      
      <Route path="/logIn" element={<LogIn />} />
      </Route>
     
        
      </Routes>
    </Router>
  );
}

export default App;
