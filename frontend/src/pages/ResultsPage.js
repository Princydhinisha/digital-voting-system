import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/ResultsPage.css";

function ResultsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/polls/${id}`)
      .then((res) => res.json())
      .then((data) => setPoll(data));
  }, [id]);

  if (!poll) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="results-card">
          <h2>{poll.title} — Results</h2>

          {poll.options.map((opt) => {
  const totalVotes = poll.options.reduce(
    (sum, o) => sum + o.voteCount,
    0
  );
  const percent =
    totalVotes === 0 ? 0 : Math.round((opt.voteCount / totalVotes) * 100);

  return (
    <div key={opt.id} className="result-block">
      <div className="result-label">
        <span>{opt.text}</span>
        <strong>{percent}%</strong>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
})}

          <button onClick={() => navigate("/polls")}>
            Back to Polls
          </button>
        </div>
      </div>
    </>
  );
}

export default ResultsPage;

