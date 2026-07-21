import { Link } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>PennyPilot</h2>

      <div>
        <Link to="/dashboard">
          Dashboard
        </Link>

        {" | "}

        <Link to="/expenses">
          Expenses
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;