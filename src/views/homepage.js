import Card from "../components/Card/Card";
import Sidebar from "../components/Sidebar/Sidebar";
import image from "../images/image.png";
import avatar from "../images/author.png";
import "../styles/homepage.css";

function homepage({ title }) {
  let mapper = new Array(10).fill("0");
  return (
    <div className="homepage">
      <div className="homepage__Sidebar">
        <Sidebar />
      </div>

      <div className="homepage__Content">
        <h1 className="homepage__Title">Hire Top Developers</h1>
        <div className="homepage__Cards">
          {mapper.map((data) => (
            <Card
              image={image}
              avatar={avatar}
              price="#30,000"
              author="Oluwafemi"
              liked
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default homepage;
