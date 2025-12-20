import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="bg-section-green-nrv">
      <div className="mx-auto py-8 px-4 lg:px-0 lg:py-0 lg:grid lg:grid-cols-2 lg:items-center">
        {/* Text content */}
        <div className="lg:px-12 xl:px-16">
          <h2 className="mb-6 text-2xl lg:text-3xl font-bold text-[#005944]">
            Nuestra experiencia
          </h2>

          <p className="mb-6 text-sm leading-relaxed text-black">
            Con una trayectoria de 12 años, en NRV hemos dejado huella en el
            sector de la construcción, desarrollando proyectos de
            infraestructura y edificación que transforman comunidades y
            potencian el crecimiento económico. Nuestra experiencia se basa en:
          </p>

          <ul className="space-y-4 text-sm text-black">
            <li>
              - Obras de alto impacto, desde carreteras y puentes hasta
              edificaciones industriales y comerciales.
            </li>
            <li>
              - Arrendamiento de maquinaria con equipos modernos que optimizan
              la productividad en cada proyecto.
            </li>
            <li>
              - Compromiso con la calidad, seguridad y sostenibilidad,
              cumpliendo con las normativas más exigentes del sector.
            </li>
          </ul>
        </div>

        {/* Image (desktop only) */}
        <div className="relative hidden h-[420px] w-full lg:block">
          <Image
            src="/images/home/experiencia.jpg" // cambia la ruta según tu proyecto
            alt="Equipo de construcción"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
