import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SubmitHandler, useForm } from "react-hook-form";
import Inputs from "../types/Inputs";
import { useEffect, useState } from "react";

type params = {
  nik: string;
};
const Edit = () => {
  const nav = useNavigate();
  const { nik } = useParams<params>();
  const [user, setUser] = useState<Inputs>();
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const databaseJson = localStorage.getItem("data");
  const database: Inputs[] = databaseJson ? JSON.parse(databaseJson) : null;
  const indexToEdit = database.findIndex(
    (item: { nik: number | string }) => item.nik == nik
  );
  useEffect(() => {
    // console.log(indexToEdit);
    if (indexToEdit !== -1) {
      setUser(database[indexToEdit]);
    } else {
      nav("/");
    }
  }, []);
  setValue("CalonPesertaDidik", user ? user.CalonPesertaDidik : "");
  setValue("tempatTglLahir", user ? user.tempatTglLahir : "");
  setValue("jenisKelamin", user ? user.jenisKelamin : "");
  setValue("agama", user ? user.agama : "");
  setValue("asalSekolah", user ? user.asalSekolah : "");
  setValue("npsn", user ? user.npsn : 0);
  setValue("nisn", user ? user.nisn : 0);
  setValue("noSeriIjazah", user ? user.noSeriIjazah : 0);
  setValue("nik", user ? user.nik : 0);
  setValue("alamat", user ? user.alamat : "");
  setValue("kodePos", user ? user.kodePos : 0);
  setValue("rt", user ? user.rt : 0);
  setValue("rw", user ? user.rw : 0);
  setValue("kelurahan", user ? user.kelurahan : "");
  setValue("kecamatan", user ? user.kecamatan : "");
  setValue("kota", user ? user.kota : "");
  setValue("noTlp", user ? user.noTlp : 0);
  setValue("alatTransportasi", user ? user.alatTransportasi : "");
  setValue("email", user ? user.email : "");
  setValue("penerimaKps", user ? user.penerimaKps : "");
  setValue("noKps", user ? user.noKps : 0);
  setValue("tinggiBadan", user ? user.tinggiBadan : 0);
  setValue("beratBedan", user ? user.beratBedan : 0);
  setValue("jarakTempuh", user ? user.jarakTempuh : "");
  setValue("waktuTempuh", user ? user.waktuTempuh : "");
  setValue("jenisPrestasi", user ? user.jenisPrestasi : "");
  setValue("tingkatPres", user ? user.tingkatPres : "");
  setValue("tahunPres", user ? user.tahunPres : 0);
  setValue("jenisBeasiswa", user ? user.jenisBeasiswa : "");
  setValue("sumberBea", user ? user.sumberBea : "");
  setValue("tahunBea", user ? user.tahunBea : 0);
  setValue("namaAyah", user ? user.namaAyah : "");
  setValue("pekerjaanAyah", user ? user.pekerjaanAyah : "");
  setValue("pendidikanAyah", user ? user.pendidikanAyah : "");
  setValue("penghasilanAyah", user ? user.penghasilanAyah : "");
  setValue("noTlpAyah", user ? user.noTlpAyah : 0);
  setValue("namaIbu", user ? user.namaIbu : "");
  setValue("pekerjaanIbu", user ? user.pekerjaanIbu : "");
  setValue("pendidikanIbu", user ? user.pendidikanIbu : "");
  setValue("penghasilanIbu", user ? user.penghasilanIbu : "");
  setValue("noTlpIbu", user ? user.noTlpIbu : 0);
  setValue("namaWali", user ? user.namaWali : "");
  setValue("pekerjaanWali", user ? user.pekerjaanWali : "");
  setValue("pendidikanWali", user ? user.pendidikanWali : "");
  setValue("penghasilanWali", user ? user.penghasilanWali : "");
  setValue("noTlpWali", user ? user.noTlpWali : 0);

  // console.log(user);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (indexToEdit !== -1) {
      database[indexToEdit] = data;
      localStorage.setItem("data", JSON.stringify(database));
      nav("/");
    }
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
              defaultValue={user?.CalonPesertaDidik}
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
              defaultValue={user?.tempatTglLahir}
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
              defaultValue={user?.jenisKelamin}
              {...register("jenisKelamin")}
            >
              <option value="no">Pilih kelamin</option>
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
              defaultValue={user?.agama}
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
              defaultValue={user?.asalSekolah}
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
              defaultValue={user?.npsn}
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
              readOnly
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
              placeholder="nisn"
              required
              maxLength={255}
              defaultValue={user?.nisn}
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
              defaultValue={user?.noSeriIjazah}
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
              defaultValue={user?.nik}
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
              defaultValue={user?.alamat}
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
              defaultValue={user?.kodePos}
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
              defaultValue={user?.rt}
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
              defaultValue={user?.rw}
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
              defaultValue={user?.kelurahan}
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
              defaultValue={user?.kecamatan}
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
              defaultValue={user?.kota}
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
              defaultValue={user?.noTlp}
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
              defaultValue={user?.alatTransportasi}
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
              defaultValue={user?.email}
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
              defaultValue={user?.penerimaKps}
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
              defaultValue={user?.noKps}
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
              defaultValue={user?.tinggiBadan}
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
              defaultValue={user?.beratBedan}
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
              defaultValue={user?.jarakTempuh}
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
              defaultValue={user?.waktuTempuh}
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
              defaultValue={user?.jenisPrestasi}
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
              defaultValue={user?.tingkatPres}
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
              defaultValue={user?.tahunPres}
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
              defaultValue={user?.jenisBeasiswa}
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
              defaultValue={user?.sumberBea}
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
              defaultValue={user?.tahunBea}
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
              defaultValue={user?.namaAyah}
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
              defaultValue={user?.pekerjaanAyah}
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
              defaultValue={user?.pendidikanAyah}
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
              defaultValue={user?.penghasilanAyah}
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
              defaultValue={user?.noTlpAyah}
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
              defaultValue={user?.namaIbu}
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
              defaultValue={user?.pekerjaanIbu}
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
              defaultValue={user?.pendidikanIbu}
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
              defaultValue={user?.penghasilanIbu}
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
              defaultValue={user?.noTlpIbu}
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
              defaultValue={user?.namaWali}
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
              defaultValue={user?.pekerjaanWali}
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
              defaultValue={user?.pendidikanWali}
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
              defaultValue={user?.penghasilanWali}
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
              defaultValue={user?.noTlpWali}
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
            className="mt-5 bg-blue-500 px-2 py-3 rounded-lg text-white active:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => nav("/")}
            className="mt-5 border-2 border-blue-500 px-2 py-3 rounded-lg text-blue-500 active:border-blue-600"
          >
            Back
          </button>
        </div>
      </form>
      <div className="p-5"></div>
    </>
  );
};

export default Edit;
