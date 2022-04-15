import "./App.css";
import Homepage from "./views/Homepage";
import Favourites from "./views/Favourites";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__Sidebar">
        <Sidebar />
      </div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/fav" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
