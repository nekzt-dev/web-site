import Explore from "@/components/Explore";
import Menu from "@/components/Menu";
import ParticlesBackground from "@/components/ParticlesBackground";
import Writing from "@/components/Writing";

export default function FirstPage() {
  const texts = ['soluções digitais', 'projetos impactantes', 'clientes satisfeitos'];
  return (
    <>
      <div className="bg-radial-gradient from-backRadialBorder to-backRadialCenter absolute top-0 left-0 w-screen h-screen z-0">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 grid grid-cols-3 grid-rows-7 h-screen bg-transparent">
        <div className="col-span-3 row-span-1">
          <Menu />
        </div> 

        <div className="col-span-3 row-span-5">
          <Writing texts={texts} />
        </div>

        <div className="col-span-3 row-span-1">
          <Explore />
        </div>
      </div>
    </>
  );
};
