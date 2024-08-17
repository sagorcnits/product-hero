import moment from "moment";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  const submit = (data) => {
    const product_name = data.product_name;
    const price = data.price;
    const brand = data.brand;
    const category = data.category;
    const photo_url = data.photo_url;
    const description = data.description;
    const productData = {
      product_name,
      price,
      brand,
      category,
      photo_url,
      description,
      date: moment().format("l"),
    };

    axiosPublic
      .post("/products", productData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Product added",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Product hero - CreateProduct</title>
      </Helmet>
      <div className="flex justify-center items-center mt-4">
        <div className="flex flex-col w-full md:w-[480px]  rounded-md p-2 md:px-6 md:py-4 bg-[#ebe8e8]">
          <div className=" text-center">
            <h1 className="text-3xl font-bold">Create Product</h1>
          </div>
          <form className="mt-3" onSubmit={handleSubmit(submit)}>
            <div className="*:mt-2">
              <div className="flex gap-2 items-center *:flex-1">
                <div>
                  <label className="block mb-1 text-sm">Product Name</label>
                  <input
                    {...register("product_name", { required: true })}
                    type="text"
                    name="product_name"
                    placeholder="product name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                  {errors.product_name && (
                    <p className="text-red-500">Invalid Your Product Name</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 text-sm">Product Price</label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    name="price"
                    placeholder="price"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                  {errors.price && (
                    <p className="text-red-500">Invalid Your price</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2 items-center *:flex-1">
                <div>
                  <label className="block mb-1 text-sm">Brand Name</label>
                  <select
                    {...register("brand")}
                    className=" w-full  px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 cursor-pointer"
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
                  <label className="block mb-1 text-sm">Category</label>
                  <select
                    {...register("category")}
                    className="w-full  px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 cursor-pointer"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="Kitchen Appliances">
                      Kitchen Appliances
                    </option>
                    <option value="Furniture">Furniture</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm">Photo URL</label>
                <input
                  {...register("photo_url", { required: true })}
                  type="text"
                  name="photo_url"
                  placeholder="Photo URL"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.photo_url && (
                  <p className="text-red-500">Invalid Your photo URL</p>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Description</label>
                </div>
                <textarea
                  {...register("description", { required: true })}
                  type="text"
                  name="description"
                  placeholder="product description"
                  className="w-full h-[120px] resize-none px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.description && (
                  <p className="text-red-500">Invalid Your Description</p>
                )}
              </div>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md button"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
