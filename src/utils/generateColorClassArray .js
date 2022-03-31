const generateColorClassArray = (noOfColor) => {
   const ColorClassArray = [];
   for (let i = 0; i < noOfColor; i++) {
      ColorClassArray.push(`color-${i}`);
   }
   return ColorClassArray;
};

export { generateColorClassArray };
