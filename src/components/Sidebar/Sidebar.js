import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";

import searchIcon from "../../images/search.png";
import heartIcon from "../../images/heart.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar__Title">
        Dev<span>Hire</span>
      </h1>

      <div className="sidebar__Links">
        <NavLink to="/" activeClassName="active">
          <div className="sidebar__Link">
            <img src={searchIcon} />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to="/fav" activeClassName="active">
          <div className="sidebar__Link">
            <img src={heartIcon} />
            <p>Favorites</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
