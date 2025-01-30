import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import BackToTopButton from "@/components/atoms/icons/BackToTopButton";
import { getProducts } from "@/service/products";
import { useRouter } from "next/router";
import { useLogin } from "@/hooks/useLogin";
import { formatCurrency } from "@/helpers/util/formatCurrency";

const ProductPage = ({ data }) => {
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const footerRef = useRef();
  const [showBackToTop, setshowBackTOTOP] = useState(false);
  // useref : hooks untuk membuat ref ke element DOM/fungsi untuk mengakses element DOM
  // const [data, setData] = useState([]); //SSR perlu dihapus
  const router = useRouter();
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // use Callback : hooks untuk menympan fungsi ke dalam cache
  // tujuannya supaya fungsi tsbt tidak perlu dijalankan / dihitung ulang ketika ada perubahan state
  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => {
      const product = data.find((product) => product.id === item.id);
      return total + (product?.price || 0) * item.qty;
    }, 0);
  }, [cart, data]);
  // defendncy array

  // paggil fungsi useCallback untuk mendapatkan nilai total
  const cartTotal = calculateTotal();

  // use memo : hooks untuk menympan hasil komputasi (perhitungan ) yang kompleks ke dalam cache
  // tujuannya supaya fungsi tsbt tidak perlu dijalankan / dihitung ulang ketika ada perubahan state
  // const cartTotal = useMemo(() => {
  //   return cart.reduce((total, item) => {
  //     const product = data.find((product) => product.id === item.id);
  //     return total + product.price * item.qty;
  //   }, 0);
  // }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      // const sumTotal = cart.reduce((total, item) => {
      //   const product = data.find((product) => product.id === item.id);
      //   return total + product.price * item.qty;
      // }, 0);
      // setTotal(sumTotal);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]); // defendncy array

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    router.push("/login");
  }

  useEffect(() => {
    function handleScroll() {
      // ambil nilai offsetTop(posisi vertical) dari elemen footer yang direferensikan oleh footerRef
      const footerTop = footerRef.current.offsetTop; // ambil batas atas komponen

      // ambil tinggi innerHeight dari object window(tinggi viewport tanpa toolbar & scrolbar)
      const viewportHeight = window.innerHeight;

      // ambil posisi scroll dari object window(posisi scroll vertical {sumbu y) dilayar )
      const scrollPosition = window.scrollY;

      // logic untuk ngecek apakah posisi scroll diayar telah mencapai element footer
      if (scrollPosition + viewportHeight >= footerTop) {
        setshowBackTOTOP(true);
      } else {
        setshowBackTOTOP(false);
      }
    }

    // event listener untuk menjalankan fungsi handle scroll ketika halaman di scroll terjadi
    window.addEventListener("scroll", handleScroll);

    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]); //jalankan side effect ini tiap kali nilai footerRef berubah

  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl">Hi, {username}</h1>
        <Button buttonClassname={"bg-red-500 hover:bg-red-700"} onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex px-5 py-8">
        {/* products */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-500 uppercase mb-4">Products</h1>
          <div className="flex flex-wrap gap-4">
            {data?.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer price={item.price} handleAddToCart={handleAddToCart} id={item.id} />
              </CardProduct>
            ))}
          </div>
        </div>
        {/* cart */}
        {cart.length > 0 && (
          <div className="w-2/3">
            <h1 className="text-3xl font-bold text-blue-500 mb-4 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <div className="flex p-4 border rounded-lg" key={item.id}>
                    <Image className="rounded" width={100} height={100} src={datas?.image} alt="cart image" />
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-between ml-3">
                        <span className="font-bold text-xl">{datas?.title}</span>
                        <span className="font-semibold">{formatCurrency(datas?.price)}</span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="mb-1">Qty</span>
                        <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">{item.qty}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2 font-semibold rounded-lg">
              <span>Total</span>
              <span>{formatCurrency(cartTotal)}</span> {/* ganti formatCurrency deffault dan llangsung panggil sajaa */}
            </div>
          </div>
        )}{" "}
      </div>

      {/* footer */}
      {showBackToTop && (
        <div onClick={handleBackToTop} className="fixed bottom-20 right-5 bg-gradient-hover p-2 rounded-full ">
          <BackToTopButton />
        </div>
      )}
      <footer ref={footerRef} className="text-center py-4 bg-black text-white w-full">
        All rights reserved &copy; || by Imron
      </footer>
    </>
  );
};

// ISR (Incremental Static Regeneration) : teknik menggabuungkan SSR dan SSG
// dimana halaman akan ditampilkan secara statis namun datanya bisa diupdate secara dinamis
// jika ada perubahan data dari server, halaman akan diupdate secara otomatis
export async function getStaticProps() {
  // cara pertama untuk mengambil service satu persatu
  try {
    // const products = await getProducts();

    // cara kedua memanggil bebrapa service sekaligus dengan promise
    const [products] = await Promise.all([getProducts()]);
    const slicedProducts = await products.slice(0, 9);
    return {
      props: {
        data: slicedProducts || [],
        revalidate: 60, // <- fungsi untuk merefresh/mengupdate data setelah 60 detik
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductPage;
