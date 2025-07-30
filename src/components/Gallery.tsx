import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Heart } from 'lucide-react';
import tapasImage from '@/assets/tapas-plate.jpg';
import pizzaImage from '@/assets/pizza-artisanal.jpg';
import burgerImage from '@/assets/burger-gourmet.jpg';
import dessertsImage from '@/assets/desserts-caseros.jpg';
import familyImage from '@/assets/family-dining.jpg';
import heroImage from '@/assets/hero-restaurant.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      image: tapasImage,
      title: 'Tapas Mediterráneas',
      description: 'Selección de tapas tradicionales con aceitunas, jamón y quesos artesanales',
      category: 'Tapas'
    },
    {
      image: pizzaImage,
      title: 'Pizzas Artesanales',
      description: 'Masa madre fermentada con ingredientes frescos y recetas tradicionales',
      category: 'Pizzas'
    },
    {
      image: burgerImage,
      title: 'Hamburguesas Gourmet',
      description: 'Carne premium con pan artesanal y acompañamientos únicos',
      category: 'Hamburguesas'
    },
    {
      image: dessertsImage,
      title: 'Postres Caseros',
      description: 'Dulces tradicionales elaborados diariamente en nuestra cocina',
      category: 'Postres'
    },
    {
      image: familyImage,
      title: 'Ambiente Familiar',
      description: 'Espacio acogedor perfecto para disfrutar en familia',
      category: 'Ambiente'
    },
    {
      image: heroImage,
      title: 'Nuestro Local',
      description: 'Diseño moderno y cálido que invita a relajarse y disfrutar',
      category: 'Local'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Galería <span className="text-primary">Barych</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre la belleza de nuestros platos y el ambiente acogedor 
            que te espera en Barych.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center space-x-4">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      >
                        <Heart className="w-4 h-4 mr-1" />
                        Me gusta
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Ver Más Fotos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;