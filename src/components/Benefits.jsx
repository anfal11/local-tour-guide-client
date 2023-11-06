import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { ImAccessibility } from "react-icons/im";
import { motion } from "framer-motion";
const Benefits = () => {
  return (
    <div className="mt-10 lg:max-w-7xl lg:mx-auto md:px-44 lg:p-0 mb-32">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // onClick={() => null}
      >
        <h1 className="text-3xl font-extrabold underline text-gray-400 text-center">
          {" "}
          Our Benefits{" "}
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 mt-10 bg-[#4D96B3] p-12 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div>
            <div className="text-4xl flex justify-center mb-4 text-white">
              <FaShippingFast></FaShippingFast>
            </div>
            <div>
              <h1 className="text-3xl text-center lg:text-start text-gray-200 italic">
                Hassle-Free Trip Planning
              </h1>
            </div>
          </div>
          <div>
            <div className="text-4xl flex justify-center mb-4 text-white">
              <MdOutlineSecurity></MdOutlineSecurity>
            </div>
            <div>
              <h1 className="text-3xl text-gray-200 italic text-center lg:text-start">
                Secure Travel
              </h1>
            </div>
          </div>
          <div>
            <div className="text-4xl flex justify-center mb-4 text-white">
              <BsFillHouseDoorFill></BsFillHouseDoorFill>
            </div>
            <div>
              <h1 className="text-3xl text-gray-200 italic text-center lg:text-start">
                Affortable Place for live
              </h1>
            </div>
          </div>
          <div>
            <div className="text-4xl flex justify-center mb-4 text-white">
              <ImAccessibility></ImAccessibility>
            </div>
            <div>
              <h1 className="text-3xl text-gray-200 italic text-center lg:text-start">
                Global Accessibility
              </h1>
            </div>
          </div>
        </div>
      </motion.button>
    </div>
  );
};

export default Benefits;
