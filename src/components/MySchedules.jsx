import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Header from "./Header";

const MySchedules = () => {
    const loader = useLoaderData();
    const [service, setService] = useState([]);

    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

        // useEffect(() => {
    //     if(userEmail){
    //         fetch("http://localhost:5000/api/v1/create-bookings")
    //       .then((res) => res.json())
    //       .then((data) => setService(data));
    //     }
    //   }, [userEmail]);

    useEffect(()=>{
        const filter = loader.filter((service) => service?.userEmail === userEmail)
        setService(filter)
    },[userEmail, loader])

    //   const serviceFilter = service.filter(
    //     (service) => service.serviceProvider?.email ==user?.email
    //   );
  
    //   console.log(serviceFilter);
    // console.log(service);

    return (
        <div>
        <Header />
            {/* my bookings */}
            <section>
            {service.length > 0 ? (
                    <div>
                        <h1 className="text-2xl text-gray-500 text-center mb-5">My Bookings</h1>
                        {service.map((bookedService) => (
                            // Display booked service details here
                            <div key={bookedService._id}>
                                <p>Service Name: {bookedService.instruction}</p>
                                {/* Add more details you want to display */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center">No services booked yet.</p>
                )}
            </section>

            {/* my pending works */}
            <section>

            </section>
        </div>
    );
};

export default MySchedules;