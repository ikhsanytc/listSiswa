import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CommentT, InputsV2 } from "../types/Inputs";
import img from "../assets/nophoto.png";
import { Accordion } from "flowbite-react";
import feather from "feather-icons";
import { timeAgo } from "../libs/service";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const [user, setUser] = useState<InputsV2>();
  const [comments, setComments] = useState<CommentT[] | null>(null);

  useEffect(() => {
    const database: InputsV2[] = JSON.parse(
      localStorage.getItem("data") || "[]"
    );
    const commentData: CommentT[] = JSON.parse(
      localStorage.getItem("comment") || "[]"
    );
    const userComments = commentData.filter((comment) => comment.id === id);
    const userData = database.find((user) => user.id === id);

    if (userData) {
      setUser(userData);
      setComments(userComments.length ? userComments : null);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const commentData: CommentT[] = JSON.parse(
      localStorage.getItem("comment") || "[]"
    );
    if (textareaRef.current && textareaRef.current.value && user) {
      const newComment: CommentT = {
        id: user.id,
        comment: textareaRef.current.value.replace(/\n/g, "<br>"),
        name: user.NamaSiswa,
        time: new Date().toISOString(),
      };

      commentData.push(newComment);
      localStorage.setItem("comment", JSON.stringify(commentData));
      const updatedComments = commentData.filter((item) => item.id === id);
      setComments(updatedComments);
      textareaRef.current.value = "";
    }
  };

  const handleDeleteAllComments = () => {
    const updatedComments = (
      JSON.parse(localStorage.getItem("comment") || "[]") as CommentT[]
    ).filter((comment) => comment.id !== id);
    localStorage.setItem("comment", JSON.stringify(updatedComments));
    setComments(null);
  };

  return (
    <>
      <Navbar back="/" />
      <motion.section
        className="mt-20 bg-gradient-to-b from-transparent to-black min-h-screen px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full w-44 p-1">
            <img
              src={img}
              loading="lazy"
              alt="photo profile"
              className="rounded-full w-44"
            />
          </div>
          <h1 className="text-center text-3xl font-semibold">
            {user?.NamaSiswa}
          </h1>
        </div>

        <div className="pt-10"></div>
        <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2 p-5 mx-auto">
          <h2 className="text-center text-2xl font-medium">Informasi</h2>
          <hr className="border-[3px] rounded-full border-gray-300 mt-2" />

          <Accordion className="pt-4">
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                Nama Siswa
              </Accordion.Title>
              <Accordion.Content>{user?.NamaSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                Jenis Kelamin
              </Accordion.Title>
              <Accordion.Content>{user?.KelaminSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">Kelas</Accordion.Title>
              <Accordion.Content>{user?.KelasSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">Agama</Accordion.Title>
              <Accordion.Content>{user?.AgamaSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                No Tlp Siswa
              </Accordion.Title>
              <Accordion.Content>+62 {user?.noTlpSiswa}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">Nama Ayah</Accordion.Title>
              <Accordion.Content>{user?.NamaAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                No Tlp Ayah
              </Accordion.Title>
              <Accordion.Content>+62 {user?.noTlpAyah}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">Nama Ibu</Accordion.Title>
              <Accordion.Content>{user?.NamaIbu}</Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="font-bold">
                No Tlp Ibu
              </Accordion.Title>
              <Accordion.Content>+62 {user?.noTlpIbu}</Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>

        <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2 p-5 mx-auto mt-5">
          <h2 className="text-center text-2xl font-medium">Komentar</h2>
          <hr className="border-[3px] rounded-full border-gray-300 mt-2" />

          <div className="pt-4 flex flex-col gap-3">
            {comments?.map((comment, idx) => (
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

            {comments && (
              <motion.button
                initial={{ opacity: 0, x: -440 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                type="button"
                onClick={handleDeleteAllComments}
                className="bg-red-600 p-3 text-white rounded-lg"
              >
                Delete all
              </motion.button>
            )}

            <form onSubmit={handleCommentSubmit} className="flex gap-2">
              <textarea
                id="komentar"
                className="w-full rounded border-2 border-gray-400"
                placeholder="Komentar..."
                ref={textareaRef}
              ></textarea>
              <button type="submit" className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.send.toSvg(),
                  }}
                ></div>
              </button>
            </form>
          </div>
        </div>

        <div className="p-10"></div>
      </motion.section>
    </>
  );
};

export default Detail;
