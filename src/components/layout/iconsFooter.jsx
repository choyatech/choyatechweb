// Para usar los icons de lucide react es necesario primero ponerlos en un archvio .jsx
import { Facebook, HandMetal, Instagram, Linkedin, Twitter } from "lucide-react";

const SocialIcons = () => {
    return (
        <div className="flex space-x-4">
        <Facebook size={32} color="#1877F2" />
        <Instagram size={32} color="#E4405F" />
        <Linkedin size={32} color="#0A66C2" />
        <Twitter size={32} color="#1DA1F2" />
        <HandMetal size={32} color="black" />
        </div>
    );
};

    export default SocialIcons;
