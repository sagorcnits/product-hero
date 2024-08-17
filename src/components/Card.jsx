const Card = ({ product }) => {
  const {
    _id,
    product_name,
    price,
    brand,
    category,
    photo_url,
    description,
    date,
    rating,
  } = product;

  return (
    <div className="card shadow  p-2  duration-500 cursor-pointer h-[390px]">
      <figure className="rounded-md relative h-[150px] overflow-hidden">
        <img
          className="w-full h-full"
          src={photo_url}
          alt=""
        />
        {/* <div className="absolute bg-green-500 px-[4px] py-[2px] rounded-md top-0 left-0 text-white font-semibold">
          OnSale
        </div> */}
      </figure>
      <div className="mt-4 px-2 leading-6">
        <div className="flex justify-between items-center">
          <h2 className="text-[17px] font-semibold ">{product_name}</h2>
          <p>{date}</p>
        </div>
        <div className="flex justify-between items-center gap-1">
          <div className="flex items-center gap-1">
            <p className="text-[#f8310a] pt-2 text-[30px] font-bold">
              ${price}
            </p>
            {/* <p className="text-[#858383] text-[14px]">
              <span className="text-green-500">40%</span> off $<del>200</del>
            </p> */}
          </div>
          <div className="flex  items-center gap-1">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-500"
              />
            </div>
            <p className="text-[11px]">({rating})</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 ">
          <p>
            <span className="font-semibold">brand:</span> {brand}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
        </div>
        <p className="text-sm pt-1 border-b pb-1 border-dashed border-gray-500">
          {description.slice(0, 50)}...
        </p>
        <div className="flex justify-between items-center *:button pt-2">
          <button>Details</button>
          <button>Add Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
