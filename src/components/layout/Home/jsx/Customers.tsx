import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";

const Customers = () => {
  return (
    <section className="bg-blue-600 pb-12" id="our-customers">
      <div className="container text-center py-12">
        <h3 className="text-3xl font-extrabold text-white">
          Nuestros Clientes
        </h3>
        <hr className="w-24 h-2 mx-auto my-2 bg-white border-0 dark:bg-white" />
      </div>
      <div className="container grid grid-cols-1  gap-16 items-center text-white">
        <div className="flex flex-col ms-auto items-center text-center mx-auto">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt="Laura Gómez"
            />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-tr from-purple-400 to-rose-400">
              LG
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <h4 className="font-bold my-4 text-2xl">ElCalifornio</h4>
            <BadgeCheck />
          </div>
          <p className="lg:w-3/4">
            Trabajar con Choya Tech ha sido una experiencia transformadora para
            nuestro negocio, superó nuestras expectativas en todos los aspectos.
          </p>
          <span className="font-bold mt-5"> - Anónimo</span>
        </div>
        {/* <div className="flex flex-col me-auto items-center text-center mx-auto">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src="https://randomuser.me/api/portraits/men/7.jpg"
              alt="Miguel Rodríguez"
            />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-tr from-green-400 to-sky-400">
              MR
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <h4 className="font-bold my-4 text-2xl">Soluciones HealthTech</h4>
            <BadgeCheck />
          </div>
          <p>
            El equipo de Choya Tech superó nuestras expectativas en todos los
            aspectos.
          </p>
          <span className="font-bold mt-5"> - Miguel Rodríguez</span>
        </div> */}
      </div>
    </section>
  );
};

export default Customers;
