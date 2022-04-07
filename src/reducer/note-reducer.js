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
      case "SET_PRIORITY":
         return {
            ...state,
            note: { ...state.note, priority: payload },
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
      case "FILTER_BY_TAG":
         return {
            ...state,
            filterByTag: payload,
         };
      case "FILTER_BY_PRIORITY":
         return {
            ...state,
            filterByPriority: payload,
         };
      case "SET_ACTIVE_PAGE":
         return {
            ...state,
            activePage: payload,
         };
      case "TOGGLE_EDIT":
         return {
            ...state,
            doEdit: !state.doEdit,
         };
      case "EDIT_NOTE":
         return {
            ...state,
            isVisible: true,
            note: {
               ...state.note,
               id: payload._id,
               title: payload.title,
               body: payload.body,
               tags: payload.tags,
               color: payload.color,
               priority: payload.priority,
            },
         };
      case "RESET_FILTERS":
         return {
            ...state,
            filterByTag: "",
            filterByPriority: "",
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
               priority: "",
            },
            tag: "",
            doEdit: false,
         };
      default:
         return state;
   }
};

const initialState = {
   isVisible: false,
   note: {
      title: "",
      body: "",
      color: "default-bg",
      tags: [],
      priority: "",
   },
   tag: "",
   id: "",
   allNotes: [],
   archivedNotes: [],
   trashNotes: [],
   activePage: "",
   filterByTag: "",
   filterByPriority: "",
};

export { initialState, noteReducer };
