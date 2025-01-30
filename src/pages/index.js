import { useLogin } from "@/hooks/useLogin";
import { useEffect, useState } from "react";

export default function Home() {
  // anggap state ini menyiman data yang dikirim dari api

  const [data, setData] = useState(true);
  const [isMobile, setIsMobile] = useState({
    width: 0,
    height: 0,
    ismobile: false,
  });
  const username = useLogin();
  // useState : hooks react untuk membuat state ke functional component
  // state : variabel yang digunakan untuk menyimpan data
  // data : variabel yang digunakan untuk menyimpan data awal
  // setData : fungsi yang digunakan untuk mengubah data
  // true (Boollean) : data awal
  // ketika setData di panggil dengan nilai baru ,react akan merender ulang komponen dengan nilai state yang baru

  // fungsi untuk memperbarui nilai state
  const handleChange = () => {
    // mengubah state data dari nilai awal true menjadi false
    // setData(false);

    // fungsi anonymus yang akan ddigunakan unrk merubah nilai boolean dari true menjadi false lalu dari false menjadi true dan seterusnya
    setData((prevData) => !prevData);
  };

  useEffect(() => {
    // mounting
    setIsMobile({
      width: window.innerWidth,
      height: window.innerHeight,
      mobile: false,
    });
    // updating
    window.addEventListener("resize", (event) => {
      setIsMobile({
        width: event.target.innerWidth,
        height: event.target.innerHeight,
        mobile: window.innerWidth <= 450 ? true : false,
      });
    });
    // unmounting
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  // useEffect : hooks react untuk menangani side effect / effect perubahan dari suatu data
  // useEffect biasannya digunaakan untuk memperbarui data/ komponen ketika ada perubahan data pada state
  // [] : array kosong atau dependancy array yang digunakan untuk menjalankan useEffect hanya sekali saja ketika halaman di load
  // jika ada state didaalam array tsb maka untuk memantau setiap ada perubahan pada staate tersebut dan menjalankan useeffect ketika state berubah

  console.log(isMobile.width);
  console.log(isMobile.mobile);

  // anggap ini data dari API
  const data1 = {
    name: "John Doe",
  };

  return (
    <>
      <div className={`flex flex-col justify-center items-center h-screen gap-4 ${data ? "bg-black" : "bg-green-500"}`}>
        {data ? <h1 className="text-6xl font-bold text-white">Data</h1> : <h1 className="text-6xl font-bold text-white">Update Data</h1>}
        <button onClick={handleChange} className="mt-4 p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Change
        </button>
        <p className="text-6xl font-bold text-white">Hi,{username}</p>
      </div>
    </>
  );
}
