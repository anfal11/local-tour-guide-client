
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateService = () => {

    // const [userProfile, setUserProfile] = useState(null);
    const service = useLoaderData();
    const navigate = useNavigate();
        

    const { serviceImage, serviceName, serviceDescription, servicePrice, serviceProvider} = service; 
    // console.log(service);

    // useEffect(() => {
    //     setUserProfile({
    //       name: user?.displayName,
    //       photo: user?.photoURL,
    //     });
    //   }, [user?.displayName, user?.photoURL]);

      const handleUpdate = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const serviceImage = form.get('serviceImage');
        const serviceName = form.get('serviceName');
        const serviceDescription = form.get('serviceDescription');
        const servicePrice = form.get('servicePrice');
        const name = form.get('name');
        const email = form.get('email');
        const image = form.get('image');
        const aboutProvider = form.get('aboutProvider');
     
      const data = {
        serviceImage,
        serviceName,
        serviceDescription,
        servicePrice,
        aboutProvider, 
        name,
        email,
        image
      }

      fetch(`http://localhost:5000/api/v1/services/${service.serviceName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
        //   console.log('Success:', result);
          if (result.modifiedCount > 0){
            toast.success('Service Updated Successfully');
            navigate(-1)
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    }
    return (
        <div className="py-14 bg-gradient-to-tl from-[#4D96B3]">
            <h1 className="text-2xl text-gray-500 text-center underline font-bold">Update Your Services</h1>
            

            <div className="w-[700px] mx-auto my-10">
            <form onSubmit={handleUpdate}>
            <label>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">Service Image</span>
                <input 
                name="serviceImage"
                type="text" 
                className="border w-96 text-gray-500 font-semibold p-2 rounded-md outline-[#4D96B3]"
                defaultValue={serviceImage}
                />
            </label>
            <label>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">Service Name </span>
                <input 
                name="serviceName"
                type="text" 
                className="border w-96 text-gray-500 font-semibold p-2 rounded-md outline-[#4D96B3]"
                defaultValue={serviceName}
                />
                </label>
                <label>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">Service Description </span>
                <input 
                name="serviceDescription"
                type="text" 
                className="border w-96 text-gray-500 font-semibold p-2 rounded-md outline-[#4D96B3]"
                defaultValue={serviceDescription}
                />
                </label>
                <label>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">Service Price </span>
                <input 
                name="servicePrice"
                type="text" 
                className="border w-96 text-gray-500 font-semibold p-2 rounded-md outline-[#4D96B3]"
                defaultValue={servicePrice}
                />
                </label>
                <label>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">Service Provider Name </span>
                <input 
                name="name"
                type="text" 
                className="border w-96 text-gray-500 font-semibold p-2 rounded-md outline-[#4D96B3]"
                defaultValue={serviceProvider?.name}
                />
                </label>
                <label>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">Service Provider Email </span>
                <input 
                name="email"
                type="text" 
                className="border w-96 text-gray-500 font-semibold p-2 rounded-md outline-[#4D96B3]"
                defaultValue={serviceProvider.email}
                />
                </label>
                <label>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">Service Provider Image </span>
                <input 
                name="image"
                type="text" 
                className="border w-96 text-gray-500 font-semibold p-2 rounded-md outline-[#4D96B3]"
                defaultValue={serviceProvider.image}
                />
                </label>
                <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">Service Provider Description </span>
                <textarea
                rows='5' 
                name="aboutProvider"
                type="text" 
                className="border w-96 text-gray-500 font-semibold p-2 rounded-md outline-[#4D96B3]"
                defaultValue={serviceProvider.aboutProvider}
                />

                <div className="flex justify-center">
                <button className="py-3 px-4 mt-10 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#4D96B3] text-white hover:bg-green-600"
                type="submit"
                >
                    Update
                </button>
                </div>
            </form>
            </div>



        </div>
    );
};

export default UpdateService;