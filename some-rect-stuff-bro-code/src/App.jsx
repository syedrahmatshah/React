/** @format */

import Button from "./Button";
import Card from "./Card";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import Event from "./Event";
import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import OnChange from "./OnChange";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import ProfilePicture from "./ProfilePicture";
import ReactHooks from "./ReactHooks";
import Students from "./Students";
import UpdateArray from "./UpdateArray";
import UpdateObject from "./UpdateObject";
import UpdaterFunc from "./UpdaterFunc";
import UserGreeting from "./UserGreeting";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route
            path='/'
            element={<Home />}></Route>
          <Route
            path='/about'
            element={<About />}></Route>
        </Routes>
      </Router> */}
      {/* <Header /> */}
      {/* <Food /> */}
      {/* <Footer /> */}
      {/* <Card /> */}
      {/* <Button /> */}

      {/* <Students
        name='Zakir'
        age={30}
        isStudent={true}
      />
      <Students
        name='Ali'
        age={40}
        isStudent={false}
      />
      <Students
        name='Khan'
        age={50}
        isStudent={false}
      />
      <Students
        name='Aftab'
        age={27}
        isStudent={true}
      />
      <Students /> */}

      {/* <UserGreeting
        isLoggedIn={true}
        userName='BroCode'
      /> */}

      {/* <List /> */}

      {/* <Event /> */}

      {/* <ProfilePicture /> */}

      {/* <ReactHooks /> */}

      {/* <Counter /> */}

      {/* <OnChange /> */}

      {/* <ColorPicker /> */}

      {/* <UpdaterFunc /> */}

      {/* <UpdateObject /> */}

      <UpdateArray />
    </>
  );
}

export default App;
