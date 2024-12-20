import React from "react";
import TopbarSection from "./Components/TopBarSection";
import NavBarSection from "./Components/NavbarSection";
import CarouselSection from "./Components/CarouselSection";
import BookingSection from './Components/BookingSection'
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import PageHeader from "./Components/PageHeader";

const DefaultLayout = () => {
    const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <>
      <TopbarSection/>
      <NavBarSection/>
      {currentUrl && currentUrl==='/' ? <CarouselSection/> : <PageHeader title={currentUrl.slice(1)}/>}
      <BookingSection/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default DefaultLayout;
