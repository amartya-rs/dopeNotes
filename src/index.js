import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./context/note-context";
import { AuthProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <NoteProvider>
               <App />
            </NoteProvider>
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
