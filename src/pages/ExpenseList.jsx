import { useEffect } from "react";
import { useState } from "react";
import expenseApi from "../api/expenseApi";

function ExpenseList() {

  const [expenses,
    setExpenses] = useState([]);

  useEffect(() => {

    fetchExpenses();

  }, []);

  const fetchExpenses =
    async () => {

      const response =
        await expenseApi.get(
          "/expenses"
        );

      setExpenses(
        response.data.data
      );
    };

  return (
    <div>

      <h2>
        My Expenses
      </h2>

      {
        expenses.map(
          (expense) => (

            <div
              key={expense.id}
            >
              <h4>
                {expense.title}
              </h4>

              <p>
                ₹{expense.amount}
              </p>

            </div>
          )
        )
      }

    </div>
  );
}

export default ExpenseList;