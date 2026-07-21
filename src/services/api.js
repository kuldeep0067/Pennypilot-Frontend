import { useState } from "react";

import API from "../api/authApi";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";



function Login() {



  const { login } =

    useContext(AuthContext);



  const [form, setForm] =

    useState({

      email: "",

      password: ""

    });



  const handleSubmit = async (e) => {



    e.preventDefault();



    try {



      const response =

        await API.post(

          "/auth/login",

          form

        );



      login(

        response.data.data.access_token

      );



      alert("Login Successful");



    } catch (error) {



      alert(

        error.response.data.message

      );

    }

  };



  return (

    <form onSubmit={handleSubmit}>



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

        Login

      </button>



    </form>

  );

}



export default Login;