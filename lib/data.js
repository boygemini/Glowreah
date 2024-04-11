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
const featuredList = [
  {
    id: "glowreah-473839",
    name: "Lake beach gown",
    category: "featured",
    description: "lorem impsum says fuck you!!",
    images: ["/bgown.webp"],
  },
  {
    id: "glowreah-883924",
    name: "Fuck boy top",
    category: "featured",
    description: "lorem impsum says fuck you!!",
    images: ["/bgown2.webp"],
  },
  {
    id: "glowreah-489284",
    name: "Lake rounde top",
    category: "featured",
    description: "lorem impsum says fuck you!!",
    images: ["/btop.webp"],
  },
  {
    id: "glowreah-843984",
    name: "Lake beach top",
    category: "featured",
    description: "lorem impsum says fuck you!!",
    images: ["/bskirt.webp"],
  },
  {
    id: "glowreah-347342",
    name: "Lake gown",
    category: "featured",
    description: "lorem impsum says fuck you!!",
    images: ["/bgown2.webp"],
  },
  {
    id: "glowreah-347323",
    name: "Lake beach pant",
    category: "featured",
    description: "lorem impsum says fuck you!!",
    images: ["/bpant2.webp"],
  },
  {
    id: "glowreah-347329",
    name: "Lake beach top",
    category: "featured",
    description: "lorem impsum says fuck you!!",
    images: ["/bgown.webp"],
  },
];

const getCollectionNamesForHumans = (customList) => {
  let ss;
  try {
    ss = JSON.parse(sessionStorage.getItem("db_collections"));
  } catch (error) {}

  const rawCollections = customList || ss || [];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function switchToHumanReadable(key) {
    switch (key) {
      case "tshirts":
        return { name: "T-Shirts", image: "/tshirt.png" };
      case "dressesandjumps":
        return { name: "Dresses and Jumps", image: "/sjump.png" };
      case "blousesandshirts":
        return { name: "Blouses and Shirts", image: "/use1.webp" };
      case "skirts":
        return { name: capitalizeFirstLetter(key), image: "/bskirt.webp" };
      case "tops":
        return { name: capitalizeFirstLetter(key), image: "/btop.webp" };
      case "pants":
        return { name: capitalizeFirstLetter(key), image: "/bpant.webp" };
      case "gowns":
        return { name: capitalizeFirstLetter(key), image: "/bgown.webp" };
      case "featured":
        return { name: capitalizeFirstLetter(key), image: "/use1.webp" };
      case "shorts":
        return { name: capitalizeFirstLetter(key), image: "/sshort.png" };
      case "jeans":
        return { name: capitalizeFirstLetter(key), image: "/use1.webp" };
      case "jackets":
        return { name: capitalizeFirstLetter(key), image: "/jacket.png" };
      case "party":
        return { name: capitalizeFirstLetter(key), image: "/party.webp" };
      case "office":
        return { name: capitalizeFirstLetter(key), image: "/office.webp" };
    }
  }

  let x = rawCollections.map((name) => switchToHumanReadable(name));

  return x;
};

// try {
//   getCollectionNamesForHumans();
// } catch (error) {}

export {
  pantsList,
  skirtsList,
  topsList,
  gownsList,
  featuredList,
  getCollectionNamesForHumans,
};
