import { FC, useEffect, useRef, useState } from "react";
import feather from "feather-icons";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";
import { NavbarProps } from "../types/Inputs";

const Navbar: FC<NavbarProps> = ({ back }) => {
  const nav = useNavigate();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [drawer, setDrawer] = useState(false);
  const [modalAbout, setModalAbout] = useState(false);
  const [modalHow, setModalHow] = useState(false);

  const clickOutside = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setDrawer(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawer((prevDrawer) => !prevDrawer);
  };

  const closeModal = () => {
    setModalAbout(false);
    setModalHow(false);
  };

  return (
    <>
      <nav className="bg-white border flex justify-between fixed top-0 w-full p-3 shadow z-40">
        <div className="flex gap-2 items-center">
          {back && (
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons["arrow-left"].toSvg(),
              }}
              className="cursor-pointer"
              onClick={() => nav(back)}
            ></div>
          )}
          <h1 className="font-bold text-xl">Daftar Siswa</h1>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: feather.icons.menu.toSvg() }}
          className="active:bg-slate-300 p-1 rounded-lg cursor-pointer"
          onClick={toggleDrawer}
        ></div>
      </nav>
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 bg-slate-300 py-4 px-3 z-50 backdrop-filter backdrop-blur-lg bg-opacity-60 transition-all duration-300 ease-in-out ${
          drawer ? "w-64 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className={`flex flex-col gap-2 ${drawer ? "block" : "hidden"}`}>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-lg w-full active:bg-blue-600 active:scale-105 transition duration-300"
            onClick={() => setModalAbout(true)}
          >
            Tentang app.
          </button>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-lg w-full active:bg-blue-600 active:scale-105 transition duration-300"
            onClick={() => setModalHow(true)}
          >
            Cara menggunakan app.
          </button>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-lg w-full active:bg-blue-600 active:scale-105 transition duration-300"
            onClick={() => nav("/siswaAll")}
          >
            Lihat seluruh siswa.
          </button>
        </div>
        <p
          className={`fixed bottom-0 right-2 text-lg font-medium ${
            drawer ? "block" : "hidden"
          }`}
        >
          Created by ikhsan.
        </p>
      </div>
      <Modal show={modalAbout} onClose={closeModal}>
        <Modal.Header>Tentang app ini.</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              App ini dibuat untuk mempermudah mendaftar siswa yang ingin daftar
              ke sekolah smp islamiyah serua.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-lg active:bg-blue-600 active:scale-105 transition duration-300"
            onClick={closeModal}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={modalHow} onClose={closeModal}>
        <Modal.Header>Cara menggunakan app.</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Cara menggunakan app ini sangat mudah. Untuk melihat data siswa
              cukup klik ikon mata di card siswa, untuk menambahkan data siswa
              cukup klik ikon tambah di bawah pojok kanan, untuk mengedit data
              siswa cukup mengklik ikon edit di card data siswa, dan untuk
              menghapus data siswa cukup mengklik ikon delete di card siswa.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-lg active:bg-blue-600 active:scale-105 transition duration-300"
            onClick={closeModal}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
