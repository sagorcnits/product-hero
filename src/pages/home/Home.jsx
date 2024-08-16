import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Categorization from "../../components/Categorization";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useProducts from "../../hooks/useProducts";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const productData = useProducts();
  const [data, setData] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const numberPages = Math.ceil(50 / itemPerPage);
  const totalbtn = [...Array(numberPages).keys()];

  const handleChangeItemPage = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(1);
  };

  const previousPerPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPerPage = () => {
    if (currentPage < totalbtn.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    axiosPublic
      .get("/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchData = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    axiosPublic
      .get(`/products/${searchValue}`)
      .then((res) => {
        return setData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleCategory = (data) => {
    const brand = data.brand;
    const category = data.category;
    const price = data.price;
    console.log(brand, category, price);
    axiosPublic
      .get(`/products?brand=${brand}&category=${category}&price=${price}`)
      .then((res) => {
        return setData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="mt-5">
        <Banner handleSearchData={handleSearchData}></Banner>
      </div>
      <section className="mt-10">
        <Categorization handleCategory={handleCategory}></Categorization>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center mt-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, id) => (
            <Card key={id}></Card>
          ))}
        </div>
        <div className="flex overflow-auto gap-2 space-x-1 dark:text-gray-800 mt-10 pb-10 ml-2">
          <button
            onClick={previousPerPage}
            className="inline-flex items-center justify-center px-2 h-8 text-sm font-semibold border rounded shadow-md hover:bg-pink-500 duration-500 hover:text-white"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {totalbtn.map((item, id) => {
              return (
                <button
                  onClick={() => setCurrentPage(item + 1)}
                  key={id}
                  type="button"
                  title="Page 1"
                  className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${
                    currentPage == item + 1 ? "selected" : ""
                  }`}
                >
                  {item + 1}
                </button>
              );
            })}
          </div>
          <button
            onClick={nextPerPage}
            className="inline-flex items-center justify-center px-2 h-8 text-sm font-semibold border rounded shadow-md hover:bg-pink-500 duration-500 hover:text-white"
          >
            Next
          </button>
          <select
            defaultValue={itemPerPage}
            onChange={handleChangeItemPage}
            className="cursor-pointer text-sm font-semibold border rounded"
          >
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Home;
