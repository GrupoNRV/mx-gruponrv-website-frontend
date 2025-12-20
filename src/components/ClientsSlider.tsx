"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";

const clients = [
  {
    id: 1,
    name: "Gobierno de México",
    logo: "/images/carousel/clients/slider1.png",
  },
  {
    id: 2,
    name: "Tren Maya",
    logo: "/images/carousel/clients/slider2.png",
  },
  {
    id: 3,
    name: "CFE",
    logo: "/images/carousel/clients/slider3.png",
  },
  {
    id: 4,
    name: "Pemex",
    logo: "/images/carousel/clients/slider4.png",
  },
];

export default function ClientsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: 2,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 40,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="w-full bg-white">
      <div className="py-8 px-4 lg:px-12 xl:px-16 lg:py-14 xl:py-16 relative">
        {/* Título */}
        <h2 className="text-2xl lg:text-3xl font-bold text-[#216C36] mb-8">
          Clientes que confían en nuestra experiencia
        </h2>

        {/* Slider */}
        <div className="relative flex items-center">
          {/* Flecha izquierda */}
          {loaded && instanceRef.current && (
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-0 z-10 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
              aria-label="Anterior"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                  stroke="#000"
                />
              </svg>
            </button>
          )}

          {/* Contenedor slider */}
          <div ref={sliderRef} className="keen-slider w-full mx-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="keen-slider__slide flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          {loaded && instanceRef.current && (
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-0 z-10 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
              aria-label="Siguiente"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                  stroke="#000"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
