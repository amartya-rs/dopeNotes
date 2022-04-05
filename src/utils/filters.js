export const notesToDisplay = (state) => {
   return state.filterByTag !== ""
      ? state.allNotes.filter((item) => item.tags.includes(state.filterByTag))
      : state.allNotes;
};
