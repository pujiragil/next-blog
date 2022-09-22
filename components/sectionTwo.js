import Image from "next/image"
import Link from "next/link"
import fetcher from "../lib/fetcher"
import Author from "./_child/author"
import Error from "./_child/error"
import Loading from "./_child/loading"


export default function SectionTwo() {
  const { data, isLoading, isError } = fetcher('/api/posts')

  if (isLoading) {
    return (
      <div className="item flex items-center justify-center gap-6">
        <h1 className="text-2xl font-bold py-16 text-gray-500">Loading the latest post...</h1>
        <Loading />
      </div>
    )
  }

  if(isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data?.map(post => {
          return <Post key={post.id} data={post} />
        })}
      </div>
    </section>
  )
}

function Post({ data }) {
  return (
    <div className="item">
      <div className="image">
        <Link href={`/posts/${data.id}`}>
          <a>
            <Image src={data?.img || "/images/img1.jpg"} className="rounded" alt="image" width={500} height={350} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${data.id}`}><a className="text-orange-600 hover:text-orange-800 duration-300">{data?.category || "Unknown"}</a></Link>
          <Link href={`/posts/${data.id}`}><a className="text-gray-600 hover:text-gray-800 duration-300"> - {data?.published || "Unknown"}</a></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data.id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600 duration-300">{data?.title || "Unknown Title"}</a></Link>
        </div>
        <p className="text-gray-500 py-3">{data?.subtitle || "Unknown Subtitle"}</p>
        <Author author={data.author} />
      </div>
    </div>
  )
}