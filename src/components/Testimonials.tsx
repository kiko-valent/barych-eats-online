import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import familyImage from '@/assets/family-dining.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Cliente habitual',
      content: 'Las tapas de Barych son increíbles. El ambiente es perfecto para venir en familia y los niños siempre están contentos con su menú especial.',
      rating: 5,
      image: familyImage
    },
    {
      name: 'Carlos Ruiz',
      role: 'Amante de la pizza',
      content: 'Las pizzas artesanales son espectaculares. Masa perfecta, ingredientes frescos y un sabor que te transporta a Italia. ¡Muy recomendable!',
      rating: 5,
      image: familyImage
    },
    {
      name: 'Ana Martín',
      role: 'Foodies local',
      content: 'Barych se ha convertido en nuestro lugar favorito. La calidad es consistente, el servicio excelente y los postres caseros son un final perfecto.',
      rating: 5,
      image: familyImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Clientes <span className="text-primary">Felices</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre por qué nuestros clientes eligen Barych una y otra vez.
            Sus experiencias hablan por nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Quieres ser el próximo en compartir tu experiencia?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="bg-primary/5 border-primary/20 p-6 max-w-md">
              <CardContent className="p-0 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-sm text-muted-foreground mb-2">Valoración promedio</div>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;