import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <form>
      <InputForm label="Username" name="username" type="text" placeholder="Masukan username" />
      <InputForm label="Email" name="email" type="email" placeholder="Masukan email" />
      <InputForm label="Password" name="password" type="password" placeholder="Masukan password" />
      <Button buttonClassname="bg-gradient-hover text-white w-full mt-4"> Register</Button>
    </form>
  );
};

export default Register;
