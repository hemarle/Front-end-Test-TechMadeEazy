import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar__Title">
        Dev<span>Hire</span>
      </h1>

      <div className="sidebar__Links">
        <div className="sidebar__Link">
          <img src="" />
          <p>Home</p>
        </div>
        <div className="sidebar__Link">
          <img src="" />
          <p>Favorites</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
