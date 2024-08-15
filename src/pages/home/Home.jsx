import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Categorization from "../../components/Categorization";

const Home = () => {
  return (
    <>
      <div className="mt-5">
        <Banner></Banner>
      </div>
      <section className="mt-10">
        <Categorization></Categorization>
        <div className="grid grid-cols-4 gap-10 items-center mt-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, id) => (
            <Card key={id}></Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
