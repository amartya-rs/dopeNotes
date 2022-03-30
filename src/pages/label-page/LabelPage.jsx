import "../page.css";
import { Sidebar } from "../../components/index";
import { useLocation } from "react-router-dom";

const LabelPage = () => {
   const { pathname } = useLocation();

   return (
      <div className="page">
         <Sidebar activePage={pathname} />
         <main>
            <h5 className="mt-2">All Notes</h5>
         </main>
      </div>
   );
};
export { LabelPage };
