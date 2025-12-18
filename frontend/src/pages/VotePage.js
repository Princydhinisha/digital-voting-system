import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/VotePage.css";
import Navbar from "./Navbar";

function VotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [poll, setPoll] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/polls/${id}`)
      .then((res) => res.json())
      .then((data) => setPoll(data))
      .catch(() => alert("Failed to load poll"));
  }, [id]);

  const handleSelect = (optionId) => {
    if (poll.pollType === "SINGLE") {
      setSelectedOptions([optionId]);
    } else {
      setSelectedOptions((prev) =>
        prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId]
      );
    }
  };

 const handleVote = async () => {
  if (selectedOptions.length === 0) {
    alert("Please select at least one option");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/polls/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedOptions),
    });

    if (response.ok) {
      alert("Vote submitted successfully!");
      navigate(`/results/${id}`);
    } else {
      alert("Failed to submit vote");
    }
  } catch {
    alert("Backend not reachable");
  }
};


  if (!poll) return <p>Loading...</p>;

 return (
  <>
    <Navbar />

    <div className="container">
      <div className="vote-card">
        <h2>{poll.title}</h2>
        <p className="subtitle">{poll.description}</p>

        {poll.options.map((opt) => (
          <label key={opt.id} className="vote-option">
            <input
              type={poll.pollType === "SINGLE" ? "radio" : "checkbox"}
              name="vote"
              onChange={() => handleSelect(opt.id)}
            />
            <span>{opt.text}</span>
          </label>
        ))}

        <button className="primary-btn" onClick={handleVote}>
          Submit Vote
        </button>
      </div>
    </div>
  </>
);

}

export default VotePage;
