"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const team = [
  {
    name: "Ing. Adrian Escobar",
    role: "Director",
    bg: "bg-[#232323]",
  },
  {
    name: "Lic. Natividad Ramón",
    role: "Administración",
    bg: "bg-[#005944]",
  },
  {
    name: "C.P Alejandro Vargas",
    role: "Área Fiscal",
    bg: "bg-[#216C36]",
  },
  {
    name: "Ing. Miguel A. Escobar",
    role: "Control Administrativo",
    bg: "bg-[#1E1E1E]",
  },
];

export default function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1.7,
    },
    breakpoints: {
      "(min-width: 768px)": {
        disabled: true, // ⬅️ en desktop desactivamos el slider
      },
    },
  });

  return (
    <section className="w-full relative">
      {/* Título */}
      <div className="py-8 px-4 lg:px-12 xl:px-16 lg:py-14 xl:py-16 bg-white">
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#216C36]">
          Nuestro equipo
        </h2>
      </div>

      {/* MOBILE - Slider */}
      <div className="md:hidden">
        <div ref={sliderRef} className="keen-slider h-[420px]">
          {team.map((item, i) => (
            <div
              key={i}
              className={`keen-slider__slide ${item.bg} flex items-end p-6`}
            >
              <div className="text-white mb-6">
                <p className="font-bold">{item.name}</p>
                <p className="font-bold">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center gap-2 py-4 absolute left-1/2 -translate-x-1/2 bottom-0">
            {[...Array(instanceRef.current.track.details.slides.length)].map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-2 h-2 rounded-full transition ${
                    currentSlide === idx ? "bg-white" : "bg-white/70"
                  }`}
                />
              )
            )}
          </div>
        )}
      </div>

      {/* DESKTOP - Grid */}
      <div className="hidden md:grid grid-cols-4 h-[480px]">
        {team.map((item, i) => (
          <div key={i} className={`${item.bg} flex items-end p-8`}>
            <div className="text-white">
              <div className="font-bold lg:text-lg">{item.name}</div>
              <div className="font-bold lg:text-lg">{item.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
