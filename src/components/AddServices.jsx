
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const addServices = () => {
        const { user } = useContext(AuthContext);
        
        const [userProfile, setUserProfile] = useState(null);

        

        const handleAdd = (e) => {
            e.preventDefault();

            const form = new FormData(e.target)
            const serviceImage = form.get('serviceImage');
            const serviceName = form.get('serviceName');
            const serviceDescription = form.get('serviceDescription');
            const servicePrice = form.get('servicePrice');
            const serviceArea = form.get('serviceArea');
            const serviceProvider = {
                name: user.displayName,
                email: user.email,
                image: form.get('image'),
                aboutProvider: form.get('aboutProvider')
            }


        
            fetch('https://local-tour-guides-server.vercel.app/api/v1/services',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    serviceImage,
                serviceName,
                serviceDescription,
                servicePrice,
                serviceArea,
                serviceProvider
                })
            
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    toast.success('Service added successfully');
                }
            })
        }
       

        useEffect(() => {
            setUserProfile({
              name: user?.displayName,
              photo: user?.photoURL,
            });
          }, [user?.displayName, user?.photoURL]);
   
  return (
    <div>
       <Helmet>
        <title>TourEase | Add Services</title>
  
      </Helmet>
      <Header />
      {/* add form section  */}
      <section className="mt-36">
        <div className="relative bg-gradient-to-bl from-blue-100 via-transparent">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <form onSubmit={handleAdd}>
                  <div className="max-w-7xl mx-auto justify-center items-center">
                    <div className="p-4 sm:p-7 md:w-[700px] flex flex-col bg-white rounded-2xl shadow-lg">
                      <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800">
                          Add your service here
                        </h1>
                      </div>

                      <div className="mt-5">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <div className="relative">
                              <input
                                type="text"
                                id="hs-hero-signup-form-floating-input-first-name"
                                className="peer p-4 block w-full  rounded-lg text-sm placeholder:text-transparent focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                name="serviceImage"
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Picture Url of the service
                              </label>
                            </div>
                          </div>

                          <div>
                            <div className="relative">
                              <input
                                type="text"
                                required
                                id="hs-hero-signup-form-floating-input-last-name"
                                className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                      name="serviceName"
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Service Name
                              </label>
                            </div>
                          </div>

                          <div>
                            <div className="relative">
                              <input
                                type="text"
                                readOnly
                                id="hs-hero-signup-form-floating-input-email"
                                className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="you@email.com"
                                value={userProfile?.name}
                                name="name"
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div>
                            <div className="relative">
                              <input
                                type="email"
                                readOnly
                                id="hs-hero-signup-form-floating-input-company-name"
                                className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="Preline"
                                value={user?.email}
                                name="email"
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                               Your email
                              </label>
                            </div>
                          </div>

                          <div>
                            <div className="relative">
                              <input
                                type="text"

                                id="hs-hero-signup-form-floating-input-email"
                                className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="your area"
                                name="serviceArea"
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Service Area
                              </label>
                            </div>
                          </div>

                          <div>
                            <div className="relative">
                              <input
                                type="text"
                                id="hs-hero-signup-form-floating-input-company-name"
                                className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder=""
                                name="servicePrice"
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                        placeholder="type your price like 60$"
                              >
                               Price
                              </label>
                            </div>
                          </div>

                          <div className="relative col-span-full">
                            <div className="relative">
                              <input
                                type="text"
                                className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="description"
                                name="image"
                                value={userProfile?.photo}
                                readOnly
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Provider Image Link
                              </label>
                            </div>

                            <div
                              id="hs-strong-password-popover"
                              className="hidden absolute z-10 w-full bg-blue-50 rounded-lg p-4 dark:bg-blue-950"
                            >
                              <div
                                id="hs-strong-password-in-popover"
                                data-hs-strong-password='{
                          "target": "#hs-hero-signup-form-floating-input-new-password",
                          "hints": "#hs-strong-password-popover",
                          "stripclassNamees": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                          "mode": "popover"
                        }'
                                className="flex mt-2 -mx-1"
                              ></div>

                            </div>
                          </div>

                          <div className="relative col-span-full">
                            <div className="relative">
                              <input
                                type="text"
                                className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="description"
                                name="aboutProvider"
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                About Provider
                              </label>
                            </div>

                            <div
                              id="hs-strong-password-popover"
                              className="hidden absolute z-10 w-full bg-blue-50 rounded-lg p-4 dark:bg-blue-950"
                            >
                              <div
                                id="hs-strong-password-in-popover"
                                data-hs-strong-password='{
                          "target": "#hs-hero-signup-form-floating-input-new-password",
                          "hints": "#hs-strong-password-popover",
                          "stripclassNamees": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                          "mode": "popover"
                        }'
                                className="flex mt-2 -mx-1"
                              ></div>

                            </div>
                          </div>

                          <div className="relative col-span-full">
                            <div className="relative">
                              <input
                                type="text"
                                className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-400 focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="description"
                                name="serviceDescription"
                              />
                              <label
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Description
                              </label>
                            </div>

                            <div
                              id="hs-strong-password-popover"
                              className="hidden absolute z-10 w-full bg-blue-50 rounded-lg p-4 dark:bg-blue-950"
                            >
                              <div
                                id="hs-strong-password-in-popover"
                                data-hs-strong-password='{
                          "target": "#hs-hero-signup-form-floating-input-new-password",
                          "hints": "#hs-strong-password-popover",
                          "stripclassNamees": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                          "mode": "popover"
                        }'
                                className="flex mt-2 -mx-1"
                              ></div>

                            </div>
                          </div>

                        </div>

                        <div className="mt-5">
                          <button
                            type="submit"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#4D96B3] text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Add services
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default addServices;
