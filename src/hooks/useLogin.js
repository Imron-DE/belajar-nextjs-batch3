import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCurrentUser } from "../service/auth";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    // validasi token, cek apakah token ada atau tidak, jika ada ambil username dari token, jika tidak redirect ke login
    if (token) {
      setUsername(getCurrentUser(token));
    } else {
      router.push("/login");
    }
  }, []);

  return username;
};
