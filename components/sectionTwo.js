import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"

export default function SectionTwo() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  )
}

function Post() {
  return (
    <div className="item">
      <div className="image">
        <Link href="/">
          <a>
            <Image src={"/images/img1.jpg"} className="rounded" alt="image" width={500} height={350} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"}><a className="text-orange-600 hover:text-orange-800 duration-300">Business, Travel</a></Link>
          <Link href={"/"}><a className="text-gray-600 hover:text-gray-800 duration-300"> - October 3, 2022</a></Link>
        </div>
        <div className="title">
          <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600 duration-300">Your most unhappy customers are your greatest source of learning</a></Link>
        </div>
        <p className="text-gray-500 py-3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem ipsum decided to leave for the far World od Grammar</p>
        <Author />
      </div>
    </div>
  )
}