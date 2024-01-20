'use client'
import GradientDivider from "@/Components/GradientDivider";
import Loader from "@/Components/Loader";
import ScrollProgress from "@/Components/ScrollProgress";
import CtaEsp from "@/Components/español/CtaEsp";
import Footer from "@/Components/español/Footer";
import HeroEsp from "@/Components/español/HeroEsp";
import Introduccion from "@/Components/español/Introduccion";
import { MapaConceptual } from "@/Components/español/MapaConceptual";
import Mision from "@/Components/español/Mision";
import { NavbarEsp } from "@/Components/español/NavbarEsp";
import NuestrosValores from "@/Components/español/NuestrosValores";
import VerticalNavbar from "@/Components/español/VerticalNavbar";
import { useState, useEffect } from "react";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    setTimeout(() => {
    setIsLoaded(true);
    }, 1500);
  }, []);

  return isLoaded ? (

    <main className="bg-white dark:bg-slate-950">
      <NavbarEsp />
      <HeroEsp />
      <VerticalNavbar />
      <ScrollProgress />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <Introduccion />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <Mision />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <CtaEsp />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <NuestrosValores />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <MapaConceptual />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <Footer />
    </main>
    ) : (
      <Loader />
  );
}
