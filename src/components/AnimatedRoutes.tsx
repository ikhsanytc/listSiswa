import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";
import { AnimatePresence } from "framer-motion";
import Notfound from "../pages/Notfound";
import SiswaAll from "../pages/SiswaAll";
import Debug from "../pages/Debug";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/addUser" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/siswaAll" element={<SiswaAll />}></Route>
        <Route path="/debug" element={<Debug />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
