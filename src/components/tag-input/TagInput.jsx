import { useNote } from "../../context/note-context";
import "./tag-input.css";

const TagInput = () => {
   const { state, dispatch } = useNote();

   //adding a new tag into the tags array
   const createTag = () => {
      if (state.tag !== "") {
         dispatch({ type: "SET_TAGS", payload: state.tag });
         dispatch({ type: "SET_TAG_INPUT", payload: "" });
      }
   };

   return (
      <div className="tag-input">
         <input
            onChange={(e) =>
               dispatch({ type: "SET_TAG_INPUT", payload: e.target.value })
            }
            type="text"
            value={state.tag}
         />
         <div className="display-tag">
            <button className="p-sm" onClick={createTag}>
               create tag
            </button>
            <span>{state.tag}</span>
         </div>
      </div>
   );
};

export { TagInput };
