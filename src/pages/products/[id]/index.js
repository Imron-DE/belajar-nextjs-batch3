import { formatCurrency } from "@/helpers/util/formatCurrency";
import { getProductById } from "@/service/products";
import React from "react";
import Image from "next/image";
const ProductDetailPage = ({ detailProduct }) => {
  console.log("detailProduct =>", detailProduct);
  return (
    <>
      <div className="flex flex-col px-5 py-5 bg-gradient-to-b from-black to-blue-900 min-h-screen">
        <h1 className="text-4xl font-bold text-white">Detail Product</h1>
        <div className="p-4 mt-5 rounded-2xl bg-white bg-opacity-20 max-w-xl">
          <h2 className="text-2xl font-bold text-white">{detailProduct?.title}</h2>
          <Image src={detailProduct?.image} alt={detailProduct?.image} width={300} height={300} className="flex items-center   w-40  mt-5 object-contain" />
          <p className="text-slate-300 font-semibold mt-5">{detailProduct?.description}</p>
          <p className="text-slate-300 text-xl font-semibold mt-5">{formatCurrency(detailProduct?.price, "en-US", "USD")}</p>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const id = context.query.id;
  try {
    const detailProduct = await getProductById(id);

    if (!detailProduct) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        detailProduct,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "failed to fetch data =>",
      },
    };
  }
}
export default ProductDetailPage;
