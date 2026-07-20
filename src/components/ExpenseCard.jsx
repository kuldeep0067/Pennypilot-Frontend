import { Link } from "react-router-dom";

function ExpenseCard({
  expense,
  onDelete
}) {

  return (

    <div className="expense-card">

      <h3>
        {expense.title}
      </h3>

      <p>
        ₹{expense.amount}
      </p>

      <p>
        {expense.category}
      </p>

      <div>

        <Link
          to={`/edit-expense/${expense.id}`}
        >
          Edit
        </Link>

        <button
          onClick={() =>
            onDelete(expense.id)
          }
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default ExpenseCard;