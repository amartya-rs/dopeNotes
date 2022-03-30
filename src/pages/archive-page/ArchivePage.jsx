import { Sidebar } from "../../components";
import { useLocation } from "react-router-dom";
import "../page.css";

const ArchivePage = () => {
   const { pathname } = useLocation();

   return (
      <div className="page">
         <Sidebar activePage={pathname} />
         <main>
            <h5 className="mt-2">{`Arcived Notes`}</h5>
            <section className="mt-4"></section>
         </main>
      </div>
   );
};

export { ArchivePage };
