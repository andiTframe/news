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
  if (id === 2) category = "world";
  if (id === 3) category = "politics";
  if (id === 4) category = "business";
  if (id === 5) category = "tech";
  if (id === 6) category = "health";
  if (id === 7) category = "sports";
  if (id === 8) category = "style";
  if (id === 9) category = "magazine";
  if (id === 10) category = "food";
  if (id === 12) category = "trending";
  return category;
};

const turnCategoryIntoId = (category) => {
  let id;
  if (category === "world") id = 2;
  if (category === "politics") id = 3;
  if (category === "business") id = 4;
  if (category === "tech") id = 5;
  if (category === "health") id = 6;
  if (category === "sports") id = 7;
  if (category === "style") id = 8;
  if (category === "magazine") id = 9;
  if (category === "food") id = 10;
  if (category === "trending") id = 12;

  return id;
};

export { mostViewSort, turnIdIntoCategory, turnCategoryIntoId };
