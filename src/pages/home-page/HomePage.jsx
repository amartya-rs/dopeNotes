import {
   Sidebar,
   NoteCard,
   CreateNoteCard,
   FilterBar,
} from "../../components/index";
import { useNote } from "../../context/note-context";
import { useNavigate, useLocation } from "react-router-dom";
import { ArchiveIcon, TrashIcon } from "../../assets/icons";
import { notesToDisplay } from "../../utils/filters";
import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import "../page.css";

const HomePage = () => {
   const { pathname } = useLocation();
   const { state, dispatch, moveToArchive } = useNote();
   const { authDispatch } = useAuth();
   const navigate = useNavigate();

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

   //logout handler
   const logoutUser = () => {
      localStorage.removeItem("token");
      authDispatch({ type: "CLEAR_FIELDS" });
      authDispatch({ type: "TOGGLE_LOGIN", payload: false });
      navigate("/");
   };

   return (
      <div className="page">
         <Sidebar activePage={pathname} logout={logoutUser} />
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
