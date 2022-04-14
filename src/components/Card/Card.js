import React, { useState } from "react";
import "./Card.css";
import love from "../../images/liked.png";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducer";
function Card({ card }) {
  const {
    avatar,
    cust_id,
    display_name,
    starting_from,
    service_photo,
  } = card?._source;
  const dispatch = useDispatch();
  const currentCurrency = useSelector((state) => state.currentCurrency);
  const style = useSelector((state) => state.cards.style);
  const favourites = useSelector((state) => state.favourites);

  const [toggleState, setToggleState] = useState(false);
  const [testState, setTestState] = useState(0);

  function toggle() {
    setTestState(1);
    console.log(style, "style");
    const exist = favourites.find(
      (data) => data?._source.cust_id === card._source.cust_id
    );
    if (!exist) {
      console.log("clicked");
      dispatch({
        type: actions.ADD_FAVOURITES,
        payload: card,
        style: "active",
      });

      dispatch({
        type: actions.ADD_STYLE,
        payload: card,
        style: "red",
      });
    } else {
      console.log("false");
      dispatch({
        type: actions.REMOVE_FAVOURITES,
        payload: card,
      });
    }
  }
  return (
    <div className="card">
      <div className="card__Image">
        <img src={service_photo} alt={display_name} />
        <img
          src={love}
          className={`card__Love ${card?.style}`}
          onClick={toggle}
        />{" "}
      </div>
      <img src={avatar} className="card__Avatar" />
      <div className="card__Details">
        <div className="card__Author">
          <h4> {display_name}</h4>
          <p>
            {currentCurrency.symbol}{" "}
            {Math.round(
              Number(starting_from) / Number(currentCurrency.divider)
            )}
          </p>
        </div>
        <a href="#"> Hire</a>
      </div>
    </div>
  );
}

export default Card;
