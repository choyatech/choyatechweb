    // src/components/Avatars.tsx
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
    import { BadgeCheck } from "lucide-react";

    // Componente para un solo cliente
    interface CustomerProps {
    name: string;
    imageSrc: string;
    initials: string;
    testimonial: string;
    author: string;
    }

    const CustomerAvatar: React.FC<CustomerProps> = ({
    name,
    imageSrc,
    initials,
    testimonial,
    author,
    }) => {
    return (
        <div className="flex flex-col ms-auto items-center text-center mx-auto">
        <Avatar className="w-20 h-20">
            <AvatarImage src={imageSrc} alt={name} />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-tr from-purple-400 to-rose-400">
            {initials}
            </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2 my-4">
            <h4 className="font-bold text-2xl">{name}</h4>
            <BadgeCheck className="w-6 h-6 text-blue-400" />
        </div>

        <p className="lg:w-3/4">{testimonial}</p>
        <span className="font-bold mt-5">{author}</span>
        </div>
    );
    };

    // Componente que agrupa todos los avatares
    const Avatars: React.FC = () => {
    const customers = [
        {
        name: "ElCalifornio",
        imageSrc: "https://randomuser.me/api/portraits/women/.jpg",
        initials: "LG",
        testimonial:
            "Trabajar con Choya Tech ha sido una experiencia transformadora para nuestro negocio, superó nuestras expectativas en todos los aspectos.",
        author: "- Anónimo",
        },
        // Puedes descomentar y agregar más clientes
        // {
        //   name: "Soluciones HealthTech",
        //   imageSrc: "https://randomuser.me/api/portraits/men/7.jpg",
        //   initials: "MR",
        //   testimonial:
        //     "El equipo de Choya Tech superó nuestras expectativas en todos los aspectos.",
        //   author: "- Miguel Rodríguez",
        // },
    ];

    return (
        <div className="container grid grid-cols-1 gap-16 items-center text-white">
        {customers.map((customer) => (
            <CustomerAvatar
            key={customer.name}
            name={customer.name}
            imageSrc={customer.imageSrc}
            initials={customer.initials}
            testimonial={customer.testimonial}
            author={customer.author}
            />
        ))}
        </div>
    );
    };

    export default Avatars;