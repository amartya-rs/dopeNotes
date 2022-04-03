import { NoteCard, Sidebar } from "../../components/index";
import { useNote } from "../../context/note-context";
import { TagIcon, TrashIcon, ArchiveIcon } from "../../assets/icons";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../page.css";

const LabelPage = () => {
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
         <main>
            <section className="tag-section">
               {[
                  ...new Set(
                     state.allNotes.reduce((acc, i) => acc.concat(i.tags), [])
                  ),
               ].map((tag, index) => (
                  <section key={index}>
                     <div className="tag-section-heading">
                        <TagIcon />
                        <h5 className="font-medium">{tag}</h5>
                     </div>
                     {state.allNotes
                        .filter((item) => item.tags.includes(tag))
                        .map((item) => (
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
               ))}
            </section>
         </main>
      </div>
   );
};
export { LabelPage };
