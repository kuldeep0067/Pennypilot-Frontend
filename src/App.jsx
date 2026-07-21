import {
 BrowserRouter,
 Routes,
 Route
}
from "react-router-dom";

import Login
from "./pages/Login";

import Register
from "./pages/Register";

import ExpenseList
from "./pages/ExpenseList";

import AddExpense
from "./pages/AddExpense";

import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

import NotFound from "./pages/NotFound";

function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route path="/" element={<Login />} />

    <Route
      path="/login"
      element={<Login />}
    />

    <Route
      path="/register"
      element={<Register />}
    />

    <Route
      path="/expenses"
      element={<ExpenseList />}
    />

    <Route
      path="/add-expense"
      element={<AddExpense />}
    />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    <Route
      path="*"
      element={<NotFound />}
    />

   </Routes>

  </BrowserRouter>

 );
}

export default App;