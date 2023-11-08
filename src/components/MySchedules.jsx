import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Header from "./Header";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MySchedules = () => {
  const loader = useLoaderData();
  const [service, setService] = useState([]);
  const [myBookService, setMyBookeService] = useState([]);
  const [statusMap, setStatusMap] = useState({}); 

  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {
    
    document.title = 'TourEase | My Schedules'; 
  }, []);

  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem("statusMap"));
    if (savedStatus) {
      setStatusMap(savedStatus);
    }
  }, []);

  const handleStatusChange = (itemId, newStatus) => {
    setStatusMap((prevStatusMap) => ({
      ...prevStatusMap,
      [itemId]: newStatus,
    }));

    // Store the updated status map in localStorage
    localStorage.setItem("statusMap", JSON.stringify(statusMap));
  };

  useEffect(() => {
    const filter = loader.filter((service) => service?.userEmail === userEmail);
    setService(filter);
  }, [userEmail, loader]);

  useEffect(() => {
    const myServiceBook = loader.filter(
      (service) =>
        service?.providerEmail === userEmail && service?.userEmail !== userEmail
    );
    setMyBookeService(myServiceBook);
  }, [loader, userEmail]);

  //   console.log(service);
  // console.log(myBookService);
  return (
    <div>
          <Helmet>
        <title>TourEase | My Schedules</title> 
      </Helmet>
      <Header />
      {/* my bookings */}
      <section className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold underline text-center text-gray-500 mb-10">
          {" "}
          My Bookings{" "}
        </h1>
        {service.length > 0 ? (
          <div>
            {/* <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="rounded-full">
                          <img
                            className="rounded-full w-20 h-20"
                            src={bookedService.serviceImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {bookedService.providerEmail}
                        </div>
                      </div>
                      <div className="font-bold">
                        {bookedService.serviceDate}
                      </div>
                      <td className="font-bold">{bookedService.userEmail}</td>
                      <td className="font-bold">
                        {bookedService.servicePrice}
                      </td>
                      <td className="font-bold">{bookedService.serviceDate}</td>
                      <th>
                        {status === "confirmed" ? (
                          <span className="font-bold text-primary">
                            Confirmed
                          </span>
                        ) : (
                          <button
                            onClick={() => handleConfirm(_id)}
                            className="btn btn-primary"
                          >
                            Please Confirm
                          </button>
                        )}
                      </th>
                    </div>
                  </td>
                </tr> */}
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr className="divide-x divide-gray-500">
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Provider Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Service Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Service Price
                          </th>
                          {/* <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Action
                          </th> */}
                        </tr>
                      </thead>

                      <tbody className="text-center divide-y divide-gray-500">
                        {service.map((bookedService) => (
                          // Display booked service details here

                          <tr
                            className="border-t divide-x border-gray-200"
                            key={bookedService._id}
                          >
                            <td className="flex justify-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              <img
                                className="rounded-full w-28 h-28"
                                src={bookedService.serviceImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 ">
                              {bookedService.providerEmail}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                              {bookedService.serviceDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                              {bookedService.servicePrice}
                            </td>
                            {/* <td className="flex justify-center px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                <button
                                  type="button"
                                  className="flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-[#4D96B3] hover:text-[#2f87aa] disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  Delete
                                </button>
                              </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto col-span-3">
            <h1 className="text-2xl text-gray-500 text-center mb-14 mt-10">
              No services booked yet.
            </h1>
            <img
              className="mx-auto"
              src="https://i.ibb.co/4NCks3s/icon-not-found.png"
              alt=""
            />
          </div>
        )}
      </section>

      {/* my pending works */}
      <section className="max-w-7xl mx-auto  mb-28">
        <h1 className="my-10 text-2xl font-bold underline text-center text-gray-500">
          {" "}
          Pending Works{" "}
        </h1>

        {}
        {service.length > 0 ? (
          <div>
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr className="divide-x divide-gray-500">
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Provider Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Service Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Service Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase"
                          >
                            Booking Status
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-center divide-y divide-gray-500">
                        {myBookService.map((bookedService) => (
                          // Display booked service details here

                          <tr
                            className="border-t divide-x border-gray-200"
                            key={bookedService._id}
                          >
                            <td className="flex justify-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              <img
                                className="rounded-full w-28 h-28"
                                src={bookedService.serviceImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 ">
                              {bookedService.userEmail}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                              {bookedService.serviceDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                              {bookedService.servicePrice}
                            </td>
                            <td className="flex justify-center px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                              <select  value={statusMap[bookedService._id] || "Pending"}  onChange={(e) => handleStatusChange(bookedService._id, e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto col-span-3">
            <h1 className="text-2xl text-gray-500 text-center mb-14 mt-10">
              No one booked your service/s.
            </h1>
            <img
              className="mx-auto w-20 h-20"
              src="https://i.ibb.co/s6T2zx5/1200px-OOjs-UI-icon-cancel-destructive-svg.png"
              alt=""
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default MySchedules;
