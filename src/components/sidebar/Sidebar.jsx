import "./sidebar.css";
import {
   TrashIcon,
   TagIcon,
   HomeIcon,
   ArchiveIcon,
   LogoutIcon,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
   const navigate = useNavigate();

   return (
      <aside className="pl-8 mt-2">
         <ul className="side-nav font-medium pl-1">
            <li
               className={props.activePage === "/home" ? "active" : undefined}
               onClick={() => navigate("/home")}
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
            <li>
               <button
                  className="button button-icons primary round-edge"
                  onClick={props.logout}
               >
                  <LogoutIcon />
                  LOGOUT
               </button>
            </li>
         </ul>
      </aside>
   );
};

export { Sidebar };
