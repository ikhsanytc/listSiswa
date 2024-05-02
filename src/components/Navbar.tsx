import { FC } from "react";
import feather from "feather-icons";
import { useNavigate } from "react-router-dom";

interface props {
  back?: string;
}
const Navbar: FC<props> = (props) => {
  const nav = useNavigate();
  return (
    <>
      <nav className="bg-white border fixed top-0 w-full p-3 shadow z-40">
        <div className="flex gap-2 items-center">
          {props?.back && (
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons["arrow-left"].toSvg(),
              }}
              className="cursor-pointer"
              onClick={() => nav(`${props?.back}`)}
            ></div>
          )}
          <h1 className="font-bold text-xl">Daftar Siswa</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
