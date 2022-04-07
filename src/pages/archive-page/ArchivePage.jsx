import { NoteCard, Sidebar } from "../../components";
import { useLocation } from "react-router-dom";
import { useNote } from "../../context/note-context";
import { TrashIcon } from "../../assets/icons";
import "../page.css";

const ArchivePage = () => {
   const { pathname } = useLocation();
   const { state, restoreNote, deleteFromArchive } = useNote();

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
                        onClick={() => deleteFromArchive(item._id)}
                     />
                  </NoteCard>
               ))}
            </section>
         </main>
      </div>
   );
};

export { ArchivePage };
