import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import React from "react";

const Login = () => {
  // event handller untuk simullasi login
  function HandleLogin(event) {
    // event.preventDefault(); buat mencegah halaman reload
    event.preventDefault();
    console.log("klik login button");
    // simpan data dari input ke localstorage
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);

    // redirect ke halaman product
    window.location.href = "/products";
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
    </form>
  );
};

export default Login;
