import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Pizza, 
  Sandwich, 
  Salad, 
  Cookie, 
  Baby, 
  Coffee,
  UtensilsCrossed,
  ArrowRight 
} from 'lucide-react';

const MenuSection = () => {
  const menuItems = [
    {
      icon: UtensilsCrossed,
      title: 'Tapas',
      description: 'Selección de tapas mediterráneas tradicionales con aceitunas, jamón, quesos y especialidades de la casa.',
      href: '#tapas'
    },
    {
      icon: Salad,
      title: 'Ensaladas',
      description: 'Ensaladas frescas con ingredientes de temporada, aliños caseros y opciones veganas disponibles.',
      href: '#ensaladas'
    },
    {
      icon: Sandwich,
      title: 'Hamburguesas',
      description: 'Hamburguesas gourmet con carne premium, pan artesanal y acompañamientos únicos.',
      href: '#hamburguesas'
    },
    {
      icon: Pizza,
      title: 'Pizzas Artesanales',
      description: 'Pizzas con masa madre, ingredientes frescos y recetas tradicionales italianas.',
      href: '#pizzas'
    },
    {
      icon: Coffee,
      title: 'Platos Combinados',
      description: 'Opciones completas que combinan proteína, acompañamientos y verduras en porciones generosas.',
      href: '#combinados'
    },
    {
      icon: Cookie,
      title: 'Postres Caseros',
      description: 'Dulces tradicionales elaborados diariamente: tiramisú, flan, tarta de queso y más.',
      href: '#postres'
    },
    {
      icon: Baby,
      title: 'Menú Infantil',
      description: 'Opciones especiales para los más pequeños con ingredientes saludables y presentación divertida.',
      href: '#infantil'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestro <span className="text-primary">Menú</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre nuestra amplia selección de platos mediterráneos, 
            hamburguesas gourmet, pizzas artesanales y mucho más.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-fit mx-auto">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Ver detalles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="px-8">
              Ver Menú Completo
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Hacer Reserva
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;