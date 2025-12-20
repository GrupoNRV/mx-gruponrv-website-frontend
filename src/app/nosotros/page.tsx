import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros | NRV Ingeniería",
  description:
    "NRV: 12 años liderando proyectos de construcción, infraestructura y edificación. Ofrecemos soluciones de alto impacto y arrendamiento de maquinaria moderna.",
};

const heroImages = ["/images/hero/nosotros/slider1.jpg"];

export default function Nosotros() {
  return (
    <>
      <Hero
        images={heroImages}
        caption={
          <>
            <h1 className="font-bold text-white text-xl lg:text-4xl xl:text-5xl">
              Somos una empresa líder en
              <br /> construcción y maquinaria
            </h1>
          </>
        }
      />
    </>
  );
}
