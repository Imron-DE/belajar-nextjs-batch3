import { formatCurrency } from "@/helpers/util/formatCurrency";
import { getProductById } from "@/service/products";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import axios from "axios";

// useSwr (Stale-While-Revalidate) : hooks third party dari tim vercel untuk fetching data,fetching, dan revalidating di sisi klien
// rumus : const { data, error, isloading } = useSWR(key(endpoint), datafetcher);
// swr punya beberapa properti
// data : data yang diambil drai API
// error : error handlng saat ambil data
// isloading : loading status
// isvalidating : status validasi ulang data (memperbarui data)
const ProductDetailPage = ({ detailProduct }) => {
  const api = process.env.NEXT_PUBLIC_API;

  const { data, error, isloading, isValidating } = useSWR(
    `${api}/products/${detailProduct?.id}`,
    async () => {
      const res = await axios.get(`${api}/products/${detailProduct?.id}`);
      return res.data;
    },
    {
      initialData: detailProduct,
      refreshInterval: 1000,
    }
  );

  if (error) {
    return <div className="text-red-500 text-8xl text-center ">failed to fetch data</div>;
  }
  if (isloading) {
    return <div className="text-red-500 text-8xl text-center ">loading data...</div>;
  }

  return (
    <>
      <div className="flex flex-col px-5 py-5 bg-gradient-to-b from-black to-blue-900 min-h-screen">
        <h1 className="text-4xl font-bold text-white">Detail Product</h1>
        <div className="p-4 mt-5 rounded-2xl bg-white bg-opacity-20 max-w-xl">
          <h2 className="text-2xl font-bold text-white">{data?.title}</h2>
          <Image src={data?.image} alt={data?.image} width={300} height={300} className="flex items-center   w-40  mt-5 object-contain" />
          <p className="text-slate-300 font-semibold mt-5">{data?.description}</p>
          <p className="text-slate-300 text-xl font-semibold mt-5">{formatCurrency(data?.price, "en-US", "USD")}</p>
        </div>
        {isValidating && <div className="text-red-500 text-8xl text-center ">loading data...</div>}
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
