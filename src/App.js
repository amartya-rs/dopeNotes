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
import {
   TopNav,
   Footer,
   Modal,
   PrivateRoute,
   RestrictedRoute,
} from "./components";

const App = () => {
   return (
      <div className="App">
         <TopNav />
         <Routes>
            {/*restricted routes*/}
            <Route element={<RestrictedRoute />}>
               <Route path="/" element={<LandingPage />} />
            </Route>
            {/*private routes*/}
            <Route element={<PrivateRoute />}>
               <Route path="/home" element={<HomePage />} />
               <Route path="/labels" element={<LabelPage />} />
               <Route path="/archive" element={<ArchivePage />} />
               <Route path="/trash" element={<TrashPage />} />
            </Route>
            <Route path="*" element={<Page404 />} />
         </Routes>
         <Footer />

         <Modal />
      </div>
   );
};

export { App };
