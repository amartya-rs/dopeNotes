import "./note-card.css";

const NoteCard = ({ note, children }) => {
   return (
      <div className={`note-card ${note.color}`}>
         <p className="note-title font-semibold">{note.title}</p>
         <p className="p-lg note-body">{note.body}</p>
         <ul className="tag-container">
            {note.tags.length !== 0
               ? note.tags
                    .filter((e) => e !== "no tag")
                    .map((e, index) => <li key={index}>{e}</li>)
               : ""}
         </ul>
         <div className="note-card-footer">{children}</div>
      </div>
   );
};

export { NoteCard };
