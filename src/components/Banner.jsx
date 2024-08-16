import { IoSearchOutline } from "react-icons/io5";

const Banner = ({ handleSearchData }) => {
  return (
    <div
      className="hero rounded-md overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/elegant-skin-care-banner-design_23-2149480150.jpg?t=st=1723702338~exp=1723705938~hmac=e086257abff440a2c70c8d93841edaba74d11936c0e001f6f00e7cd2001e6fee&w=826)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl md:text-4xl font-bold">
            Find Your Product
          </h1>
          <p className="mb-5 text-sm">You find the product you like</p>
          <form onSubmit={handleSearchData}>
            <div className="flex gap-2 justify-between items-center bg-white  overflow-hidden text-black rounded-md">
              <input
                type="text"
                placeholder="search product"
                name="search"
                className="focus:outline-none w-full px-4 py-2"
              />
              <button type="submit" className="text-[20px] text-white bg-bgColor py-3 px-4 hover:bg-black duration-500">
                <IoSearchOutline></IoSearchOutline>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
