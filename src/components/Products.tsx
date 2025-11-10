import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calculator } from "lucide-react";
import tagImage from "@/assets/tag-rastreamento.png";
import obdImage from "@/assets/obd-rastreador.png";

const products = [
  {
    name: "Tag de Rastreamento",
    price: "59",
    popular: false,
    description: "Ideal para rastreamento básico e eficiente",
    features: [
      "Rastreamento em tempo real",
      "Histórico de rotas (7 dias)",
      "Alertas de movimento",
      "App iOS e Android",
      "Instalação plug & play",
      "Bateria de longa duração",
    ],
    image: tagImage,
  },
  {
    name: "OBD II Completo",
    price: "129",
    popular: true,
    description: "Recursos avançados para proteção total",
    features: [
      "Todos os recursos da Tag",
      "Bloqueio remoto do veículo",
      "Cerca eletrônica (geofence)",
      "Histórico ilimitado de rotas",
      "Relatórios de performance",
      "Alertas de manutenção",
      "Bateria backup interna",
      "Suporte prioritário 24/7",
    ],
    image: obdImage,
  },
];

const Products = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20alugar%20um%20dispositivo%20de%20rastreamento.";
  const [selectedPlan, setSelectedPlan] = useState<"obd" | "complete">("obd");
  const [months, setMonths] = useState(1);

  const prices = {
    obd: 59,
    complete: 129,
  };

  const totalCost = prices[selectedPlan] * months;

  return (
    <section id="produtos" className="py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Nossos Produtos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Escolha o Plano Ideal Para Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dispositivos modernos com tecnologia de ponta e sem compromisso de longo prazo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className={`animate-on-scroll border-2 transition-all hover:shadow-2xl overflow-hidden ${
                product.popular 
                  ? "border-primary shadow-xl scale-105 relative" 
                  : "border-border shadow-lg hover:scale-105"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image covering full top */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold shadow-lg">
                      🔥 Premium
                    </Badge>
                  </div>
                )}
                {!product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold shadow-lg">
                      ⚡ Mais Vendido
                    </Badge>
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader className="text-center space-y-4 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-primary">
                      R$ {product.price}
                    </span>
                    <span className="text-muted-foreground text-xl">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sem taxa de instalação
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full font-bold py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all ${
                    product.popular
                      ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                      : "bg-primary/90 hover:bg-primary text-primary-foreground"
                  }`}
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  Alugue Agora
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Cancele quando quiser, sem multas
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promotion Banner */}
        <div className="mt-16 max-w-4xl mx-auto animate-on-scroll">
          <Card className="bg-gradient-to-r from-primary-dark to-primary border-0 shadow-2xl">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-3xl font-extrabold text-white">
                🎉 Promoção de Lançamento!
              </h3>
              <p className="text-white/90 text-xl">
                Alugue por <span className="font-bold">3 meses</span> e ganhe <span className="font-bold">15% de desconto</span> no valor total!
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg rounded-full shadow-xl"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Aproveitar Promoção
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Cost Calculator */}
        <div className="mt-16 max-w-md mx-auto animate-on-scroll">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calculator className="w-5 h-5 text-primary" />
                Calculadora de Custos
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Escolha o Plano:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={selectedPlan === "obd" ? "default" : "outline"}
                      onClick={() => setSelectedPlan("obd")}
                      className="h-auto py-3"
                    >
                      <div className="text-left w-full">
                        <div className="font-semibold">Tag</div>
                        <div className="text-xs opacity-90">R$ 59/mês</div>
                      </div>
                    </Button>
                    <Button
                      variant={selectedPlan === "complete" ? "default" : "outline"}
                      onClick={() => setSelectedPlan("complete")}
                      className="h-auto py-3"
                    >
                      <div className="text-left w-full">
                        <div className="font-semibold">OBD II</div>
                        <div className="text-xs opacity-90">R$ 129/mês</div>
                      </div>
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Período: {months} {months === 1 ? "mês" : "meses"}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={months}
                    onChange={(e) => setMonths(parseInt(e.target.value))}
                    className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 mês</span>
                    <span>12 meses</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Custo Total:</span>
                    <span className="text-3xl font-bold text-primary">
                      R$ {totalCost}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {months > 1 && `${months} x R$ ${prices[selectedPlan]} por mês`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
