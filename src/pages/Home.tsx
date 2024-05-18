import feather from "feather-icons";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { InputsV2 } from "../types/Inputs";
import { motion } from "framer-motion";

const Home = () => {
  const nav = useNavigate();
  const [users, setUsers] = useState<InputsV2[]>([]);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const databaseJson = localStorage.getItem("data");
    const storedName = localStorage.getItem("name");

    if (storedName) {
      setName(storedName);
    } else {
      const userName = prompt("Siapa nama mu?");
      if (userName) {
        localStorage.setItem("name", userName);
        setName(userName);
      }
    }

    if (databaseJson) {
      const database: InputsV2[] = JSON.parse(databaseJson);
      setUsers(database);
    }
  }, []);

  const deleteUser = (id: number | string) => {
    if (confirm("Kamu yakin mau delete data ini?")) {
      const databaseJson = localStorage.getItem("data");
      if (databaseJson) {
        const database: InputsV2[] = JSON.parse(databaseJson);
        const updatedDatabase = database.filter((item) => item.id !== id);
        localStorage.setItem("data", JSON.stringify(updatedDatabase));
        setUsers(updatedDatabase);
        alert("Data berhasil dihapus!");
      }
    }
  };

  return (
    <>
      <Navbar />
      <motion.section
        className="mt-20 flex flex-col gap-4 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <h1 className="font-bold text-lg">Halo, {name || "!"}</h1>
        {users.map((data) => (
          <div
            className="bg-slate-300 w-full p-3 rounded-lg flex justify-between active:bg-slate-400 items-center cursor-pointer"
            key={data.id}
          >
            <div className="flex gap-2 items-center">
              <div
                dangerouslySetInnerHTML={{ __html: feather.icons.user.toSvg() }}
              ></div>
              <div className="flex flex-col">
                <p className="font-semibold">{data.NamaSiswa}</p>
                <small>{data.id}</small>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                dangerouslySetInnerHTML={{ __html: feather.icons.eye.toSvg() }}
                onClick={() => nav(`/detail/${data.id}`)}
                className="cursor-pointer"
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: feather.icons.edit.toSvg() }}
                onClick={() => nav(`/edit/${data.id}`)}
                className="cursor-pointer"
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: feather.icons.delete.toSvg(),
                }}
                onClick={() => deleteUser(data.id)}
                className="cursor-pointer"
              ></div>
            </div>
          </div>
        ))}
      </motion.section>
      <div
        className="fixed bottom-5 right-5 bg-blue-500 active:bg-blue-600 active:scale-105 transition duration-300 p-5 rounded-xl cursor-pointer text-white"
        dangerouslySetInnerHTML={{ __html: feather.icons.plus.toSvg() }}
        onClick={() => nav("/addUser")}
      ></div>
    </>
  );
};

export default Home;
