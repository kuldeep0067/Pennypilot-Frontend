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

function App() {

 return (

  <BrowserRouter>

   <Routes>

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

   </Routes>

  </BrowserRouter>

 );
}

export default App;