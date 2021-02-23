function mostViewSort(data) {
  let initial = 0;
  let secondFirst = Math.floor(data.length / 2) - 1;
  let results = [];
  data.forEach((item, i) => {
    if (i % 2) {
      secondFirst += 1;
      results.push({ ...data[secondFirst], id: secondFirst + 1 });
    } else {
      initial += 1;
      results.push({ ...data[initial], id: initial });
    }
  });
  return results;
}

const turnIdIntoCategory = (id) => {
  let category;
  if (id === 3) category = "welt";
  if (id === 4) category = "politik";
  if (id === 5) category = "geschäft";
  if (id === 6) category = "technik";
  if (id === 7) category = "gesundheit";
  if (id === 8) category = "sport";
  if (id === 9) category = "stil";
  if (id === 10) category = "zeitschrift";
  if (id === 11) category = "lebensmittel";
  if (id === 12) category = "trend";
  return category;
};

const turnCategoryIntoId = (category) => {
  let id;
  if (category === "welt") id = 3;
  if (category === "politik") id = 4;
  if (category === "geschäft") id = 5;
  if (category === "technik") id = 6;
  if (category === "gesundheit") id = 7;
  if (category === "sport") id = 8;
  if (category === "stil") id = 9;
  if (category === "zeitschrift") id = 10;
  if (category === "lebensmittel") id = 11;
  if (category === "trend") id = 12;

  return id;
};

export { mostViewSort, turnIdIntoCategory, turnCategoryIntoId };
