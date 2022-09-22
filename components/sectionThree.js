import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

// Fetcher
import fetcher from "../lib/fetcher"
import Author from "./_child/author"
import Error from "./_child/error"
import Loading from "./_child/loading"

export default function SectionThree() {
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
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/* Swiper */}
      <Swiper
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30}
        }}>
        {data?.map(post => (
          <SwiperSlide key={post.id}>
            <Post data={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

function Post({ data }) {
  return (
    <div className="grid">
      <div className="image">
        <Link href={`/posts/${data.id}`}>
          <a>
            <Image src={data?.img || "/images/img1.jpg"} alt="image" width={600} height={400} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${data.id}`}><a className="text-orange-600 hover:text-orange-800 duration-300">{data?.category || "Business, Travel"}</a></Link>
          <Link href={`/posts/${data.id}`}><a className="text-gray-600 hover:text-gray-800 duration-300"> - {data?.published || "October 3, 2022"}</a></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data.id}`}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 duration-300">{data?.title || "Your most unhappy customers are your greatest source of learning"}</a></Link>
        </div>
        <p className="text-gray-500 py-3">{data?.subtitle || "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem ipsum decided to leave for the far World od Grammar"}</p>
        <Author author={data.author} />
      </div>
    </div>
  )
}