import React from "react";
import { useNote } from "../../context/note-context";
import { CrossIcon, PaletteIcon, PlusIcon } from "../../assets/icons";
import "./create-note-card.css";
import { ColorPalette, TagInput, PriorityInput } from "../../components/index";
import { setPriorityColor } from "../../utils/setPriorityColor";

const CreateNoteCard = () => {
   const { state, dispatch, addNote, updateNote } = useNote();

   //removing a tag from the tags array
   const removeTag = (tag) => {
      if (state.note.tags.length !== 0) {
         const index = state.note.tags.findIndex((e) => e === tag);
         const copyOfTags = [...state.note.tags];
         copyOfTags.splice(index, 1);
         dispatch({ type: "UPDATE_TAGS", payload: copyOfTags });
      }
      return state.note.tags;
   };

   return (
      <div
         className={`create-note-card ${
            state.isVisible ? "" : "hide-element"
         } ${state.note.color}`}
      >
         <input
            onChange={(e) =>
               dispatch({ type: "SET_NOTE_TITLE", payload: e.target.value })
            }
            className="create-note-title"
            placeholder="Note title..."
            value={state.note.title}
         />
         <textarea
            onChange={(e) =>
               dispatch({ type: "SET_NOTE_BODY", payload: e.target.value })
            }
            className="create-note-body p"
            placeholder="Type your note here..."
            value={state.note.body}
         />
         <span className={`priority ${setPriorityColor(state.note.priority)}`}>
            {state.note.priority}
         </span>
         <ul className="tag-container">
            {state.note.tags.length !== 0
               ? state.note.tags
                    .filter((e) => e !== "no tag")
                    .map((e, index) => (
                       <li key={index}>
                          {e}
                          <CrossIcon
                             width="17"
                             height="17"
                             onClick={() => removeTag(e)}
                          />
                       </li>
                    ))
               : ""}
         </ul>
         <div className="create-note-card-footer">
            <div className="add-tag">
               {state.doEdit ? "Update Tag" : "Add Tag"}
               <TagInput />
            </div>
            <div className="add-priority">
               {state.doEdit ? "Update Priority" : "Add Priority"}
               <PriorityInput />
            </div>
            <div className="color-picker">
               <PaletteIcon className="colour-pallet" />
               <ColorPalette />
            </div>
            {state.doEdit ? (
               <button
                  className="font-semibold restore-button"
                  onClick={() => updateNote(state.note.id)}
               >
                  Update note
               </button>
            ) : (
               <PlusIcon onClick={addNote} />
            )}
         </div>
      </div>
   );
};

export { CreateNoteCard };
