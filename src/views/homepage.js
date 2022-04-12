import Card from "../components/Card/Card";
import Sidebar from "../components/Sidebar/Sidebar";
import image from "../images/image.png";
import avatar from "../images/author.png";
import "../styles/homepage.css";

function homepage() {
  return (
    <div className="homepage">
      <div className="homepage__Sidebar">
        <Sidebar />
      </div>

      <div className="homepage__Content">
        <Card
          image={image}
          avatar={avatar}
          price="#30,000"
          author="Oluwafemi"
          liked
        />
      </div>
    </div>
  );
}

export default homepage;
