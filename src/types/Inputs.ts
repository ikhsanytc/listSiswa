type Inputs = {
  CalonPesertaDidik: string;
  tempatTglLahir: string;
  jenisKelamin: string;
  agama: string;
  asalSekolah: string;
  npsn: number;
  nisn: number;
  noSeriIjazah: number;
  nik: number;
  alamat: string;
  kodePos: number;
  rt: number;
  rw: number;
  kelurahan: string;
  kecamatan: string;
  kota: string;
  noTlp: number;
  alatTransportasi: string;
  email: string;
  penerimaKps: string;
  noKps: number;
  tinggiBadan: number;
  beratBedan: number;
  jarakTempuh: string;
  waktuTempuh: string;
  jenisPrestasi: string;
  tingkatPres: string;
  tahunPres: number;
  jenisBeasiswa: string;
  sumberBea: string;
  tahunBea: number;
  namaAyah: string;
  pekerjaanAyah: string;
  pendidikanAyah: string;
  penghasilanAyah: string;
  noTlpAyah: number;
  namaIbu: string;
  pekerjaanIbu: string;
  pendidikanIbu: string;
  penghasilanIbu: string;
  noTlpIbu: number;
  namaWali: string;
  pekerjaanWali: string;
  pendidikanWali: string;
  penghasilanWali: string;
  noTlpWali: number;
};

interface InputsV2 {
  id: number | string;
  NamaSiswa: string;
  KelasSiswa: string;
  AgamaSiswa: string;
  KelaminSiswa: string;
  noTlpSiswa: number;
  NamaAyah: string;
  noTlpAyah: number;
  NamaIbu: string;
  noTlpIbu: number;
}

interface CommentT {
  id: number | string;
  name: string;
  comment: string;
  time: string;
}

export type { Inputs, InputsV2, CommentT };
export interface NavbarProps {
  back?: string;
}
