import Format from "../../layouts/format"
import Author from "../../components/_child/author"
import Image from "next/image"
import Related from "../../components/_child/related"
import getPost from "../../lib/helper"
import fetcher from "../../lib/fetcher"
import Loading from "../../components/_child/loading"
import Error from "../../components/_child/error"
import { useRouter } from "next/router"
import { SWRConfig } from "swr"

export default function Page({fallback}) {
  const router = useRouter()
  const { postId } = router.query
  const { data, isLoading, isError } = fetcher(`/api/posts/${postId}`)

  if (isLoading) {
    return (
      <div className="item flex items-center justify-center gap-6">
        <h1 className="text-2xl font-bold py-16 text-gray-500">Loading the post...</h1>
        <Loading />
      </div>
    )
  }

  if (isError) return <Error />

  return (
    <SWRConfig value={{fallback}}>
      <Article {...data} />
    </SWRConfig>
  )
}

function Article({ img, title, subtitle, author, category, published, description }) {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author author={author} />
        </div>

        <div className="post py-10">
          <div className="cat py-6 flex gap-2">
            <p className="text-orange-600 hover:text-orange-800 duration-300">{category || "Unknown"}</p>
            <p className="text-gray-600 hover:text-gray-800 duration-300">- {published || "Unknown"}</p>
          </div>
          <h1 className="font-bold text-4xl text-center pb-5">{title || "Your most unhappy customers are your greatest source of learning"}</h1>
          <p className="text-gray-500 text-xl text-center">{subtitle || "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}</p>

          <div className="py-10">
            <Image src={img || "/images/img1.jpg"} width={900} height={600} />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description?.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>

        <Related />
      </section>
    </Format>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.postId)
  return { props: { fallback: { '/api/posts': post } } }
}

export async function getStaticPaths() {
  const posts = await getPost()

  const paths = posts.map(post => {
    return {
      params: {
        postId: post.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}