import Image from "next/image"
import Link from "next/link"

export default function Author({ width, height, author }) {
  return (
    <div className="author flex py-5">
      <Image src={author?.img || '/images/author/author1.jpg'} className="rounded-full object-cover" width={width || 60} height={height || 60} />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}><a className="text-md font-bold text-gray-800 hover:text-gray-600 duration-300">{author?.name || "John Doe"}</a></Link>
        <span className="text-sm text-gray-500">{author?.desiqnation || "CEO and Founder"}</span>
      </div>
    </div>
  )
}