import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
function Favourites() {
  const cards = useSelector((state) => state.favourites);

  useEffect(() => {}, []);
  return (
    <div className="favourites">
      <Content cards={cards} title="Favorites" fav />

      <Footer />
    </div>
  );
}

export default Favourites;
