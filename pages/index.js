import Head from "next/head"
import Format from "../layouts/format"

// Components
import SectionOne from "../components/sectionOne"
import SectionTwo from "../components/sectionTwo"
import SectionThree from "../components/sectionThree"
import SectionFour from "../components/sectionFour"


export default function Home() {
  return (
    <Format>
      <Head>
        <title>Next Blog</title>
      </Head>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Format>
  )
}
