import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";

// Nested component: Wadah/container untuk beberapa komponen anak (Header, Body, Footer)
// Komponen ini berfungsi sebagai pembungkus untuk komponen children
const CardProduct = ({ children }) => {
  return (
    <div className="rounded-lg bg-gradient-to-r  from-fuchsia-500 via-orange-500 to-lime-500 p-2">
      <div className="w-full h-full max-w-xs rounded-lg bg-white ">{children}</div>
    </div>
  );
};

function Header({ image, title, link = "#" }) {
  return (
    <Link href={link}>
      <Image src={image} alt={`Gambar produk ${title}`} className="p-4 rounded-t-lg w-full aspect-video object-contain " width={300} height={300} />
    </Link>
  );
}

function Body({ title, desc, link = "#" }) {
  return (
    <div className="px-5 pb-5 h-40 min-h-[160px]">
      <Link href={link}>
        <h3 className="text-3xl font-bold text-gray-900 line-clamp-2">{title}</h3>
        <p className="mt-3 text-slate-700 text-base text-justify  line-clamp-4 ">{desc}</p>
      </Link>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-5">
      <span className="text-2xl font-semibold mb-2 mt-10">{price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</span>
      <Button buttonClassname="bg-gradient-to-r bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-500 hover:via-orange-600 hover:to-yellow-600 text-white w-full mt-4" onClick={() => handleAddToCart(id)}>
        Beli
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
