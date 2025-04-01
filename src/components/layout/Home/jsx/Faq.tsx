import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="bg-neutral-100 w-full">
      <main className="container flex items-center py-12">
        <div className="mx-auto md:2/3 lg:w-1/2">
          <h3 className="text-4xl mb-2 font-bold">
            Estamos aquí para resolver todas tus dudas.
          </h3>
          <p className="mb-8">
            Respondemos a las preguntas más frecuentes sobre el desarrollo y
            mantenimiento de sitios para que tengas toda la información que
            necesitas.
          </p>
          <Accordion
            className="rounded-xl border overflow-hidden"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Por qué elegirnos para impulsar tu negocio en línea?
              </AccordionTrigger>
              <AccordionContent>
                Porque no solo creamos plataformas digitales, diseñamos
                estrategias que impulsan tu crecimiento. Nuestro enfoque combina
                tecnología de vanguardia con tácticas de marketing efectivas,
                asegurando que tu negocio no solo esté en línea, sino que
                destaque y crezca.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿En qué se diferencian nuestras soluciones de otras opciones en
                el mercado?
              </AccordionTrigger>
              <AccordionContent>
                Nosotros no nos limitamos a construir sitios web, creamos
                herramientas de marketing digital que funcionan como un motor
                para tu crecimiento. Desde la optimización para motores de
                búsqueda hasta la integración de campañas publicitarias,
                nuestras soluciones están diseñadas para atraer, convertir y
                retener clientes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Cuánto tiempo tomará ver resultados?
              </AccordionTrigger>
              <AccordionContent>
                Entendemos que el tiempo es crucial, por eso nos enfocamos en
                estrategias que generen resultados rápidos sin sacrificar
                calidad. Dependiendo de la estrategia implementada, podrás
                empezar a ver mejoras en el tráfico, conversiones y ventas en
                semanas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Qué sucede si mi estrategia necesita ajustes a lo largo del
                tiempo?
              </AccordionTrigger>
              <AccordionContent>
                El mercado cambia, y nosotros cambiamos contigo. Ofrecemos un
                servicio continuo de optimización y ajuste de estrategias para
                asegurarnos de que siempre estés un paso adelante, adaptando tus
                campañas para maximizar resultados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                ¿Qué tan seguras son nuestras soluciones para el crecimiento de
                tu negocio?
              </AccordionTrigger>
              <AccordionContent>
                Nuestro compromiso es con tu éxito. Implementamos estrategias
                probadas que no solo son seguras, sino que están diseñadas para
                maximizar tu retorno de inversión. Con nosotros, cada decisión
                está respaldada por datos y análisis para asegurar el
                crecimiento constante de tu negocio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="hidden lg:flex lg:mt-0 justify-center">
          <img src="/miroodles_3.png" alt="Proceso de desarrollo y ejecución" />
        </div>
      </main>
    </section>
  );
};

export default Faq;
