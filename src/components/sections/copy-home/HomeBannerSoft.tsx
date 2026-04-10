"use client";

import Image from "next/image";
import { CSSProperties, useEffect } from "react";

const headingStyle = (fontSize: string, textShadow: string): CSSProperties => ({
  fontFamily: "var(--font-syncopate)",
  fontWeight: 700,
  lineHeight: 1.1,
  fontSize,
  textShadow,
});

const subtitleStyle = (
  fontSize: string,
  textShadow: string,
): CSSProperties => ({
  fontFamily: "var(--font-roboto-condensed)",
  fontWeight: 600,
  color: "#C8C0B2",
  fontSize,
  textShadow,
});

export default function HomeBannerSoft() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToDivisiones = () => {
    document
      .getElementById("divisiones")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile */}
      <div className="relative md:hidden min-h-[70svh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 animate-nrv-ken-burns">
          <Image
            src="/images/new-home/hero-70vh.jpg"
            alt="Grupo NRV"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#1a1208]/80 via-[#1a1208]/30 to-transparent" />
        <div className="relative z-10" style={{ padding: "0 24px 32px" }}>
          <h1
            className="text-white animate-nrv-rise"
            style={{
              fontFamily: "var(--font-roboto-condensed)",
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: 1.15,
              animationDelay: "200ms",
            }}
          >
            Construimos, Transportamos,
            <br />
            Producimos y Operamos.
          </h1>
          <p
            className="mt-3 animate-nrv-rise"
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.55,
              animationDelay: "400ms",
            }}
          >
            Distintos sectores, un mismo compromiso con la calidad.
          </p>
          <button
            onClick={scrollToDivisiones}
            className="mt-5 animate-nrv-rise cursor-pointer"
            style={{
              background: "var(--color-beige)",
              color: "#ffffff",
              borderRadius: "20px",
              fontSize: "12px",
              padding: "10px 24px",
              animationDelay: "600ms",
            }}
          >
            Conoce Grupo NRV
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden md:block h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 animate-nrv-ken-burns">
          <Image
            src="/images/new-home/banner_desktop_1920x600.jpg"
            alt="Grupo NRV"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-[#1a1208]/58 via-[#1a1208]/18 to-transparent" />
        <div className="absolute bottom-16 left-12 xl:left-16">
          <h1
            className="text-white uppercase animate-nrv-rise"
            style={{
              ...headingStyle("96px", "0 4px 32px rgba(0,0,0,0.8)"),
              animationDelay: "200ms",
            }}
          >
            Grupo NRV
          </h1>
          <p
            className="mt-2 max-w-3xl animate-nrv-rise"
            style={{
              ...subtitleStyle(
                "40px",
                "0 2px 20px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.7)",
              ),
              animationDelay: "500ms",
            }}
          >
            Construimos, Transportamos, Producimos
            <br /> y Operamos con excelencia.
          </p>
          <p
            className="mt-2 text-white/75 animate-nrv-rise"
            style={{
              fontSize: "20px",
              textShadow: "0 2px 12px rgba(0,0,0,0.9)",
              animationDelay: "750ms",
            }}
          >
            Distintos sectores un mismo compromiso con la calidad.
          </p>
        </div>
      </div>
    </>
  );
}
