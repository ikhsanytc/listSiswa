import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { CommentT, InputsV2 } from "../types/Inputs";

function Debug() {
  const [users, setUsers] = useState<InputsV2[]>();
  const [comments, setComments] = useState<CommentT[]>();
  useEffect(() => {
    const database: InputsV2[] = JSON.parse(
      localStorage.getItem("data") || "[]"
    );
    const commentData: CommentT[] = JSON.parse(
      localStorage.getItem("comment") || "[]"
    );
    setUsers(database);
    setComments(commentData);
    setInterval(() => {
      const database: InputsV2[] = JSON.parse(
        localStorage.getItem("data") || "[]"
      );
      const commentData: CommentT[] = JSON.parse(
        localStorage.getItem("comment") || "[]"
      );
      setUsers(database);
      setComments(commentData);
      console.log("updated");
    }, 5000);
  }, []);
  return (
    <>
      <Navbar back="/" />
      <section className="mt-20 px-4">
        <h1 className="font-bold text-2xl mb-3">Users</h1>
        {users &&
          users.map((user, idx) => (
            <div key={idx} className="mb-5">
              <h1>{idx}</h1>
              <h1>{user.NamaSiswa}</h1>
              <h1>{user.KelasSiswa}</h1>
              <h1>{user.AgamaSiswa}</h1>
              <h1>{user.KelaminSiswa}</h1>
              <h1>{user.noTlpSiswa}</h1>
              <h1>{user.NamaAyah}</h1>
              <h1>{user.noTlpAyah}</h1>
              <h1>{user.NamaIbu}</h1>
              <h1>{user.noTlpIbu}</h1>
            </div>
          ))}
        <h1 className="font-bold text-2xl mb-3">Comments</h1>
        {comments &&
          comments.map((comment, idx) => (
            <div key={idx} className="mb-5">
              <h1>{idx}</h1>
              <h1>{comment.id}</h1>
              <h1>{comment.idComment}</h1>
              <h1>{comment.comment}</h1>
              <h1>{comment.name}</h1>
              <h1>{comment.time}</h1>
            </div>
          ))}
      </section>
    </>
  );
}

export default Debug;
