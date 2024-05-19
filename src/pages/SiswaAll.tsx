import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { CommentT, InputsV2 } from "../types/Inputs";
import { Modal } from "flowbite-react";
import { motion } from "framer-motion";
import { timeAgo } from "../libs/service";

function SiswaAll() {
  const [users, setUsers] = useState<InputsV2[]>();
  const [comments, setComments] = useState<CommentT[]>();
  const [modalComment, setModalComment] = useState(false);
  useEffect(() => {
    const database: InputsV2[] = JSON.parse(
      localStorage.getItem("data") || "[]"
    );
    setUsers(database);
  }, []);
  function seeKomentar(id: number | string) {
    const commentData: CommentT[] = JSON.parse(
      localStorage.getItem("comment") || "[]"
    );
    const filteredData = commentData.filter((item) => item.id === id);
    setComments(filteredData);
    setModalComment(true);
  }
  return (
    <>
      <Navbar back="/" />
      <section className="mt-20 px-4">
        <h1 className="mb-5 font-bold text-2xl">Seluruh Siswa</h1>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Nama Siswa
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Kelas
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Agama
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Kelamin
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  No Tlp Siswa
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Nama Ayah
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  No Tlp Ayah
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Nama Ibu
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  No Tlp Ibu
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Komentar
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {users &&
                users.map((user, idx) => (
                  <tr key={idx}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {user.NamaSiswa}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.KelasSiswa}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.AgamaSiswa}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.KelaminSiswa}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.noTlpSiswa}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.NamaAyah}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.noTlpAyah}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.NamaIbu}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.noTlpIbu}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <button
                        type="button"
                        className="bg-blue-600 p-2 rounded-lg text-white"
                        onClick={() => seeKomentar(user.id)}
                      >
                        Lihat
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
      <Modal show={modalComment} onClose={() => setModalComment(false)}>
        <Modal.Header>Komentar</Modal.Header>
        <Modal.Body className="flex flex-col gap-3">
          {comments &&
            comments.map((comment, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 120, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 120, opacity: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.2 }}
                className="bg-gray-600 p-2 w-full rounded text-white border-2 border-gray-400 shadow-lg"
              >
                <div className="flex justify-between items-center">
                  <h1 className="pb-2 font-semibold">Komentar {idx + 1}</h1>
                  <p className="text-xs text-gray-200">
                    {timeAgo(comment.time)}
                  </p>
                </div>
                <p
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: comment.comment }}
                ></p>
              </motion.div>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-lg active:bg-blue-600 active:scale-105 transition duration-300"
            onClick={() => setModalComment(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SiswaAll;
