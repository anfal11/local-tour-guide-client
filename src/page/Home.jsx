import { motion, useScroll } from "framer-motion"
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";

const Home = () => {
 const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div
    style={{
      scaleX: scrollYProgress,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 10,
      background: "#4D96B3",
      transformOrigin: "0%",
    }}>
    </motion.div>
      <div  className="h-screen">
    
    <Header />
    <div>
      <Banner />
      <Benefits />
      <Testimonial />
      <Contact />
    </div>
    <Footer></Footer>

  </div>
  </>
  );
};

export default Home;
