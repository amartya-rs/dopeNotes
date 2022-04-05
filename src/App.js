import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
   HomePage,
   ArchivePage,
   TrashPage,
   LandingPage,
   LabelPage,
   Page404,
} from "./pages/index";
import { TopNav, Footer } from "./components";

const App = () => {
   return (
      <div className="App">
         <TopNav />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landingpage" element={<LandingPage />} />
            <Route path="/labels" element={<LabelPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/trash" element={<TrashPage />} />
            <Route path="*" element={<Page404 />} />
         </Routes>
         <Footer />
      </div>
   );
};

export { App };
