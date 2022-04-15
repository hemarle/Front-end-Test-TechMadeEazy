import React, { Suspense } from "react";
import "./App.css";
import Favourites from "./views/Favourites";

import { Routes, Route } from "react-router-dom";
const Sidebar = React.lazy(() => import("./components/Sidebar/Sidebar"));
const Homepage = React.lazy(() => import("./views/Homepage"));

function App() {
  return (
    <div className="app">
      <div className="app__Sidebar">
        <Sidebar />
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Sidebar />}>
              <Homepage />
            </Suspense>
          }
        />

        <Route
          exact
          path="/fav"
          element={
            <Suspense fallback={<Sidebar />}>
              <Favourites />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
