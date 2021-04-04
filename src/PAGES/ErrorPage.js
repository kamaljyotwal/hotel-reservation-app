import React from "react";
import Hero from "../COMPONENTS/Hero";
import Banner from "../COMPONENTS/banner/Banner";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Hero>
      <Banner title="Error 404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
}
