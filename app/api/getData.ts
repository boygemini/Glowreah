// getProductsStaticProps.jsx

import { GetStaticProps } from "next";
import { MongoClient } from "mongodb";

const getProductsStaticProps = (collectionName: string, dbName: string) => {
  return async function () {
    // Connection URI
    const uri = "mongodb://localhost:27017";

    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
      // Connect the client to the server
      await client.connect();

      // Connect to the specific database
      const db = client.db(dbName);

      // Get the collection
      const collection = db.collection(collectionName);

      // Fetch data from the collection
      const products = await collection.find({}).toArray();

      return {
        props: {
          products,
        },
      };
    } catch (error) {
      console.error("Error:", error);
      return {
        props: {
          error: "Internal Server Error",
        },
      };
    } finally {
      // Close the connection
      await client.close();
    }
  };
};

export default getProductsStaticProps;
