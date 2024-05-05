import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Notfound = () => {
  return (
    <>
      <Navbar back="/" />
      <section className="px-4 min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-2xl p-5 border-2 flex flex-col items-center justify-center border-slate-100 rounded-lg w-full md:w-1/2">
          <h1 className="text-2xl font-bold">Oops!</h1>
          <h2 className="leading-relaxed text-gray-500 dark:text-gray-400">
            Cannot find page you are looking for
          </h2>
          <div className="pt-3"></div>
          <Link to="/">
            <button className="bg-blue-500 text-white py-3 px-2 rounded-lg active:bg-blue-600 active:scale-105 transition duration-300">
              Back
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Notfound;
