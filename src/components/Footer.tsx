import { motion } from "framer-motion";
import { Instagram, Phone, MapPin } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-foreground/20">
              <img
                src={doctorImage}
                alt="Dra. Isabella Rodrigues Tovar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-display font-semibold">Dra. Isabella Rodrigues Tovar</h4>
              <p className="text-sm text-primary-foreground/70">Médica | Saúde da Mulher, Estética e Bem Estar</p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <a
              href="https://instagram.com/isabellarodriguestovar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @isabellarodriguestovar
            </a>
            <a
              href="tel:+5562999999999"
              className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              (62) 99999-9999
            </a>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              Goiânia, GO
            </div>
          </motion.div>

          {/* CRM and Ethics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-right"
          >
            <p className="text-sm text-primary-foreground/70">CRM-GO XXXXX</p>
            <p className="text-xs text-primary-foreground/50 mt-2 max-w-xs ml-auto">
              Este material tem caráter informativo. Os resultados podem variar de pessoa
              para pessoa. Consulte sempre um profissional qualificado.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <p className="text-center text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Dra. Isabella Rodrigues Tovar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
