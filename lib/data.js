const pantsList = [
  { "collection-image": "/pants.webp" },

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
];
const skirtsList = [
  { "collection-image": "/skirts.webp" },

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
];
const topsList = [
  { "collection-image": "/tops.webp" },

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
];
const gownsList = [
  { "collection-image": "/gowns.webp" },

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
];
const featuredList = [
  { "collection-image": "/featured.webp" },
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
