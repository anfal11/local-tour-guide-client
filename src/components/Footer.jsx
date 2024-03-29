import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (
<div>
<footer className="bg-[#4d96b3]">
  <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div className="col-span-full lg:col-span-1">
        <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">TravelEase</a>
        <img
                  className="w-12 mt-4"
                  src="https://i.ibb.co/pfQC28M/travel.png"
                  alt=""
                />
      </div>
  

      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Explore</h4>

        <div className="mt-3 grid space-y-3">
          <p><a className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">Destinations</a></p>
          <p><a className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">Tours</a></p>
          <p><a className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">Packages</a></p>
        </div>
      </div>


      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Company</h4>

        <div className="mt-3 grid space-y-3">
          <p><a className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">About us</a></p>
          <p><a className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">Blog</a></p>
          <p><a className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">Careers</a> <span className="inline ml-1 text-xs bg-[#72D8FF] text-white py-1 px-2 rounded-md">Join our team</span></p>
          <p><a className="inline-flex gap-x-2 text-white hover:text-gray-200" href="#">Contact</a></p>
        </div>
      </div>
 

      <div className="col-span-2">
        <h4 className="font-semibold text-gray-100">Stay in the loop</h4>

        <form>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
            <div className="w-full">
              <label className="sr-only">Subscribe</label>
              <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email"/>
            </div>
            <a className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-[#72D8FF] hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4" href="#">
              Subscribe
            </a>
          </div>
          <p className="mt-3 text-sm text-white">
            Get notified about exciting travel deals and new destinations.
          </p>
        </form>
      </div>
   
    </div>
  

    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between items-center">
        <p className="text-sm text-white">© 2023 TravelEase. All rights reserved.</p>
      </div>
   

   
      <div>
        <a className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="#">
          <BsFacebook  className=""/>
        </a>
        <a className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="#">
          <BsTwitter  className=""/>
        </a>
        <a className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="#">
          <BsInstagram  className=""/>
        </a>
      </div>
  
    </div>
  </div>
</footer>
</div>
    );
};

export default Footer;