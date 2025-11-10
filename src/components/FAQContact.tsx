import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from "./ContactForm";

const faqs = [
  {
    question: "Como é feita a locação do rastreador?",
    answer: "É muito simples! Entre em contato conosco pelo WhatsApp, escolha o dispositivo (Tag ou OBD II), forneça seus dados e receba o equipamento no endereço cadastrado. Todo o processo é feito online.",
  },
  {
    question: "O dispositivo precisa de instalação profissional?",
    answer: "Não! Nossos dispositivos são plug & play. A Tag se conecta facilmente e o OBD II se encaixa na porta OBD do veículo (embaixo do painel), sem necessidade de instalação profissional.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Você pode cancelar a locação a qualquer momento, sem multas ou taxas de cancelamento. Basta nos avisar com 5 dias de antecedência e devolver o equipamento.",
  },
  {
    question: "Qual a diferença entre Tag e OBD II?",
    answer: "A Tag (R$59/mês) é ideal para rastreamento básico. O OBD II (R$129/mês) oferece recursos avançados como bloqueio remoto, cerca eletrônica, bateria backup e suporte prioritário 24/7.",
  },
  {
    question: "Como faço para rastrear meu veículo?",
    answer: "Após receber o dispositivo e instalá-lo, você baixa nosso aplicativo gratuito (Android/iOS), faz login e pronto! Você pode rastrear em tempo real, ver histórico de rotas e receber alertas.",
  },
  {
    question: "Há cobrança de taxa de instalação?",
    answer: "Não! O valor mensal já inclui tudo: dispositivo, plataforma de rastreamento, app e suporte técnico. Sem taxas ocultas.",
  },
];

const FAQContact = () => {
  return (
    <section id="faq" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Dúvidas e Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas ou entre em contato conosco
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* FAQ Accordion */}
          <div className="animate-on-scroll flex flex-col">
            <Accordion type="single" collapsible className="space-y-4 flex-1">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-bold text-lg text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll flex flex-col" style={{ animationDelay: "150ms" }}>
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQContact;
