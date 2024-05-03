import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/addUser" element={<Add />} />
        <Route path="/edit/:nik" element={<Edit />}></Route>
        <Route path="/detail/:nik" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
