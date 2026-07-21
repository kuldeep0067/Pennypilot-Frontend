import { Link } from "react-router-dom";

import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/dashboard">
        Dashboard
      </Link>

      <br />
      <br />

      <Link to="/expenses">
        Expenses
      </Link>

      <br />
      <br />

      <Link to="/add-expense">
        Add Expense
      </Link>
    </aside>
  );
}

export default Sidebar;