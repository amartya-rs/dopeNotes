import { Sidebar } from "../../components";
import { useLocation } from "react-router-dom";
import { NoteCard } from "../../components";
import { useNote } from "../../context/note-context";
import axios from "axios";
import { TrashIcon } from "../../assets/icons";
import "../page.css";

const TrashPage = () => {
   const { pathname } = useLocation();
   const { state, dispatch } = useNote();

   //deleting from trash notes
   const deleteFromNotes = async (id) => {
      try {
         const response = await axios.delete(`/api/notes/${id}`, {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         });
         dispatch({
            type: "SAVE_NOTES_FROM_SERVER",
            payload: response.data.notes,
         });
         dispatch({
            type: "REMOVE_TRASH_NOTE",
            payload: state.trashNotes.filter((item) => item._id !== id),
         });
      } catch (error) {
         console.log(error);
      }
   };

   //restoring from trash to notes
   const restoreToNotes = (note) => {
      dispatch({ type: "RESTORE_TO_NOTES", payload: note });
      dispatch({
         type: "REMOVE_TRASH_NOTE",
         payload: state.trashNotes.filter((item) => item._id !== note._id),
      });
   };

   return (
      <div className="page">
         <Sidebar activePage={pathname} />
         <main>
            <h5 className="mt-2">{`Trash Notes - ${state.trashNotes.length}`}</h5>
            <section className="mt-4">
               {state.trashNotes.map((item) => (
                  <NoteCard key={item._id} note={item}>
                     <button
                        onClick={() => restoreToNotes(item)}
                        className="font-semibold restore-button"
                     >
                        Restore
                     </button>
                     <TrashIcon
                        color="black"
                        onClick={() => deleteFromNotes(item._id)}
                     />
                  </NoteCard>
               ))}
            </section>
         </main>
      </div>
   );
};

export { TrashPage };
