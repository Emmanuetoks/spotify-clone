import React from "react";

// images gotten from api call will be injected
// Texts gotten from api call will be injected in
// This card is for songs, plalist but not for artists
const SongCard = () => {
  return (
    <>
      <Desktop />
      {/* <Mobile /> */}
    </>
  );
};


type Props = {

}

const Desktop = () => {
  return (
    <figure className="min-w-[5rem] max-w-[7rem] spotify-song-card  bg-spotify-black-100 rounded-md space-y-3 sm:p-4 sm:min-w-[8rem] sm:max-w-full">
      <div className="card-cover w-full aspect-square bg-white"></div>

      <figcaption className="card-details">
        <h5 className="font-medium text-white text-normal">Peaceful Chicken</h5>
        <p className="text-[0.8rem] font-medium text-spotify-gray-200">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </figcaption>
    </figure>
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
