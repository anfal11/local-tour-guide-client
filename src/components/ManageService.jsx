import { useContext, useState } from "react";
import Header from "./Header";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  console.log(service);
  console.log(user);

  const serviceFilter = service.filter(
    (service) => service.serviceProvider.email === user.email
  );
  
    const handleDelete = (serviceName) => {
        
    }




  return (
    <div className="mb-28">
      <Header />

      {/* users all services that they added */}
      <section>
        <h1 className="text-2xl text-gray-500 text-center mb-14 mt-10">
          Your Services
        </h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            {serviceFilter.map((service) => (
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
                      <span className="font-semibold">
                        Service Provider Name:
                      </span>{" "}
                      {service.serviceProvider.name}
                    </h3>

                    <div className="flex">
                      <img
                        className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
                        src={service.serviceProvider.image}
                      />
                    </div>
                  </div>
                  <div className="mt-auto justify-center flex border-t border-gray-200 divide-x divide-gray-200">
                    {/* className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-[#4D96B3] text-white shadow-sm disabled:opacity-50 hover:bg-[#1e6a88] hover:text-white" */}
                    <div className="flex  gap-10">
                      <Link to={`/update-services/${service.serviceName}`}>
                        <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium  bg-[#4D96B3] text-white shadow-sm disabled:opacity-50 hover:bg-[#1e6a88] hover:text-white">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(service.serviceName)}
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium  bg-[#4D96B3] text-white shadow-sm disabled:opacity-50 hover:bg-[#1e6a88] hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageService;
