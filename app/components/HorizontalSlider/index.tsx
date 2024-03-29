import { FeaturedCollection, Store } from "@/lib/initalizeDatabase";
let featuredItems = [
  {
    item_name: "Bikini top",
    description: "just the right top",
    collection: "Tops",
    price: 2000,
    images: ["/use3.webp"],
  },
  {
    item_name: "Wrestlers pant",
    description: "just the right top",
    collection: "Tops",
    price: 2000,
    images: ["/use1.webp"],
  },
  {
    item_name: "Elegance",
    description: "just the right top",
    collection: "Tops",
    price: 2000,
    images: ["/use2.webp"],
  },
];

function HorizontalSlider() {
  Store.Gowns.add({ name: "Jubril" });
  let m = Store.Gowns.get();
  let d;

  const addItemToFeatured = async (item: any) => {
    return await FeaturedCollection.add({ item });
  };

  addItemToFeatured(featuredItems);

  console.log(FeaturedCollection);

  return (
    <button>
      <h1>HorizontalSlider</h1>
    </button>
  );
}

export default HorizontalSlider;
