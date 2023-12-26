import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const PopularServices = () => {

  const [services, setServices] = useState([]);


  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/v1/services?search=")
        .then((res) => res.json())
        .then((data) => {
          const sortedServices = data.sort((a, b) => b.views - a.views);
          setServices(sortedServices);
        });
    } catch (error) {
      toast.error(error);
    }
  }, []);



  return (
    <div className="max-w-7xl mx-auto mt-32 mb-32">

      <h1 className="text-center text-gray-400 underline font-extrabold text-3xl mb-10">
        {" "}
        Popular Services{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {services.slice(0, 4).map((service) => (
          <button
            key={service._id}
            className="transform transition duration-500 hover:scale-90"
            // whileHover={{ scale: 0.9 }}
            // whileTap={{ scale: 0.9 }}
            // onClick={() => null}
          >
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
              <div className="">
                <img
                  className="object-cover h-80 w-full"
                  src={service.serviceImage}
                  alt="Image Description"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-2xl text-start font-semibold text-gray-500">
                  {service.serviceName}
                </h3>
                <p className="mt-3 text-start text-gray-500 text-lg">
                  {service.serviceDescription}
                </p>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">
                  Price: {service.servicePrice}
                </span>
                <h3 className="mb-3 text-start text-gray-500">
                  <span className="font-semibold">Service Provider Name:</span>{" "}
                  {service.serviceProvider.name}
                </h3>

                <div className="flex">
                  <img
                    className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
                    src={service.serviceProvider.image}
                  />
                </div>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <Link
                  to={`/services/${service.serviceName}`}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-[#4D96B3] text-white shadow-sm disabled:opacity-50 hover:bg-[#1e6a88] hover:text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </button>
        ))}
      </div>


<div className="flex justify-center mt-10">
<Link to='/allService'>
<button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#4D96B3] text-white hover:bg-green-600"
>
  Show All
</button>
</Link>
</div>

    </div>
  );
};

export default PopularServices;
