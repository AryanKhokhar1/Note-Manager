export default function Note({ note, onDelete }) {
  const formateddate = new Date(note.created_at).toLocaleDateString();
  return (
    <div className="border rounded border-gray-400 border-opacity-40 w-[70em] h-auto mt-5 mb-5 pt-4 pb-4 flex justify-center">
      <div className="w-[40%]">
        <div className="note-title flex">
          <h2 className="font-medium">Title:&nbsp;</h2>
          <h2>{note.title}</h2>
        </div>
        <div className="note-context flex">
            <h2 className="font-medium">Context:&nbsp;</h2>
          <p>{note.context}</p>
        </div>
        <div className="formateddate flex">
            <h2 className="font-medium">Created date:&nbsp;</h2>
          <p>{formateddate}</p>
        </div>
        <div className="w-full flex justify-center">

        <button
          className="bg-red-600 pt-1 pb-1 pl-3 pr-3 mt-4 rounded text-white"
          onClick={() => onDelete(note.id)}
          >
          delete
        </button>
            </div>
      </div>
    </div>
  );
}
