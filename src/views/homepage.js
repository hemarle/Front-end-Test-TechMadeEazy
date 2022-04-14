import React, { useEffect } from "react";

import Card from "../components/Card/Card";
import Sidebar from "../components/Sidebar/Sidebar";
import image from "../images/image.png";
import avatar from "../images/author.png";
import "../styles/homepage.css";
import Footer from "../components/Footer/Footer";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Content from "../components/Content/Content";

function Homepage() {
  const cards = useSelector((state) => state.cards);
  const tester = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  const fetchData = () => {
    let result = axios
      .get(
        "https://api.terawork.com/service-categories/sellers-services/computer-software-development"
      )
      .then((data) =>
        dispatch({
          type: "ADD_PRODUCTS",
          payload: data.data.data.service_search_results.hits,
          style: "",
        })
      )
      .catch((err) => console.log(err));

    // let resultData = result.data.data.service_search_results.hits;

    // resultData.map((data) =>
    // );
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(tester, "testers");

  return (
    <div className="homepage">
      <Content cards={cards} title="Hire Top Developers" />
      <Footer />
    </div>
  );
}
// function mapStateToProps(state) {
//   console.log(state.favourites);
//   return { cards: state.cards };
// }

// export default connect(mapStateToProps)(homepage);
export default Homepage;
