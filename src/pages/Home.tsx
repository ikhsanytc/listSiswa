import feather from "feather-icons";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
  const deleteUser = () => {
    if (confirm("Kamu yakin?")) {
      alert("ok");
    }
  };
  return (
    <>
      <Navbar />
      <section className="mt-20 flex flex-col gap-4 px-4">
        <h1 className="font-bold text-lg">Halo!</h1>
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            className="bg-slate-300 w-full p-3 rounded-lg flex justify-between active:bg-slate-400 items-center"
            key={idx}
          >
            <div className="flex gap-2 items-center">
              <div
                dangerouslySetInnerHTML={{ __html: feather.icons.user.toSvg() }}
              ></div>
              <div className="flex flex-col ">
                <p className="font-semibold">ikhsan</p>
                <small>12332110219219</small>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                dangerouslySetInnerHTML={{ __html: feather.icons.edit.toSvg() }}
                className="cursor-pointer"
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: feather.icons.delete.toSvg(),
                }}
                className="cursor-pointer"
                onClick={deleteUser}
              ></div>
            </div>
          </div>
        ))}
      </section>
      <div
        className="fixed bottom-5 right-5 bg-blue-500 p-5 rounded-xl cursor-pointer text-white"
        dangerouslySetInnerHTML={{ __html: feather.icons.plus.toSvg() }}
        onClick={() => nav("/addUser")}
      ></div>
    </>
  );
};

export default Home;
