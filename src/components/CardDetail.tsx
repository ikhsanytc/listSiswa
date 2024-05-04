import React from "react";

type Props = {
  title: string;
  value: string | number | undefined;
};
const CardDetail: React.FC<Props> = ({ title, value }) => {
  return (
    <>
      <div className="bg-gray-400 py-2 px-3 rounded-full flex gap-4">
        <p className="font-semibold">{title} :</p>
        {title === "Tempat Tanggal Lahir" && (
          <button className="bg-blue-500 p-1 text-white">Click</button>
        )}
        {title !== "Tempat Tanggal Lahir" && (
          <p className="font-semibold">{value}</p>
        )}
      </div>
    </>
  );
};

export default CardDetail;
