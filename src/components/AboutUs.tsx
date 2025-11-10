import teamImage from "@/assets/nossa-historia.png";

const AboutUs = () => {
  return (
    <section id="sobre" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-on-scroll">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Sobre Nós
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
              Nossa História
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A <span className="text-primary font-bold">GPS My</span> nasceu da necessidade de oferecer soluções 
                inteligentes e acessíveis em rastreamento veicular. Desde 2016, nossa missão é proporcionar 
                segurança e tranquilidade para motoristas, empresários e gestores de frota.
              </p>
              
              <p>
                Ao longo dos anos, desenvolvemos um modelo de <span className="font-semibold text-foreground">aluguel 
                flexível</span> que revolucionou o mercado: você não precisa comprar equipamentos caros ou 
                assinar contratos longos. Alugue quando precisar, cancele quando quiser.
              </p>
              
              <p>
                Acreditamos que <span className="font-semibold text-foreground">tecnologia de ponta deve ser acessível</span> 
                para todos. Por isso, investimos constantemente em dispositivos modernos, plataforma intuitiva 
                e suporte técnico humanizado.
              </p>
              
              <p className="text-primary font-semibold text-xl">
                Sua segurança é nossa prioridade. Seu veículo sempre protegido, onde quer que esteja.
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="animate-on-scroll">
            <img 
              src={teamImage} 
              alt="Equipe GPS My com uniforme verde" 
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
