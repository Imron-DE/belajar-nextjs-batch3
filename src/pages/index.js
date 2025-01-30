import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  // anggap state ini menyiman data yang dikirim dari api

  const [data, setData] = useState(true);
  const username = useLogin();
  const { isMobileScreen } = useSelector((state) => state.screen);
  console.log("isMobileScreen =>", isMobileScreen);

  // fungsi untuk memperbarui nilai state
  const handleChange = () => {
    // mengubah state data dari nilai awal true menjadi false
    // setData(false);

    // fungsi anonymus yang akan ddigunakan unrk merubah nilai boolean dari true menjadi false lalu dari false menjadi true dan seterusnya
    setData((prevData) => !prevData);
  };

  // anggap ini data dari API
  const data1 = {
    name: "John Doe",
  };

  return (
    <>
      <div className={`flex flex-col justify-center items-center h-screen gap-4 ${data ? "bg-black" : "bg-green-500"}`}>
        {data ? <h1 className="text-6xl font-bold text-white">Data</h1> : <h1 className="text-6xl font-bold text-white">Update Data</h1>}
        {isMobileScreen && <p className="text-2xl font-bold text-red-500">ukuran mobile</p>}
        <button onClick={handleChange} className="mt-4 p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Change mode
        </button>
        <p className="text-6xl font-bold text-white">Hi,{username}</p>
      </div>
    </>
  );
}
