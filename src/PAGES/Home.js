import React from "react";
import Banner from "../COMPONENTS/banner/Banner";
import Hero from "../COMPONENTS/Hero";
import { Link } from "react-router-dom";
import Services from "../COMPONENTS/services/Services";

export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
}
