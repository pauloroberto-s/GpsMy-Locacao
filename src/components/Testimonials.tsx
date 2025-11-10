import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import carlosAvatar from "@/assets/avatar-carlos.jpg";
import marinaAvatar from "@/assets/avatar-marina.jpg";
import robertoAvatar from "@/assets/avatar-roberto.jpg";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Motorista de App",
    rating: 5,
    text: "Aluguei o dispositivo OBD II e estou muito satisfeito. Instalação super fácil e o app funciona perfeitamente. Recomendo!",
    avatar: carlosAvatar,
  },
  {
    name: "Marina Santos",
    role: "Empresária",
    rating: 5,
    text: "Flexibilidade é tudo! Aluguei por 3 meses e quando precisei cancelar, foi super tranquilo. Serviço excelente.",
    avatar: marinaAvatar,
  },
  {
    name: "Roberto Oliveira",
    role: "Gestor de Frota",
    rating: 5,
    text: "Uso o rastreador completo em 5 veículos da empresa. O custo-benefício é imbatível e o suporte é rápido.",
    avatar: robertoAvatar,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confiança e satisfação em cada depoimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll border-0 shadow-lg hover:shadow-xl transition-all bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground italic text-lg text-center">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border text-center">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
