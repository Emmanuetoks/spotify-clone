import SongCard from "@/components/cards/song-card"
import Link from "next/link"
import dummyImage1 from '@/images/spotify--2pac.jpg'
import dummyImagw2 from '@/images/spotify--all-out.jpg'
import dummyImage3 from '@/images/spotify--billie.jpg'
import dummyImage4 from '@/images/spotify--gunna.jpg'
import dummyImage5 from '@/images/spotify--rema.jpg'

const MusicSection = ({sectionName, sectionLink}:{sectionName:string, sectionLink?:string}) => {
  return (
    <section className="home__music-section space-y-4 w-full">
      <div className="flex w-full justify-between items-center">
    <h2 className="text-2xl font-semibold text-white hover:underline cursor-pointer">{sectionName}</h2>

<Link href={`/section${sectionLink}`} className="font-bold text-sm text-spotify-gray-200 hover:underline cursor-pointer">
  Show all
</Link>
      </div>
    <div className="home__card-container">
      <SongCard imgSrc={dummyImage1} ImgAlt="2pac"/>
      <SongCard imgSrc={dummyImagw2} ImgAlt="al"/>
      <SongCard imgSrc={dummyImage3} ImgAlt="d"/>
      <SongCard imgSrc={dummyImage4} ImgAlt="d"/>
      <SongCard imgSrc={dummyImage5} ImgAlt="kdfl"/>
      <SongCard imgSrc={dummyImage1} ImgAlt="sfi"/>
    </div>
  </section>
  )
}

export default MusicSection