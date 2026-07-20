import { useState } from "react";
import API from "../api/authApi";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await API.post(
          "/auth/register",
          form
        );

      alert(
        response.data.message
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
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value
          })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value
          })
        }
      />

      <button>
        Register
      </button>

    </form>
  );
}

export default Register;