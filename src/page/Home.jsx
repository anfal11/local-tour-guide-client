import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
        <Header />
            <div className="h-screen">
            <Banner />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;