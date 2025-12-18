import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PollList.css";

function PollList() {
  const [polls, setPolls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/polls/all")
      .then((res) => res.json())
      .then((data) => setPolls(data))
      .catch(() => alert("Failed to load polls"));
  }, []);

  return (
    <div className="poll-list">
      <h2>Available Polls</h2>

      {polls.length === 0 && <p>No polls found</p>}

      {polls.map((poll) => (
        <div
          key={poll.id}
          className="poll-card"
          onClick={() => navigate(`/poll/${poll.id}`)}
        >
          <h3>{poll.title}</h3>
          <p>{poll.description}</p>
          <span>{poll.pollType}</span>
        </div>
      ))}

      <button onClick={() => navigate("/dashboard")}>Back</button>
    </div>
  );
}

export default PollList;

