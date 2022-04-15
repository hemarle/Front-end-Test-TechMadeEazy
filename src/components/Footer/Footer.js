import { useEffect } from "react";
import axios from "axios";

import "./Footer.css";
import naira from "../../images/naira.png";

import { useSelector, useDispatch } from "react-redux";

function Footer() {
  const currency = useSelector((state) => state.currency.currency_name);
  const currencyValue = useSelector((state) => state.currency.currency_value);
  const currentCurrency = useSelector((state) => state.currentCurrency);
  const dispatch = useDispatch();

  async function fetchCurrency() {
    const result = await axios.get("https://api.terawork.com/resources");
    const filtered = result.data.data.net_conversions.filter(
      (data) => data.buying_currency_id === 1
    );

    dispatch({
      type: "ADD_CURRENCY",
      payload: result.data.data.currencies,
      value: filtered,
    });
  }

  useEffect(() => {
    fetchCurrency();
  }, []);

  function changeCurrency(e, img) {
    dispatch({
      type: "CURRENT_CURRENCY",
      payload: {
        currencyOption: currency[e.currentTarget.selectedIndex],
        currencyValue: currencyValue[e.currentTarget.selectedIndex],
      },
    });
  }
  return (
    <div className="footer">
      <p> © 2022 DevHire</p>
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
          {currency?.map(({ divider, id, short, name, flag_url }) => (
            <>
              <option
                value={name}
                name={flag_url}
                selected={
                  currentCurrency?.currencyOption?.name === name && "selected"
                }
              >
                {name}
              </option>
            </>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Footer;
