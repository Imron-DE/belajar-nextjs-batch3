import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import { login } from "@/service/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [errorLogin, setErrorLogin] = useState(null);
  const router = useRouter();
  // event handller untuk simullasi login
  async function HandleLogin(event) {
    // event.preventDefault(); buat mencegah halaman reload
    event.preventDefault();

    const payload = {
      username: event.target.username.value, // johnd
      password: event.target.password.value, // m38rmF$
    };

    try {
      const res = await login(payload);
      console.log(res);

      // validasi status
      if (res.status) {
        localStorage.setItem("token", res.token);
        router.push("/products");
      } else {
        console.log("Login failed", res.error.data);
        setErrorLogin(res.error.response.data);
      }
    } catch (error) {
      console.log("Login failed", error);
      setErrorLogin(error.response);
    }
  }

  return (
    // onsubmit digunakan untuk memanggil event handller
    <form onSubmit={HandleLogin}>
      <InputForm label="Username" name="username" type="text" placeholder="Masukan username" />
      <InputForm label="Password" name="password" type="password" placeholder="Masukan password" />
      <Button
        // onClick={HandleLogin}  event handller untuk engenai aksi ketika button di klik
        buttonClassname="bg-gradient-hover text-white w-full mt-4"
        type="submit"
      >
        Login
      </Button>
      {errorLogin && <p className="text-red-500 text-center text-sm mt-4">{errorLogin}</p>}
    </form>
  );
};

export default Login;
