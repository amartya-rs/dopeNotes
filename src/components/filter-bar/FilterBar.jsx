import { allTagsArray } from "../../utils/allTagsArray";
import { useNote } from "../../context/note-context";
import "./filter-bar.css";

const FilterBar = () => {
   const { state, dispatch } = useNote();

   return (
      <div className="filter-bar">
         <label htmlFor="filter" className="font-medium">
            Filter by tag
         </label>
         <select
            onChange={(e) =>
               dispatch({
                  type: "FILTER_BY_TAG",
                  payload: e.target.value,
               })
            }
            id="filter"
            value={state.filterByTag}
         >
            <option value="">select a tag</option>
            {allTagsArray(state).map((item, index) => (
               <option key={index} value={item}>
                  {item}
               </option>
            ))}
         </select>
      </div>
   );
};

export { FilterBar };
