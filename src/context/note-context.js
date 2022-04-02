import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";

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

   //reducer function
   const noteReducer = (state, { type, payload }) => {
      switch (type) {
         case "TOGGLE_CARD_VISIBILITY":
            return {
               ...state,
               isVisible: !state.isVisible,
            };
         case "SET_NOTE_BODY":
            return {
               ...state,
               note: { ...state.note, body: payload },
            };
         case "SET_NOTE_TITLE":
            return {
               ...state,
               note: { ...state.note, title: payload },
            };
         case "SET_NOTE_BG":
            return {
               ...state,
               note: { ...state.note, color: payload },
            };
         case "SET_TAG_INPUT":
            return {
               ...state,
               tag: payload,
            };
         case "SET_TAGS":
            return {
               ...state,
               note: { ...state.note, tags: [...state.note.tags, payload] },
            };
         case "SAVE_NOTES_FROM_SERVER":
            return {
               ...state,
               allNotes: payload.filter((item) =>
                  state.trashNotes.findIndex((e) => e._id === item._id) === -1
                     ? true
                     : false
               ),
            };
         case "SAVE_ARCHIVED_NOTES_FROM_SERVER":
            return {
               ...state,
               archivedNotes: payload,
            };
         case "ADD_TRASH_NOTE":
            return {
               ...state,
               trashNotes: [...state.trashNotes, payload],
            };
         case "REMOVE_TRASH_NOTE":
            return {
               ...state,
               trashNotes: payload,
            };
         case "RESTORE_TO_NOTES":
            return {
               ...state,
               allNotes: [...state.allNotes, payload],
            };
         case "SET_ACTIVE_PAGE":
            return {
               ...state,
               activePage: payload,
            };
         case "CLEAR_FIELDS":
            return {
               ...state,
               note: {
                  ...state.note,
                  title: "",
                  body: "",
                  tags: [],
                  color: "default-bg",
               },
               tag: "",
            };
         default:
            return state;
      }
   };

   const initialState = {
      isVisible: false,
      note: { title: "", body: "", color: "default-bg", tags: [] },
      tag: "",
      allNotes: [],
      archivedNotes: [],
      trashNotes: [],
      activePage: "",
   };

   const [state, dispatch] = useReducer(noteReducer, initialState);

   return (
      <NoteContext.Provider value={{ state, dispatch }}>
         {children}
      </NoteContext.Provider>
   );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
