import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arrendamiento | NRV Ingeniería",
  description:
    "NRV: 12 años liderando proyectos de construcción, infraestructura y edificación. Ofrecemos soluciones de alto impacto y arrendamiento de maquinaria moderna.",
};

const heroImages = [
  "/images/hero/arrendamiento/slider1.jpg",
  "/images/hero/arrendamiento/slider1.jpg",
];

export default function Arrendamiento() {
  return (
    <Hero
      images={heroImages}
      caption={
        <>
          <h1 className="font-bold text-white text-xl lg:text-4xl xl:text-5xl">
            Arrendamiento de maquinaria
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base xl:text-2xl mt-1.5 md:mt-3 lg:mt-4">
            Ofrecemos un servicio de arrendamiento de maquinaria
            <br /> confiable y eficiente, brindando equipos de última
            <br /> generación para garantizar el máximo rendimiento en
            <br /> cada obra.
          </p>
        </>
      }
    />
  );
}
