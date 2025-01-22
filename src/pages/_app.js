import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/* File _app.js dibuat otomatis olej next.js
fungsinya untuk menerapkan semua perilaku/element global yang dibutuhkaan semua element / aplikasi Next.js
1.untuk mengatur layout global 
2.untuk mengelola state global 
3. menggunakan css global yang berrlaku di semua halaman. 
*/
