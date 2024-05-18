import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputsV2 } from "../types/Inputs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type params = {
  id: string;
};

const Edit = () => {
  const nav = useNavigate();
  const { id } = useParams<params>();
  const [user, setUser] = useState<InputsV2>();
  const { register, handleSubmit, setValue } = useForm<InputsV2>();
  const databaseJson = localStorage.getItem("data");
  const database: InputsV2[] = databaseJson ? JSON.parse(databaseJson) : [];
  const indexToEdit = database.findIndex(
    (item: { id: number | string }) => item.id === id
  );

  useEffect(() => {
    if (indexToEdit !== -1) {
      const userData = database[indexToEdit];
      setUser(userData);
      setValue("NamaSiswa", userData.NamaSiswa);
      setValue("KelaminSiswa", userData.KelaminSiswa);
      setValue("AgamaSiswa", userData.AgamaSiswa);
      setValue("KelasSiswa", userData.KelasSiswa);
      setValue("noTlpSiswa", userData.noTlpSiswa);
      setValue("NamaAyah", userData.NamaAyah);
      setValue("noTlpAyah", userData.noTlpAyah);
      setValue("NamaIbu", userData.NamaIbu);
      setValue("noTlpIbu", userData.noTlpIbu);
      setValue("id", userData.id);
    } else {
      nav("/");
    }
  }, [indexToEdit, database, nav, setValue]);

  const onSubmit: SubmitHandler<InputsV2> = (data) => {
    if (indexToEdit !== -1) {
      database[indexToEdit] = data;
      localStorage.setItem("data", JSON.stringify(database));
      nav("/");
    }
  };

  return (
    <>
      <Navbar back="/" />
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <input type="hidden" id="id" {...register("id")} />
        <h1 className="text-xl font-bold underline underline-offset-4 mb-3">
          Identitas Peserta Didik
        </h1>
        <div className="flex flex-col gap-4 pt-2">
          <label
            htmlFor="NamaSiswa"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="NamaSiswa"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="Nama Siswa"
              required
              maxLength={255}
              {...register("NamaSiswa")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Nama Siswa
            </span>
          </label>
          <label
            htmlFor="KelasSiswa"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <select
              id="KelasSiswa"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              required
              {...register("KelasSiswa")}
            >
              <option value="No" defaultChecked>
                Pilih Kelas
              </option>
              <optgroup label="Kelas 7">
                <option value="7A">7A</option>
                <option value="7B">7B</option>
                <option value="7C">7C</option>
                <option value="7D">7D</option>
                <option value="7E">7E</option>
              </optgroup>
              <optgroup label="Kelas 8">
                <option value="8A">8A</option>
                <option value="8B">8B</option>
                <option value="8C">8C</option>
                <option value="8D">8D</option>
                <option value="8E">8E</option>
              </optgroup>
              <optgroup label="Kelas 9">
                <option value="9A">9A</option>
                <option value="9B">9B</option>
                <option value="9C">9C</option>
                <option value="9D">9D</option>
                <option value="9E">9E</option>
              </optgroup>
            </select>
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Kelas Siswa
            </span>
          </label>
          <label
            htmlFor="KelaminSiswa"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <select
              id="KelaminSiswa"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              required
              {...register("KelaminSiswa")}
            >
              <option value="no" defaultChecked>
                Pilih Kelamin
              </option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Wanita">Wanita</option>
            </select>

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Kelamin Siswa
            </span>
          </label>
          <label
            htmlFor="AgamaSiswa"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <select
              id="AgamaSiswa"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              required
              {...register("AgamaSiswa")}
            >
              <option value="no" defaultChecked>
                Pilih Agama
              </option>
              <option value="Islam">Islam</option>
              <option value="Kristen">Kristen</option>
              <option value="Buddha">Buddha</option>
              <option value="Konghucu">Konghucu</option>
              <option value="Hindu">Hindu</option>
            </select>

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Agama Siswa
            </span>
          </label>
          <label
            htmlFor="noTlpSiswa"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="number"
              id="noTlpSiswa"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="No Tlp Siswa"
              required
              maxLength={255}
              {...register("noTlpSiswa")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Tlp Siswa
            </span>
          </label>
        </div>
        <h1 className="text-xl font-bold underline underline-offset-4 pt-2 mb-3">
          Data Ayah
        </h1>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="NamaAyah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="NamaAyah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="Nama Ayah"
              required
              maxLength={255}
              {...register("NamaAyah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Nama Ayah
            </span>
          </label>
          <label
            htmlFor="noTlpAyah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="number"
              id="noTlpAyah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="No Tlp Ayah"
              required
              maxLength={255}
              {...register("noTlpAyah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Tlp Ayah
            </span>
          </label>
        </div>
        <h1 className="text-xl font-bold underline underline-offset-4 pt-2 mb-3">
          Data Ibu
        </h1>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="NamaIbu"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="NamaIbu"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="Nama Ibu"
              required
              maxLength={255}
              {...register("NamaIbu")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Nama Ibu
            </span>
          </label>
          <label
            htmlFor="noTlpIbu"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="number"
              id="noTlpIbu"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="No Tlp Ibu"
              required
              maxLength={255}
              {...register("noTlpIbu")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Tlp Ibu
            </span>
          </label>
        </div>
        <div className="pt-4 pb-5 flex gap-2">
          <button
            type="submit"
            className="p-3 bg-sky-500 text-white rounded-lg"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => nav("/")}
            className="p-3 bg-transparent border-sky-500 border rounded-lg text-sky-500"
          >
            Kembali
          </button>
        </div>
      </motion.form>
      <div className="p-5"></div>
    </>
  );
};

export default Edit;
