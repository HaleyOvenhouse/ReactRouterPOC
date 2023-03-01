import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Nav from "./Pages/Nav";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        { /* Route components are rendered if the path prop matches the current URL */}
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="Profile" element={<Profile />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
