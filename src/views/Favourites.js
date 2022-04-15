import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
function Favourites() {
  const cards = useSelector((state) => state.favourites);

  useEffect(() => {}, []);
  return (
    <div className="favourites">
      <Content cards={cards} title="Favorites" />

      <Footer />
    </div>
  );
}

export default Favourites;
