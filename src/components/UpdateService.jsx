import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const UpdateService = () => {
    const { user } = useContext(AuthContext);
        
    const [userProfile, setUserProfile] = useState(null);
    const service = useLoaderData();

    const { serviceImage, serviceName, serviceDescription, servicePrice, serviceProvider} = service; 
    console.log(service);

    useEffect(() => {
        setUserProfile({
          name: user?.displayName,
          photo: user?.photoURL,
        });
      }, [user?.displayName, user?.photoURL]);

    return (
        <div className="my-10">
            <h1 className="text-2xl text-gray-500 text-center underline">Update Your Services</h1>
            {/* serviceImage
            serviceName
            serviceDescription
            servicePrice
            serviceProvider  
            |
            aboutProvider 
            name
            email
            image */}

            <div className="w-[700px] mx-auto my-10">
            <form>
                <input 
                name="serviceImage"
                type="text" 
                className="border w-96 text-black"
                defaultValue={serviceImage}
                />
                <input 
                name="serviceName"
                type="text" 
                className="border w-96 text-black"
                defaultValue={serviceName}
                />
                <input 
                name="serviceDescription"
                type="text" 
                className="border w-96 text-black"
                defaultValue={serviceDescription}
                />
                <input 
                name="servicePrice"
                type="text" 
                className="border w-96 text-black"
                defaultValue={servicePrice}
                />
                <input 
                name="name"
                type="text" 
                className="border w-96 text-black"
                defaultValue={serviceProvider}
                />
                {/* <input 
                name="email"
                type="text" 
                className="border w-96 text-black"
                defaultValue={serviceProvider.email}
                />
                <input 
                name="image"
                type="text" 
                className="border w-96 text-black"
                defaultValue={serviceProvider.image}
                />
                <input 
                name="aboutProvider"
                type="text" 
                className="border w-96 text-black"
                defaultValue={serviceProvider.aboutProvider}
                /> */}
            </form>
            </div>



        </div>
    );
};

export default UpdateService;