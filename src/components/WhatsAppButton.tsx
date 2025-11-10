import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20alugar%20um%20dispositivo%20de%20rastreamento.";

  return (
    <Button
      onClick={() => window.open(whatsappLink, '_blank')}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white z-50 animate-fade-in hover:scale-110 transition-transform duration-300"
      size="icon"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};

export default WhatsAppButton;
