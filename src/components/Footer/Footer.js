import "./Footer.css";
import naira from "../../images/naira.png";
function Footer() {
  return (
    <div className="footer">
      <p> C 2022 Dev Hire</p>
      <div className="footer__Currency">
        <img src={naira} alt="Naira" />
        <select name="currency" id="currenncy">
          <option value="volvo">Volvaaao</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
