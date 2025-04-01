    // src/components/FAQAccordion.tsx
import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
} from "@/components/ui/accordion";
    
    // Datos de las preguntas y respuestas
const faqData = [
        {
        value: "item-1",
        question: "¿Por qué elegirnos para impulsar tu negocio en línea?",
        answer:
            "Porque no solo creamos plataformas digitales, diseñamos estrategias que impulsan tu crecimiento. Nuestro enfoque combina tecnología de vanguardia con tácticas de marketing efectivas, asegurando que tu negocio no solo esté en línea, sino que destaque y crezca.",
        },
        {
        value: "item-2",
        question: "¿En qué se diferencian nuestras soluciones de otras opciones en el mercado?",
        answer:
            "Nosotros no nos limitamos a construir sitios web, creamos herramientas de marketing digital que funcionan como un motor para tu crecimiento. Desde la optimización para motores de búsqueda hasta la integración de campañas publicitarias, nuestras soluciones están diseñadas para atraer, convertir y retener clientes.",
        },
        {
        value: "item-3",
        question: "¿Cuánto tiempo tomará ver resultados?",
        answer:
            "Entendemos que el tiempo es crucial, por eso nos enfocamos en estrategias que generen resultados rápidos sin sacrificar calidad. Dependiendo de la estrategia implementada, podrás empezar a ver mejoras en el tráfico, conversiones y ventas en semanas.",
        },
        {
        value: "item-4",
        question: "Qué sucede si mi estrategia necesita ajustes a lo largo del tiempo?",
        answer:
            "El mercado cambia, y nosotros cambiamos contigo. Ofrecemos un servicio continuo de optimización y ajuste de estrategias para asegurarnos de que siempre estés un paso adelante, adaptando tus campañas para maximizar resultados.",
        },
        {
        value: "item-5",
        question: "¿Qué tan seguras son nuestras soluciones para el crecimiento de tu negocio?",
        answer:
            "Nuestro compromiso es con tu éxito. Implementamos estrategias probadas que no solo son seguras, sino que están diseñadas para maximizar tu retorno de inversión. Con nosotros, cada decisión está respaldada por datos y análisis para asegurar el crecimiento constante de tu negocio.",
        },
    ];
    
    // Componente Accordion
const FAQAccordion: React.FC = () => {
        return (
        <Accordion type="multiple" className="rounded-xl border overflow-hidden">
            {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
        );
    };
    
export default FAQAccordion;