import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useForm, SubmitHandler } from "react-hook-form";
import Inputs from "../types/Inputs";
const Add = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.table({ data });
    const databaseJson = localStorage.getItem("data");
    let database = [];
    if (databaseJson) {
      database = JSON.parse(databaseJson);
    }
    database.push(data);
    localStorage.setItem("data", JSON.stringify(database));
    nav("/");
  };
  return (
    <>
      <Navbar back="/" />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20 px-4">
        <div className="">
          <h1 className="text-xl font-bold underline underline-offset-4">
            Identitas Peserta Didik
          </h1>
        </div>
        <section id="identity" className="mt-5 flex flex-col gap-5">
          <label
            htmlFor="CalonPesertaDidik"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="CalonPesertaDidik"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="CalonPesertaDidik"
              required
              maxLength={255}
              {...register("CalonPesertaDidik")}
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Calon Peserta Didik
            </span>
          </label>
          <label
            htmlFor="tempatTglLahir"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="date"
              id="tempatTglLahir"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="tempatTglLahir"
              required
              {...register("tempatTglLahir")}
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Tempat Tanggal Lahir
            </span>
          </label>
          <label
            htmlFor="jenisKelamin"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <select
              id="jenisKelamin"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              required
              {...register("jenisKelamin")}
            >
              <option value="no" defaultChecked>
                Pilih kelamin
              </option>
              <option value="laki-laki">laki laki</option>
              <option value="perempuan">wanita</option>
            </select>
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Jenis Kelamin
            </span>
          </label>
          <label
            htmlFor="agama"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <select
              id="agama"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              required
              {...register("agama")}
            >
              <option value="no" defaultChecked>
                Pilih agama
              </option>
              <option value="Islam">Islam</option>
              <option value="Kristen">Kristen</option>
              <option value="Budha">Budha</option>
              <option value="Lainnya">Lainnya</option>
            </select>
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Agama
            </span>
          </label>
          <label
            htmlFor="asalSekolah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="asalSekolah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="asalSekolah"
              required
              maxLength={355}
              {...register("asalSekolah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Asal Sekolah
            </span>
          </label>
          <label
            htmlFor="npsn"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="npsn"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="npsn"
              required
              maxLength={255}
              {...register("npsn")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              NPSN
            </span>
          </label>
          <label
            htmlFor="nisn"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="nisn"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="nisn"
              required
              maxLength={255}
              {...register("nisn")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              NISN
            </span>
          </label>
          <label
            htmlFor="noSeriIjazah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="noSeriIjazah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="noSeriIjazah"
              maxLength={255}
              required
              {...register("noSeriIjazah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Seri Ijazah
            </span>
          </label>
          <label
            htmlFor="nik"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="nik"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="nik"
              maxLength={355}
              required
              {...register("nik")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              NIK
            </span>
          </label>

          <h2 className="pl-2 font-semibold underline underline-offset-4">
            Alamat
          </h2>
          <label
            htmlFor="alamat"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="alamat"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="alamat"
              required
              maxLength={500}
              {...register("alamat")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Alamat
            </span>
          </label>
          <label
            htmlFor="kodePos"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="kodePos"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="kodePos"
              required
              maxLength={255}
              {...register("kodePos")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Kode Pos
            </span>
          </label>
          <label
            htmlFor="rt"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="rt"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="rt"
              required
              maxLength={255}
              {...register("rt")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              RT
            </span>
          </label>
          <label
            htmlFor="rw"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="rw"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="rw"
              required
              maxLength={255}
              {...register("rw")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              RW
            </span>
          </label>
          <label
            htmlFor="kelurahan"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="kelurahan"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="kelurahan"
              required
              maxLength={255}
              {...register("kelurahan")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Kelurahan
            </span>
          </label>
          <label
            htmlFor="kecamatan"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="kecamatan"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="kecamatan"
              required
              maxLength={255}
              {...register("kecamatan")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Kecamatan
            </span>
          </label>
          <label
            htmlFor="kota"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="kota"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="kota"
              required
              maxLength={255}
              {...register("kota")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Kota
            </span>
          </label>
          <hr className="border-[3px] rounded-full " />
          <label
            htmlFor="noTlp"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="noTlp"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="noTlp"
              required
              maxLength={255}
              {...register("noTlp")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Tlp
            </span>
          </label>
          <label
            htmlFor="alatTransportasi"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="alatTransportasi"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="alatTransportasi"
              required
              maxLength={255}
              {...register("alatTransportasi")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Alat Transportasi
            </span>
          </label>
          <label
            htmlFor="email"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="email"
              id="email"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="email"
              required
              maxLength={355}
              {...register("email")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Email
            </span>
          </label>
          <label
            htmlFor="penerimaKps"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="penerimaKps"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="penerimaKps"
              required
              maxLength={255}
              {...register("penerimaKps")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Penerima Kps
            </span>
          </label>
          <label
            htmlFor="noKps"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="noKps"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="noKps"
              required
              maxLength={255}
              {...register("noKps")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Kps
            </span>
          </label>
          <label
            htmlFor="tinggiBadan"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="tinggiBadan"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="tinggiBadan"
              required
              maxLength={255}
              {...register("tinggiBadan")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Tinggi Badan
            </span>
          </label>
          <label
            htmlFor="beratBedan"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="beratBedan"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="beratBedan"
              required
              maxLength={255}
              {...register("beratBedan")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Berat Badan
            </span>
          </label>
          <label
            htmlFor="jarakTempuh"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="jarakTempuh"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="jarakTempuh"
              maxLength={255}
              {...register("jarakTempuh")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Jarak Tempuh Tinggal Ke Sekolah
            </span>
          </label>
          <label
            htmlFor="waktuTempuh"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="waktuTempuh"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="waktuTempuh"
              maxLength={255}
              {...register("waktuTempuh")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Waktu Tempuh Tinggal Ke Sekolah
            </span>
          </label>
          <h2 className="pl-2 font-semibold underline underline-offset-4">
            Prestasi
          </h2>
          <label
            htmlFor="jenisPrestasi"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="jenisPrestasi"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="jenisPrestasi"
              maxLength={255}
              {...register("jenisPrestasi")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Jenis Prestasi
            </span>
          </label>
          <label
            htmlFor="tingkatPres"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="tingkatPres"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="tingkatPres"
              maxLength={255}
              {...register("tingkatPres")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Tingkat
            </span>
          </label>
          <label
            htmlFor="tahunPres"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="tahunPres"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="tahunPres"
              maxLength={255}
              {...register("tahunPres")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Tahun
            </span>
          </label>
          <hr className="border-[3px]" />
          <h2 className="pl-2 font-semibold underline underline-offset-4">
            Beasiswa
          </h2>
          <label
            htmlFor="jenisBeasiswa"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="jenisBeasiswa"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="jenisBeasiswa"
              maxLength={255}
              {...register("jenisBeasiswa")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Jenis Beasiswa
            </span>
          </label>
          <label
            htmlFor="sumberBea"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="sumberBea"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="sumberBea"
              maxLength={255}
              {...register("sumberBea")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Sumber
            </span>
          </label>
          <label
            htmlFor="tahunBea"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="tahunBea"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="tahunBea"
              maxLength={255}
              {...register("tahunBea")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Tahun
            </span>
          </label>
          <hr className="border-[3px]" />
        </section>
        <div className="mt-5">
          <h1 className="text-xl font-bold underline underline-offset-4">
            Data Ayah Kandung
          </h1>
        </div>
        <section id="ayah" className="mt-5 flex flex-col gap-4">
          <label
            htmlFor="namaAyah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="namaAyah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="namaAyah"
              required
              maxLength={255}
              {...register("namaAyah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Nama Ayah
            </span>
          </label>
          <label
            htmlFor="pekerjaanAyah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="pekerjaanAyah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="pekerjaanAyah"
              maxLength={255}
              {...register("pekerjaanAyah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Pekerjaan
            </span>
          </label>
          <label
            htmlFor="pendidikanAyah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="pendidikanAyah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="pendidikanAyah"
              required
              maxLength={255}
              {...register("pendidikanAyah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Pendidikan
            </span>
          </label>
          <label
            htmlFor="penghasilanAyah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="penghasilanAyah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="penghasilanAyah"
              maxLength={255}
              {...register("penghasilanAyah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Penghasilan Bulanan
            </span>
          </label>
          <label
            htmlFor="noTlpAyah"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="noTlpAyah"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="noTlpAyah"
              required
              maxLength={255}
              {...register("noTlpAyah")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Tlp/Hp
            </span>
          </label>
        </section>
        <div className=" mt-5">
          <h1 className="text-xl font-bold underline underline-offset-4">
            Data Ibu Kandung
          </h1>
        </div>
        <section id="ibu" className="mt-5 flex flex-col gap-4">
          <label
            htmlFor="namaIbu"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="namaIbu"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="namaIbu"
              required
              maxLength={255}
              {...register("namaIbu")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Nama Ibu
            </span>
          </label>
          <label
            htmlFor="pekerjaanIbu"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="pekerjaanIbu"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="pekerjaanIbu"
              maxLength={255}
              {...register("pekerjaanIbu")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Pekerjaan
            </span>
          </label>
          <label
            htmlFor="pendidikanIbu"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="pendidikanIbu"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="pendidikanIbu"
              required
              maxLength={255}
              {...register("pendidikanIbu")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Pendidikan
            </span>
          </label>
          <label
            htmlFor="penghasilanIbu"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="penghasilanIbu"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="penghasilanIbu"
              maxLength={255}
              {...register("penghasilanIbu")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Penghasilan bulanan
            </span>
          </label>
          <label
            htmlFor="noTlpIbu"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="noTlpIbu"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="noTlpIbu"
              required
              maxLength={255}
              {...register("noTlpIbu")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Tlp Ibu
            </span>
          </label>
        </section>
        <div className=" mt-5">
          <h1 className="text-xl font-bold underline underline-offset-4">
            Data Wali
          </h1>
        </div>
        <section id="wali" className="mt-5 flex flex-col gap-4">
          <label
            htmlFor="namaWali"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="namaWali"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="namaWali"
              required
              maxLength={255}
              {...register("namaWali")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Nama Wali
            </span>
          </label>
          <label
            htmlFor="pekerjaanWali"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="pekerjaanWali"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="pekerjaanWali"
              maxLength={255}
              {...register("pekerjaanWali")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Pekerjaan
            </span>
          </label>
          <label
            htmlFor="pendidikanWali"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="pendidikanWali"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="pendidikanWali"
              required
              maxLength={255}
              {...register("pendidikanWali")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Pendidikan
            </span>
          </label>
          <label
            htmlFor="penghasilanWali"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="text"
              id="penghasilanWali"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="penghasilanWali"
              maxLength={255}
              {...register("penghasilanWali")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Penghasilan Bulanan
            </span>
          </label>
          <label
            htmlFor="noTlpWali"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2"
          >
            <input
              type="number"
              id="noTlpWali"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="noTlpWali"
              required
              maxLength={255}
              {...register("noTlpWali")}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              No Tlp Wali
            </span>
          </label>
        </section>
        <div className="flex gap-2">
          <button
            type="submit"
            className="mt-5 bg-blue-500 p-3 rounded-lg text-white active:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => nav("/")}
            className="mt-5 border-2 border-blue-500 p-3 rounded-lg text-blue-500 active:border-blue-600"
          >
            Back
          </button>
        </div>
      </form>
      <div className="p-5"></div>
    </>
  );
};
export default Add;
