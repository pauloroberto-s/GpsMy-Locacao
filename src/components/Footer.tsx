import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold">GPS My</h3>
            <p className="text-white/80 text-sm">
              Soluções inteligentes em rastreamento e monitoramento veicular. 
              Flexibilidade e segurança para o seu dia a dia.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Contato</h4>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contato@gpsmy.com.br</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} GPS My. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
