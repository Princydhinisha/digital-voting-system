import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CreatePoll from "./pages/CreatePoll";
import PollList from "./pages/PollList";
import VotePage from "./pages/VotePage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <Routes>
      {/* AUTH */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* MAIN FLOW */}
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />

      {/* POLLS */}
      <Route path="/create-poll" element={<CreatePoll />} />
      <Route path="/polls" element={<PollList />} />
      <Route path="/poll/:id" element={<VotePage />} />
      <Route path="/results/:id" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;

