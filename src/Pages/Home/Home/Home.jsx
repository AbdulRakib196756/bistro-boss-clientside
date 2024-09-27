import Helmetheaders from "../../shared/Helmet/Helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Popularmenu from "../Popularmenu/Popularmenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmetheaders subtitle={"Home"}></Helmetheaders>
      <Banner></Banner>
      <Category></Category>
      <Popularmenu></Popularmenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
