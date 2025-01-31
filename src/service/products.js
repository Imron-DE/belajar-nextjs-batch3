// import library axios untuk request HTTP
import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;
// fungsi untuk mengambil data product dari fake api
export const getProducts = async () => {
  // menjalankan didalam blok tryCatch
  try {
    // request get ke url pake azios.get
    const response = await axios.get(`${api}/products`);

    // kembaliin data product yang disimpan dalam response
    return response.data;
  } catch (error) {
    // error handling
    throw new Error("failed to fetch data =>", error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${api}/products/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("failed to fetch data =>", error);
  }
};
