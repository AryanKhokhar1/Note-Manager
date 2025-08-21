import { useState, useEffect } from "react";
import api from "../../api";
import Note from "../Components/Note";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNote();
  }, []);

  const getNote = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };
  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted Successfully!");
        } else {
          alert("Note isn't deleted");
        }
        getNote();
      })
      .catch((error) => alert(error));
  };
  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title, context: content })
      .then((res) => {
        if (res.status === 201) alert("Note is created Successfully!");
        else alert("Failed to make the Note");
        getNote();
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="mainbox h-screen w-screen flex items-center flex-col">
        <h1 className="text-4xl font-bold text-center mt-10 pb-10">
          Welcome to the NoteManager
        </h1>
      <div>
        <h2 className="notes font-medium text-lg text-center">Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
      <div>
        <form
          onSubmit={createNote}
          className="flex flex-col items-center border-opacity-30 border rounded border-gray-500 h-auto w-[35em] pt-10 pb-10 "
          >
            <h2 className="text-lg font-medium pb-5">Create a Note!</h2>
            <div className="title flex flex-col pb-5 w-2/4">

          <label htmlFor="title">Title:</label>
          <input
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded opacity-80
          "
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          />
          </div>
            <div className="context flex flex-col pb-10 w-1/2">

          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded opacity-80
          "
            name="content"
            id="content"
            placeholder="Write the detail about note eg. Civilization only remember the greatest"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            </div>
          <button type="submit" className="bg-blue-600 text-white rounded pt-2 pr-6 pb-2 pl-6">Create</button>
        </form>
      </div>
    </div>
  );
}
export default Home;
