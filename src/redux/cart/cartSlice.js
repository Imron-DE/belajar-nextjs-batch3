import { createSlice } from "@reduxjs/toolkit";

// createSlice : fungsi untuk membuat slice ddari redux store yang berisi reducer dan action
// yang merupakan bagian dari state

const cartSlice = createSlice({
  name: "cart", // nama slice
  // initialState : nilai awal state
  initialState: {
    // fungsi typeof window !== "undefined" : untuk memastikan localstorage berjalan disisi client(brwoser)
    data: (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))) || [],
  },
  // reducer & action untuk memperbarui nilai state.data yang dikirim dari action.payload
  reducers: {
    addToCart: (state, action) => {
      state.data(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions; // export action agar bisa digunakan

export default cartSlice.reducer; // export reducer agar bisa disimpan ke dalam store
