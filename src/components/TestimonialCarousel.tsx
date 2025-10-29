import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sardor Alimov',
      role: 'CEO, TechStart Uzbekistan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      feedback: 'Parvoz IT transformed our outdated website into a modern, fast platform. Their attention to detail and professionalism exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Marina Petrova',
      role: 'Marketing Director, Digital Solutions',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      feedback: 'Working with Parvoz IT was a fantastic experience. They delivered our mobile app ahead of schedule with exceptional quality and support.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Founder, E-Commerce Hub',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      feedback: 'The team at Parvoz IT is incredibly talented. They built our e-commerce platform from scratch and it has been running flawlessly.',
      rating: 5,
    },
    {
      name: 'Dilnoza Karimova',
      role: 'Product Manager, FinTech Pro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      feedback: 'Amazing UI/UX design work! Our users love the new interface. Parvoz IT really understands user experience and modern design principles.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="p-8 md:p-12 glass min-h-[300px] flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-1 mb-4">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed italic max-w-2xl">
          "{testimonials[currentIndex].feedback}"
        </p>

        <div>
          <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
          <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
        </div>
      </Card>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full hover:bg-primary hover:text-white transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full hover:bg-primary hover:text-white transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
