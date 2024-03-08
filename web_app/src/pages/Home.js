import React from "react";
import { Navbar } from "../componenets/Navbar";
import { Recipes } from "../componenets/Recipes";
import { Footerr } from "../componenets/Footerr";


export const Home = () => {
  return (
    <div>
      <Navbar />
      <Recipes />
      <Footerr/>
    </div>
  );
};
