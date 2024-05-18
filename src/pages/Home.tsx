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
    const name1 = localStorage.getItem("name");
    if (name1) {
      setName(name1);
    } else {
      const jawaban = prompt("Siapa nama mu?");
      if (jawaban) {
        localStorage.setItem("name", jawaban);
      }
    }
    const database = databaseJson ? JSON.parse(databaseJson) : null;
    if (Array.isArray(database)) {
      setUsers(database);
    }
  }, []);
  const deleteUser = (id: number) => {
    if (confirm("Kamu yakin mau delete data ini?")) {
      const databaseJson = localStorage.getItem("data");
      const database: [] = databaseJson ? JSON.parse(databaseJson) : [];
      const indexToDelete = database.findIndex(
        (item: { id: number }) => item.id == id
      );
      if (indexToDelete !== -1) {
        database.splice(indexToDelete, 1);
        localStorage.setItem("data", JSON.stringify(database));
        setUsers(database);
        alert("oke berhasil!");
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
        {name && <h1 className="font-bold text-lg">Halo, {name}!</h1>}
        {!name && <h1 className="font-bold text-lg">Halo!</h1>}
        {users?.map((data, idx) => (
          <div
            className="bg-slate-300 w-full p-3 rounded-lg flex justify-between active:bg-slate-400 items-center cursor-pointer"
            key={idx}
          >
            <div className="flex gap-2 items-center">
              <div
                dangerouslySetInnerHTML={{ __html: feather.icons.user.toSvg() }}
              ></div>
              <div className="flex flex-col ">
                <p className="font-semibold">{data.NamaSiswa}</p>
                <small>{data.id}</small>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                dangerouslySetInnerHTML={{ __html: feather.icons.eye.toSvg() }}
                onClick={() => nav(`/detail/${data.id}`)}
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: feather.icons.edit.toSvg() }}
                className="cursor-pointer"
                onClick={() => nav(`/edit/${data.id}`)}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: feather.icons.delete.toSvg(),
                }}
                className="cursor-pointer"
                onClick={() => deleteUser(data.id)}
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
