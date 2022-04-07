export const filteredByTag = (state) => {
   return state.filterByTag !== ""
      ? state.allNotes.filter((item) => item.tags.includes(state.filterByTag))
      : state.allNotes;
};

export const notesToDisplay = (state) => {
   return state.filterByPriority
      ? filteredByTag(state).filter(
           (item) => item.priority === state.filterByPriority
        )
      : filteredByTag(state);
};
