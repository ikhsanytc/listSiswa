import feather from "feather-icons";

const Home = () => {
  return (
    <>
      <nav className="bg-white border fixed top-0 w-full p-3 shadow">
        <h1>List Siswa</h1>
      </nav>
      <section className="mt-20 flex flex-col gap-4 px-4">
        <h1 className="font-bold text-lg">Halo!</h1>
        <div className="bg-slate-300 w-full p-3 rounded-lg flex justify-between active:bg-slate-400">
          <div className="flex gap-2">
            <div
              dangerouslySetInnerHTML={{ __html: feather.icons.user.toSvg() }}
            ></div>
            <p>ikhsan</p>
          </div>
          <div className="flex gap-2">
            <div
              dangerouslySetInnerHTML={{ __html: feather.icons.edit.toSvg() }}
              className="cursor-pointer"
            ></div>
            <div
              dangerouslySetInnerHTML={{ __html: feather.icons.delete.toSvg() }}
              className="cursor-pointer"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
