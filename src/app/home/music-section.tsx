import SongCard from "@/components/cards/song-card"
import Link from "next/link"

const MusicSection = () => {
  return (
    <section className="spotify__music__section space-y-4 w-full">
      <div className="flex w-full justify-between items-center">
    <h2 className="text-2xl font-semibold text-white">Focus</h2>

<Link href={'/song'} className="font-bold text-sm text-spotify-gray-200 hover:text-spotify-gray-100">
  Show all
</Link>
      </div>
    <div className="flex justify-between gap-3">
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </div>
  </section>
  )
}

export default MusicSection