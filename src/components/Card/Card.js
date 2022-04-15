import React, { useState } from "react";
import "./Card.css";
import love from "../../images/liked.png";
import heart from "../../images/heart.png";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducer";
function Card({ card }) {
  const {
    avatar,
    display_name,
    starting_from,
    service_photo,
  } = card?.name._source;
  const dispatch = useDispatch();
  const currentCurrency = useSelector((state) => state.currentCurrency);
  // const style = useSelector((state) => state.cards.style);
  const favourites = useSelector((state) => state.favourites);

  function toggle() {
    const exist = favourites.find(
      (data) => data?.name._source.cust_id === card?.name._source.cust_id
    );
    if (!exist) {
      dispatch({
        type: actions.ADD_FAVOURITES,
        payload: card,
      });

      dispatch({
        type: actions.ADD_STYLE,
        payload: card,
        style: "active",
      });
    } else {
      dispatch({
        type: actions.REMOVE_FAVOURITES,
        payload: card,
      });

      dispatch({
        type: actions.REMOVE_STYLE,
        payload: card,
      });
    }
  }
  return (
    <div className="card">
      <div className="card__Image">
        <img src={service_photo} alt={display_name} />
        <img
          src={card?.style ? love : heart}
          alt=""
          className={`card__Love ${card?.style}`}
          onClick={toggle}
        />{" "}
      </div>
      <img src={avatar} className="card__Avatar" alt={display_name} />
      <div className="card__Details">
        <div className="card__Author">
          <h4> {display_name}</h4>
          <p>
            {currentCurrency?.currencyOption?.symbol}
            {Math.round(
              Number(starting_from) /
                Number(
                  currentCurrency?.currencyValue?.net_rate
                    ? currentCurrency?.currencyValue?.net_rate
                    : 1
                )
            )}
          </p>
        </div>
        <a href="#"> Hire</a>
      </div>
    </div>
  );
}

export default Card;
