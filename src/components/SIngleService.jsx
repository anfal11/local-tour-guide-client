import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const SIngleService = () => {

  const [services, setServices] = useState([]);
  const loader = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    serviceDescription,
    serviceImage,
    serviceName,
    servicePrice,
    serviceArea,
    serviceProvider,
  } = loader;

  useEffect(() => {
    // Fetch the services data here
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

 


  const providerEmail = serviceProvider.email;
  const otherServices = services.filter(
    (service) =>
      service.serviceProvider.email === providerEmail && service._id !== loader._id
  );
  
 
console.log(otherServices);

  return (
    <div className="mb-10">
      <Header />

      {/* service provider information */}
      <section>
        <div>
          <h1 className="text-gray-500 font-bold text-2xl text-center underline py-10">
            Service Provider Information:{" "}
          </h1>
          <div className="flex flex-col items-center">
            <img
              className="w-96 rounded-full"
              src={serviceProvider.image}
              alt=""
            />
            <h1 className="text-xl text-gray-500 font-medium">
              <span className="text-[#4D96B3] font-bold">Provider Name: </span>
              {serviceProvider.name}
            </h1>
            <h1 className="text-xl text-gray-500 font-medium">
              <span className="text-[#4D96B3] font-bold">Provider Location: </span>
              {serviceArea}
            </h1>
            <h1 className="text-xl text-gray-500 font-medium text-center px-40">
              <span className="text-[#4D96B3] font-bold">About Provider: </span>
              {serviceProvider.aboutProvider}
            </h1>
          </div>
        </div>
      </section>

      {/* service information */}
      <section className="max-w-7xl mx-auto">
        <div>
        <h1 className="text-gray-500 font-bold text-2xl text-center underline py-10">
            Service Information:{" "}
          </h1>

          <div>
                <div className="flex flex-col lg:flex-row justify-evenly px-10 gap-4">
                    <img className="lg:w-1/2 h-[446px]" src={serviceImage} alt="" />
                  <div className="space-y-3">
                  <h1 className="text-xl text-gray-500 font-medium">
              <span className="text-[#4D96B3] font-bold">Service Name: </span>
              {serviceName}
            </h1>
                    <p className="text-xl text-gray-500 font-medium">
              <span className="text-[#4D96B3] font-bold">Service Deatils: </span>
              {serviceDescription}
            </p>
                    <p className="text-xl text-gray-500 font-medium">
              <span className="text-[#4D96B3] font-bold">Service Price: </span>
              {servicePrice}
            </p>
            <div className="text-center">
    <button className="w-full py-3 px-4 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#4D96B3] text-white hover:bg-[#127096]" data-hs-overlay="#hs-subscription-with-image">
    Book Now
    </button>
  </div>
                  </div>
                  <div className="w-full max-w-md mx-auto p-6">


  <div id="hs-subscription-with-image" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto">
    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div className="relative flex flex-col bg-gray-800 shadow-lg rounded-xl">
        <div className="absolute top-2 end-2 z-[10]">
          <button type="button" className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-transparent bg-[#4D96B3] text-white hover:bg-white/20" data-hs-overlay="#hs-subscription-with-image">
            <span className="sr-only">Close</span>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="aspect-w-16 aspect-h-8">
          <img className="w-full object-cover rounded-t-xl" src={serviceImage} alt="Image Description"/>
        </div>

        <div className="p-4 sm:p-10 overflow-y-auto">
          <h3 className="mb-2 text-2xl font-bold text-gray-400">
            {serviceName} 🎉
          </h3>
          <p className="text-gray-500 flex justify-center gap-4 items-center">
          <span className="font-bold">Provider Email: </span>
          <input 
            type="email"
            value={serviceProvider?.email}
            readOnly
            className="my-1 py-3 px-4 block w-[70%] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>  
          </p>
          <p className="text-gray-500 flex justify-center gap-4 items-center">
            <span className="font-bold">User Email:</span>
            <input 
            type="email"
            value={user?.email}
            readOnly
            className="my-1 py-3 px-4 block w-[77%] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/> 
          </p>
          <p className="text-gray-500">
          <span className="font-bold">Service Taking Date: </span><input type="date" className="my-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="This is placeholder"/>
          </p>
          <p className="text-gray-500 ">
          <span className="font-bold">Special instruction: </span><input type="text" className="my-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Your instruction"/>
          </p>
          <p className="flex justify-center gap-4 items-center text-gray-500 font-bold">
          Price:<input 
            type="text"
            value= {servicePrice}
            readOnly
            className="my-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
          </p>

          <div className="mt-6 flex justify-center gap-x-4">
            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-slate-700  text-white hover:bg-slate-900 " data-hs-overlay="#hs-subscription-with-image">
              Purchase this service
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>
          </div>
        </div>
      </section>

      {/* other cards section of that user if available */}

      <section className="max-w-7xl mx-auto">
          <div>
          <h1 className="text-gray-500 font-bold text-2xl text-center underline py-10">
            Other Services of this Provider:{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            
            
              <div  className="max-w-7xl mx-auto mt-32 mb-32">

{
  otherServices.length > 0 ? (
    <div>
  { otherServices.map((se) => (
    <motion.button
      key={se._id}
      whileHover={{ scale: 0.9 }}
      // whileTap={{ scale: 0.9 }}
      // onClick={() => null}
    >
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div className="">
          <img
            className="object-cover h-80 w-full"
            src={se.serviceImage}
            alt="Image Description"
          />
        </div>
        <div className="p-4 md:p-6">
          <h3 className="text-2xl text-start font-semibold text-gray-500">
            {se.serviceName}
          </h3>
          <p className="mt-3 text-start text-gray-500 text-lg">
            {se.serviceDescription}
          </p>
          <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">
            Price: {se.servicePrice}
          </span>
          <h3 className="mb-3 text-start text-gray-500">
            <span className="font-semibold">Service Provider Name:</span>{" "}
            {se.serviceProvider.name}
          </h3>

          <div className="flex">
            <img
              className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
              src={se.serviceProvider.image}
            />
          </div>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
        <Link
            to={`/services/${se.serviceName}`}
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-[#4D96B3] text-white shadow-sm disabled:opacity-50 hover:bg-[#1e6a88] hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.button>
  ))}
</div>
  ) :
  (
    <div className="flex flex-col justify-center items-center">
    <div className="text-2xl mb-2 text-gray-500 font-bold"> No other services Found here</div>
    <img className="w-96 rounded-full" src="https://i.ibb.co/yVZJPrB/photo-1593341832681-6cb2ce1ed053-q-80-w-1968-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
    </div>
  )
}



</div>
              
            
          </div>
          </div>
      </section>
    </div>
  );
};

export default SIngleService;
