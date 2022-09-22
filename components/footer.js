import Link from "next/link";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import Subscription from "./_child/subscription";

export default function Footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50" style={bg}>
      <Subscription />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href="/">
              <a><ImFacebook color="#888" /></a>
            </Link>
            <Link href="/">
              <a><ImTwitter color="#888" /></a>
            </Link>
            <Link href="/">
              <a><ImInstagram color="#888" /></a>
            </Link>
          </div>

          <p className="py-5 text-gray-400">Copyright &#169;2022 All rights reserved | Next Blog</p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}