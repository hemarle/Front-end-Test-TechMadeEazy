import React from "react";
import "./Content.css";
import Card from "../Card/Card";

function Content({ cards, title }) {
  console.log("cards", cards);
  return (
    <div className="content">
      <h1 className="content__Title">{title}</h1>
      <div className="content__Cards">
        {cards.length ? (
          cards?.slice(0, 12).map((card, id) => (
            <div key={id}>
              <Card card={card} />
            </div>
          ))
        ) : (
          <h1 className=""> No Records yet</h1>
        )}
      </div>
    </div>
  );
}

export default Content;
