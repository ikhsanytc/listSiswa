import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Inputs from "../types/Inputs";
import img from "../assets/nophoto.png";
import { Accordion } from "flowbite-react";

type params = {
  nik: string;
};
const Detail = () => {
  const { nik } = useParams<params>();
  const nav = useNavigate();
  const [user, setUser] = useState<Inputs>();
  useEffect(() => {
    const databaseJson = localStorage.getItem("data");
    const database: Inputs[] = databaseJson ? JSON.parse(databaseJson) : [];
    const indexToView = database.findIndex(
      (item: { nik: string | number }) => item.nik == nik
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
            {user?.CalonPesertaDidik}
          </h1>
        </div>
        <div className="pt-10"></div>
        <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2 p-5 mx-auto">
          <h2 className="text-center text-2xl font-medium">Informasi</h2>
          <hr className="border-[3px] rounded-full border-gray-300 mt-2" />
          <div className="pt-4"></div>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>Calon Peserta Didik</Accordion.Title>
              <Accordion.Content>{user?.CalonPesertaDidik}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Tempat Tanggal Lahir</Accordion.Title>
              <Accordion.Content>{user?.tempatTglLahir}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Jenis Kelamin</Accordion.Title>
              <Accordion.Content>{user?.jenisKelamin}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Agama</Accordion.Title>
              <Accordion.Content>{user?.agama}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Asal Sekolah</Accordion.Title>
              <Accordion.Content>{user?.asalSekolah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>NPSN</Accordion.Title>
              <Accordion.Content>{user?.npsn}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>No Seri Ijazah</Accordion.Title>
              <Accordion.Content>{user?.noSeriIjazah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>NIK</Accordion.Title>
              <Accordion.Content>{user?.nik}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Alamat</Accordion.Title>
              <Accordion.Content>{user?.alamat}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Kode Pos</Accordion.Title>
              <Accordion.Content>{user?.kodePos}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>RT</Accordion.Title>
              <Accordion.Content>{user?.rt}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>RW</Accordion.Title>
              <Accordion.Content>{user?.rw}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Kelurahan</Accordion.Title>
              <Accordion.Content>{user?.kelurahan}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Kecamatan</Accordion.Title>
              <Accordion.Content>{user?.kecamatan}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Kota</Accordion.Title>
              <Accordion.Content>{user?.kota}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>No Tlp</Accordion.Title>
              <Accordion.Content>{user?.noTlp}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Alat Transportasi</Accordion.Title>
              <Accordion.Content>{user?.alatTransportasi}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Email</Accordion.Title>
              <Accordion.Content>{user?.email}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Penerima Kps</Accordion.Title>
              <Accordion.Content>{user?.penerimaKps}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>No Kps</Accordion.Title>
              <Accordion.Content>{user?.noKps}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Tinggi Badan</Accordion.Title>
              <Accordion.Content>{user?.tinggiBadan}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Berat Badan</Accordion.Title>
              <Accordion.Content>{user?.beratBedan}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Jarak Tempuh Tinggal Ke Sekolah</Accordion.Title>
              <Accordion.Content>{user?.jarakTempuh}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Waktu Tempuh Tinggal Ke Sekolah</Accordion.Title>
              <Accordion.Content>{user?.waktuTempuh}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Prestasi</Accordion.Title>
              <Accordion.Content>{user?.jenisPrestasi}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Tingkat Prestasi</Accordion.Title>
              <Accordion.Content>{user?.tingkatPres}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Tahun Prestasi</Accordion.Title>
              <Accordion.Content>{user?.tahunPres}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Beasiswa</Accordion.Title>
              <Accordion.Content>{user?.jenisBeasiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Sumber Beasiswa</Accordion.Title>
              <Accordion.Content>{user?.sumberBea}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Tahun Beasiswa</Accordion.Title>
              <Accordion.Content>{user?.tahunBea}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Nama Ayah</Accordion.Title>
              <Accordion.Content>{user?.namaAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Pekerjaan Ayah</Accordion.Title>
              <Accordion.Content>{user?.pekerjaanAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Pendidikan Ayah</Accordion.Title>
              <Accordion.Content>{user?.pendidikanAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Penghasilan Ayah</Accordion.Title>
              <Accordion.Content>{user?.penghasilanAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>No Tlp Ayah</Accordion.Title>
              <Accordion.Content>{user?.noTlpAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Nama Ibu</Accordion.Title>
              <Accordion.Content>{user?.namaIbu}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Pekerjaan Ibu</Accordion.Title>
              <Accordion.Content>{user?.pekerjaanIbu}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Pendidikan Ibu</Accordion.Title>
              <Accordion.Content>{user?.pendidikanIbu}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Penghasilan Ibu</Accordion.Title>
              <Accordion.Content>{user?.penghasilanIbu}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>No Tlp Ibu</Accordion.Title>
              <Accordion.Content>{user?.noTlpIbu}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Nama Wali</Accordion.Title>
              <Accordion.Content>{user?.namaWali}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Pekerjaan Wali</Accordion.Title>
              <Accordion.Content>{user?.pekerjaanWali}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Pendidikan Wali</Accordion.Title>
              <Accordion.Content>{user?.pendidikanWali}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Penghasilan Wali</Accordion.Title>
              <Accordion.Content>{user?.penghasilanWali}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>No Tlp Wali</Accordion.Title>
              <Accordion.Content>{user?.noTlpWali}</Accordion.Content>
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
