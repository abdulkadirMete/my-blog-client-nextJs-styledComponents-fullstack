import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Posts from "../components/posts/Posts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Posts />
      <Footer />
    </>
  );
}
