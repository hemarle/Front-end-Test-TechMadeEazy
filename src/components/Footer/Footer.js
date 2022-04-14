import { useState, useEffect } from "react";
import axios from "axios";

import "./Footer.css";
import naira from "../../images/naira.png";

import { useSelector, useDispatch } from "react-redux";

function Footer() {
  const currency = useSelector((state) => state.currency);
  const currentCurrency = useSelector((state) => state.currentCurrency);
  const dispatch = useDispatch();

  async function fetchCurrency() {
    const result = await axios.get("https://api.terawork.com/resources");
    dispatch({
      type: "ADD_CURRENCY",
      payload: result.data.data.currencies,
    });
  }

  useEffect(() => {
    fetchCurrency();
  }, []);

  function changeCurrency(e, img) {
    dispatch({
      type: "CURRENT_CURRENCY",
      payload: currency[e.currentTarget.selectedIndex],
    });
  }
  return (
    <div className="footer">
      <p> C 2022 Dev Hire</p>
      <div className="footer__Currency">
        <img
          src={currentCurrency.flag_url ? currentCurrency.flag_url : naira}
          alt="Naira"
        />
        <select
          name="currency"
          id="currency"
          onChange={(e) => changeCurrency(e, e.currentTarget.flag_url)}
        >
          {currency.map(({ divider, id, short, name, flag_url }) => (
            <>
              <option
                value={name}
                name={flag_url}
                selected={currentCurrency.name === name && "selected"}
              >
                {short}
              </option>
            </>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Footer;
