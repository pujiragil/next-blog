import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"

// Fetcher
import fetcher from "../lib/fetcher"
import Loading from "../components/_child/loading"
import Error from "../components/_child/error"

export default function SectionFour() {
  const { data, isLoading, isError } = fetcher('/api/popular')

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
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data[0] && <Post data={data[0]}/>}
            {data[1] && <Post data={data[1]}/>}
            {data[2] && <Post data={data[2]}/>}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {data[3] && <Post data={data[3]}/>}
            {data[4] && <Post data={data[4]}/>}
            {data[2] && <Post data={data[2]}/>}
          </div>
        </div>
      </div>
    </section>
  )
}

function Post({ data }) {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${data.id}`}>
          <a>
            <Image src={data?.img || "/images/img1.jpg"} className="rounded" alt="image" width={300} height={300} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${data.id}`}><a className="text-orange-600 hover:text-orange-800 duration-300">{data?.category || "Business, Travel"}</a></Link>
          <Link href={`/posts/${data.id}`}><a className="text-gray-600 hover:text-gray-800 duration-300"> - {data?.published || "October 3, 2022"}</a></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data.id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600 duration-300">{data?.title || "Your most unhappy customers are your greatest source of learning"}</a></Link>
        </div>
        <Author author={data.author}/>
      </div>
    </div>
  )
}