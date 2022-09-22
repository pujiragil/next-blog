import Image from "next/image"
import Link from "next/link"
import fetcher from "../../lib/fetcher"
import Author from "./author"
import Error from "./error"
import Loading from "./loading"

export default function Related() {
  const { data, isLoading, isError } = fetcher("/api/posts")

  if (isLoading) {
    return (
      <div className="item flex items-center justify-center gap-6">
        <h1 className="text-2xl font-bold py-16 text-gray-500">Loading the trending post...</h1>
        <Loading />
      </div>
    )
  }

  if (isError) return <Error />

  return (
    <section className="pt-20 ">
      <h1 className="font-bold text-3xl py-10">Related</h1>

      <div className="flex flex-col gap-10">
        {data?.map(post => (
          <Post data={post} key={post.id} />
        ))}
      </div>
    </section>
  )
}

function Post({data}) {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${data?.id}`}>
          <a>
            <Image src={data?.img || "/images/img1.jpg"} className="rounded" alt="image" width={300} height={230} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${data?.id}`}><a className="text-orange-600 hover:text-orange-800 duration-300">{data?.category || "Business, Travel"}</a></Link>
          <Link href={`/posts/${data?.id}`}><a className="text-gray-600 hover:text-gray-800 duration-300"> - {data?.published || "October 3, 2022"}</a></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data?.id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600 duration-300">{data?.title || "Your most unhappy customers are your greatest source of learning"}</a></Link>
        </div>
        <Author author={data.author} width={40} height={40} />
      </div>
    </div>
  )
}