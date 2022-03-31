import "./sidebar.css";
import { TrashIcon, TagIcon, HomeIcon, ArchiveIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
   const navigate = useNavigate();

   return (
      <aside className="pl-8 my-2">
         <ul className="side-nav font-medium pl-1">
            <li
               className={props.activePage === "/" ? "active" : undefined}
               onClick={() => navigate("/")}
            >
               <HomeIcon />
               <span>Home</span>
            </li>
            <li
               onClick={() => navigate("/labels")}
               className={props.activePage === "/labels" ? "active" : undefined}
            >
               <TagIcon />
               <span>Labels</span>
            </li>
            <li
               className={
                  props.activePage === "/archive" ? "active" : undefined
               }
               onClick={() => navigate("/archive")}
            >
               <ArchiveIcon />
               <span>Archive</span>
            </li>
            <li
               onClick={() => navigate("/trash")}
               className={props.activePage === "/trash" ? "active" : undefined}
            >
               <TrashIcon />
               <span>Trash</span>
            </li>
         </ul>
      </aside>
   );
};

export { Sidebar };
