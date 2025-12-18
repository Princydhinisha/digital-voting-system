import Navbar from "./Navbar";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaVoteYea, FaChartBar } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <h2 className="dashboard-title">Dashboard</h2>
        <p className="dashboard-subtitle">
          Manage polls, participate in voting, and view results.
        </p>

        <div className="dashboard-grid">
          <div
            className="dashboard-card"
            onClick={() => navigate("/create-poll")}
          >
            <FaPlusCircle size={30} />
            <h3>Create Poll</h3>
            <p>Create a new poll for voting</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/polls")}
          >
            <FaVoteYea size={30} />
            <h3>View Polls</h3>
            <p>Vote or view active polls</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/polls")}
          >
            <FaChartBar size={30} />
            <h3>View Results</h3>
            <p>See poll results and statistics</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

