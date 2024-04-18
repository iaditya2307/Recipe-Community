import React from "react";
import MyNav from "../../Components/Navbar/MyNav";
import MyCarousels from "../../Components/Carousel/MyCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../Components/footer/Footer";
import HCard from "../../Components/Cards/HCard";
import Herotitle from "../../Components/Hero Text/Herotitle";

const Home = () => {
  return (
    <>
      <MyNav />
      <Herotitle />
      <MyCarousels />
      <HCard />
      <Footer />
    </>
  );
};

export default Home;