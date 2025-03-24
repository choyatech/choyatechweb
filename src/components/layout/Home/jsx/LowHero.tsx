import { Button } from "@/components/ui/button";

const LowHero = () => {
  return (
    <main className="container my-20 flex h-[calc(100vh-22rem)]">
      <div className="w-1/2 hidden lg:flex items-center">
        <img src="/miroodles_2.png" alt="Imagen de presentación" className="" />
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-6 md:gap-12">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center lg:text-start">
          ¿Listo para Llevar Tu Negocio al Siguiente Nivel con Choya Tech?
        </h2>
        <Button variant="default" className="w-fit" size="lg">
          <a href="mailto:contactochoyatech@gmail.com" className="flex">
            ¡Contáctanos Hoy!
          </a>
        </Button>
      </div>
    </main>
  );
};

export default LowHero;
