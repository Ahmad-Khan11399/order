import {useEffect,useState} from "react"
import { auth } from './firebase';
import LoginPage from "./login.jsx"
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom" ;
import OrderForm from "./order.jsx";
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
     auth.onAuthStateChanged((user) => {
       if (user) {
         setUserName(user.displayName);
       } else setUserName("");
     });
   }, []);
  return (
    <div className="App">
    <Router>
     <Routes>
     <Route path="/" element={<LoginPage/>}/>
     </Routes>
    </Router>
    </div>
  );
}

export default App;
