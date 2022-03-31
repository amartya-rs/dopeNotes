import { Sidebar, NoteCard, CreateNoteCard } from "../../components/index";
import { useNote } from "../../context/note-context";
import { useLocation } from "react-router-dom";
import "../page.css";

const HomePage = () => {
   const { pathname } = useLocation();
   const { state, dispatch } = useNote();

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
                  <NoteCard key={item._id} note={item} />
               ))}
            </section>
         </main>
      </div>
   );
};

export { HomePage };
