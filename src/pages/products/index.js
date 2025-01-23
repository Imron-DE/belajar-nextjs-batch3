import CardProduct from "@/components/molecules/CardProduct";
import React from "react";

const ProductPage = () => {
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
  return (
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
  );
};

export default ProductPage;
