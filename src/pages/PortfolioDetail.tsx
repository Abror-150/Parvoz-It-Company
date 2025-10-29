import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PortfolioDetail = () => {
  const { id } = useParams();

  const projectData: Record<string, any> = {
    '1': {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      client: 'ShopHub Inc.',
      date: 'September 2024',
      duration: '4 months',
      team: '6 developers',
      description: 'A comprehensive e-commerce solution designed to provide seamless shopping experience with advanced product filtering, secure payment integration, and real-time inventory management.',
      challenge: 'The client needed a scalable platform that could handle high traffic during sale periods while maintaining fast load times and secure transactions.',
      solution: 'We built a modern web application using React and Node.js with microservices architecture, implemented Redis caching for performance, and integrated Stripe for secure payments.',
      results: [
        '300% increase in conversion rate',
        '50% reduction in page load time',
        '10,000+ daily active users',
        '99.9% uptime maintained',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
      images: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      ],
    },
    '2': {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      client: 'FitLife Solutions',
      date: 'August 2024',
      duration: '3 months',
      team: '4 developers',
      description: 'Cross-platform mobile application for comprehensive fitness tracking, including workouts, nutrition monitoring, and personalized fitness goals.',
      challenge: 'Creating an intuitive mobile experience that works seamlessly offline while syncing data across devices.',
      solution: 'Developed using React Native for cross-platform compatibility with Redux for state management and Firebase for real-time data synchronization.',
      results: [
        '50,000+ downloads in first month',
        '4.8-star rating on app stores',
        '85% user retention rate',
        'Featured on App Store',
      ],
      tech: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
      images: [
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop',
      ],
    },
  };

  const project = projectData[id || '1'] || projectData['1'];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/portfolio">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Badge className="mb-4">{project.category}</Badge>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl animate-slide-up">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-card border border-border">
            <Users className="h-8 w-8 text-primary mb-3" />
            <div className="text-sm text-muted-foreground mb-1">Client</div>
            <div className="font-semibold">{project.client}</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <Calendar className="h-8 w-8 text-primary mb-3" />
            <div className="text-sm text-muted-foreground mb-1">Date</div>
            <div className="font-semibold">{project.date}</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <ExternalLink className="h-8 w-8 text-primary mb-3" />
            <div className="text-sm text-muted-foreground mb-1">Duration</div>
            <div className="font-semibold">{project.duration}</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <Users className="h-8 w-8 text-primary mb-3" />
            <div className="text-sm text-muted-foreground mb-1">Team Size</div>
            <div className="font-semibold">{project.team}</div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl glass">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          <div className="p-8 rounded-2xl glass">
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech: string, index: number) => (
              <div
                key={index}
                className="px-6 py-3 rounded-xl gradient-primary text-white font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.results.map((result: string, index: number) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-lg">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image: string, index: number) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetail;
