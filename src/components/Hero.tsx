import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-car1.png";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20alugar%20um%20dispositivo%20de%20rastreamento.";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-20 scroll-mt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-4 py-2 text-sm font-medium">
              🚀 Aluguel Sem Compromisso
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Rastreie seu Veículo com <span className="text-primary-foreground drop-shadow-lg">Flexibilidade Total</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Alugue dispositivos de rastreamento veicular sem contrato de longo prazo. 
              Custo acessível, instalação simples e cancelamento quando quiser.
            </p>

            {/* Pricing Tags */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
                <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">OBD II</p>
                <p className="text-4xl font-extrabold text-primary mt-2">R$ 59<span className="text-xl">/mês</span></p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
                <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">Rastreador Completo</p>
                <p className="text-4xl font-extrabold text-primary mt-2">R$ 129<span className="text-xl">/mês</span></p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl font-bold transform hover:scale-105 transition-all"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                 Alugue Agora no WhatsApp
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl"></div>
            <img 
              src={heroImage} 
              alt="Dispositivo de rastreamento GPS em painel de carro moderno" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover animate-float"
            />
            
            {/* Notification Badge */}
            <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-2xl p-4 animate-fade-in flex items-center gap-3 max-w-[280px]">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">
                  Rastreamento em Tempo Real
                </p>
                <p className="text-xs text-muted-foreground">
                  Online agora
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
