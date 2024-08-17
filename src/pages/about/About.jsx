import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Product hero - About us</title>
      </Helmet>
      <div className="text-center p-10 bg-green-950 mt-10 rounded-md text-white text-xl md:text-3xl font-semibold">
        <h1>About us Up Comming...</h1>
      </div>
    </>
  );
};

export default About;
