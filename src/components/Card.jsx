const Card = () => {
  return (
    <div className="card shadow  p-2  duration-500 cursor-pointer h-[300px]">
      <figure className="rounded-md relative h-[100px] md:h-[180px] lg:h-[160px] overflow-hidden">
        <img
          className="w-full h-full"
          src="https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?t=st=1723719296~exp=1723722896~hmac=2fda09a5de19b7a48b46c68e650d8f49c22c4a1deba1973a74103f4adf0a3c79&w=740"
          alt=""
        />
        <div className="absolute bg-green-500 px-[4px] py-[2px] rounded-md top-0 left-0 text-white font-semibold">
          OnSale
        </div>
      </figure>
      <div className="mt-2 md:mt-4 px-2 leading-6">
        <h2 className="lg:text-xl font-semibold text-xs">Watch</h2>
        <div className="flex items-center gap-1">
          <div>
            <p className="text-[#f8310a] pt-[2px]">
              <span className="text-xl md:text-[30px] font-bold ">$</span>
              <span className="text-xl md:text-[30px] ">50</span>{" "}
            </p>
          </div>
          <p className="text-[#858383] text-xs md:text-[14px]">40% off</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[#858383] text-xs md:text-xl">
            <span>$</span>
            <del>200</del>
          </div>
          <div>
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
        </div>
      </div>
    </div>
  );
};

export default Card;
