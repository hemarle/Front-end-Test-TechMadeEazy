import "./Card.css";
import love from "../../images/liked.png";
function Card({ image, avatar, liked, author, price }) {
  return (
    <div className="card">
      <div className="card__Image">
        <img src={image} alt={image} />
        <img src={love} className="card__Love" />{" "}
      </div>
      <img src={avatar} className="card__Avatar" />
      <div className="card__Details">
        <div className="card__Author">
          <h4> {author}</h4>
          <p>{price}</p>
        </div>
        <a href="#"> Hire</a>
      </div>
    </div>
  );
}

export default Card;
