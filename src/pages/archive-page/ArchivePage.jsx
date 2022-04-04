import { NoteCard, Sidebar } from "../../components";
import { useLocation } from "react-router-dom";
import { useNote } from "../../context/note-context";
import axios from "axios";
import { TrashIcon } from "../../assets/icons";
import "../page.css";

const ArchivePage = () => {
   const { pathname } = useLocation();
   const { state, dispatch } = useNote();

   //restoring note from archives to notes
   const restoreNote = async (id) => {
      try {
         const response = await axios.post(
            `/api/archives/restore/${id}`,
            {},
            {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            }
         );
         dispatch({
            type: "SAVE_NOTES_FROM_SERVER",
            payload: response.data.notes,
         });
         dispatch({
            type: "SAVE_ARCHIVED_NOTES_FROM_SERVER",
            payload: response.data.archives,
         });
      } catch (error) {
         console.log(error);
      }
   };

   //moving note to trash
   const moveToTrash = (note) => {
      const notesUpdated = state.archivedNotes.filter(
         (e) => e._id !== note._id
      );
      dispatch({
         type: "SAVE_ARCHIVED_NOTES_FROM_SERVER",
         payload: notesUpdated,
      });
      dispatch({ type: "ADD_TRASH_NOTE", payload: note });
   };

   return (
      <div className="page">
         <Sidebar activePage={pathname} />
         <main>
            <h5 className="mt-2">{`Arcived Notes - ${state.archivedNotes.length}`}</h5>
            <section className="mt-4">
               {state.archivedNotes.map((item) => (
                  <NoteCard key={item._id} note={item}>
                     <button
                        onClick={() => restoreNote(item._id)}
                        className="font-semibold restore-button"
                     >
                        Restore
                     </button>
                     <TrashIcon
                        color="black"
                        onClick={() => moveToTrash(item)}
                     />
                  </NoteCard>
               ))}
            </section>
         </main>
      </div>
   );
};

export { ArchivePage };
