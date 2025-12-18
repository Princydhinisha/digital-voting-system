import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        {/* LEFT TEXT */}
        <div className="home-text">
          <h1>Vote Smarter. Decide Faster.</h1>
          <p>
            A modern digital voting system to create polls,
            collect votes securely, and view live results.
            <br />
            Perfect for classrooms, colleges, and organizations.
          </p>

          <div className="home-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/polls")}
            >
              View Polls
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="home-visual">
          <div className="mock-card">
            <h3>Live Poll</h3>
            <p>Who should be Class Representative?</p>
            <div className="mock-bar"></div>
            <div className="mock-bar small"></div>
            <div className="mock-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
