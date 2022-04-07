import { useNote } from "../../context/note-context";
import "./priority-input.css";

const PriorityInput = () => {
   const { dispatch } = useNote();

   const priority = ["low", "medium", "high"];

   return (
      <div className="priority-wrapper">
         {priority.map((e, index) => (
            <button
               key={`${e}-${index}`}
               value={e}
               onClick={(e) =>
                  dispatch({
                     type: "SET_PRIORITY",
                     payload: e.target.value,
                  })
               }
            >
               {e}
            </button>
         ))}
      </div>
   );
};

export { PriorityInput };
