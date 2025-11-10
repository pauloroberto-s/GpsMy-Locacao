import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

const Urgency = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20alugar%20um%20dispositivo%20de%20rastreamento.";

  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
          <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-3 text-base font-bold">
            <Clock className="w-5 h-5 mr-2 inline" />
            Oferta Por Tempo Limitado
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            🚗 Garanta Já Seu Rastreador Disponível!
          </h2>

          <p className="text-xl md:text-2xl text-white/90 font-medium">
            Estoque limitado! Não perca a oportunidade de proteger seu veículo com flexibilidade e economia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <div className="flex items-center gap-2 text-white">
              <TrendingUp className="w-6 h-6" />
              <span className="font-semibold text-lg">Alta demanda</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-white rounded-full"></div>
            <div className="text-white font-semibold text-lg">
              Dispositivos disponíveis: <span className="text-2xl font-extrabold">12</span>
            </div>
          </div>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-xl px-10 py-7 rounded-full shadow-2xl font-extrabold transform hover:scale-110 transition-all"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              📞 Reserve o Seu Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
