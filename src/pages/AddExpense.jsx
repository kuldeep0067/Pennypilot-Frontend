import { useState } from "react";
import expenseApi from "../api/expenseApi";

function AddExpense() {

  const [form, setForm] =
    useState({
      title: "",
      amount: "",
      category: "Food",
      date: "",
      description: ""
    });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await expenseApi.post(
        "/expenses",
        form
      );

      alert(
        "Expense Added"
      );

    } catch (error) {

      alert(
        error.response.data.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Title"
      />

      <input
        placeholder="Amount"
      />

      <button>
        Save Expense
      </button>

    </form>
  );
}

export default AddExpense;