import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div  className="h-screen">
      <Header />
      <div>
        <Banner />
        <Benefits />
        <Testimonial />

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
