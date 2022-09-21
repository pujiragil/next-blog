import Footer from "../components/footer"
import Header from "../components/header"

export default function Format({children}) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}