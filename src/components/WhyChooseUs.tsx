import { Card, CardContent } from '@/components/ui/card';
import { 
  Leaf, 
  Heart, 
  Clock, 
  Users,
  CheckCircle 
} from 'lucide-react';
import tapasImage from '@/assets/tapas-plate.jpg';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Leaf,
      title: 'Ingredientes Frescos',
      description: 'Productos de calidad seleccionados diariamente de proveedores locales.'
    },
    {
      icon: Users,
      title: 'Opciones para Todos',
      description: 'Menú vegetariano, vegano e infantil. Algo especial para cada miembro de la familia.'
    },
    {
      icon: Heart,
      title: 'Ambiente Familiar',
      description: 'Espacio acogedor y moderno, perfecto para cualquier ocasión especial.'
    },
    {
      icon: Clock,
      title: 'Servicio Rápido',
      description: 'Atención eficiente y amable sin comprometer la calidad de nuestros platos.'
    }
  ];

  return (
    <section id="especialidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                ¿Por qué elegir <span className="text-primary">Barych</span>?
              </h2>
              <p className="text-xl text-primary font-semibold">
                Sabores auténticos, ambiente familiar y servicio rápido
              </p>
              <p className="text-lg text-muted-foreground">
                En Barych nos especializamos en crear experiencias gastronómicas 
                memorables combinando la tradición mediterránea con toques modernos.
              </p>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Recetas tradicionales con ingredientes premium</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Ambiente libre de humo y pet-friendly</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Reservas online y servicio para llevar</span>
              </div>
            </div>
          </div>

          {/* Featured Image Card */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl border-0 transform hover:scale-105 transition-transform duration-500">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={tapasImage}
                    alt="Plato estrella de Barych - Tapas mediterráneas"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Nuestra Especialidad</h3>
                    <p className="text-white/90">Tapas mediterráneas tradicionales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold">10+</div>
                <div className="text-xs opacity-90">Años experiencia</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Ingredientes frescos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;