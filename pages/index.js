import Head from "next/head"
import Format from "../layouts/format"

// Components
import SectionOne from "../components/sectionOne"


export default function Home() {
  return (
    <Format>
      <Head>
        <title>Next Blog</title>
      </Head>

      <SectionOne />
    </Format>
  )
}
