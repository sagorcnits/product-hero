import { useForm } from "react-hook-form";

const Categorization = ({ handleCategory, handleSorting }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <h1 className="font-semibold">Choose your Category</h1>
      <div className="flex flex-col md:flex-row justify-between items-center  mt-4">
        <div className="shadow border flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6 rounded-md p-3">
          <form>
            <div className="flex items-center gap-2 *:cursor-pointer">
              <div>
                <label className="font-semibold"> Brand : </label>
                <select
                  {...register("brand")}
                  className="border p-2 rounded-md cursor-pointer"
                >
                  <option value="amazon">amazon</option>
                  <option value="nike">nike</option>
                  <option value="walton">walton</option>
                  <option value="samsung">samsung</option>
                  <option value="apple">apple</option>
                  <option value="apple">otobi</option>
                </select>
              </div>
              <div>
                <label className="font-semibold"> Category : </label>
                <select
                  {...register("category")}
                  className="border p-2 rounded-md cursor-pointer"
                >
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="Kitchen Appliances">Kitchen Appliances</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Health & Fitness">Health & Fitness</option>
                </select>
              </div>
              <div>
                <label className="font-semibold"> Price : </label>
                <select
                  {...register("price")}
                  className="border p-2 rounded-md cursor-pointer"
                >
                  <option value="1-100">$1-$100</option>
                  <option value="100-300">$100-$300</option>
                  <option value="300-600">$300-$600</option>
                  <option value="600-1000">$600-$1000</option>
                  <option value="1000-1500">$1000-$1500</option>
                  <option value="1500-2000">$1500-$2000</option>
                  <option value="2000-5000">$2000-$5000</option>
                  <option value="5000-10000">$5000-$10000</option>
                </select>
              </div>
              <button
                onClick={handleSubmit(handleCategory)}
                className="button py-[9px] px-3"
              >
                Find Now
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <label className="font-semibold">Sort By : </label>
          <div className="shadow  rounded-md overflow-hidden border">
            <select
              onChange={(e) => handleSorting(e.target.value)}
              className="cursor-pointer p-2"
            >
              <option value="Price Low to High">Price Low to High</option>
              <option value="Price High to Low">Price High to Low</option>
              <option value="Newest first">Newest first</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorization;
