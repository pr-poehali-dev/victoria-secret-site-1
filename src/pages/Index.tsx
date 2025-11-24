import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Victoria's Secret',
      subtitle: 'Икона роскоши и соблазна',
      description: 'Погрузитесь в мир элегантности, где каждая деталь создана для того, чтобы подчеркнуть вашу уникальную красоту',
      image: 'https://cdn.poehali.dev/projects/158fcfbb-2e6d-40df-aa15-11cd0bb5edb1/files/939755ed-10c3-4ec9-9c8f-10cd131abced.jpg',
      cta: 'Открыть коллекцию'
    },
    {
      id: 2,
      title: 'О бренде',
      subtitle: 'История совершенства',
      content: [
        'Victoria\'s Secret — это не просто бренд нижнего белья, это символ женственности и роскоши, покоривший сердца миллионов женщин по всему миру.',
        'С момента основания в 1977 году, бренд стремился создавать изделия, которые заставляют каждую женщину чувствовать себя особенной.',
        'Наша философия проста: красота многогранна, и каждая женщина заслуживает чувствовать себя уверенно и привлекательно.'
      ],
      image: 'https://cdn.poehali.dev/projects/158fcfbb-2e6d-40df-aa15-11cd0bb5edb1/files/7d3c0ef5-6328-4731-8a16-793137ce5dc6.jpg'
    },
    {
      id: 3,
      title: 'Философия бренда',
      subtitle: 'Воплощение мечты',
      features: [
        { icon: 'Sparkles', title: 'Роскошь', text: 'Премиальные материалы и безупречное качество' },
        { icon: 'Heart', title: 'Женственность', text: 'Дизайн, подчеркивающий естественную красоту' },
        { icon: 'Crown', title: 'Уникальность', text: 'Каждая женщина — королева в наших коллекциях' },
        { icon: 'Star', title: 'Элегантность', text: 'Изысканность в каждой детали' }
      ],
      image: 'https://cdn.poehali.dev/projects/158fcfbb-2e6d-40df-aa15-11cd0bb5edb1/files/b9596001-b082-41e2-aa38-19a7436e7aaf.jpg'
    },
    {
      id: 4,
      title: 'Присоединяйтесь',
      subtitle: 'К миру Victoria\'s Secret',
      description: 'Откройте для себя коллекции, созданные для того, чтобы вы чувствовали себя богиней каждый день',
      links: [
        { icon: 'Instagram', text: '@victoriassecret', url: 'https://instagram.com/victoriassecret' },
        { icon: 'Facebook', text: 'Victoria\'s Secret', url: 'https://facebook.com/victoriassecret' },
        { icon: 'Youtube', text: 'Victoria\'s Secret', url: 'https://youtube.com/victoriassecret' }
      ],
      image: 'https://cdn.poehali.dev/projects/158fcfbb-2e6d-40df-aa15-11cd0bb5edb1/files/939755ed-10c3-4ec9-9c8f-10cd131abced.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 gradient-overlay" />
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-white">
            {slide.id === 1 && (
              <div className="text-center max-w-4xl animate-fade-in">
                <h1 className="text-6xl md:text-8xl font-bold mb-4 text-shadow">{slide.title}</h1>
                <p className="text-2xl md:text-3xl mb-6 font-light text-shadow">{slide.subtitle}</p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow">{slide.description}</p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-105"
                  onClick={nextSlide}
                >
                  {slide.cta}
                </Button>
              </div>
            )}

            {slide.id === 2 && slide.content && (
              <div className="max-w-4xl animate-slide-up">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">{slide.title}</h2>
                <p className="text-2xl md:text-3xl mb-8 font-light text-shadow italic">{slide.subtitle}</p>
                <div className="space-y-6 text-lg md:text-xl">
                  {slide.content.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed text-shadow backdrop-blur-sm bg-black/20 p-6 rounded-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {slide.id === 3 && slide.features && (
              <div className="max-w-6xl w-full animate-fade-in">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center text-shadow">{slide.title}</h2>
                <p className="text-2xl md:text-3xl mb-12 font-light text-center text-shadow italic">{slide.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {slide.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <Icon name={feature.icon as any} size={48} className="mb-4 text-primary" />
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-lg opacity-90">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slide.id === 4 && slide.links && (
              <div className="text-center max-w-4xl animate-slide-up">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">{slide.title}</h2>
                <p className="text-2xl md:text-3xl mb-6 font-light text-shadow italic">{slide.subtitle}</p>
                <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-shadow">{slide.description}</p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  {slide.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="backdrop-blur-md bg-white/10 px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 flex items-center gap-3 min-w-[250px]"
                    >
                      <Icon name={link.icon as any} size={24} />
                      <span className="text-lg">{link.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={32} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={32} className="text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-primary'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-white text-sm font-light tracking-widest">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Index;
