import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap';
import Home from './guest-view/Home/Home';
// import About from './guest-view/About/About';
import Contact from './guest-view/Contact/Contact';
import Login from './guest-view/Login/Login';
// import Home from './guest-view/Dark/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
