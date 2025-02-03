import { createSlice } from "@reduxjs/toolkit";
// createSlice : fungsi untuk membuat slice ddari redux store yang berisi reducer dan action
// yang merupakan bagian dari state
const screenSlice = createSlice({
  name: "screen", // nama slice ini
  // initialState : nilai awal state
  initialState: {
    isMobileScreen: false,
    isLargeScreen: false,
    username: "",
  },
  // reducer : objek yang berisi kumpulan reducer yang akan di pakai untuk merubah state slice
  reducers: {
    // setIsMobileScreen : nama reducer
    setIsMobileScreen: (state, action) => {
      // untuk mengubah/ memperbarui nilai state isMobileScreen menjadi nilai yang dikirim dari action.payload
      state.isMobileScreen = action.payload;
    },
    setIsLargeScreen: (state, action) => {
      state.isLargeScreen = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

// export action creator yang bernama setIsMobileScreen dari slice screenslice untuk mengirimkan action ke store redux
// dan memicu perubahan state
export const { setIsMobileScreen, setIsLargeScreen, setUsername } = screenSlice.actions;

export default screenSlice.reducer; // export reducer agar bisa disimpan ke dalam store
