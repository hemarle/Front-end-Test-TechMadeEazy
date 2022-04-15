import React, { useEffect } from "react";

import "../styles/homepage.css";
import Footer from "../components/Footer/Footer";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Content from "../components/Content/Content";

function Homepage() {
  const cards = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  const fetchData = () => {
    let newData = [];
    axios
      .get(
        "https://api.terawork.com/service-categories/sellers-services/computer-software-development"
      )
      .then((data) => {
        data.data.data.service_search_results.hits.forEach((data) =>
          newData.push({ style: "", name: data })
        );

        dispatch({
          type: "ADD_PRODUCTS",
          payload: newData,
          style: "",
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homepage">
      <Content cards={cards} title="Hire Top Developers" />
      <Footer />
    </div>
  );
}

export default React.memo(Homepage);
