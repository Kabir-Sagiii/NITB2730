import logo from "./logo.svg";
import "./App.css";
// import Header from "./Components/Headers/Header";
import Main from "./Components/Main/Main";
import HeaderHome from "./Components/Portfolio/Header/HeaderHome";
import MainHome from "./Components/Portfolio/Main/MainHome";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Main />
      <h2>Welcome to React World</h2>

      <Main /> */}
      <HeaderHome />
      <MainHome />
    </div>
  );
}

export default App;
