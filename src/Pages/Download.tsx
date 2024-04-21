import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import iPhone from "../assets/img/portrait_black.png";
import appStore from "../assets/img/app-store-badge.svg";
import playStore from "../assets/img/google-play-badge.svg";
import { Link } from "react-router-dom";
import Details from "../components/Detail";

const Download = () => {
  return (
    <>
      <Navbar />
      <Details />
      <Footer />
    </>
  );
};

export default Download;
