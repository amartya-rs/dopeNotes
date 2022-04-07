import React from "react";
import { useNote } from "../../context/note-context";
import { CrossIcon, PaletteIcon, PlusIcon } from "../../assets/icons";
import "./create-note-card.css";
import { ColorPalette, TagInput } from "../../components/index";

const CreateNoteCard = () => {
   const { state, dispatch, addNote } = useNote();

   //removing a tag from the tags array
   const removeTag = (tag) => {
      if (state.note.tags.length !== 0) {
         const index = state.note.tags.findIndex((e) => e === tag);
         state.note.tags.splice(index, 1);
         dispatch({ type: "SET_TAG_INPUT", payload: "" });
         return state.note.tags;
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
         <ul className="tag-container">
            {state.note.tags.length !== 0
               ? state.note.tags.map((e, index) => (
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
               Add Tag
               <TagInput />
            </div>
            <div className="color-picker">
               <PaletteIcon className="colour-pallet" />
               <ColorPalette />
            </div>
            <PlusIcon onClick={addNote} />
         </div>
      </div>
   );
};

export { CreateNoteCard };
