// Tenemos que crear un archivo .tsx donde guardemos los icons que vamos a utilizar en el footer. Esto poruqe lucide-react es
// libreria de react y no se puede usar directamnete en un .astro.



import { Facebook, HandMetal, Instagram, Linkedin, Twitter } from "lucide-react";

// Creamos un componente para cada icono para que de esta manera no se importen todos juntos.
export const FacebookIcon = () => <Facebook size={16}  />;
export const InstagramIcon = () => <Instagram size={16}  />;
export const LinkedinIcon = () => <Linkedin size={16}  />;
export const TwitterIcon = () => <Twitter size={16}  />;
export const HandMetalIcon = () => <HandMetal size={16}  />;

