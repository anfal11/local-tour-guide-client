import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
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

  console.log(laoder);
  return (
    <>
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
          </div>
        </div>
      </section>

      {/* service information */}
      <section></section>
    </>
  );
};

export default SIngleService;
