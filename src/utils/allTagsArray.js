export const allTagsArray = (state) => [
   ...new Set(state.allNotes.reduce((acc, i) => acc.concat(i.tags), [])),
];
