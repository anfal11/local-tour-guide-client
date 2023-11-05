import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import {ImAccessibility} from "react-icons/im";
const Benefits = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto">
    <h1 className="text-3xl font-extrabold underline text-gray-400 text-center"> Our Benefits </h1>
<div className="flex flex-col lg:flex-row gap-8 mt-10 bg-[#4D96B3] p-12 rounded-xl">
<div>
        <div className="text-4xl flex justify-center mb-4 text-white">
          <FaShippingFast></FaShippingFast>
        </div>
        <div>
          <h1 className="text-3xl text-gray-200 italic">Hassle-Free Trip Planning</h1>
        </div>
      </div>
      <div>
        <div className="text-4xl flex justify-center mb-4 text-white">
          <MdOutlineSecurity></MdOutlineSecurity>
        </div>
        <div>
          <h1 className="text-3xl text-gray-200 italic">Secure Travel</h1>
        </div>
      </div>
      <div>
      <div className="text-4xl flex justify-center mb-4 text-white">
          <BsFillHouseDoorFill></BsFillHouseDoorFill>
        </div>
        <div>
          <h1 className="text-3xl text-gray-200 italic">Affortable Place for live</h1>
        </div>
      </div>
      <div>
      <div className="text-4xl flex justify-center mb-4 text-white">
          <ImAccessibility></ImAccessibility>
        </div>
        <div>
          <h1 className="text-3xl text-gray-200 italic">Global Accessibility</h1>
        </div>
      </div>
</div>
    </div>
  );
};

export default Benefits;
