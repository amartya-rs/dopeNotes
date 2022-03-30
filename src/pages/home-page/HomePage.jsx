import { Sidebar } from "../../components/index";
import { useLocation } from "react-router-dom";
import "../page.css";

const HomePage = () => {
   const { pathname } = useLocation();

   return (
      <div className="page">
         <Sidebar activePage={pathname} />
         <main className="mt-2">
            <h5>Home</h5>
         </main>
      </div>
   );
};

export { HomePage };
