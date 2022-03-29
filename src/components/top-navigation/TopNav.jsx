import { UserIcon, LogoutIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import "./top-nav.css";

const TopNav = () => {
   return (
      <>
         <nav className="main-nav">
            <Link to="/">
               <h5 className="brand">dopeNote</h5>
            </Link>
         </nav>
      </>
   );
};

export { TopNav };
