import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20alugar%20um%20dispositivo%20de%20rastreamento.";

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Pronto Para Proteger Seu Veículo?
          </h2>

          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
            Alugue agora mesmo e tenha tranquilidade com rastreamento profissional
          </p>

          {/* Benefits checklist */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-6 text-left">
            {[
              "Sem contrato de longo prazo",
              "Instalação simples e rápida",
              "Monitoramento 24/7 em tempo real",
              "Suporte técnico dedicado",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 rounded-full shadow-2xl font-extrabold transform hover:scale-110 transition-all"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              💬 Alugue Agora no WhatsApp
            </Button>
          </div>

          <p className="text-white/80 text-sm pt-4">
            Respondemos em até 5 minutos! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
