import Image, { StaticImageData } from "next/image";
import React from "react";

// images gotten from api call will be injected
// Texts gotten from api call will be injected in
// This card is for songs, plalist but not for artists

type Props = {
  imgSrc:StaticImageData
  ImgAlt:string;
}

const SongCard = ({imgSrc, ImgAlt}:Props) => {
  return (
    <>
    <figure className="min-w-[5rem] max-w-[7rem] sm:min-w-none sm:max-w-none spotify-song-card  bg-spotify-black-600 rounded-md space-y-3 sm:p-4 sm:w-full transition hover:bg-spotify-black-400 cursor-pointer relative group/sp-song-card">
      <div className="relative card-cover w-full aspect-square bg-white">
        <Image src={imgSrc} fill={true} alt={ImgAlt}/>
      </div>

      <figcaption className="card-details">
        <h5 className="font-medium text-white text-normal">Peaceful Chicken</h5>
        <p className="text-[0.8rem] font-medium text-spotify-gray-200">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </figcaption>

      <div className="spotify-song-card__play-button hidden bg-spotify-green-100 w-5 aspect-square rounded-full absolute top-[60%] right-0 transition group/sp-song-card-hover:flex">
      </div>
    </figure>
      {/* <Mobile /> */}
    </>
  );
};

// const Mobile = () => {
//   return (
//     <figure className="block sm:hidden spotify-song-card min-w-[5rem] max-w-[7rem] aspect-[4/5] rounded-md space-y-3">
//       <div className="card-cover w-full aspect-square bg-white"></div>

//       <figcaption className="card-details">
//         <h5 className="font-medium text-white text-[0.9rem]">Peaceful Chicken</h5>
//         <p className="text-[0.7rem] font-medium text-spotify-gray-200">
//           Lorem ipsum dolor sit amet consectetur
//         </p>
//       </figcaption>
//     </figure>
//   );
// };
export default SongCard;



/**
 * -------Create SVG
 * 
 * 
 * ---LIBRARY--OPEN
 * 
 * 
 * --------NOTE-SVG
 * 
 * 
 * -----HOME SVG
 * 
 * 
 * 
 * ----SEARCH SVG NORMAL
 * 
 * 
 * SEARCH SVG ACTIVE
 * 
 * 
 * 
 * ---COLLAPSED LIBRARY
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * NEW COLORS
 * PLAYLIST__SONGS-COMPONENT  BG-COLOR---#121212
 * 
 * 
 * 
 * PLAYLISTCOVER TRANSPARENT #08070a
 * 
 * 
 * CONTEXT MENU BG COLOR #282828
 * 
 * CIBTEXT MENU HOVER BG COLOR #3e3e3e
 * SONG MENU NORMAL BG COLOR #181818
 * 
 * SONG CARD HOVER #282828
 * #121212
 * h
 */