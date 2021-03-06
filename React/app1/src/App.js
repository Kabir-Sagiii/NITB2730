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
import FileData from "./Components/FileData/FileData";
import AxiosUser from "./Components/Axios/AxiosUser";
import Home from "./Components/ChatApp/Home";

import UserProfile from "./Components/UserProfile/UserProfile";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import PageNotFound from "./Components/404/PageNotFound";
import A from "./Components/ContextAPI/A";
import ContextHome from "./Components/ContextAPI_Task/ContextHome";
import MountingPhase from "./Components/Lifecylce/Mount";
import UpdatePhase from "./Components/Lifecylce/UpdatePhase";
import FunctionalComp from "./Components/FunctionalComp/FunctionalComp";
import State from "./Components/useState/State";
import Effect from "./Components/useEffect/Effect";
import Effect1 from "./Components/useEffect/Effect1";
import A from "./Components/useContext/A";
import HOCHome from "./Components/HOC/HOCHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/state" element={<FileData />} />
          <Route path="/axios" element={<AxiosUser />} />
          <Route path="/chat" element={<Home />} />
          <Route path="/contextapi" element={<A />} />
          <Route path="/contexttask" element={<ContextHome />} />
          <Route path="/hoc" element={<HOCHome />} />
          <Route path="/UP" element={<UpdatePhase />} />
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
 {/* <FunctionalComp /> */}
      {/* <State /> */}
      {/* <Effect1 /> */}
      <A />
    </div>
  );
}

export default App;
