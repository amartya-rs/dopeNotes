import {
   Sidebar,
   NoteCard,
   CreateNoteCard,
   FilterBar,
   ColorPalette,
   TagInput,
   PriorityInput,
} from "../../components/index";
import { CrossIcon, PaletteIcon, PlusIcon } from "../../assets/icons";
import { useNote } from "../../context/note-context";
import { useLocation } from "react-router-dom";
import { ArchiveIcon, TrashIcon } from "../../assets/icons";
import { notesToDisplay } from "../../utils/filters";
import { useEffect } from "react/";
import "../page.css";

const HomePage = () => {
   const { pathname } = useLocation();
   const { state, dispatch, moveToArchive, updateNote } = useNote();

   //resetting filter on page load
   useEffect(() => {
      dispatch({ type: "RESET_FILTERS", payload: "" });
      // eslint-disable-next-line
   }, []);

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
            <div className="filter-bar-wrapper">
               <button
                  className="button primary"
                  onClick={() => dispatch({ type: "TOGGLE_CARD_VISIBILITY" })}
               >
                  {state.isVisible ? "CLOSE" : "CREATE NEW NOTE"}
               </button>
               <FilterBar />
            </div>
            <CreateNoteCard />
            <section className="mt-4">
               {notesToDisplay(state).map((item) => (
                  <NoteCard key={item._id} note={item}>
                     <button
                        onClick={() => {
                           dispatch({ type: "EDIT_NOTE", payload: item });
                           dispatch({ type: "TOGGLE_EDIT" });
                        }}
                        className="font-semibold restore-button"
                     >
                        Edit
                     </button>

                     <ArchiveIcon
                        color="black"
                        onClick={
                           state.doEdit ? "" : () => moveToArchive(item._id)
                        }
                     />
                     <TrashIcon
                        color="black"
                        onClick={state.doEdit ? "" : () => moveToTrash(item)}
                     />
                  </NoteCard>
               ))}
            </section>
         </main>
      </div>
   );
};

export { HomePage };
