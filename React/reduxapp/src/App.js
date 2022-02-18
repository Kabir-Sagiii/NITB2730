import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home/Home";
import GithubHome from "./Components/Github/Home";
import A from "./Components/useContext/A";
import Form from "./Components/useRef/Form";
import Card from "./Components/useReducer/Card";

function App() {
  return (
    <div className="App mt-5">
      {/* <h2 className="display-6">Welcome to Redux</h2> */}
      {/* <Home /> */}
      {/* <GithubHome /> */}
      {/* <A /> */}
      {/* <Form /> */}
      <Card />
    </div>
  );
}

export default App;
