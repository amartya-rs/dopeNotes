import { useNote } from "../../context/note-context";
import { ColorButton } from "./ColorButton";
import { generateColorClassArray } from "../../utils/generateColorClassArray ";
import "./color-palette.css";

const ColorPalette = () => {
   const { dispatch } = useNote();

   const pickColor = (color) => {
      dispatch({ type: "SET_NOTE_BG", payload: color });
   };

   return (
      <div className="color-palette">
         {generateColorClassArray(8).map((e, index) => (
            <ColorButton
               key={index}
               onClick={(e) => pickColor(e.target.value)}
               value={e}
               className={e}
            />
         ))}
      </div>
   );
};

export { ColorPalette };
