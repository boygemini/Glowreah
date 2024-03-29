import Localbase from "localbase";

let db = new Localbase("glowreah_db");

const Store = {
  Tops: db.collection("Tops"),
  Skirts: db.collection("Skirts"),
  Pants: db.collection("Pants"),
  Gowns: db.collection("Gowns"),
};

const FeaturedCollection = db.collection("Featured");

const Users = db.collection("Users");

const allCollections = Object.keys(Store);

export { Users, Store, allCollections, FeaturedCollection };
