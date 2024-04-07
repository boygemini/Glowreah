import Img from "../ui/card-image";

interface TileProps {
  id: string;
  title: string;
  imgSrc: string;
  imgAlt?: string;
}

export function Tile({ id, title, imgSrc, imgAlt }: TileProps) {
  return (
    <>
      <figure className="tile relative" key={id}>
        <Img
          customeClassName="tile-img"
          variant="fill-bg"
          src={imgSrc}
          alt={imgAlt}
        />
        <div className="text-content absolute bottom-6 left-6 p-4 py-7">
          <h1 className="title font-semibold text-3xl">{title}</h1>
          <p className="discover text-1xl underline underline-offset-8">
            Discover more
          </p>
        </div>
      </figure>
    </>
  );
}
