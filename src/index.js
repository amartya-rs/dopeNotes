import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./context/note-context";
// Call make Server
makeServer();

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <NoteProvider>
            <App />
         </NoteProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
