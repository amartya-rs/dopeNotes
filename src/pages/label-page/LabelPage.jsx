import { NoteCard, Sidebar } from "../../components/index";
import { useNote } from "../../context/note-context";
import { TagIcon, TrashIcon, ArchiveIcon } from "../../assets/icons";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { allTagsArray } from "../../utils/allTagsArray";
import { FilterBar } from "../../components/index";
import { notesToDisplay } from "../../utils/filters";
import { useEffect } from "react";
import "../page.css";

const LabelPage = () => {
   const { pathname } = useLocation();
   const { state, dispatch } = useNote();

   useEffect(() => {
      dispatch({ type: "FILTER_BY_TAG", payload: "" });
   }, []);

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
            <div className="filter-bar-wrapper">
               <FilterBar />
            </div>
            <section className="tag-section">
               {allTagsArray(state).map((tag, index) =>
                  notesToDisplay(state).findIndex((e) =>
                     e.tags.includes(tag)
                  ) !== -1 ? (
                     <section key={index}>
                        <div className="tag-section-heading mb-2">
                           <TagIcon />
                           <h5 className="font-medium">{tag}</h5>
                        </div>
                        {notesToDisplay(state)
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
                  ) : (
                     ""
                  )
               )}
            </section>
         </main>
      </div>
   );
};
export { LabelPage };
