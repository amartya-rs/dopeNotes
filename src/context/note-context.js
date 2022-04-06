import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { noteReducer, initialState } from "../reducer/note-reducer";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
   //authorization for accessing the private routes
   useEffect(() => {
      (async () => {
         try {
            const response = await axios.post(`/api/auth/signup`, {
               firstName: "Adarsh",
               lastName: "Balika",
               email: "adarshbalika@neog.camp",
               password: "adarshBalika",
            });
            // saving the encodedToken in the localStorage
            localStorage.setItem("token", response.data.encodedToken);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   //fetching all notes from the server
   useEffect(() => {
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
   }, []);

   const [state, dispatch] = useReducer(noteReducer, initialState);

   return (
      <NoteContext.Provider value={{ state, dispatch }}>
         {children}
      </NoteContext.Provider>
   );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
