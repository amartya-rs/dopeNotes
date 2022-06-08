import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { noteReducer, initialState } from "../reducer/note-reducer";
import { useAuth } from "./auth-context";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
   const { isLoggedIn } = useAuth();

   //fetching all notes from the server
   useEffect(() => {
      if (isLoggedIn) {
         (async () => {
            try {
               const response = await axios.get(`/api/notes`, {
                  headers: {
                     authorization: localStorage.getItem("token"),
                  },
               });
               dispatch({
                  type: "SAVE_NOTES_FROM_SERVER",
                  payload: response.data.notes,
               });
            } catch (error) {
               console.log(error);
            }
         })();
      }
   }, [isLoggedIn]);

   //fetching archived notes from the server
   useEffect(() => {
      if (isLoggedIn) {
         (async () => {
            try {
               const response = await axios.get(`/api/archives`, {
                  headers: {
                     authorization: localStorage.getItem("token"),
                  },
               });
               dispatch({
                  type: "SAVE_ARCHIVED_NOTES_FROM_SERVER",
                  payload: response.data.archives,
               });
            } catch (error) {
               console.log(error);
            }
         })();
      }
   }, [isLoggedIn]);

   //adding a note via API call
   const addNote = async () => {
      if (state.note.title !== "" && state.note.body !== "") {
         try {
            const response = await axios.post(
               `/api/notes`,
               {
                  note: state.note,
               },
               {
                  headers: {
                     authorization: localStorage.getItem("token"),
                  },
               }
            );
            dispatch({
               type: "SAVE_NOTES_FROM_SERVER",
               payload: response.data.notes,
            });
            //setting all the fields to initial state
            dispatch({
               type: "CLEAR_FIELDS",
            });
         } catch (error) {
            console.log(error);
         }
      }
   };

   //adding note to archive
   const moveToArchive = async (id) => {
      try {
         const response = await axios.post(
            `/api/notes/archives/${id}`,
            {},
            {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            }
         );
         dispatch({
            type: "SAVE_NOTES_FROM_SERVER",
            payload: response.data.notes,
         });
         dispatch({
            type: "SAVE_ARCHIVED_NOTES_FROM_SERVER",
            payload: response.data.archives,
         });
      } catch (error) {
         console.log(error);
      }
   };

   //restoring note from archives to notes
   const restoreNote = async (id) => {
      try {
         const response = await axios.post(
            `/api/archives/restore/${id}`,
            {},
            {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            }
         );
         dispatch({
            type: "SAVE_NOTES_FROM_SERVER",
            payload: response.data.notes,
         });
         dispatch({
            type: "SAVE_ARCHIVED_NOTES_FROM_SERVER",
            payload: response.data.archives,
         });
      } catch (error) {
         console.log(error);
      }
   };

   //update a note via API call
   const updateNote = async (id) => {
      if (state.note.title !== "" && state.note.body !== "") {
         try {
            const response = await axios.post(
               `/api/notes/${id}`,
               {
                  note: state.note,
               },
               {
                  headers: {
                     authorization: localStorage.getItem("token"),
                  },
               }
            );
            dispatch({
               type: "SAVE_NOTES_FROM_SERVER",
               payload: response.data.notes,
            });
            //setting all the fields to initial state
            dispatch({
               type: "CLEAR_FIELDS",
            });
         } catch (error) {
            console.log(error);
         }
      }
   };

   //deleting permanently from notes
   const deleteFromNotes = async (id) => {
      try {
         const response = await axios.delete(`/api/notes/${id}`, {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         });
         dispatch({
            type: "SAVE_NOTES_FROM_SERVER",
            payload: response.data.notes,
         });
         dispatch({
            type: "REMOVE_TRASH_NOTE",
            payload: state.trashNotes.filter((item) => item._id !== id),
         });
      } catch (error) {
         console.log(error);
      }
   };

   //deleting permanently from archives
   const deleteFromArchive = async (id) => {
      try {
         const response = await axios.delete(`/api/archives/delete/${id}`, {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         });
         dispatch({
            type: "SAVE_ARCHIVED_NOTES_FROM_SERVER",
            payload: response.data.archives,
         });
      } catch (error) {
         console.log(error);
      }
   };

   const [state, dispatch] = useReducer(noteReducer, initialState);

   return (
      <NoteContext.Provider
         value={{
            state,
            dispatch,
            addNote,
            restoreNote,
            moveToArchive,
            deleteFromNotes,
            deleteFromArchive,
            updateNote,
         }}
      >
         {children}
      </NoteContext.Provider>
   );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
