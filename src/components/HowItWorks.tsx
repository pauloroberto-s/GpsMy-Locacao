import { Smartphone, MapPin, Search } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Escolha seu Dispositivo",
    description: "Selecione entre Tag (R$59/mês) ou OBD II Completo (R$129/mês)",
  },
  {
    icon: Smartphone,
    title: "2. Alugue pelo WhatsApp",
    description: "Entre em contato conosco e formalize o aluguel em minutos",
  },
  {
    icon: MapPin,
    title: "3. Rastreie seu Veículo",
    description: "Receba o dispositivo, instale e monitore em tempo real pelo app",
  },
];

const HowItWorks = () => {

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e rápido para começar a rastrear
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-primary/20 -z-10"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="animate-on-scroll text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full animate-pulse"></div>
                  <div className="relative w-full h-full bg-primary rounded-full flex items-center justify-center shadow-xl">
                    <step.icon className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/6PBU0W3gnaA?si=ojomxUou3Tpl4kby&amp;start=413" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
