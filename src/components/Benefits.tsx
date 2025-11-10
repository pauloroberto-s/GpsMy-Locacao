import { Zap, DollarSign, Plug, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Flexibilidade Total",
    description: "Alugue quando quiser, cancele quando precisar. Sem multas ou taxas escondidas.",
  },
  {
    icon: DollarSign,
    title: "Custo Acessível",
    description: "Sem investimento inicial alto. Pague apenas pelo tempo que usar o serviço.",
  },
  {
    icon: Plug,
    title: "Instalação Plug & Play",
    description: "Conecte você mesmo em minutos. Não precisa de instalação profissional.",
  },
  {
    icon: Shield,
    title: "Monitoramento 24/7",
    description: "Rastreie seu veículo em tempo real direto do seu celular, a qualquer hora.",
  },
];

const Benefits = () => {
  return (
    <section id="vantagens" className="py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Por Que Alugar com a GPS My?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vantagens exclusivas para quem busca segurança sem complicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
