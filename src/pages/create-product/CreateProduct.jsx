import React from "react";

const CreateProduct = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex flex-col w-full md:w-[480px]  rounded-md p-2 md:px-6 md:py-4 bg-[#ebe8e8]">
        <div className=" text-center">
          <h1 className="text-3xl font-bold">Create Product</h1>
        </div>
        <form className="mt-3">
          <div className="*:mt-2">
            <div className="flex gap-2 items-center">
              <div>
                <label className="block mb-1 text-sm">Product Name</label>
                <input
                  type="text"
                  name="product_name"
                  placeholder="product name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Product Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <label className="block mb-1 text-sm">Brand Name</label>
                <select className="w-[165px] md:w-[205px] px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 cursor-pointer">
                  <option value="nike">nike</option>
                  <option value="walton">walton</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Category</label>
                <select className="w-[165px] md:w-[205px] ml-1 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 cursor-pointer">
                  <option value="nike">nike</option>
                  <option value="walton">walton</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm">Photo URL</label>
              <input
                type="text"
                name="photo_url"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Description</label>
              </div>
              <textarea
                type="text"
                name="description"
                placeholder="product description"
                className="w-full h-[120px] resize-none px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="mt-2">
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
