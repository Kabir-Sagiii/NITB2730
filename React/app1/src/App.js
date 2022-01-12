import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css"; // Integrate bootstrap with React app
import "./App.css";
// import Header from "./Components/Headers/Header";
// import Main from "./Components/Main/Main";
// import HeaderHome from "./Components/Portfolio/Header/HeaderHome";
// import MainHome from "./Components/Portfolio/Main/MainHome";
// import State from "./Components/State/State";
// import Person from "./Components/Parent-Child/Person";
import Nav from "./Components/Navbar/Nav";
import ProfileHome from "./Components/Profile/ProfileHome";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Header />
      <Main />
      <h2>Welcome to React World</h2>

      <Main /> */}
      {/* <HeaderHome />
      <MainHome /> */}
      {/* <State /> */}

      {/* <Person /> */}
      <ProfileHome />
    </div>
  );
}

export default App;
