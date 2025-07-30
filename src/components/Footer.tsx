import { 
  UtensilsCrossed, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-barych-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Barych</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Restaurante mediterráneo especializado en tapas, hamburguesas gourmet 
              y pizzas artesanales. Sabores auténticos en un ambiente familiar.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@barych.com" 
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-primary transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-gray-300 hover:text-primary transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#reservas" className="text-gray-300 hover:text-primary transition-colors">
                  Reservas
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Nuestro Menú</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tapas" className="text-gray-300 hover:text-primary transition-colors">
                  Tapas Mediterráneas
                </a>
              </li>
              <li>
                <a href="#hamburguesas" className="text-gray-300 hover:text-primary transition-colors">
                  Hamburguesas Gourmet
                </a>
              </li>
              <li>
                <a href="#pizzas" className="text-gray-300 hover:text-primary transition-colors">
                  Pizzas Artesanales
                </a>
              </li>
              <li>
                <a href="#ensaladas" className="text-gray-300 hover:text-primary transition-colors">
                  Ensaladas Frescas
                </a>
              </li>
              <li>
                <a href="#postres" className="text-gray-300 hover:text-primary transition-colors">
                  Postres Caseros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    <a href="tel:+34000000000" className="hover:text-primary transition-colors">
                      [Por completar]
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    [Dirección por completar por el cliente]
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    [Horarios por completar]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Barych. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;