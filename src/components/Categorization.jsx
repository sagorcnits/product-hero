const Categorization = () => {
  return (
    <div>
      <h1 className="font-semibold">Choose your Category</h1>
      <div className="flex justify-between items-center  mt-4">
        <div className="shadow border flex justify-between items-center gap-6 rounded-md p-3">
          <div className="flex items-center gap-3 *:cursor-pointer">
            <div>
              <label className="font-semibold"> Brand : </label>
              <select className="border p-2 rounded-md cursor-pointer">
                <option value="nike">nike</option>
                <option value="walton">walton</option>
              </select>
            </div>
            <div>
              <label className="font-semibold"> Category : </label>
              <select className="border p-2 rounded-md cursor-pointer">
                <option value="clothing">clothing</option>
                <option value="electronics">electronics</option>
              </select>
            </div>
            <div>
              <label className="font-semibold"> Price : </label>
              <select className="border p-2 rounded-md cursor-pointer">
                <option value="100-200">$100-$200</option>
                <option value="200-300">$200-$300</option>
              </select>
            </div>
          </div>
          <button className="button py-[9px] px-3">Find Now</button>
        </div>
        <div className="flex items-center gap-3">
          <label className="font-semibold">Sort By : </label>
          <div className="shadow  rounded-md">
            <select className="cursor-pointer p-2">
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
