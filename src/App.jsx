import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <AllTheBooks />
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
