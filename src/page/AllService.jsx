import { useEffect, useState } from "react";
import Header from "../components/Header";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AllService = () => {
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
      try {
        fetch("http://localhost:5000/api/v1/services")
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
          });
      } catch (error) {
        toast.error(error);
      }
    }, []);
  
    const filteredServices = services.filter((service) => {
        return service.serviceName.toLowerCase().includes(searchTerm.toLowerCase());
      });

  return (
    <div>
       <Helmet>
        <title>TourEase | All Services</title>
  
      </Helmet>
      <Header />
       {/* search */}
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
              Insights
            </h1>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Stay in the know with insights from industry experts.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <form>
                <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                  <div className="flex-[1_0_0%]">
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      <span className="sr-only">Search article</span>
                    </label>
                    <input
                      type="email"
                      name="hs-search-article-1"
                      id="hs-search-article-1"
                      className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Search by service name"
                      value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <a
                      className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#4D96B3] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </form>

              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width="347"
                  height="188"
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* all cards */}
        <div className="max-w-7xl mx-auto mt-32 mb-32">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {filteredServices.map((service) => (
          <motion.button
            key={service._id}
            whileHover={{ scale: 0.9 }}
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
          </motion.button>
        ))}
      </div>



    </div>
    </div>
  );
};

export default AllService;
