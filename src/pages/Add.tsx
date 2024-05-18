import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputsV2 } from "../types/Inputs";
import { motion } from "framer-motion";
import { generateRandomToken } from "../libs/service";
import { FormField } from "../components/FormField";
import { SelectField } from "../components/SelectField";
import { SectionTitle } from "../components/SectionTitle";

const Add = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<InputsV2>();

  const onSubmit: SubmitHandler<InputsV2> = (data) => {
    const databaseJson = localStorage.getItem("data");
    const database: InputsV2[] = databaseJson ? JSON.parse(databaseJson) : [];
    database.push(data);
    localStorage.setItem("data", JSON.stringify(database));
    navigate("/");
  };

  return (
    <>
      <Navbar back="/" />
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-20 px-4 flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <input
          type="hidden"
          {...register("id")}
          value={generateRandomToken(5)}
        />

        <SectionTitle title="Identitas Peserta Didik" />
        <FormField
          id="NamaSiswa"
          label="Nama Siswa"
          type="text"
          register={register}
          required
        />
        <SelectField
          id="KelasSiswa"
          label="Kelas Siswa"
          options={[
            { value: "7A", label: "7A" },
            { value: "7B", label: "7B" },
            { value: "7C", label: "7C" },
            { value: "7D", label: "7D" },
            { value: "7E", label: "7E" },
            { value: "8A", label: "8A" },
            { value: "8B", label: "8B" },
            { value: "8C", label: "8C" },
            { value: "8D", label: "8D" },
            { value: "8E", label: "8E" },
            { value: "9A", label: "9A" },
            { value: "9B", label: "9B" },
            { value: "9C", label: "9C" },
            { value: "9D", label: "9D" },
            { value: "9E", label: "9E" },
          ]}
          register={register}
          required
        />
        <SelectField
          id="KelaminSiswa"
          label="Kelamin Siswa"
          options={[
            { value: "Laki-Laki", label: "Laki-Laki" },
            { value: "Wanita", label: "Wanita" },
          ]}
          register={register}
          required
        />
        <SelectField
          id="AgamaSiswa"
          label="Agama Siswa"
          options={[
            { value: "Islam", label: "Islam" },
            { value: "Kristen", label: "Kristen" },
            { value: "Buddha", label: "Buddha" },
            { value: "Konghucu", label: "Konghucu" },
            { value: "Hindu", label: "Hindu" },
          ]}
          register={register}
          required
        />
        <FormField
          id="noTlpSiswa"
          label="No Tlp Siswa"
          type="number"
          register={register}
          required
        />

        <SectionTitle title="Data Ayah" />
        <FormField
          id="NamaAyah"
          label="Nama Ayah"
          type="text"
          register={register}
          required
        />
        <FormField
          id="noTlpAyah"
          label="No Tlp Ayah"
          type="number"
          register={register}
          required
        />

        <SectionTitle title="Data Ibu" />
        <FormField
          id="NamaIbu"
          label="Nama Ibu"
          type="text"
          register={register}
          required
        />
        <FormField
          id="noTlpIbu"
          label="No Tlp Ibu"
          type="number"
          register={register}
          required
        />

        <div className="pt-4 pb-5 flex gap-2">
          <button
            type="submit"
            className="p-3 bg-sky-500 text-white rounded-lg"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
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

export default Add;
