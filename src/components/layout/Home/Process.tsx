const Process = () => {
  return (
    <div className="pb-12" id="how-does-it-work">
      <div className="lg:container text-center py-12">
        <h3 className="text-3xl font-extrabold grid text-neutral-800">
          ¿Cómo Funciona Choya Tech?
          <span className="text-base font-normal">
            Procesos de Desarrol2 lo Web y Software
          </span>
        </h3>
        <hr className="w-24 h-2 mx-auto my-2 bg-blue-500 border-0 dark:bg-blue-300" />
      </div>
      <div className="flex flex-col mx-auto md:container gap-6">
        <div className="flex justify-center mx-auto md:container mb-8">
          <div className="w-1/2 hidden lg:flex lg:mt-0 justify-center">
            <img
              src="/miroodles_2.png"
              alt="Proceso de análisis y planificación"
            />
          </div>
          <div className="lg:w-1/2 mx-auto container flex flex-col justify-center gap-4">
            <h3 className="text-3xl font-extrabold text-neutral-800">
              Análisis y Planificación Personalizada
            </h3>
            <p className="text-xl lg:w-4/5">
              Comenzamos con una consulta detallada para entender tus
              necesidades y objetivos. Realizamos un análisis exhaustivo de tu
              proyecto, definiendo requisitos y creando un plan estratégico que
              guiará el desarrollo.
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-auto md:container mb-8">
          <div className="lg:w-1/2 mx-auto container flex flex-col justify-center gap-4">
            <h3 className="text-3xl font-extrabold text-neutral-800">
              Desarrollo de Software y Ejecución Eficiente
            </h3>
            <p className="text-xl lg:w-4/5">
              Nuestro equipo de expertos desarrolla y ejecuta la solución de
              acuerdo con el plan establecido. Implementamos tecnología de
              vanguardia para garantizar que el producto sea eficiente y
              escalable, mientras mantenemos una comunicación constante para
              asegurar que el proyecto cumpla con tus expectativas.
            </p>
          </div>
          <div className="w-1/2 hidden lg:flex lg:mt-0 justify-center">
            <img
              src="/miroodles_3.png"
              alt="Proceso de desarrollo y ejecución"
            />
          </div>
        </div>
        <div className="flex justify-center mx-auto md:container mb-8">
          <div className="w-1/2 hidden lg:flex lg:mt-0 justify-center">
            <img
              src="/miroodles_4.png"
              alt="Proceso de pruebas y lanzamiento"
            />
          </div>
          <div className="lg:w-1/2 mx-auto container flex flex-col justify-center gap-4">
            <h3 className="text-3xl font-extrabold text-neutral-800">
              Pruebas Rigurosas y Lanzamiento Exitoso
            </h3>
            <p className="text-xl lg:w-4/5">
              Realizamos pruebas exhaustivas para asegurar la calidad del
              producto y un rendimiento óptimo. Una vez superadas las pruebas,
              lanzamos la solución al mercado. Después del lanzamiento,
              ofrecemos soporte continuo y mantenimiento para garantizar el
              éxito a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
