import { cn } from "@/lib/utils";
import Img from "../ui/card-image";
import Button from "@/app/components/ui/Button";

import { ObjectId } from "mongodb";
import { GetStaticProps } from "next";
import getProductsStaticProps from "./../../api/getData";

export type ItemObject = {
  _id: ObjectId;
  name: string;
  category: string;
  description: string;
};

interface Props {
  products: ItemObject[];
}

function HeroChildren({ products }: Props) {
  const featuredCollection = products;
  console.log("fucking result is :", { products });
  return (
    <div className="hero-content w-full">
      <div className="hero-header p-4">
        <h1 className={cn("hero-title text-4xl font-black")}>
          SPRING DEAL IS 30% OFF EVERYTHING
        </h1>
        <p className={cn("text-xl my-4 text-slate-700 font-medium")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, hic?
        </p>
      </div>
      <Button
        className={"featured-shop-button text-2xl font-bold"}
        text={"Let's shop"}
      />

      {/* <div className={cn("slide-row overflow-x-scroll gap-1 flex flex-row")}>
        {featuredCollection.map((featured, key) => {
          let { id, name, description, category, images } = featured;
          return (
            <div className="wk-feat" key={key}>
              <p
                className={cn(
                  "tag text-red-500 font-semibold text-lg z-10 absolute top-4 left-4 p-3"
                )}
              >
                featured
              </p>
              <Img
                customeClassName="feat-img"
                variant="fill-bg"
                src={images ? images[0] : ""}
              />
              <div className="summary ">
                <h1 className={cn("s-title text-black font-bold text-2xl")}>
                  {name}
                </h1>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export const getStaticProps = getProductsStaticProps("featured", "Glowreah");

export default HeroChildren;
