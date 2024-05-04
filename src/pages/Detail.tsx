import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

type params = {
  nik: string;
};
const Detail = () => {
  const { nik } = useParams<params>();
  return (
    <>
      <Navbar back="/" />
      <motion.section
        className="mt-20 h-[100vh] flex flex-col justify-center items-center"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <h1 className="font-medium text-4xl">Belum jadi...</h1>
        <p className="text-sm">{nik}</p>
        <div className="p-2"></div>
        <Link to="/">
          <button
            type="button"
            className="bg-blue-600 text-white px-2 py-3 rounded-lg"
          >
            Back
          </button>
        </Link>
      </motion.section>
      {/* <div className="p-5"></div> */}
    </>
  );
};

export default Detail;
