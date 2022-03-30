import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/index";
import { TopNav, Footer } from "./components";

const App = () => {
   return (
      <div className="App">
         <TopNav />
         <Routes>
            <Route path="/" element={<LandingPage />} />
         </Routes>
         <Footer />
      </div>
   );
};

export { App };
