import SongCard from "@/components/cards/song-card"
import Link from "next/link"
import dummyImage1 from '@/images/spotify-test-image-1.jfif'

const MusicSection = () => {
  return (
    <section className="home__music-section space-y-4 w-full">
      <div className="flex w-full justify-between items-center">
    <h2 className="text-2xl font-semibold text-white">Focus</h2>

<Link href={'/song'} className="font-bold text-sm text-spotify-gray-200 hover:text-spotify-gray-100">
  Show all
</Link>
      </div>
    <div className="home__card-container">
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </div>
  </section>
  )
}

export default MusicSection