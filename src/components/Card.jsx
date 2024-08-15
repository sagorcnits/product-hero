const Card = () => {
  return (
    <div className="card shadow  p-2  duration-500 cursor-pointer h-[370px]">
      <figure className="rounded-md relative h-[200px] overflow-hidden">
        <img
          className="w-full h-full"
          src="https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?t=st=1723719296~exp=1723722896~hmac=2fda09a5de19b7a48b46c68e650d8f49c22c4a1deba1973a74103f4adf0a3c79&w=740"
          alt=""
        />
        <div className="absolute bg-green-500 px-[4px] py-[2px] rounded-md top-0 left-0 text-white font-semibold">
          OnSale
        </div>
      </figure>
      <div className="mt-4 px-2 leading-6">
        <h2 className="text-xl font-semibold ">Watch</h2>
        <div className="flex justify-between items-center gap-1">
          <div className="flex items-center gap-1">
            <p className="text-[#f8310a] pt-2 text-[30px] font-bold">$50</p>
            <p className="text-[#858383] text-[14px]">
              <span className="text-green-500">40%</span> off $<del>200</del>
            </p>
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
            <p className="text-[11px]">(23)</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 ">
          <p>
            <span className="font-semibold">brand:</span> nike
          </p>
          <p>
            <span className="font-semibold">Category:</span> electronics
          </p>
        </div>
        <p className="text-sm pt-1 border-b pb-1 border-dashed border-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
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
