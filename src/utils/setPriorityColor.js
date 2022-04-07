export const setPriorityColor = (priority) => {
   if (priority === "high") {
      return "high-priority";
   }
   if (priority === "medium") {
      return "medium-priority";
   }
   if (priority === "low") {
      return "low-priority";
   }
};
