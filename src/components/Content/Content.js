import React from "react";
import "./Content.css";
import Card from "../Card/Card";

function Content({ cards, title, fav }) {
  return (
    <div className="content">
      <h1 className="content__Title">{title}</h1>
      <div className="content__Cards">
        {cards?.slice(0, 12).map((card, id) => (
          <div key={id}>
            <Card card={card} />
          </div>
        ))}

        {fav && cards?.length === 0 && (
          <h1 className=""> No favourite developer yet</h1>
        )}
      </div>
    </div>
  );
}

export default Content;
