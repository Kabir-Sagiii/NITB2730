import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css"; // Integrate bootstrap with React app
import "./App.css";
// import Header from "./Components/Headers/Header";
// import Main from "./Components/Main/Main";
// import HeaderHome from "./Components/Portfolio/Header/HeaderHome";
// import MainHome from "./Components/Portfolio/Main/MainHome";
import State from "./Components/State/State";
// import Person from "./Components/Parent-Child/Person";
import Nav from "./Components/Navbar/Nav";
// import ProfileHome from "./Components/Profile/ProfileHome";
// import Parent from "./Components/Child-Parent/Parent";
// import FileData from "./Components/FileData/FileData";
import AxiosUser from "./Components/Axios/AxiosUser";
import Home from "./Components/ChatApp/Home";

import UserProfile from "./Components/UserProfile/UserProfile";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import PageNotFound from "./Components/404/PageNotFound";
import A from "./Components/ContextAPI/A";
import ContextHome from "./Components/ContextAPI_Task/ContextHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/state" element={<State />} />
          <Route path="/axios" element={<AxiosUser />} />
          <Route path="/chat" element={<Home />} />
          <Route path="/contextapi" element={<A />} />
          <Route path="/contexttask" element={<ContextHome />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <Main />
      <h2>Welcome to React World</h2>

      <Main /> */}
      {/* <HeaderHome />
      <MainHome /> */}
      {/* <State /> */}

      {/* <Person /> */}
      {/* <ProfileHome /> */}
      {/* <Parent /> */}
      {/* <FileData /> */}
      {/* <AxiosUser /> */}
      {/* <Home /> */}
      {/* <UserProfile /> */}
    </div>
  );
}

export default App;
