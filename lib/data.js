const generateRandomDescription = () => {
  const loremIpsums = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];
  const minSentences = 2;
  const maxSentences = 5;
  const numSentences =
    Math.floor(Math.random() * (maxSentences - minSentences + 1)) +
    minSentences;
  let description = "";
  for (let i = 0; i < numSentences; i++) {
    const randomIndex = Math.floor(Math.random() * loremIpsums.length);
    description += loremIpsums[randomIndex];
    if (i < numSentences - 1) {
      description += " ";
    }
  }
  return description;
};

// Generate clothing items for each category
const generateClothingItems = (category, count) => {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push({
      id: `itemid_${i}`,
      name: "Crossover male top",
      category: category,
      description: generateRandomDescription(),
      images: ["/use3.webp"],
      // Add more properties as needed
    });
  }
  return items;
};

// Generate 20 clothing items for each category
const pantsList = generateClothingItems("pants", 20);
const skirtsList = generateClothingItems("skirts", 20);
const topsList = generateClothingItems("tops", 20);
const gownsList = generateClothingItems("gowns", 20);

// Combine all categories to create a single array of items
const allItems = [...pantsList, ...skirtsList, ...topsList, ...gownsList];

// Shuffle the array to randomize the items
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffle the array of all items
const shuffledItems = shuffleArray(allItems);

// Take the first 20 items from the shuffled array to create featured items
const featuredList = shuffledItems.slice(0, 20);

export { pantsList, skirtsList, topsList, gownsList, featuredList };
