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
                  <option value="nike">nike</option>
                  <option value="walton">walton</option>
                </select>
              </div>
              <div>
                <label className="font-semibold"> Category : </label>
                <select
                  {...register("category")}
                  className="border p-2 rounded-md cursor-pointer"
                >
                  <option value="clothing">clothing</option>
                  <option value="electronics">electronics</option>
                </select>
              </div>
              <div>
                <label className="font-semibold"> Price : </label>
                <select
                  {...register("price")}
                  className="border p-2 rounded-md cursor-pointer"
                >
                  <option value="1-100">$1-$100</option>
                  <option value="100-200">$100-$200</option>
                  <option value="200-300">$200-$300</option>
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
