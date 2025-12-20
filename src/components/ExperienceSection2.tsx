import Image from "next/image";

export default function ExperienceSection2() {
  return (
    <section className="w-full">
      {/* Mobile */}
      <div className="block lg:hidden">
        {/* Imagen con texto */}
        <div className="relative h-[420px] w-full">
          <Image
            src="/images/home/experiencia2.jpg"
            alt="Infraestructura vial"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/40" />

          <h2 className="absolute top-10 left-4 right-4 text-white text-2xl font-bold leading-snug">
            Amplia experiencia <br className="md:hidden" /> en la ejecución,{" "}
            <br /> seguimiento
            <br className="md:hidden" /> y control de:
          </h2>
        </div>

        {/* Bloque verde */}
        <div className="bg-[linear-gradient(270deg,#005944_100%,rgba(0,191,146,0.63)_100%)] text-white px-4 py-8 text-sm leading-relaxed">
          <p>
            CONSTRUCCIÓN DE CARRETERAS, SUPERCARRETERAS Y CAMINOS ALIMENTADORES
            - PUENTES - PÁSOS A DESNIVEL - GASAS GEOMÉTRICAS - ELABORACIÓN DE
            PROYECTOS GEOMÉTRICOS - CONSTRUCCIÓN DE TERRACERÍAS Y PLATAFORMAS -
            CONSTRUCCIÓN DE OBRAS DE DRENAJE, LOSAS Y ALCANTARILLAS -
            CONSTRUCCIÓN DE PAVIMENTOS EN CARRETERAS DE ALTA ESPECIFICACIÓN
            (TIPO A2, TIPO A4)  - SERVICIO DE CONTROL DE CALIDAD EN CARRETERAS
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-[60%_40%]">
        {/* Imagen */}
        <div className="relative h-[560px]">
          <Image
            src="/images/home/experiencia2.jpg"
            alt="Infraestructura vial"
            fill
            className="object-fill"
            quality={100}
          />

          <div className="absolute inset-0 bg-black/40" />

          <h2 className="absolute top-12 left-12 xl:top-16 xl:left-16 text-white lg:text-3xl font-semibold leading-snug">
            Amplia experiencia en la ejecución, seguimiento y control de:
          </h2>
        </div>

        {/* Texto lateral */}
        <div className="bg-[linear-gradient(270deg,#005944_100%,rgba(0,191,146,0.63)_100%)] text-white flex items-center px-14">
          <p className="text-base leading-relaxed">
            CONSTRUCCIÓN DE CARRETERAS, SUPERCARRETERAS Y CAMINOS ALIMENTADORES
            · PUENTES · PÁSOS A DESNIVEL · GASAS GEOMÉTRICAS · ELABORACIÓN DE
            PROYECTOS GEOMÉTRICOS · CONSTRUCCIÓN DE TERRACERÍAS Y PLATAFORMAS ·
            CONSTRUCCIÓN DE OBRAS DE DRENAJE, LOSAS Y ALCANTARILLAS ·
            CONSTRUCCIÓN DE PAVIMENTOS EN CARRETERAS DE ALTA ESPECIFICACIÓN
            (TIPO A2, TIPO A4) · SERVICIO DE CONTROL DE CALIDAD EN CARRETERAS
          </p>
        </div>
      </div>
    </section>
  );
}
