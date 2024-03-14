
import './App.css';
import Cardcontainer from './components/Cardcontainer';
import Header from './components/Header';
import Home from './Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });
function App() {
return(
  <div>
    <Header />
    <Home />
    <ToastContainer position="top-right" />
  </div>
)


}
export default App;