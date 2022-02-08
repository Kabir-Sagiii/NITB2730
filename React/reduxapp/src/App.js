import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home/Home";
import GithubHome from "./Components/Github/Home";

function App() {
  return (
    <div className="App mt-5">
      {/* <h2 className="display-6">Welcome to Redux</h2> */}
      {/* <Home /> */}
      <GithubHome />
    </div>
  );
}

export default App;
