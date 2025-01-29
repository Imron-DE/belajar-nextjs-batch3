import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";

// Nested component: Wadah/container untuk beberapa komponen anak (Header, Body, Footer)
// Komponen ini berfungsi sebagai pembungkus untuk komponen children
const CardProduct = ({ children }) => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl p-1">
      <div className="w-full max-w-xs rounded-lg bg-white">{children}</div>
    </div>
  );
};

function Header({ image, title }) {
  return (
    <Link href="#">
      <Image src={image} alt={`Gambar produk ${title}`} className="p-4 rounded-t-lg " width={300} height={300} />
    </Link>
  );
}

function Body({ title, desc }) {
  return (
    <div className="px-5 pb-5 h-40">
      <Link href="#">
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-slate-700 text-base text-justify py-2 ">{desc}</p>
      </Link>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-5">
      <span className="text-2xl font-semibold mb-2">{price}</span>
      <Button buttonClassname="bg-blue-600 hover:bg-blue-800 text-white w-full mt-4" onClick={() => handleAddToCart(id)}>
        Beli
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
