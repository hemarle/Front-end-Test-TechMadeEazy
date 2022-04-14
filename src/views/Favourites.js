import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
function Favourites() {
  const cards = useSelector((state) => state.favourites);
  console.log(cards, "cards");
  return (
    <div className="favourites">
      <Content cards={cards} title="Favorites" />

      <Footer />
    </div>
  );
}

export default Favourites;

//   <div className="homepage__Cards">
//     {cards?.map(({ author, avatar, id, image, liked, price }) => (
//       <div key={id}>
//         {/* {console.log(_source.cust_id, "source")} */}
//         <Card
//           image={image}
//           avatar={avatar}
//           id={id}
//           price={price}
//           liked={liked}
//         />
//       </div>
//     ))}
//   </div>
