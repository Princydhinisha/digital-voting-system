import "../styles/CreatePoll.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/CreatePoll.css";


function CreatePoll() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pollType, setPollType] = useState("SINGLE");
  const [options, setOptions] = useState(["", ""]);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const updateOption = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const pollData = {
    title: title,
    description: description,
    pollType: pollType,
    options: options
      .filter((opt) => opt.trim() !== "")
      .map((text) => ({ text })),
  };

  try {
    const response = await fetch("http://localhost:8080/api/polls/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pollData),
    });

    if (response.ok) {
      alert("Poll created successfully!");
      navigate("/dashboard");
    } else {
      alert("Failed to create poll");
    }
  } catch (error) {
    alert("Backend not reachable");
  }
};


  return (
  <>
    <Navbar />

    <div className="container">
      <div className="create-poll-card">
        <h2>Create New Poll</h2>
        <p className="subtitle">
          Fill the details below to create a new poll
        </p>

        <form onSubmit={handleSubmit}>
          <label>Poll Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label>Poll Type</label>
          <select
            value={pollType}
            onChange={(e) => setPollType(e.target.value)}
          >
            <option value="SINGLE">Single Choice</option>
            <option value="MULTIPLE">Multiple Choice</option>
          </select>

          <label>Options</label>
          {options.map((opt, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={opt}
              onChange={(e) => updateOption(index, e.target.value)}
              required
            />
          ))}

          <button type="button" onClick={addOption}>
            ➕ Add Option
          </button>

          <button type="submit" className="primary-btn">
            Create Poll
          </button>
        </form>
      </div>
    </div>
  </>
);

}

export default CreatePoll;
