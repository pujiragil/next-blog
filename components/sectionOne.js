import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"

// Fetcher
import fetcher from "../lib/fetcher"
import Loading from "../components/_child/loading"
import Error  from "../components/_child/error"

// Swiper
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function SectionOne() {
  const { data, isLoading, isError } = fetcher('/api/trending')

  SwiperCore.use([Autoplay])

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right"
  }

  if (isLoading) {
    return (
      <div className="item flex items-center justify-center gap-6">
        <h1 className="text-2xl font-bold py-16 text-gray-500">Loading the trending post...</h1>
        <Loading />
      </div>
    )
  }

  if(isError) return <Error />

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000
          }}
        >
          {data?.map(post => (
            <SwiperSlide key={post.id}>
              <Slide data={post}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function Slide({ data }) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="image">
        <Link href={`/posts/${data.id}`}>
          <a>
            <Image src={data?.img || "/images/img1.jpg"} alt="image" width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${data.id}`}><a className="text-orange-600 hover:text-orange-800 duration-300">{data?.category || "Business, Travel"}</a></Link>
          <Link href={`/posts/${data.id}`}><a className="text-gray-600 hover:text-gray-800 duration-300">- {data?.published || "October 3, 2022"}</a></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data.id}`}><a className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600 duration-300">{data?.title || "Your most unhappy customers are your greatest source of learning"}</a></Link>
        </div>
        <p className="text-gray-500 py-3">{data?.subtitle || "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem ipsum decided to leave for the far World od Grammar"}</p>
        <Author author={data.author} />
      </div>
    </div>
  )
}