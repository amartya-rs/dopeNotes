import { Sidebar, NoteCard, CreateNoteCard } from "../../components/index";
import { useNote } from "../../context/note-context";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ArchiveIcon, TrashIcon } from "../../assets/icons";
import "../page.css";

const HomePage = () => {
   const { pathname } = useLocation();
   const { state, dispatch } = useNote();

   //adding note to archive
   const moveToArchive = async (id) => {
      try {
         const response = await axios.post(
            `/api/notes/archives/${id}`,
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
      const notesUpdated = state.allNotes.filter((e) => e._id !== note._id);
      dispatch({ type: "SAVE_NOTES_FROM_SERVER", payload: notesUpdated });
      dispatch({ type: "ADD_TRASH_NOTE", payload: note });
   };

   return (
      <div className="page">
         <Sidebar activePage={pathname} />
         <main className="mt-2">
            <button
               className="button primary mb-2"
               onClick={() => dispatch({ type: "TOGGLE_CARD_VISIBILITY" })}
            >
               {state.isVisible ? "CLOSE" : "CREATE NEW NOTE"}
            </button>
            <CreateNoteCard />
            <section className="mt-4">
               {state.allNotes.map((item) => (
                  <NoteCard key={item._id} note={item}>
                     <ArchiveIcon
                        color="black"
                        onClick={() => moveToArchive(item._id)}
                     />
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

export { HomePage };
