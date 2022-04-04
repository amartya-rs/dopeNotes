const generateColorClassArray = (noOfColor) => {
   const ColorClassArray = [];
   for (let i = 1; i <= noOfColor; i++) {
      ColorClassArray.push(`color-${i}`);
   }
   return ColorClassArray;
};

export { generateColorClassArray };
