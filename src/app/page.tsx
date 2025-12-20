import ClientsSlider from "@/components/ClientsSlider";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import ExperienceSection2 from "@/components/ExperienceSection2";

export const metadata: Metadata = {
  title: "NRV Ingeniería | Inicio",
  description:
    "NRV: 12 años liderando proyectos de construcción, infraestructura y edificación. Ofrecemos soluciones de alto impacto y arrendamiento de maquinaria moderna.",
};

const heroImages = ["/images/hero/home/slider1.png"];

export default function Home() {
  return (
    <>
      <Hero
        images={heroImages}
        caption={
          <>
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Construyendo el futuro
              <br /> con calidad e innovación
            </h1>
          </>
        }
      />
      <FeaturedProjects />
      <ExperienceSection />
      <ClientsSlider />
      <ExperienceSection2 />
    </>
  );
}
