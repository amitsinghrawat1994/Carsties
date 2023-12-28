import Listings from "./auctions/Listings";

export default function Home() {
  return (
    <div>
      {/* text-3xl  */}
      <h3 className='font-semibold'>
        <Listings />
      </h3>
    </div>
  )
}
