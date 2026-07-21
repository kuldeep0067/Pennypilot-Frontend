import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

import SummaryCard from "../components/SummaryCard";
import ExpensePieChart from "../components/ExpensePieChart";
import ExpenseBarChart from "../components/ExpenseBarChart";

import expenseApi from "../api/expenseApi";

import "../styles/dashboard.css";
import "../styles/navbar.css";
import "../styles/sidebar.css";

function Dashboard() {

  const [expenses, setExpenses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

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

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return <Loader />;
  }

  if (expenses.length === 0) {
    return <EmptyState />;
  }

  const totalExpense =
    expenses.reduce(
      (total, expense) =>
        total + expense.amount,
      0
    );

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const todayExpense =
    expenses
      .filter(
        expense =>
          expense.date === today
      )
      .reduce(
        (total, expense) =>
          total + expense.amount,
        0
      );

  const currentMonth =
    new Date().getMonth();

  const monthlyExpense =
    expenses
      .filter(expense => {

        const month =
          new Date(
            expense.date
          ).getMonth();

        return (
          month === currentMonth
        );

      })
      .reduce(
        (total, expense) =>
          total + expense.amount,
        0
      );

  const categoryTotals = {};

  expenses.forEach(expense => {

    if (
      !categoryTotals[
        expense.category
      ]
    ) {

      categoryTotals[
        expense.category
      ] = 0;

    }

    categoryTotals[
      expense.category
    ] += expense.amount;

  });

  const pieData = {

    labels:
      Object.keys(
        categoryTotals
      ),

    datasets: [

      {
        label:
          "Category Expense",

        data:
          Object.values(
            categoryTotals
          )
      }

    ]

  };

  const monthlyData = {

    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],

    datasets: [

      {
        label:
          "Monthly Expense",

        data:
          Array(12).fill(0)
      }

    ]

  };

  expenses.forEach(
    expense => {

      const month =
        new Date(
          expense.date
        ).getMonth();

      monthlyData
        .datasets[0]
        .data[month]
        += expense.amount;

    }
  );

  return (

    <>

      <Navbar />

      <div
        style={{
          display: "flex"
        }}
      >

        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "20px"
          }}
        >

          <h1>
            Expense Dashboard
          </h1>

          <div
            className="summary-grid"
          >

            <SummaryCard
              title="Total Expense"
              value={totalExpense}
            />

            <SummaryCard
              title="Today's Expense"
              value={todayExpense}
            />

            <SummaryCard
              title="Monthly Expense"
              value={monthlyExpense}
            />

          </div>

          <h2>
            Category Breakdown
          </h2>

          <ExpensePieChart
            chartData={pieData}
          />

          <h2>
            Monthly Trend
          </h2>

          <ExpenseBarChart
            chartData={monthlyData}
          />

        </div>

      </div>

    </>

  );
}

export default Dashboard;