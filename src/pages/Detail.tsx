import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InputsV2 } from "../types/Inputs";
import img from "../assets/nophoto.png";
import { Accordion } from "flowbite-react";

type params = {
  id: string;
};
const Detail = () => {
  const { id } = useParams<params>();
  const nav = useNavigate();
  const [user, setUser] = useState<InputsV2>();
  useEffect(() => {
    const databaseJson = localStorage.getItem("data");
    const database: InputsV2[] = databaseJson ? JSON.parse(databaseJson) : [];
    const indexToView = database.findIndex(
      (item: { id: string | number }) => item.id == id
    );
    if (indexToView !== -1) {
      setUser(database[indexToView]);
    } else {
      nav("/");
    }
  }, []);
  return (
    <>
      <Navbar back="/" />
      <motion.section
        className="mt-20 bg-gradient-to-b from-transparent to-black min-h-screen px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <div className="flex flex-col gap-2">
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full w-44 mx-auto p-1">
            <img
              src={img}
              loading="lazy"
              alt="photo profile"
              className="rounded-full w-44 mx-auto"
            />
          </div>
          <h1 className="text-center text-3xl font-semibold">
            {user?.NamaSiswa}
          </h1>
        </div>
        <div className="pt-10"></div>
        <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2 p-5 mx-auto">
          <h2 className="text-center text-2xl font-medium">Informasi</h2>
          <hr className="border-[3px] rounded-full border-gray-300 mt-2" />
          <div className="pt-4"></div>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                Nama Siswa
              </Accordion.Title>
              <Accordion.Content>{user?.NamaSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                Jenis Kelamin
              </Accordion.Title>
              <Accordion.Content>{user?.KelaminSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">Kelas</Accordion.Title>
              <Accordion.Content>{user?.KelasSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">Agama</Accordion.Title>
              <Accordion.Content>{user?.AgamaSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                No Tlp Siswa
              </Accordion.Title>
              <Accordion.Content>+62 {user?.noTlpSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">Nama Ayah</Accordion.Title>
              <Accordion.Content>{user?.NamaAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                No Tlp Ayah
              </Accordion.Title>
              <Accordion.Content>+62 {user?.noTlpAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">Nama Ibu</Accordion.Title>
              <Accordion.Content>{user?.NamaIbu}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                No Tlp Ibu
              </Accordion.Title>
              <Accordion.Content>+62 {user?.noTlpIbu}</Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="p-10"></div>
      </motion.section>
      {/* <div className="p-5"></div> */}
    </>
  );
};

export default Detail;
