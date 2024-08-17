import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
  const axiosPublic = useAxiosPublic();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/products")
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return productData;
};

export default useProducts;
