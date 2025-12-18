import Navbar from "./Navbar";
import "../styles/Global.css";

function Profile() {
  // Temporary static user data (can be dynamic later)
  const user = {
    name: "User",
    email: "user@example.com",
    role: "Voter",
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>User Profile</h2>

        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>

        <hr style={{ margin: "25px 0" }} />

        <h3>About This Application</h3>
        <p>
          This digital voting system allows users to participate in polls,
          cast votes securely, and view results in real time. The system is
          designed to be flexible and can be used for classroom elections,
          feedback collection, and organizational decision-making.
        </p>

        <h3 style={{ marginTop: "20px" }}>Your Activities</h3>
        <ul>
          <li>Participate in active polls</li>
          <li>View poll results</li>
          <li>Ensure one vote per poll</li>
        </ul>
      </div>
    </>
  );
}

export default Profile;

