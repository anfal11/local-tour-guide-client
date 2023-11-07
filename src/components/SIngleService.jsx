import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";


const SIngleService = () => {
  const laoder = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    serviceDescription,
    serviceImage,
    serviceName,
    servicePrice,
    serviceProvider,
  } = laoder;


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
              {serviceProvider.name}
            </h1>
            <h1 className="text-xl text-gray-500 font-medium">
              <span className="text-[#4D96B3] font-bold">About Provider: </span>
              {serviceProvider.name}
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
                    <img className="lg:w-1/2" src={serviceImage} alt="" />
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
          <p className="text-gray-500">
          <span className="font-bold">Provider Email: </span>{serviceProvider?.email} 
          </p>
          <p className="text-gray-500">
            <span className="font-bold">User Email:</span> {user?.email}
          </p>
          <p className="text-gray-500">
          <span className="font-bold">Service Taking Date: </span><input type="date" className="my-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="This is placeholder"/>
          </p>
          <p className="text-gray-500">
          <span className="font-bold">Special instruction: </span><input type="text" className="my-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Your instruction"/>
          </p>
          <p className="text-gray-500 font-bold">
          Price: {servicePrice}
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
    </div>
  );
};

export default SIngleService;
