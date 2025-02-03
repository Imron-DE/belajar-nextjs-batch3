import { isMobileScreenAtom } from "@/atoms/atoms";
import { setIsMobileScreen, setIsLargeScreen } from "@/redux/screenSlice/screenSlice";
import store from "@/redux/store";
import "@/styles/globals.css";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const setIsMobileScreenAtom = useSetAtom(isMobileScreenAtom);

  useEffect(() => {
    function handleResize() {
      // dispatch : untuk mengirimkan aksi yang memicu pembaruan nilai state
      store.dispatch(setIsMobileScreen(window.innerWidth < 768));
      store.dispatch(setIsLargeScreen(window.innerWidth > 1024));
      setIsMobileScreenAtom(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

/* File _app.js dibuat otomatis olej next.js
fungsinya untuk menerapkan semua perilaku/element global yang dibutuhkaan semua element / aplikasi Next.js
1.untuk mengatur layout global 
2.untuk mengelola state global 
3. menggunakan css global yang berrlaku di semua halaman. 
*/
