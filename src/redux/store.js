import { configureStore } from "@reduxjs/toolkit";
import screenSlice from "./screenSlice/screenSlice";

// store : objek untuk menyimpan state aplikasi
// dan menyediakan methode untuk dispatch (ngirim) action dan mengakses state

export const store = configureStore({
  reducer: {
    // panggil reducer-reducer yang sudah  dibuat
    screen: screenSlice,
  },
});

export default store;
