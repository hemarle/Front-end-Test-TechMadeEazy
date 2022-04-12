import Sidebar from "../components/Sidebar/Sidebar";

function homepage() {
  return (
    <div className="homepage">
      <div className="homepage__Sidebar">
        <Sidebar />
      </div>

      <div className="homepage__Content"></div>
    </div>
  );
}

export default homepage;
