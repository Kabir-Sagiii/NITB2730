import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Nav from "./Component/Navbar/Nav";
import PageNF from "./Component/PageNotFound/PageNF";
import User from "./Component/User/User";
import Home from "./Component/Home/Home";
import NewUser from "./Component/NewUser/NewUser";
import Edit from "./Component/Edit/Edit";
import ReduxUser from "./Component/Redux/User";
import Details from "./Component/Redux/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/nuser" element={<NewUser />} />
          <Route path="/redux" element={<ReduxUser />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<PageNF />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
