import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image: "/images/es teler.jpg",
    title: "Es Teler",
    desc: "Es Teler segar dengan ",
    price: "Rp. 100.000",
  },
  {
    id: 2,
    image: "/images/spageti.jpg",
    title: "spageti",
    desc: "spageti dengan bahan utama daging sapi dalam keadaan hangat dan diberi saus tomat secukupnya",
    price: "Rp. 100.000",
  },
  {
    id: 3,
    image: "/images/esdoger.jpg",
    title: "Es Doger",
    desc: "Es Doger segar dengan",
    price: "Rp. 100.000",
  },
];

const ProductPage = () => {
  const [username, setUsername] = useState("");
  // sebutan variable di react

  // useeffect untuk menangani side effect / effect perubahan dari suatu data
  useEffect(() => {
    const getUserName = localStorage.getItem("username");
    if (getUserName) setUsername(getUserName);
  }, []); // defendancy array : kalo kosong untuk memastika fungsi ini dijalankan sekali saja setiapkali halaman di load
  // kalo ada state di dalama defendancy array maka fungsi ini untuk memantau perubahan di state tersebut

  // event handller untuk menjalankan fungsi logout dan menghapus data username dan password dari localstorage

  function HandleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-3xl font-bold mb-2">HI, {username}</h1>
        <Button buttonClassname="bg-red-500 text-white w-24 " onClick={HandleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center items-center min-h-screen gap-2">
        {/* Panggil Card Product */}
        <CardProduct>
          <CardProduct.Header image="/images/pizza.jpg" />
          <CardProduct.Body title="Pizza" desc="Pizza dengan bahan utama daging sapi dalam keadaan hangat dan diberi saus tomat secukupnya" />
          <CardProduct.Footer price="Rp. 100.000" />
        </CardProduct>
        {/* Rendering List : teknik untuk mmenampilkan berdasarkan beberapa data dinamis yang di simpan dalam sebuah json */}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} width={300} height={300} />
            <CardProduct.Body title={item.title} desc={item.desc} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
