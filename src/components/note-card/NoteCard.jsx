import { ArchiveIcon, TrashIcon } from "../../assets/icons";
import "./note-card.css";

const NoteCard = ({ note }) => {
   return (
      <div className={`note-card ${note.color}`}>
         <p className="note-title font-semibold">{note.title}</p>
         <p className="p-lg note-body">{note.body}</p>
         <ul className="tag-container">
            {note.tags.length !== 0
               ? note.tags.map((e, index) => <li key={index}>{e}</li>)
               : ""}
         </ul>
         <div className="note-card-footer">
            <ArchiveIcon color="black" />
            <TrashIcon color="black" />
         </div>
      </div>
   );
};

export { NoteCard };
