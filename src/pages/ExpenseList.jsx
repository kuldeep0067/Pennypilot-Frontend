import { useEffect, useState } from "react";

import expenseApi from "../api/expenseApi";

import ExpenseCard from "../components/ExpenseCard";

import DeleteModal from "../components/DeleteModal";

import EmptyState from "../components/EmptyState";

function ExpenseList() {

  const [expenses, setExpenses] = useState([]);

  const [selectedId, setSelectedId] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {

    try {

      const response =
        await expenseApi.get(
          "/expenses"
        );

      setExpenses(
        response.data.data
      );

    } catch (error) {

      console.log(error);

    }
  };

  const handleDeleteClick =
    (id) => {

      setSelectedId(id);

      setShowModal(true);
    };

  const confirmDelete =
    async () => {

      try {

        await expenseApi.delete(
          `/expenses/${selectedId}`
        );

        setExpenses(
          expenses.filter(
            (expense) =>
              expense.id !== selectedId
          )
        );

        setShowModal(false);

      } catch (error) {

        console.log(error);

      }
    };

  return (

    <div>

      <h2>
        My Expenses
      </h2>

      {
        expenses.map(
          (expense) => (

            <ExpenseCard

              key={expense.id}

              expense={expense}

              onDelete={
                handleDeleteClick
              }

            />
          )
        )
      }

      <DeleteModal

        isOpen={showModal}

        onConfirm={
          confirmDelete
        }

        onCancel={() =>
          setShowModal(false)
        }

      />

    </div>
  );
}

export default ExpenseList;