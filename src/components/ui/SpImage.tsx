import { nanoid } from "nanoid";
import React from "react";
import SpMusicNote from "../icons/SpMusicNote";
import Image from "next/image";
const SpImage = ({ images, size='big' }: { images?: { url: string; height: number | null; width: number | null }[], size?:'big'| 'small'}) => {
  if (!images || images.length === 0)
    return <SpMusicNote className={`fill-spotify-gray-200 ${size === 'big' ? 'scale-[2.5]': null}`}/>;

  if (images.length === 1)
    return <Image src={images[0].url} alt="image" fill={true} />;

  return (
    <div className="w-full h-full grid-cols-2 grid-rows-2">
      {images?.map((el) => (
        <Image key={nanoid()} src={el.url} fill={true} alt="image" />
      ))}
    </div>
  );
};

export default SpImage;
