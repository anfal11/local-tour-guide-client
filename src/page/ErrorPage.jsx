import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center mt-44">
      <div>
      <h1 className="text-gray-400 font-bold text-3xl text-center py-10"> ❌❌Ooppss........... 404 Error...........❌❌</h1>
        <div><img
          className="w-[600px] rounded-xl object-cover"
          src="https://i.ibb.co/SwzdQqM/photo-1525785967371-87ba44b3e6cf-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-no.jpg"
          alt=""
        /></div>
        <div className="flex justify-center">
          <Link to="/">
            <button
              type="button"
              className="py-3 mt-10 flex px-4 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
