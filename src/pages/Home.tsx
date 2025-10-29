import { useState, useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Palette, TrendingUp, Zap, Award, Clock, HeadphonesIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import OrderPopup from '@/components/OrderPopup';
import TechCarousel from '@/components/TechCarousel';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: t('services.web'),
      description: 'Custom web applications built with modern technologies for optimal performance.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: t('services.mobile'),
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: t('services.uiux'),
      description: 'Beautiful, intuitive designs that enhance user experience and engagement.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: t('services.marketing'),
      description: 'Strategic digital marketing campaigns that drive growth and conversions.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We deliver projects on time without compromising quality.',
    },
    {
      icon: Award,
      title: 'Quality Code',
      description: 'Clean, maintainable code following industry best practices.',
    },
    {
      icon: Code,
      title: 'Creative Team',
      description: 'Talented developers and designers passionate about innovation.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Always available to help with any questions or issues.',
    },
  ];

  const portfolioPreview = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
      tech: ['React Native', 'Firebase'],
    },
    {
      id: 3,
      title: 'Real Estate Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tech: ['Figma', 'React', 'Tailwind'],
    },
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Team Members' },
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Enhanced Hero Section with Parallax */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 gradient-dark -z-10" />
          <div 
            className="absolute top-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '4s', transform: `translate(-50%, -50%) translateY(${scrollY * 0.25}px)` }}
          />
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                Empowering Businesses with
                <span className="block text-gradient mt-2">Modern Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                We transform ideas into powerful digital solutions. From web apps to mobile platforms, we build experiences that drive success.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-primary text-white font-semibold text-lg px-10 py-6 hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => setIsOrderPopupOpen(true)}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-6 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card border-y border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl md:text-6xl font-bold text-gradient mb-3">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">{t('services.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive technology solutions to elevate your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Parvoz IT?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl glass hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <advantage.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Technologies We Use</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Working with cutting-edge tools and frameworks to deliver the best solutions
              </p>
            </div>
            <TechCarousel />
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore some of our best work across various industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {portfolioPreview.map((project, index) => (
                <Link key={project.id} to={`/portfolio/${project.id}`}>
                  <Card className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <ExternalLink className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <Badge className="mb-3">{project.category}</Badge>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link to="/portfolio">
                <Button
                  size="lg"
                  className="gradient-primary text-white font-semibold text-lg px-8 hover:shadow-xl transition-all"
                >
                  See All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Final CTA Section with Parallax */}
        <section 
          className="py-32 gradient-dark relative overflow-hidden"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Ready to bring your idea to life?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Let's build something great together. Transform your vision into reality with Parvoz IT.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 font-semibold text-lg px-12 py-6 shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
                onClick={() => setIsOrderPopupOpen(true)}
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <OrderPopup isOpen={isOrderPopupOpen} onClose={() => setIsOrderPopupOpen(false)} />
      <ScrollToTop />
    </>
  );
};

export default Home;
